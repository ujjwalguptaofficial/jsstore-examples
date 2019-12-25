import * as JsStore from 'jsstore';
import { IDataBase, DATA_TYPE, ITable } from 'jsstore';
import { Student } from '../model/student';
import { environment } from 'src/environments/environment';

const getWorkerPath = () => {
  if (environment.production) {
    return require('file-loader?name=scripts/[name].[hash].js!jsstore/dist/jsstore.worker.min.js');
  } else {
    return require('file-loader?name=scripts/[name].[hash].js!jsstore/dist/jsstore.worker.js');
  }
};

// This will ensure that we are using only one instance. 
// Otherwise due to multiple instance multiple worker will be created.
export const idbCon = new JsStore.Instance(new Worker(getWorkerPath().default));
export const dbname = 'Angular_Demo';




const getDatabase = () => {
  const tblStudent: ITable = {
    name: 'Students',
    columns: {
      id: {
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        notNull: true,
        dataType: DATA_TYPE.String
      },
      gender: {
        dataType: DATA_TYPE.String,
        default: 'male'
      },
      country: {
        notNull: true,
        dataType: DATA_TYPE.String
      },
      city: {
        dataType: DATA_TYPE.String,
        notNull: true
      }
    }
  };
  const dataBase: IDataBase = {
    name: dbname,
    tables: [tblStudent]
  };
  return dataBase;
};

function getAvailableStudents() {
  const availableStudents: Student[] = [{
    city: 'Bangalore',
    country: 'India',
    gender: 'Male',
    name: 'Ujjwal Gupta'
  }];
  return availableStudents;
}

export const initJsStore = async () => {
  const dataBase = getDatabase();
  const isDbCreated = await idbCon.initDb(dataBase);
  if (isDbCreated) {
    idbCon.insert({
      into: 'Students',
      values: getAvailableStudents()
    })
  }
};


