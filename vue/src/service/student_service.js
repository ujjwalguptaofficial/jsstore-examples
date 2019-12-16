import { connection } from "./jsstore_con";

export class StudentService {

    constructor() {

        this.tableName = "Students";
    }

    getStudents() {
        return connection.select({
            from: this.tableName,
        })
    }

    addStudent(student) {
        return connection.insert({
            into: this.tableName,
            values: [student],
            return: true
        })
    }

    getStudentById(id) {
        return connection.select({
            from: this.tableName,
            where: {
                id: id
            }
        })
    }

    removeStudent(id) {
        return connection.remove({
            from: this.tableName,
            where: {
                id: id
            }
        })
    }

    updateStudentById(student) {
        return connection.update({
            in: this.tableName,
            set: {
                name: student.name,
                gender: student.gender,
                country: student.country,
                city: student.city
            },
            where: {
                id: student.id
            }
        })
    }
}