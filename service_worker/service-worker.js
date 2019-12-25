importScripts('https://cdn.jsdelivr.net/npm/jsstore@3.5.0/dist/jsstore.min.js');
importScripts('https://cdn.jsdelivr.net/npm/jsstore@3.5.0/dist/jsstore.worker.min.js');

self.addEventListener('fetch', function (event) {
  console.log("fetch event:", event.request.url);
});

var connection;
var dbName = "Demo";

async function initDb() {
  connection = new JsStore.Instance();
  var isDbCreated = await jsstoreCon.initDb(getDbSchema());
  if (isDbCreated) {
    console.log('db created');
  }
  else {
    console.log('db opened');
  }
}

function getDbSchema() {
  var table = {
    name: 'Student',
    columns: {
      id: {
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        notNull: true,
        dataType: 'string'
      },
      gender: {
        dataType: 'string',
        default: 'male'
      },
      country: {
        notNull: true,
        dataType: 'string'
      },
      city: {
        dataType: 'string',
        notNull: true
      }
    }
  }

  var db = {
    name: dbName,
    tables: [table]
  }
  return db;
}