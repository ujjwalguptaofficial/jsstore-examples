import * as JsStore from "jsstore";

const getWorkerPath = () => {
    // return dev build when env is development
    if (process.env.NODE_ENV === 'development') {
        return require("file-loader?name=scripts/[name].[hash].js!jsstore/dist/jsstore.worker.js");
    }
    else { // return prod build when env is production
        return require("file-loader?name=scripts/[name].[hash].js!jsstore/dist/jsstore.worker.min.js");
    }
};

const workerPath = getWorkerPath().default;
export const connection = new JsStore.Connection(new Worker(workerPath));

connection.logStatus = true;