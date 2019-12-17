import {
    StudentGrid
} from "./component/student_grid";
import { initJsStore } from "./storage_service/idb_service";

initJsStore();
var componentStudentGrid = new StudentGrid();
document.getElementById('app').innerHTML = componentStudentGrid.getHtml();
componentStudentGrid.init();