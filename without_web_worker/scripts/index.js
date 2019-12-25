

var jsstoreCon = new JsStore.Instance();

window.onload = function () {
    refreshTableData();
    registerEvents();
    initDb();
};

async function initDb() {
    var isDbCreated = await jsstoreCon.initDb(getDbSchema());
    if (isDbCreated) {
        console.log('db created');
    }
    else {
        console.log('db opened');
    }
}

function getDbSchema() {
    var table = {
        name: 'Student',
        columns: {
            id: {
                primaryKey: true,
                autoIncrement: true
            },
            name: {
                notNull: true,
                dataType: 'string'
            },
            gender: {
                dataType: 'string',
                default: 'male'
            },
            country: {
                notNull: true,
                dataType: 'string'
            },
            city: {
                dataType: 'string',
                notNull: true
            }
        }
    }

    var db = {
        name: 'My-Db',
        tables: [table]
    }
    return db;
}

function registerEvents() {
    $('#btnAddStudent').click(function () {
        showFormAndHideGrid();
    })
    $('#tblGrid tbody').on('click', '.edit', function () {
        var row = $(this).parents().eq(1);
        var child = row.children();
        var student = {
            id: row.attr('itemid'),
            name: child.eq(0).text(),
            gender: child.eq(1).text(),
            country: child.eq(2).text(),
            city: child.eq(3).text()
        }
        refreshFormData(student);
        showFormAndHideGrid();
    });
    $('#tblGrid tbody').on('click', '.delete', function () {
        var result = confirm('Are you sure, you want to delete?');
        if (result) {
            var studentId = $(this).parents().eq(1).attr('itemid');
            deleteStudent(Number(studentId));
        }
    });
    $('#btnSubmit').click(function () {
        var studentId = $('form').attr('data-student-id');
        if (studentId) {
            updateStudent();
        }
        else {
            addStudent();
        }
    });
}


//This function refreshes the table
async function refreshTableData() {
    try {
        var htmlString = "";
        var students = await jsstoreCon.select({
            from: 'Student'
        });
        students.forEach(function (student) {
            htmlString += "<tr ItemId=" + student.id + "><td>" +
                student.name + "</td><td>" +
                student.gender + "</td><td>" +
                student.country + "</td><td>" +
                student.city + "</td><td>" +
                "<a href='#' class='edit'>Edit</a></td>" +
                "<td><a href='#' class='delete''>Delete</a></td>";
        })
        $('#tblGrid tbody').html(htmlString);
    } catch (ex) {
        alert(ex.message)
    }
}



async function addStudent() {
    var student = getStudentFromForm();
    try {
        var noOfDataInserted = await jsstoreCon.insert({
            into: 'Student',
            values: [student]
        });
        if (noOfDataInserted === 1) {
            refreshTableData();
            showGridAndHideForm();
        }
    } catch (ex) {
        alert(ex.message);
    }

}

async function updateStudent() {
    var student = getStudentFromForm();
    try {
        var noOfDataUpdated = await jsstoreCon.update({
            in: 'Student',
            set: {
                name: student.name,
                gender: student.gender,
                country: student.country,
                city: student.city
            },
            where: {
                id: student.id
            }
        });
        console.log(`data updated ${noOfDataUpdated}`);
        showGridAndHideForm();
        $('form').attr('data-student-id', null);
        refreshTableData();
        refreshFormData({});
    } catch (ex) {
        alert(ex.message);
    }
}

async function deleteStudent(id) {
    try {
        var noOfStudentRemoved = await jsstoreCon.remove({
            from: 'Student',
            where: {
                id: id
            }
        });
        console.log(`${noOfStudentRemoved} students removed`);
        refreshTableData();
    } catch (ex) {
        alert(ex.message);
    }
}

function getStudentFromForm() {
    var student = {
        id: Number($('form').attr('data-student-id')),
        name: $('#txtName').val(),
        gender: $("input[name='gender']:checked").val(),
        country: $('#txtCountry').val(),
        city: $('#txtCity').val()
    };
    return student;
}

function showFormAndHideGrid() {
    $('#formAddUpdate').show();
    $('#tblGrid').hide();
}

function showGridAndHideForm() {
    $('#formAddUpdate').hide();
    $('#tblGrid').show();
}

function refreshFormData(student) {
    $('form').attr('data-student-id', student.id);
    $('#txtName').val(student.name);
    $(`input[name='gender'][value=${student.gender}]`).prop('checked', true);
    $('#txtCountry').val(student.country);
    $('#txtCity').val(student.city);
}