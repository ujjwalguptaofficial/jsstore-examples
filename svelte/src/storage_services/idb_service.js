import * as JsStore from 'jsstore';
import { DATA_TYPE } from 'jsstore';

const getWorkerPath = () => {
    if (process.env.NODE_ENV === 'development') {
        return require("file-loader?name=scripts/[name].[hash].js!jsstore/dist/jsstore.worker.js");
    }
    else {
        return require("file-loader?name=scripts/[name].[hash].js!jsstore/dist/jsstore.worker.min.js");
    }
};

// This will ensure that we are using only one instance. 
// Otherwise due to multiple instance multiple worker will be created.
const workerPath = getWorkerPath();
console.log('workerpath', workerPath);
export const idbCon = new JsStore.Instance(new Worker(workerPath.default));
export const dbname = 'Demo';

const getDatabase = () => {
    const tblProduct = {
        name: 'Products',
        columns: {
            id: {
                primaryKey: true,
                autoIncrement: true
            },
            name: {
                notNull: true,
                dataType: DATA_TYPE.String
            },
            price: {
                dataType: DATA_TYPE.Number,
                notNull: true
            },
            quantity: {
                dataType: DATA_TYPE.Number,
                default: 0
            },
        }
    };
    const dataBase = {
        name: dbname,
        tables: [tblProduct]
    };
    return dataBase;
};

export const initJsStore = async () => {
    try {
        const dataBase = getDatabase();
        await idbCon.initDb(dataBase);
    }
    catch (ex) {
        console.error(ex);
    }
};