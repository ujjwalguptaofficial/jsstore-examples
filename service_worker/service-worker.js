importScripts('https://cdn.jsdelivr.net/npm/jsstore@4.2.6/dist/jsstore.min.js');
importScripts('https://cdn.jsdelivr.net/npm/jsstore@4.2.6/dist/jsstore.worker.min.js');

self.addEventListener('fetch', function (event) {
  console.log("fetch event:", event.request.url);
});

var dbName = "Demo";

async function initDb() {
  var connection = new JsStore.Connection();
  var isDbCreated = await connection.initDb(getDbSchema());
  if (isDbCreated) {
    console.log('db created');
  }
  else {
    console.log('db opened');
  }
  return connection;
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

self.addEventListener('install', (event) => {
  event.waitUntil(initDb().then(function (connection) {
    return connection.terminate();
  }));
});