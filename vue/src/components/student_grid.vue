<template>
  <table>
    <tr>
      <th>Name</th>
      <th>Gender</th>
      <th>Country</th>
      <th>City</th>
    </tr>
    <tr>
      <td>
        <input type="text" v-model="newStudent.name" />
      </td>
      <td>
        <input type="text" v-model="newStudent.gender" />
      </td>
      <td>
        <input type="text" v-model="newStudent.country" />
      </td>
      <td>
        <input type="text" v-model="newStudent.city" />
      </td>
      <td>
        <button @click="add">Add</button>
      </td>
      <td>
        <button @click="clear">Clear</button>
      </td>
    </tr>
    <tr v-for="student in students" :key="student.id">
      <template v-if="editStudent.id==student.id">
        <td>
          <input type="text" v-model="editStudent.name" />
        </td>
        <td>
          <input type="text" v-model="editStudent.gender" />
        </td>
        <td>
          <input type="text" v-model="editStudent.country" />
        </td>
        <td>
          <input type="text" v-model="editStudent.city" />
        </td>
        <td>
          <button @click="update(editStudent.id)">Update</button>
        </td>
        <td>
          <button @click="cancelUpdate">Cancel</button>
        </td>
      </template>
      <template v-else>
        <td>{{student.name}}</td>
        <td>{{student.gender}}</td>
        <td>{{student.country}}</td>
        <td>{{student.city}}</td>
        <td>
          <button @click="edit(student.id)">Edit</button>
        </td>
        <td>
          <button @click="remove(student.id)">Delete</button>
        </td>
      </template>
    </tr>
  </table>
</template>
<script>
import { StudentService } from "../service/student_service";
export default {
  name: "Student",
  props: {
    students: {
      required: true,
      type: Array
    }
  },
  data: function() {
    return {
      newStudent: null,
      editStudent: {},
      service: new StudentService()
    };
  },
  beforeMount: function() {
    this.clear();
  },
  methods: {
    async add() {
      try {
        const studentsAdded = await this.service.addStudent(this.newStudent);
        this.$emit("add-item", studentsAdded[0]);
        this.clear();
      } catch (ex) {
        alert(ex.message);
      }
    },
    clear() {
      this.newStudent = {
        name: "",
        gender: "",
        country: "",
        city: ""
      };
    },
    edit(id) {
      var student = this.students.find(qry => qry.id === id);
      this.editStudent = {
        id: student.id,
        name: student.name,
        gender: student.gender,
        country: student.country,
        city: student.city
      };
    },
    async remove(id) {
      const service = new StudentService();
      const noOfStudentRemoved = await this.service.removeStudent(id);
      if (noOfStudentRemoved > 0) {
        this.$emit("remove-item");
      }
    },
    async update(id) {
      debugger;
      const noOfStudentsUpdated = await this.service.updateStudentById(
        this.editStudent
      );
      if (noOfStudentsUpdated > 0) {
        this.cancelUpdate();
        this.$emit("update-item");
      }
    },
    cancelUpdate() {
      this.editStudent = {};
    }
  }
};
</script>

