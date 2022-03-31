import { imgPath } from "./img_path";

export function registerGlobalFormatter(app) {
    app.extend.formatter("imgPath", imgPath);
}