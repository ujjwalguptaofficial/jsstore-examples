import { Mahal } from "mahal";
import App from "@/app.mahal";
import { registerGlobalFormatter } from "@/formatters";
import config from "~/config/env";
import { initJsStore } from "@/storage_service/idb_service";


const app = new Mahal(App, '#app');
// register global formatter
registerGlobalFormatter(app);
// set config to be available globally
app.global.env = config;
app.create().then(_ => {
    initJsStore();
});