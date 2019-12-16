import React from "react";
import ReactDOM from "react-dom";
import { initJsStore } from "./storage_service/idb_service";
import Layout from "./component/layout";
const app = document.getElementById('app');
ReactDOM.render(<Layout />, app);
initJsStore();