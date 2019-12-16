<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <StudentGrid
      :students="students"
      @add-item="addStudent"
      @remove-item="refreshStudent"
      @update-item="refreshStudent"
    />
  </div>
</template>

<script>
import StudentGrid from "./components/student_grid.vue";
import { initJsStore } from "./service/idb_service";
import { StudentService } from "./service/student_service";
import { Global } from "./global";
export default {
  name: "app",
  components: {
    StudentGrid
  },
  async beforeCreate() {
    try {
      const isDbCreated = await initJsStore();
      if (isDbCreated) {
        console.log("db created");
        // prefill database
      } else {
        console.log("db opened");
      }
    } catch (ex) {
      console.error(ex);
      alert(ex.message);
      Global.isIndexedDbSupported = false;
    }
  },
  mounted() {
    this.refreshStudent();
  },
  data() {
    return {
      students: []
    };
  },
  methods: {
    async refreshStudent() {
      this.students = await new StudentService().getStudents();
    },
    addStudent(student) {
      this.students.push(student);
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
