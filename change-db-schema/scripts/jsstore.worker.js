/*!
 * @license :jsstore - V4.8.3 - 16/11/2024
 * https://github.com/ujjwalguptaofficial/JsStore
 * Copyright (c) 2024 @Ujjwal Gupta; Licensed MIT
 */
var JsStoreWorker;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  QueryManager: () => (/* reexport */ QueryManager)
});

;// ./src/common/utils/promise_resolve.ts
var promiseResolve = function (value) {
    return Promise.resolve(value);
};

;// ./src/common/utils/promise.ts
var promise = function (cb) {
    return new Promise(cb);
};

;// ./src/common/enums.ts
var ERROR_TYPE = {
    InvalidUpdateColumn: "invalid_update_column",
    UndefinedColumn: "undefined_column",
    UndefinedValue: "undefined_value",
    UndefinedColumnName: "undefined_column_name",
    UndefinedDbName: "undefined_database_name",
    UndefinedColumnValue: "undefined_column_value",
    NotArray: "not_array",
    NoValueSupplied: "no_value_supplied",
    ColumnNotExist: "column_not_exist",
    NoIndexFound: "no_index_found",
    InvalidOp: "invalid_operator",
    NullValue: "null_value",
    WrongDataType: "wrong_data_type",
    TableNotExist: "table_not_exist",
    DbNotExist: "db_not_exist",
    ConnectionAborted: "connection_aborted",
    ConnectionClosed: "connection_closed",
    NotObject: "not_object",
    InvalidConfig: "invalid_config",
    DbBlocked: "Db_blocked",
    IndexedDbNotSupported: "indexeddb_not_supported",
    NullValueInWhere: "null_value_in_where",
    InvalidJoinQuery: 'invalid_join_query',
    InvalidQuery: 'invalid_query',
    ImportScriptsFailed: 'import_scripts_failed',
    MethodNotExist: 'method_not_exist',
    Unknown: "unknown",
    InvalidMiddleware: "invalid_middleware",
};
if (true) {
    Object.assign(ERROR_TYPE, {
        InvalidOrderQuery: 'invalid_order_query',
        InvalidGroupQuery: 'invalid_group_query',
        NoPrimaryKey: "no_primary_key"
    });
}
var WORKER_STATUS;
(function (WORKER_STATUS) {
    WORKER_STATUS["Registered"] = "registerd";
    WORKER_STATUS["Failed"] = "failed";
    WORKER_STATUS["NotStarted"] = "not_started";
})(WORKER_STATUS || (WORKER_STATUS = {}));
var DATA_TYPE;
(function (DATA_TYPE) {
    DATA_TYPE["String"] = "string";
    DATA_TYPE["Object"] = "object";
    DATA_TYPE["Array"] = "array";
    DATA_TYPE["Number"] = "number";
    DATA_TYPE["Boolean"] = "boolean";
    DATA_TYPE["Null"] = "null";
    DATA_TYPE["DateTime"] = "date_time";
})(DATA_TYPE || (DATA_TYPE = {}));
var API;
(function (API) {
    API["InitDb"] = "init_db";
    API["MapGet"] = "map_get";
    API["MapSet"] = "map_set";
    API["MapHas"] = "map_has";
    API["MapDelete"] = "map_delete";
    API["Select"] = "select";
    API["Insert"] = "insert";
    API["Update"] = "update";
    API["Remove"] = "remove";
    API["OpenDb"] = "open_db";
    API["Clear"] = "clear";
    API["DropDb"] = "drop_db";
    API["Count"] = "count";
    API["ChangeLogStatus"] = "change_log_status";
    API["Terminate"] = "terminate";
    API["Transaction"] = "transaction";
    API["CloseDb"] = "close_db";
    API["Union"] = "union";
    API["Intersect"] = "intersect";
    API["ImportScripts"] = "import_scripts";
    API["Middleware"] = "middleware";
})(API || (API = {}));
var EVENT;
(function (EVENT) {
    EVENT["RequestQueueEmpty"] = "requestQueueEmpty";
    EVENT["RequestQueueFilled"] = "requestQueueFilled";
    EVENT["Upgrade"] = "upgrade";
    EVENT["Create"] = "create";
    EVENT["Open"] = "open";
})(EVENT || (EVENT = {}));
var QUERY_OPTION;
(function (QUERY_OPTION) {
    QUERY_OPTION["Where"] = "where";
    QUERY_OPTION["Like"] = "like";
    QUERY_OPTION["Regex"] = "regex";
    QUERY_OPTION["In"] = "in";
    QUERY_OPTION["Equal"] = "=";
    QUERY_OPTION["Between"] = "-";
    QUERY_OPTION["GreaterThan"] = ">";
    QUERY_OPTION["LessThan"] = "<";
    QUERY_OPTION["GreaterThanEqualTo"] = ">=";
    QUERY_OPTION["LessThanEqualTo"] = "<=";
    QUERY_OPTION["NotEqualTo"] = "!=";
    QUERY_OPTION["Aggregate"] = "aggregate";
    QUERY_OPTION["Max"] = "max";
    QUERY_OPTION["Min"] = "min";
    QUERY_OPTION["Avg"] = "avg";
    QUERY_OPTION["Count"] = "count";
    QUERY_OPTION["Sum"] = "sum";
    QUERY_OPTION["List"] = "list";
    QUERY_OPTION["Or"] = "or";
    QUERY_OPTION["Skip"] = "skip";
    QUERY_OPTION["Limit"] = "limit";
    QUERY_OPTION["And"] = "and";
    QUERY_OPTION["IgnoreCase"] = "ignoreCase";
    QUERY_OPTION["Then"] = "then";
})(QUERY_OPTION || (QUERY_OPTION = {}));
var IDB_MODE;
(function (IDB_MODE) {
    IDB_MODE["ReadOnly"] = "readonly";
    IDB_MODE["ReadWrite"] = "readwrite";
})(IDB_MODE || (IDB_MODE = {}));
var OCCURENCE;
(function (OCCURENCE) {
    OCCURENCE["First"] = "f";
    OCCURENCE["Last"] = "l";
    OCCURENCE["Any"] = "a";
})(OCCURENCE || (OCCURENCE = {}));
var CONNECTION_STATUS;
(function (CONNECTION_STATUS) {
    CONNECTION_STATUS["Connected"] = "connected";
    CONNECTION_STATUS["Closed"] = "closed";
    CONNECTION_STATUS["NotStarted"] = "not_started";
    CONNECTION_STATUS["UnableToStart"] = "unable_to_start";
    CONNECTION_STATUS["ClosedByJsStore"] = "closed_by_jsstore";
})(CONNECTION_STATUS || (CONNECTION_STATUS = {}));

;// ./src/worker/model/table_meta.ts
var TableMeta = /** @class */ (function () {
    function TableMeta(table) {
        this.columns = [];
        this.autoIncColumnValue = {};
        this.columns = this.setColumn(table.columns);
        this.name = table.name;
        this.alter = table.alter || {};
    }
    TableMeta.prototype.setColumn = function (tableColumns) {
        var columns = [];
        var _loop_1 = function (columnName) {
            var column = tableColumns[columnName];
            column.name = columnName;
            if (column.autoIncrement) {
                this_1.autoIncColumnValue[columnName] = 0;
            }
            if (column.primaryKey) {
                this_1.primaryKey = columnName;
                this_1.keypath = column.keyPath || columnName;
            }
            column.enableSearch = column.enableSearch == null ? true : column.enableSearch;
            var existingColumnIndex = this_1.columns.indexOf(function (q) { return q.name === columnName; });
            if (existingColumnIndex < 0) {
                columns.push(column);
            }
            else {
                var existingColumn = this_1.columns[existingColumnIndex];
                Object.assign(existingColumn, column);
            }
        };
        var this_1 = this;
        for (var columnName in tableColumns) {
            _loop_1(columnName);
        }
        return columns;
    };
    return TableMeta;
}());


;// ./src/worker/meta_helper.ts

var MetaHelper = /** @class */ (function () {
    function MetaHelper() {
    }
    MetaHelper.autoIncrementKey = function (tableName, columnName) {
        return "JsStore_".concat(tableName, "_").concat(columnName, "_Value");
    };
    MetaHelper.getStore = function (util) {
        if (!util.tx) {
            util.createTransaction([MetaHelper.tableName]);
        }
        return util.objectStore(MetaHelper.tableName);
    };
    MetaHelper.set = function (key, value, util) {
        var store = MetaHelper.getStore(util);
        return promise(function (res, rej) {
            var req = store.put({
                key: key,
                value: value
            });
            req.onsuccess = function () {
                res();
            };
            req.onerror = rej;
        });
    };
    MetaHelper.get = function (key, util) {
        var store = MetaHelper.getStore(util);
        return promise(function (res, rej) {
            var req = store.get(util.keyRange(key));
            req.onsuccess = function () {
                var result = req.result;
                res(result && result.value);
            };
            req.onerror = rej;
        });
    };
    MetaHelper.remove = function (key, util) {
        var store = MetaHelper.getStore(util);
        return promise(function (res, rej) {
            var req = store.delete(util.keyRange(key));
            req.onsuccess = function () {
                res();
            };
            req.onerror = rej;
        });
    };
    MetaHelper.has = function (key, util) {
        var store = MetaHelper.getStore(util);
        return promise(function (res, rej) {
            var req = store.count(util.keyRange(key));
            req.onsuccess = function () {
                var result = req.result;
                res(result > 0);
            };
            req.onerror = rej;
        });
    };
    MetaHelper.tableName = "JsStore_Meta";
    MetaHelper.dbSchema = "JsStore_DbSchema";
    return MetaHelper;
}());


;// ./src/worker/model/db_meta.ts


var DbMeta = /** @class */ (function () {
    function DbMeta(db) {
        this.name = db.name;
        this.version = db.version || 1;
        db.tables.push({
            name: MetaHelper.tableName,
            columns: {
                key: {
                    primaryKey: true
                },
                value: {
                    enableSearch: false
                }
            },
        });
        this.tables = db.tables.map(function (table) {
            return new TableMeta(table);
        });
    }
    return DbMeta;
}());


;// ./src/common/utils/for_obj.ts
var forObj = function (obj, cb) {
    for (var key in obj) {
        cb(key, obj[key]);
    }
};

;// ./src/worker/utils/log_helper.ts

var LogHelper = /** @class */ (function () {
    function LogHelper(type, info) {
        this.type = type;
        this.info_ = info;
        this.message = this.getMsg_();
    }
    LogHelper.prototype.log = function (msg) {
        if (this.status) {
            console.log(msg);
        }
    };
    LogHelper.prototype.throw = function () {
        throw this.get();
    };
    LogHelper.prototype.logError = function () {
        console.error(this.get());
    };
    LogHelper.prototype.get = function () {
        return {
            message: this.message,
            type: this.type
        };
    };
    LogHelper.prototype.warn = function () {
        console.warn(this.get());
    };
    LogHelper.prototype.getMsg_ = function () {
        var _a, _b;
        var errMsg;
        var info = this.info_;
        var errorHandler = (_a = {},
            _a[ERROR_TYPE.NotArray] = function () {
                errMsg = "Supplied value is not an array";
            },
            _a[ERROR_TYPE.UndefinedColumn] = function () {
                errMsg = "Column is undefined in Where";
            },
            _a[ERROR_TYPE.UndefinedValue] = function () {
                errMsg = "Value is undefined in Where";
            },
            _a[ERROR_TYPE.UndefinedColumnName] = function () {
                errMsg = "Column name is undefined '" + info['TableName'] + "'";
            },
            _a[ERROR_TYPE.UndefinedDbName] = function () {
                errMsg = "Database name is not supplied";
            },
            _a[ERROR_TYPE.UndefinedColumnValue] = function () {
                errMsg = "Column value is undefined";
            },
            _a[ERROR_TYPE.NoValueSupplied] = function () {
                errMsg = "No value is supplied";
            },
            _a[ERROR_TYPE.InvalidOp] = function () {
                errMsg = "Invalid Op Value '" + info['Op'] + "'";
            },
            _a[ERROR_TYPE.ColumnNotExist] = function () {
                var column = info['column'];
                errMsg = info['isOrder'] ?
                    ( true && info.isJoin ?
                        "Column '".concat(column, "' in order query is invalid. Please use '<table>.<column>' format for specifying a column in join query.") :
                        "Column '".concat(column, "' in order query does not exist")) :
                    "Column '".concat(column, "' does not exist");
            },
            _a[ERROR_TYPE.NoIndexFound] = function () {
                errMsg = "No index found for column '" + info['column'] + "'. Query can not be executed without index.";
            },
            _a[ERROR_TYPE.NullValue] = function () {
                errMsg = "Null value is not allowed for column '" + info['ColumnName'] + "'";
            },
            _a[ERROR_TYPE.WrongDataType] = function () {
                errMsg = "Supplied value for column '" + info['column'] +
                    "' have wrong data type";
            },
            _a[ERROR_TYPE.TableNotExist] = function () {
                errMsg = "Table '" + info['tableName'] + "' does not exist";
            },
            _a[ERROR_TYPE.DbNotExist] = function () {
                errMsg = "Database with name ".concat(info['dbName'], " does not exist");
            },
            _a[ERROR_TYPE.NotObject] = function () {
                errMsg = "supplied value is not object";
            },
            _a[ERROR_TYPE.InvalidConfig] = function () {
                errMsg = "Invalid Config '" + info['Config'] + " '";
            },
            _a[ERROR_TYPE.DbBlocked] = function () {
                errMsg = "database is blocked, cant be deleted right now";
            },
            _a[ERROR_TYPE.NullValueInWhere] = function () {
                errMsg = "Null/undefined is not allowed in where. Column '".concat(info['column'], "' has null");
            },
            _a[ERROR_TYPE.MethodNotExist] = function () {
                errMsg = "method '".concat(info, "' does not exist.");
            },
            _a[ERROR_TYPE.IndexedDbNotSupported] = function () {
                errMsg = "Browser does not support indexeddb";
            },
            _a.getInfo = function () {
                errMsg = info;
            },
            _a[ERROR_TYPE.InvalidJoinQuery] = function () {
                errorHandler.getInfo();
            },
            _a[ERROR_TYPE.ImportScriptsFailed] = function () {
                errorHandler.getInfo();
            },
            _a[ERROR_TYPE.InvalidMiddleware] = function () {
                errMsg = "No function ".concat(info, " is found.");
            },
            _a);
        if (true) {
            Object.assign(errorHandler, (_b = {},
                _b[ERROR_TYPE.InvalidOrderQuery] = function () {
                    errorHandler.getInfo();
                },
                _b[ERROR_TYPE.InvalidGroupQuery] = function () {
                    errorHandler.getInfo();
                },
                _b[ERROR_TYPE.NoPrimaryKey] = function () {
                    errMsg = "No primary key exists for the query table. The query ".concat(JSON.stringify(info), " will not yield proper output.");
                },
                _b));
        }
        var errorType = this.type;
        var method = errorHandler[errorType];
        if (method) {
            method();
        }
        else {
            if (!errorType) {
                this.type = ERROR_TYPE.Unknown;
            }
            errMsg = this.message;
        }
        return errMsg;
    };
    return LogHelper;
}());


;// ./src/worker/idbutil/index.ts


var IDBUtil = /** @class */ (function () {
    function IDBUtil() {
        this.logger = new LogHelper(null);
    }
    IDBUtil.prototype.emptyTx = function () {
        if (!this.tx)
            return;
        this.tx.oncomplete = null;
        this.tx.onabort = null;
        this.tx.onerror = null;
        this.tx = null;
    };
    IDBUtil.prototype.createTransactionIfNotExist = function (tables, mode) {
        if (!this.tx) {
            this.createTransaction(tables, mode);
        }
    };
    IDBUtil.prototype.createTransaction = function (tables, mode) {
        var _this = this;
        if (mode === void 0) { mode = IDB_MODE.ReadWrite; }
        this.tx = this.con.transaction(tables, mode);
        return promise(function (res, rej) {
            _this.tx.oncomplete = res;
            _this.tx.onabort = res;
            _this.tx.onerror = rej;
        });
    };
    IDBUtil.prototype.keyRange = function (value, op) {
        var keyRange;
        switch (op) {
            case QUERY_OPTION.Between:
                keyRange = IDBKeyRange.bound(value.low, value.high, false, false);
                break;
            case QUERY_OPTION.GreaterThan:
                keyRange = IDBKeyRange.lowerBound(value, true);
                break;
            case QUERY_OPTION.GreaterThanEqualTo:
                keyRange = IDBKeyRange.lowerBound(value);
                break;
            case QUERY_OPTION.LessThan:
                keyRange = IDBKeyRange.upperBound(value, true);
                break;
            case QUERY_OPTION.LessThanEqualTo:
                keyRange = IDBKeyRange.upperBound(value);
                break;
            default:
                keyRange = IDBKeyRange.only(value);
                break;
        }
        return keyRange;
    };
    IDBUtil.prototype.objectStore = function (name) {
        return this.tx.objectStore(name);
    };
    IDBUtil.prototype.abortTransaction = function () {
        if (this.tx) {
            this.tx.abort();
        }
    };
    IDBUtil.prototype.close = function () {
        var _this = this;
        if (this.con) {
            this.con.close();
        }
        // wait for 100 ms before success
        return promise(function (res) {
            _this.con = null;
            setTimeout(res, 100);
        });
    };
    IDBUtil.prototype.initDb = function (db) {
        var _this = this;
        var isDbCreated = false;
        var dbVersion = db.version;
        var oldVersion;
        var initLogic = function (res, rej) {
            var dbOpenRequest = indexedDB.open(db.name, dbVersion);
            dbOpenRequest.onsuccess = function () {
                _this.con = dbOpenRequest.result;
                _this.con.onversionchange = function (e) {
                    // if (e.newVersion === null) { // An attempt is made to delete the db
                    e.target.close(); // Manually close our connection to the db
                    // }
                };
                res({
                    isCreated: isDbCreated,
                    oldVersion: oldVersion,
                    newVersion: dbVersion
                });
            };
            dbOpenRequest.onerror = function (e) {
                console.error("error", e);
                rej(e);
            };
            dbOpenRequest.onupgradeneeded = function (e) {
                oldVersion = e.oldVersion;
                var target = e.target;
                var upgradeConnection = target.result;
                isDbCreated = true;
                var transaction = target.transaction;
                var storeNames = upgradeConnection.objectStoreNames;
                var createObjectStore = function (table) {
                    var option = table.primaryKey ? {
                        keyPath: table.keypath,
                    } : {
                        autoIncrement: true
                    };
                    var store = upgradeConnection.createObjectStore(table.name, option);
                    table.columns.forEach(function (column) {
                        addColumn(store, column);
                    });
                };
                var addColumn = function (store, column) {
                    var columnName = column.name;
                    if (column.enableSearch && !store.indexNames.contains(columnName)) {
                        var options = column.primaryKey ? { unique: true } : { unique: column.unique };
                        options['multiEntry'] = column.multiEntry;
                        var keyPath = column.keyPath == null ? columnName : column.keyPath;
                        store.createIndex(columnName, keyPath, options);
                    }
                };
                var deleteColumn = function (store, table, columnName) {
                    var index = table.columns.findIndex(function (q) { return q.name === columnName; });
                    if (index >= 0) {
                        table.columns.splice(index, 1);
                        store.deleteIndex(columnName);
                    }
                };
                db.tables.forEach(function (table) {
                    if (!storeNames.contains(table.name)) {
                        createObjectStore(table);
                    }
                    var store = transaction.objectStore(table.name);
                    for (var i = oldVersion + 1; i <= dbVersion; i++) {
                        var alterQuery = table.alter[i];
                        if (alterQuery) {
                            // handle new column add
                            if (alterQuery.add) {
                                var newColumns = table.setColumn(alterQuery.add);
                                newColumns.forEach(function (column) {
                                    addColumn(store, column);
                                    table.columns.push(column);
                                });
                            }
                            // handle delete column add
                            forObj(alterQuery.drop || {}, (function (columnName) {
                                deleteColumn(store, table, columnName);
                            }));
                            // handle modify column
                            forObj(alterQuery.modify || {}, (function (columnName, column) {
                                var shouldDelete = column.multiEntry || column.keyPath || column.unique;
                                var targetColumn = table.columns.find(function (q) { return q.name === columnName; });
                                var newColumn = Object.assign(targetColumn, column);
                                newColumn.name = columnName;
                                if (shouldDelete) {
                                    deleteColumn(store, table, columnName);
                                    addColumn(store, newColumn);
                                    table.columns.push(newColumn);
                                }
                            }));
                        }
                    }
                });
                var _loop_1 = function (i, length_1) {
                    var storeName = storeNames.item(i);
                    var tableIndex = db.tables.findIndex(function (qry) { return qry.name === storeName; });
                    if (tableIndex < 0) {
                        upgradeConnection.deleteObjectStore(storeName);
                    }
                };
                for (var i = 0, length_1 = storeNames.length; i < length_1; i++) {
                    _loop_1(i, length_1);
                }
            };
        };
        return promise(initLogic);
    };
    return IDBUtil;
}());


;// ./src/common/utils/promise_all.ts
var promiseAll = function (promises) {
    return Promise.all(promises);
};

;// ./src/worker/utils/promise_reject.ts
var promiseReject = function (value) {
    return Promise.reject(value);
};

;// ./src/worker/utils/get_error.ts

var getError = function (e) {
    var customError = e instanceof LogHelper;
    if (customError) {
        e.logError();
        return e.get();
    }
    else {
        var error = void 0;
        if (e.name) {
            error = new LogHelper(e.name);
            error.message = e.message;
        }
        else {
            error = new LogHelper(e.target.error.name);
            error.message = e.target.error.message;
        }
        if (true) {
            error.logError();
        }
        return error.get();
    }
};

;// ./src/worker/utils/get_error_from_exception.ts


var getErrorFromException = function (ex, type) {
    if (type === void 0) { type = ERROR_TYPE.InvalidQuery; }
    ex.name = type;
    return getError(ex);
};

;// ./src/worker/executors/base.ts

var Base = /** @class */ (function () {
    function Base() {
        this.rowAffected = 0;
        this.isTxQuery = false;
        this.results = [];
    }
    Object.defineProperty(Base.prototype, "db", {
        get: function () {
            return this.util.db;
        },
        enumerable: false,
        configurable: true
    });
    Base.prototype.table = function (name) {
        var tableName = name || this.tableName;
        return this.db.tables.find(function (q) { return q.name === tableName; });
    };
    Base.prototype.primaryKey = function (tableName) {
        var query = this.query;
        if (!query.from && query.store && query.meta) {
            var primaryKey = query.meta.primaryKey;
            if (true) {
                if (primaryKey == null) {
                    delete query.store;
                    console.warn("no primary key found for query - ".concat(JSON.stringify(this.query)));
                }
            }
            return primaryKey;
        }
        var table = this.table(tableName);
        if (true) {
            if (table == null && query.store) {
                delete query.store;
                var metaValue = query.meta;
                if (!metaValue || !metaValue.primaryKey) {
                    console.warn("no primary key found for query - ".concat(JSON.stringify(this.query), ". Please supply primary key in meta field."));
                }
            }
        }
        return table.primaryKey;
    };
    Base.prototype.getColumnInfo = function (columnName, tableName) {
        return this.table(tableName).columns.find(function (column) { return column.name === columnName; });
    };
    Base.prototype.onException = function (ex, type) {
        console.error(ex);
        this.util.abortTransaction();
        return promiseReject(getErrorFromException(ex, type));
    };
    return Base;
}());


;// ./src/worker/utils/get_data_type.ts

var getDataType = function (value) {
    if (value == null) {
        return DATA_TYPE.Null;
    }
    var type = typeof value;
    switch (type) {
        case 'object':
            if (Array.isArray(value)) {
                return DATA_TYPE.Array;
            }
            if (value instanceof Date) {
                return DATA_TYPE.DateTime;
            }
    }
    return type;
};

;// ./src/worker/utils/is_null.ts
var isNull = function (value) {
    if (value == null) {
        return true;
    }
    else {
        switch (typeof value) {
            // case 'string': return value.length === 0;
            case 'number': return isNaN(value);
        }
    }
    return false;
};

;// ./src/worker/executors/insert/values_checker.ts


var ValuesChecker = /** @class */ (function () {
    function ValuesChecker(table, autoIncValues) {
        this.table = table;
        this.autoIncrementValue = autoIncValues;
    }
    ValuesChecker.prototype.checkAndModifyValues = function (query) {
        var _this = this;
        var err;
        this.query = query;
        var values = query.values;
        var ignoreIndexes = [];
        values.every(function (item, index) {
            err = _this.checkAndModifyValue(item);
            if (query.ignore && err) {
                ignoreIndexes.push(index);
                err = null;
            }
            return err ? false : true;
        });
        ignoreIndexes.forEach(function (index) {
            values.splice(index, 1);
        });
        return { err: err, values: values };
    };
    ValuesChecker.prototype.checkAndModifyValue = function (value) {
        var _this = this;
        var error;
        this.table.columns.every(function (column) {
            error = _this.checkAndModifyColumnValue_(column, value);
            return error ? false : true;
        });
        return error;
    };
    ValuesChecker.prototype.checkNotNullAndDataType_ = function (column, value) {
        // check not null schema
        if (column.notNull && isNull(value[column.name])) {
            return this.getError(ERROR_TYPE.NullValue, { ColumnName: column.name });
        }
        // check datatype
        else if (column.dataType && !isNull(value[column.name]) &&
            getDataType(value[column.name]) !== column.dataType) {
            return this.getError(ERROR_TYPE.WrongDataType, { column: column.name });
        }
    };
    ValuesChecker.prototype.checkAndModifyColumnValue_ = function (column, value) {
        var columnValue = value[column.name];
        // check auto increment scheme
        if (column.autoIncrement) {
            // if value is null, then create the autoincrement value
            if (isNull(columnValue)) {
                value[column.name] = ++this.autoIncrementValue[column.name];
            }
            else {
                if (getDataType(columnValue) === DATA_TYPE.Number) {
                    // if column value is greater than autoincrement value saved, then make the
                    // column value as autoIncrement value
                    if (columnValue > this.autoIncrementValue[column.name]) {
                        this.autoIncrementValue[column.name] = columnValue;
                    }
                }
            }
        }
        // check Default Schema
        else if (column.default !== undefined && isNull(columnValue)) {
            value[column.name] = column.default;
        }
        var query = this.query;
        if (query.validation) {
            return this.checkNotNullAndDataType_(column, value);
        }
    };
    ValuesChecker.prototype.getError = function (error, details) {
        return new LogHelper(error, details);
    };
    return ValuesChecker;
}());


;// ./src/worker/executors/update/schema_checker.ts


var SchemaChecker = /** @class */ (function () {
    function SchemaChecker(table) {
        this.table = table;
    }
    SchemaChecker.prototype.check = function (setValue, tblName) {
        var _this = this;
        var log;
        if (typeof setValue === DATA_TYPE.Object) {
            if (this.table) {
                // loop through table column and find data is valid
                this.table.columns.every(function (column) {
                    if (column.name in setValue) {
                        log = _this.checkByColumn_(column, setValue[column.name]);
                    }
                    return log ? false : true;
                });
            }
            else {
                log = new LogHelper(ERROR_TYPE.TableNotExist, { tableName: tblName });
            }
        }
        else {
            log = new LogHelper(ERROR_TYPE.NotObject);
        }
        return log;
    };
    SchemaChecker.prototype.checkByColumn_ = function (column, value) {
        // check not null schema
        if (column.notNull === true && isNull(value)) {
            return new LogHelper(ERROR_TYPE.NullValue, { ColumnName: column.name });
        }
        // check datatype
        var type = getDataType(value);
        var checkFurther = value != null;
        if (column.dataType && checkFurther) {
            if (type !== column.dataType && type !== 'object') {
                return new LogHelper(ERROR_TYPE.WrongDataType, { column: column.name });
            }
        }
        // check allowed operators
        if (checkFurther && type === 'object') {
            var allowedOp = ['+', '-', '*', '/', '{push}'];
            for (var prop in value) {
                if (allowedOp.indexOf(prop) < 0 && column.dataType && type !== column.dataType) {
                    return new LogHelper(ERROR_TYPE.WrongDataType, { column: column.name });
                }
            }
        }
    };
    return SchemaChecker;
}());


;// ./src/worker/executors/query_helper.ts




var QueryHelper = /** @class */ (function () {
    function QueryHelper(dbSchema) {
        this.db = dbSchema;
    }
    QueryHelper.prototype.validate = function (api, query) {
        switch (api) {
            case API.Select:
            case API.Remove:
            case API.Count:
                return this.checkSelect(query);
            case API.Insert:
                return this.checkInsertQuery(query);
            case API.Update:
                return this.checkUpdate(query);
        }
    };
    QueryHelper.prototype.getTable_ = function (tableName) {
        return this.db.tables.find(function (q) { return q.name === tableName; });
    };
    QueryHelper.prototype.isInsertQryValid = function (query) {
        var table = this.getTable_(query.into);
        var log;
        if (table) {
            switch (getDataType(query.values)) {
                case DATA_TYPE.Array:
                    break;
                case DATA_TYPE.Null:
                    log = new LogHelper(ERROR_TYPE.NoValueSupplied);
                    break;
                default:
                    log = new LogHelper(ERROR_TYPE.NotArray);
            }
        }
        else {
            log = new LogHelper(ERROR_TYPE.TableNotExist, { tableName: query.into });
        }
        return {
            table: table,
            log: log
        };
    };
    QueryHelper.prototype.checkUpdate = function (query) {
        var err = new SchemaChecker(this.getTable_(query.in)).
            check(query.set, query.in);
        if (err)
            return err;
        if (query.where != null) {
            err = this.checkForNullInWhere_(query);
            if (err)
                return err;
            this.addGreatAndLessToNotOp_(query);
        }
    };
    QueryHelper.prototype.checkSelect = function (query) {
        if (!query.store) {
            var table = this.getTable_(query.from);
            if (!table) {
                return new LogHelper(ERROR_TYPE.TableNotExist, { tableName: query.from });
            }
        }
        if (query.where) {
            var err = this.checkForNullInWhere_(query);
            if (err)
                return err;
            this.addGreatAndLessToNotOp_(query);
        }
    };
    QueryHelper.prototype.checkForNullInWhere_ = function (query) {
        for (var columnName in query.where) {
            if (query.where[columnName] == null) {
                return new LogHelper(ERROR_TYPE.NullValueInWhere, { column: columnName });
            }
        }
    };
    QueryHelper.prototype.addGreatAndLessToNotOp_ = function (query) {
        var whereQuery = query.where;
        var containsNot = function (qry, keys) {
            return keys.findIndex(function (key) { return qry[key][QUERY_OPTION.NotEqualTo] != null; }) >= 0;
        };
        var addToSingleQry = function (qry, keys) {
            var value;
            keys.forEach(function (prop) {
                value = qry[prop];
                if (value[QUERY_OPTION.NotEqualTo] != null) {
                    qry[prop][QUERY_OPTION.GreaterThan] = value[QUERY_OPTION.NotEqualTo];
                    if (qry[QUERY_OPTION.Or] === undefined) {
                        qry[QUERY_OPTION.Or] = {};
                        qry[QUERY_OPTION.Or][prop] = {};
                    }
                    else if (qry[QUERY_OPTION.Or][prop] === undefined) {
                        qry[QUERY_OPTION.Or][prop] = {};
                    }
                    qry[QUERY_OPTION.Or][prop][QUERY_OPTION.LessThan] = value[QUERY_OPTION.NotEqualTo];
                    delete qry[prop][QUERY_OPTION.NotEqualTo];
                }
            });
            return qry;
        };
        switch (getDataType(whereQuery)) {
            case DATA_TYPE.Object:
                var queryKeys = Object.keys(whereQuery);
                if (containsNot(whereQuery, queryKeys)) {
                    if (queryKeys.length === 1) {
                        query.where = addToSingleQry(whereQuery, queryKeys);
                    }
                    else {
                        var whereTmpQry_1 = [];
                        queryKeys.forEach(function (prop) {
                            var _a;
                            whereTmpQry_1.push(addToSingleQry((_a = {}, _a[prop] = whereQuery[prop], _a), [prop]));
                        });
                        query.where = whereTmpQry_1;
                    }
                }
                break;
            default:
                var whereTmp_1 = [];
                whereQuery.forEach(function (qry) {
                    var qryKeys = Object.keys(qry);
                    if (containsNot(qry, qryKeys)) {
                        qry = addToSingleQry(qry, qryKeys);
                    }
                    whereTmp_1.push(qry);
                });
                query.where = whereTmp_1;
        }
    };
    QueryHelper.prototype.checkInsertQuery = function (query) {
        var validResult = this.isInsertQryValid(query);
        var table = validResult.table;
        var error = validResult.log;
        if (error)
            return error;
        if (query.skipDataCheck)
            return;
        var valueCheckerInstance = new ValuesChecker(table, table.autoIncColumnValue);
        var _a = valueCheckerInstance.checkAndModifyValues(query), values = _a.values, err = _a.err;
        query.values = values;
        return err;
    };
    return QueryHelper;
}());


;// ./src/worker/executors/insert/index.ts
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();






var Insert = /** @class */ (function (_super) {
    __extends(Insert, _super);
    function Insert(query, util) {
        var _this = _super.call(this) || this;
        _this.valuesAffected_ = [];
        if (query.validation == null) {
            query.validation = true;
        }
        _this.query = query;
        _this.util = util;
        _this.tableName = query.into;
        return _this;
    }
    Insert.prototype.execute = function (beforeInsert) {
        var _this = this;
        var db = this.db;
        var err = new QueryHelper(db).validate(API.Insert, this.query);
        if (err)
            return promiseReject(err);
        return beforeInsert().then(function (_) {
            return _this.insertData_(db).then(function (_) {
                return _this.query.return ? _this.valuesAffected_ : _this.rowAffected;
            });
        }).catch(function (err) {
            _this.util.abortTransaction();
            return promiseReject(err);
        });
    };
    Insert.prototype.insertData_ = function (db) {
        var _this = this;
        var onInsertData;
        var addMethod;
        var query = this.query;
        if (query.return) {
            onInsertData = function (value) {
                _this.valuesAffected_.push(value);
            };
        }
        else {
            onInsertData = function (value) {
                ++_this.rowAffected;
            };
        }
        addMethod = (function () {
            var idbMethod = query.upsert ? "put" : "add";
            if (query.ignore && !_this.isTxQuery) {
                return function (value) {
                    var tx = _this.util.con.transaction(query.into, IDB_MODE.ReadWrite);
                    var objectStore = tx.objectStore(query.into);
                    return objectStore[idbMethod](value);
                };
            }
            if (!_this.isTxQuery) {
                _this.util.createTransaction([query.into, MetaHelper.tableName]);
            }
            _this.objectStore = _this.util.objectStore(_this.tableName);
            return function (value) {
                return _this.objectStore[idbMethod](value);
            };
        })();
        return promiseAll(query.values.map(function (value) {
            return promise(function (res, rej) {
                var addResult = addMethod(value);
                addResult.onerror = function (err) {
                    if (query.ignore) {
                        res();
                    }
                    else {
                        rej(err);
                    }
                };
                addResult.onsuccess = function () {
                    onInsertData(value);
                    res();
                };
            });
        })).then(function () {
            return MetaHelper.set(MetaHelper.dbSchema, db, _this.util);
        });
    };
    return Insert;
}(Base));


;// ./src/worker/utils/set_cross_browser_idb.ts
var setCrossBrowserIndexedDb = function () {
    try {
        if (!indexedDB) {
            indexedDB = self.mozIndexedDB ||
                self.webkitIndexedDB || self.msIndexedDB;
        }
        if (indexedDB) {
            IDBTransaction = IDBTransaction ||
                self.webkitIDBTransaction || self.msIDBTransaction;
            self.IDBKeyRange = self.IDBKeyRange ||
                self.webkitIDBKeyRange || self.msIDBKeyRange;
        }
        else {
            return false;
        }
    }
    catch (ex) {
        return false;
    }
    return true;
};

;// ./src/worker/constants/index.ts

var IS_WORKER = typeof self.alert === 'undefined' && typeof ServiceWorkerGlobalScope === 'undefined';
var IS_IDB_SUPPORTED = setCrossBrowserIndexedDb();

;// ./src/worker/utils/is_array.ts
var isArray = function (value) {
    return Array.isArray(value);
};

;// ./src/worker/utils/is_object.ts
var isObject = function (value) {
    return typeof value === 'object';
};

;// ./src/worker/utils/get_keys.ts
var getKeys = function (value) {
    return Object.keys(value);
};

;// ./src/worker/utils/get_length.ts

var getLength = function (value) {
    return getKeys(value).length;
};

;// ./src/worker/executors/select/base_select.ts


var setPushResult = function () {
    var _this = this;
    var caseQuery = this.query.case;
    if (caseQuery) {
        this.pushResult = function (value) {
            var columnName;
            _this.thenEvaluator.setCaseAndValue(caseQuery, value);
            for (columnName in caseQuery) {
                value[columnName] = _this.thenEvaluator.setColumn(columnName).evaluate();
            }
            _this.results.push(value);
        };
    }
    else {
        this.pushResult = function (value) {
            _this.results.push(value);
        };
    }
};
var setLimitAndSkipEvaluationAtEnd = function () {
    if (this.query.limit) {
        this.limitAtEnd = true;
    }
    if (this.query.skip) {
        this.skipAtEnd = true;
    }
};
var mergeWithResults = function (from) {
    var datas = this.results;
    var key = this.primaryKey();
    if ( true && !key) {
        new LogHelper(ERROR_TYPE.NoPrimaryKey, this.query).warn();
    }
    var lookupObject = new Map();
    datas.forEach(function (data) {
        lookupObject.set(data[key], 1);
    });
    from.forEach(function (item) {
        if (!lookupObject.has(item[key])) {
            datas.push(item);
        }
    });
};

;// ./src/worker/executors/select/then_evaluator.ts

var ThenEvaluator = /** @class */ (function () {
    function ThenEvaluator() {
    }
    ThenEvaluator.prototype.setCaseAndValue = function (caseQuery, value) {
        this.caseQuery_ = caseQuery;
        this.setValue(value);
    };
    ThenEvaluator.prototype.setCaseAndColumn = function (caseQuery, columnName) {
        this.caseQuery_ = caseQuery;
        this.setColumn(columnName);
        return this;
    };
    ThenEvaluator.prototype.setColumn = function (columnName) {
        this.columnName_ = columnName;
        this.caseColumnQuery_ = this.caseQuery_[this.columnName_];
        this.length_ = this.caseColumnQuery_.length;
        return this;
    };
    ThenEvaluator.prototype.setValue = function (value) {
        this.value = value;
        return this;
    };
    ThenEvaluator.prototype.evaluate = function () {
        for (var i = 0; i < this.length_; i++) {
            if (this.checkCase_(this.caseColumnQuery_[i]) === true) {
                return this.caseColumnQuery_[i].then;
            }
        }
        var lastThen = this.caseColumnQuery_[this.length_ - 1].then;
        return lastThen == null ? this.value[this.columnName_] : lastThen;
    };
    ThenEvaluator.prototype.checkCase_ = function (cond) {
        var queryOption;
        for (queryOption in cond) {
            switch (queryOption) {
                case QUERY_OPTION.GreaterThan:
                    if (this.value[this.columnName_] > cond[queryOption]) {
                        return true;
                    }
                    break;
                case QUERY_OPTION.Equal:
                    if (this.value[this.columnName_] === cond[queryOption]) {
                        return true;
                    }
                    break;
                case QUERY_OPTION.LessThan:
                    if (this.value[this.columnName_] < cond[queryOption]) {
                        return true;
                    }
                    break;
                case QUERY_OPTION.GreaterThanEqualTo:
                    if (this.value[this.columnName_] >= cond[queryOption]) {
                        return true;
                    }
                    break;
                case QUERY_OPTION.LessThanEqualTo:
                    if (this.value[this.columnName_] <= cond[queryOption]) {
                        return true;
                    }
                    break;
                case QUERY_OPTION.NotEqualTo:
                    if (this.value[this.columnName_] !== cond[queryOption]) {
                        return true;
                    }
                    break;
                case QUERY_OPTION.Between:
                    if (this.value[this.columnName_] > cond[queryOption].low && this.value[this.columnName_] < cond[queryOption].high) {
                        return true;
                    }
                    break;
            }
            return false;
        }
    };
    return ThenEvaluator;
}());


;// ./src/worker/executors/select/where.ts

var getCursorOnSuccess = function (simpleFn, limitFn, skipFn, skipAndLimitFn) {
    if (this.limitAtEnd === false && this.skipAtEnd === false) {
        if (this.skipRecord) {
            return this.limitRecord ? skipAndLimitFn : skipFn;
        }
        if (this.limitRecord) {
            return limitFn;
        }
    }
    return simpleFn;
};
var executeWhereLogic = function (column, value, op, dir) {
    var _this = this;
    value = op ? value[op] : value;
    var cursorRequest = this.objectStore.index(column).openCursor(this.util.keyRange(value, op), dir);
    var onSuccess = getCursorOnSuccess.call(this, executeSimpleForWhere_, executeLimitForWhere_, executeSkipForWhere_, executeSkipAndLimitForWhere_);
    return promise(function (res, rej) {
        cursorRequest.onerror = rej;
        cursorRequest.onsuccess = onSuccess.call(_this, res);
    });
};
var executeSkipAndLimitForWhere_ = function (onFinish) {
    var _this = this;
    var recordSkipped = false;
    return function (e) {
        var cursor = e.target.result;
        if (cursor) {
            if (recordSkipped && _this.results.length !== _this.limitRecord) {
                if (_this.shouldAddValue(cursor)) {
                    _this.pushResult(cursor.value);
                }
                cursor.continue();
            }
            else {
                recordSkipped = true;
                cursor.advance(_this.skipRecord);
            }
        }
        else {
            onFinish();
        }
    };
};
var executeSkipForWhere_ = function (onFinish) {
    var _this = this;
    var recordSkipped = false;
    return function (e) {
        var cursor = e.target.result;
        if (cursor) {
            if (recordSkipped) {
                if (_this.shouldAddValue(cursor)) {
                    _this.pushResult(cursor.value);
                }
                cursor.continue();
            }
            else {
                recordSkipped = true;
                cursor.advance(_this.skipRecord);
            }
        }
        else {
            onFinish();
        }
    };
};
var executeLimitForWhere_ = function (onFinish) {
    var _this = this;
    return function (e) {
        var cursor = e.target.result;
        if (cursor && _this.results.length !== _this.limitRecord) {
            if (_this.shouldAddValue(cursor)) {
                _this.pushResult(cursor.value);
            }
            cursor.continue();
        }
        else {
            onFinish();
        }
    };
};
var executeSimpleForWhere_ = function (onFinish) {
    var _this = this;
    return function (e) {
        var cursor = e.target.result;
        if (cursor) {
            if (_this.shouldAddValue(cursor)) {
                _this.pushResult(cursor.value);
            }
            cursor.continue();
        }
        else {
            onFinish();
        }
    };
};

;// ./src/worker/executors/select/not_where.ts



var executeWhereUndefinedLogic = function () {
    var _this = this;
    var cursorRequest;
    var query = this.query;
    var store = query.store;
    if (store) {
        this.results = store;
        this.setLimitAndSkipEvaluationAtEnd_();
        return promiseResolve();
    }
    var orderQuery = query.order;
    var objectStore = this.objectStore;
    if (orderQuery && orderQuery.idbSorting !== false && orderQuery.by) {
        if (objectStore.indexNames.contains(orderQuery.by)) {
            var orderType = orderQuery.type &&
                orderQuery.type.toLowerCase() === 'desc' ? 'prev' : 'next';
            this.sorted = true;
            cursorRequest = objectStore.index(orderQuery.by).
                openCursor(null, orderType);
        }
        else {
            return promiseReject(new LogHelper(ERROR_TYPE.ColumnNotExist, { column: orderQuery.by, isOrder: true }));
        }
    }
    else {
        cursorRequest = objectStore.openCursor();
    }
    var onSuccess = getCursorOnSuccess.call(this, executeSimple, executeLimit, executeSkip, executeSkipAndLimit);
    return promise(function (res, rej) {
        cursorRequest.onerror = rej;
        cursorRequest.onsuccess = onSuccess.call(_this, res);
    });
};
var executeSkipAndLimit = function (onFinished) {
    var _this = this;
    var recordSkipped = false, cursor;
    return function (e) {
        cursor = e.target.result;
        if (cursor) {
            if (recordSkipped && _this.results.length !== _this.limitRecord) {
                _this.pushResult(cursor.value);
                cursor.continue();
            }
            else {
                recordSkipped = true;
                cursor.advance(_this.skipRecord);
            }
        }
        else {
            onFinished();
        }
    };
};
var executeSkip = function (onFinished) {
    var _this = this;
    var recordSkipped = false, cursor;
    return function (e) {
        cursor = e.target.result;
        if (cursor) {
            if (recordSkipped) {
                _this.pushResult(cursor.value);
                cursor.continue();
            }
            else {
                recordSkipped = true;
                cursor.advance(_this.skipRecord);
            }
        }
        else {
            onFinished();
        }
    };
};
var executeSimple = function (onFinished) {
    var _this = this;
    var cursor;
    return function (e) {
        cursor = e.target.result;
        if (cursor) {
            _this.pushResult(cursor.value);
            cursor.continue();
        }
        else {
            onFinished();
        }
    };
};
var executeLimit = function (onFinished) {
    var _this = this;
    var cursor;
    return function (e) {
        cursor = e.target.result;
        if (cursor && _this.results.length !== _this.limitRecord) {
            _this.pushResult(cursor.value);
            cursor.continue();
        }
        else {
            onFinished();
        }
    };
};

;// ./src/worker/utils/remove_space.ts
var removeSpace = function (value) {
    return value.replace(/\s/g, '');
};

;// ./src/worker/executors/select/order_by.ts


var processGroupDistinctAggr = function () {
    var query = this.query;
    if (query.distinct) {
        var groupBy = [];
        var result = this.results[0];
        for (var key in result) {
            groupBy.push(key);
        }
        var primaryKey = this.primaryKey();
        var index = groupBy.indexOf(primaryKey);
        groupBy.splice(index, 1);
        query.groupBy = groupBy.length > 0 ? groupBy : null;
    }
    if (query.groupBy) {
        if (query.aggregate) {
            this.executeAggregateGroupBy();
        }
        else {
            this.processGroupBy();
        }
    }
    else if (query.aggregate) {
        this.processAggregateQry();
    }
};
var getOrderColumnInfo = function (orderColumn) {
    var column;
    if (!this.query.store) {
        if (this.query.join == null) {
            column = this.getColumnInfo(orderColumn);
        }
        else {
            var splittedByDot = removeSpace(orderColumn).split(".");
            var joinOrderColumn = splittedByDot[1];
            if ( true && joinOrderColumn == null) {
                new LogHelper(ERROR_TYPE.ColumnNotExist, { column: orderColumn, isOrder: true, isJoin: true }).throw();
            }
            column = this.getColumnInfo(joinOrderColumn, splittedByDot[0]);
        }
    }
    if (column == null) {
        var valueFromFirstColumn = this.results[0][orderColumn];
        if (valueFromFirstColumn) {
            return {
                dataType: getDataType(valueFromFirstColumn),
                name: orderColumn
            };
        }
        throw new LogHelper(ERROR_TYPE.ColumnNotExist, { column: orderColumn, isOrder: true });
    }
    return column;
};
var compareStringInDesc_ = function (a, b) {
    return b.localeCompare(a);
};
var compareStringinAsc_ = function (a, b) {
    return a.localeCompare(b);
};
var compareDefaultInDesc_ = function (a, b) {
    return new String(b).localeCompare(a);
};
var compareDefaultinAsc_ = function (a, b) {
    return new String(a).localeCompare(b);
};
var compareNumberInDesc_ = function (a, b) {
    return b - a;
};
var compareNumberinAsc_ = function (a, b) {
    return a - b;
};
var compareDateInDesc_ = function (a, b) {
    return b.getTime() - a.getTime();
};
var compareDateInAsc_ = function (a, b) {
    return a.getTime() - b.getTime();
};
var getValueComparer_ = function (column, order) {
    switch (column.dataType) {
        case DATA_TYPE.String:
            return order.type === 'asc' ? compareStringinAsc_ : compareStringInDesc_;
        case DATA_TYPE.Number:
            return order.type === 'asc' ? compareNumberinAsc_ : compareNumberInDesc_;
        case DATA_TYPE.DateTime:
            return order.type === 'asc' ? compareDateInAsc_ : compareDateInDesc_;
        default:
            return order.type === 'asc' ? compareDefaultinAsc_ : compareDefaultInDesc_;
    }
};
var orderBy_ = function (order) {
    var _a;
    order.type = getOrderType_(order.type);
    var orderColumn = order.by;
    var thenEvaluator = this.thenEvaluator;
    if (orderColumn != null && typeof orderColumn === DATA_TYPE.Object) {
        var caseQuery_1 = orderColumn;
        var getValInAscDesc = function (stringComparer, numberComparer) {
            return function (value1, value2) {
                for (var columnName in caseQuery_1) {
                    thenEvaluator.setCaseAndValue(caseQuery_1, value1);
                    var column1 = thenEvaluator.setColumn(columnName).evaluate();
                    thenEvaluator.setCaseAndValue(caseQuery_1, value2);
                    var column2 = thenEvaluator.setColumn(columnName).evaluate();
                    switch (typeof value1[column1]) {
                        case DATA_TYPE.String:
                            return stringComparer(value1[column1], value2[column2]);
                        default:
                            return numberComparer(value1[column1], value2[column2]);
                    }
                }
            };
        };
        var sortMethod = order.type === 'asc' ?
            getValInAscDesc(compareStringinAsc_, compareNumberinAsc_) :
            getValInAscDesc(compareStringInDesc_, compareNumberInDesc_);
        this.results.sort(sortMethod);
    }
    else {
        var columnInfo = getOrderColumnInfo.call(this, orderColumn);
        if (columnInfo != null) {
            var orderMethod_1 = getValueComparer_(columnInfo, order);
            orderColumn = columnInfo.name;
            if (order.case == null) {
                this.results.sort(function (a, b) {
                    return orderMethod_1(a[orderColumn], b[orderColumn]);
                });
            }
            else {
                thenEvaluator.setCaseAndColumn((_a = {}, _a[orderColumn] = order.case, _a), orderColumn);
                this.results.sort(function (a, b) {
                    return orderMethod_1(thenEvaluator.setValue(a).evaluate(), thenEvaluator.setValue(b).evaluate());
                });
            }
        }
    }
};
var getOrderType_ = function (type) {
    return type == null ? 'asc' : type.toLowerCase();
};
var processOrderBy = function () {
    var order = this.query.order;
    if (order && this.results.length > 0 && !this.sorted) {
        var orderQueryType = getDataType(order);
        if (orderQueryType === DATA_TYPE.Object) {
            orderBy_.call(this, order);
        }
        else if (orderQueryType === DATA_TYPE.Array) {
            orderBy_.call(this, order[0]);
            var _loop_1 = function (i, length_1) {
                var prevOrderQueryBy = order[i - 1].by;
                var currentOrderQuery = order[i];
                var currentorderQueryBy = currentOrderQuery.by;
                var orderColumnDetail = getOrderColumnInfo.call(this_1, currentorderQueryBy);
                if (orderColumnDetail != null) {
                    currentorderQueryBy = orderColumnDetail.name;
                    currentOrderQuery.type = getOrderType_(currentOrderQuery.type);
                    var orderMethod_2 = getValueComparer_(orderColumnDetail, currentOrderQuery);
                    this_1.results.sort(function (a, b) {
                        if (a[prevOrderQueryBy] === b[prevOrderQueryBy]) {
                            return orderMethod_2(a[currentorderQueryBy], b[currentorderQueryBy]);
                        }
                        return 0;
                    });
                }
            };
            var this_1 = this;
            for (var i = 1, length_1 = order.length; i < length_1; i++) {
                _loop_1(i, length_1);
            }
        }
    }
};
var processAggregateQry = function () {
    var datas = this.results;
    var datasLength = datas.length;
    var results = {};
    var columnToAggregate;
    var getCount = function () {
        var result = 0;
        for (var i in datas) {
            result += datas[i][columnToAggregate] ? 1 : 0;
        }
        return result;
    };
    var getMax = function () {
        var result = 0;
        for (var i in datas) {
            result = result > datas[i][columnToAggregate] ?
                result : datas[i][columnToAggregate];
        }
        return result;
    };
    var getMin = function () {
        var result = Infinity, value = Infinity;
        for (var i in datas) {
            value = datas[i][columnToAggregate] ?
                datas[i][columnToAggregate] : Infinity;
            result = result < value ? result : value;
        }
        return result;
    };
    var getSum = function () {
        var result = 0;
        for (var i in datas) {
            result += datas[i][columnToAggregate];
        }
        return result;
    };
    var getAvg = function () {
        return getSum() / datasLength;
    };
    var aggregateQry = this.query.aggregate;
    for (var prop in aggregateQry) {
        var aggregateColumn = aggregateQry[prop];
        var aggregateValType = getDataType(aggregateColumn);
        var aggregateCalculator = void 0;
        switch (prop) {
            case 'count':
                aggregateCalculator = getCount;
                break;
            case 'max':
                aggregateCalculator = getMax;
                break;
            case 'min':
                aggregateCalculator = getMin;
                break;
            case 'sum':
                aggregateCalculator = getSum;
                break;
            case 'avg':
                aggregateCalculator = getAvg;
        }
        switch (aggregateValType) {
            case DATA_TYPE.String:
                columnToAggregate = aggregateColumn;
                results["".concat(prop, "(").concat(columnToAggregate, ")")] = aggregateCalculator();
                break;
            case DATA_TYPE.Array:
                for (var key in aggregateColumn) {
                    columnToAggregate = aggregateColumn[key];
                    results["".concat(prop, "(").concat(columnToAggregate, ")")] = aggregateCalculator();
                }
        }
    }
    // add results to the first index of result
    for (var prop in results) {
        datas[0][prop] = results[prop];
    }
    this.results = [datas[0]];
};

;// ./src/worker/utils/get_object_first_key.ts
var getObjectFirstKey = function (value) {
    for (var key in value) {
        return key;
    }
};

;// ./src/worker/executors/select/group_by.ts


var processGroupBy = function () {
    var groupBy = this.query.groupBy;
    var datas = this.results;
    var lookUpObj = new Map();
    var groupByDataType = getDataType(groupBy);
    if (groupByDataType !== DATA_TYPE.Object) {
        if (groupByDataType === DATA_TYPE.String) {
            for (var i in datas) {
                lookUpObj.set(datas[i][groupBy], datas[i]);
            }
        }
        else {
            var objKey = void 0;
            for (var i in datas) {
                objKey = "";
                for (var column in groupBy) {
                    objKey += datas[i][groupBy[column]];
                }
                lookUpObj.set(objKey, datas[i]);
            }
        }
    }
    else {
        var caseQueryLength = Object.keys(groupBy).length;
        if (caseQueryLength === 1) {
            var groupByColumn = getObjectFirstKey(groupBy);
            this.thenEvaluator.setCaseAndColumn(groupBy, groupByColumn);
            for (var i in datas) {
                lookUpObj.set(this.thenEvaluator.setValue(datas[i]).evaluate(), datas[i]);
            }
        }
        else {
            var objKey = void 0;
            for (var i in datas) {
                objKey = "";
                this.thenEvaluator.setCaseAndValue(groupBy, datas[i]);
                for (var column in groupBy) {
                    objKey += this.thenEvaluator.setColumn(column).evaluate();
                }
                lookUpObj.set(objKey, datas[i]);
            }
        }
    }
    this.results = Array.from(lookUpObj.values());
};
var executeAggregateGroupBy = function () {
    var grpQry = this.query.groupBy;
    var datas = this.results;
    var lookUpObj = new Map();
    // assign aggregate
    var aggregateQry = this.query.aggregate;
    var index;
    var objKey;
    var value;
    var columnToAggregate;
    var calculateAggregate = function () {
        var getCount = function () {
            value = lookUpObj.get(objKey);
            // get old value
            value = value ? value["count(" + columnToAggregate + ")"] : 0;
            // add with old value if data exist
            value += datas[index][columnToAggregate] ? 1 : 0;
            return value;
        };
        var getList = function () {
            value = lookUpObj.get(objKey);
            // get old value
            value = value ? value["list(" + columnToAggregate + ")"] : [];
            // push value
            value.push(datas[index][columnToAggregate]);
            return value;
        };
        var getMax = function () {
            value = lookUpObj.get(objKey);
            // get old value
            value = value ? value["max(" + columnToAggregate + ")"] : 0;
            datas[index][columnToAggregate] = datas[index][columnToAggregate] ?
                datas[index][columnToAggregate] : 0;
            // compare between old value and new value
            return value > datas[index][columnToAggregate] ? value : datas[index][columnToAggregate];
        };
        var getMin = function () {
            value = lookUpObj.get(objKey);
            // get old value
            value = value ? value["min(" + columnToAggregate + ")"] : Infinity;
            datas[index][columnToAggregate] = datas[index][columnToAggregate] ?
                datas[index][columnToAggregate] : Infinity;
            // compare between old value and new value
            return value < datas[index][columnToAggregate] ? value : datas[index][columnToAggregate];
        };
        var getSum = function () {
            value = lookUpObj.get(objKey);
            // get old value
            value = value ? value["sum(" + columnToAggregate + ")"] : 0;
            // add with old value if data exist
            value += datas[index][columnToAggregate] ? datas[index][columnToAggregate] : 0;
            return value;
        };
        var getAvg = function () {
            value = lookUpObj.get(objKey);
            // get old sum value
            var sumOfColumn = value ? value["sum(" + columnToAggregate + ")"] : 0;
            // add with old value if data exist
            sumOfColumn += datas[index][columnToAggregate] ? datas[index][columnToAggregate] : 0;
            datas[index]["sum(" + columnToAggregate + ")"] = sumOfColumn;
            // get old count value
            value = value ? value["count(" + columnToAggregate + ")"] : 0;
            // add with old value if data exist
            value += datas[index][columnToAggregate] ? 1 : 0;
            datas[index]["count(" + columnToAggregate + ")"] = value;
        };
        for (var prop in aggregateQry) {
            var aggregateColumn = aggregateQry[prop];
            var aggregateValType = getDataType(aggregateColumn);
            var aggregateCalculator = void 0;
            switch (prop) {
                case QUERY_OPTION.Count:
                    aggregateCalculator = getCount;
                    break;
                case QUERY_OPTION.Max:
                    aggregateCalculator = getMax;
                    break;
                case QUERY_OPTION.Min:
                    aggregateCalculator = getMin;
                    break;
                case QUERY_OPTION.Sum:
                    aggregateCalculator = getSum;
                    break;
                case QUERY_OPTION.Avg:
                    aggregateCalculator = getAvg;
                    break;
                case QUERY_OPTION.List:
                    aggregateCalculator = getList;
                    break;
            }
            switch (aggregateValType) {
                case DATA_TYPE.String:
                    columnToAggregate = aggregateColumn;
                    datas[index]["".concat(prop, "(").concat(columnToAggregate, ")")] = aggregateCalculator();
                    break;
                case DATA_TYPE.Array:
                    for (var item in aggregateColumn) {
                        columnToAggregate = aggregateColumn[item];
                        datas[index]["".concat(prop, "(").concat(columnToAggregate, ")")] = aggregateCalculator();
                    }
            }
        }
    };
    if (getDataType(grpQry) === DATA_TYPE.String) {
        for (index in datas) {
            objKey = datas[index][grpQry];
            calculateAggregate();
            lookUpObj.set(objKey, datas[index]);
        }
    }
    else {
        for (index in datas) {
            objKey = "";
            for (var column in grpQry) {
                objKey += datas[index][grpQry[column]];
            }
            calculateAggregate();
            lookUpObj.set(objKey, datas[index]);
        }
    }
    datas = Array.from(lookUpObj.values());
    // Checking for avg and if exist then fill the datas;
    var avgQuery = aggregateQry.avg;
    if (avgQuery) {
        if (getDataType(avgQuery) === DATA_TYPE.String) {
            for (index in datas) {
                var sumForAvg = datas[index]["sum(" + avgQuery + ")"], countForAvg = datas[index]["count(" + avgQuery + ")"];
                datas[index]["avg(" + avgQuery + ")"] = sumForAvg / countForAvg;
                if (aggregateQry.count !== avgQuery) {
                    delete datas[index]["count(" + avgQuery + ")"];
                }
                if (aggregateQry.sum !== avgQuery) {
                    delete datas[index]["sum(" + avgQuery + ")"];
                }
            }
        }
        else {
            var isCountTypeString = getDataType(aggregateQry.count) === DATA_TYPE.String;
            var isSumTypeString = getDataType(aggregateQry.sum) === DATA_TYPE.String;
            for (index in datas) {
                for (var column in avgQuery) {
                    var avgColumn = avgQuery[column], sum = datas[index]["sum(" + avgColumn + ")"], count = datas[index]["count(" + avgColumn + ")"];
                    datas[index]["avg(" + avgColumn + ")"] = sum / count;
                    if (isCountTypeString) {
                        if (aggregateQry.count !== avgColumn) {
                            delete datas[index]["count(" + avgColumn + ")"];
                        }
                        else if (aggregateQry.count.indexOf(avgColumn) === -1) {
                            delete datas[index]["count(" + avgColumn + ")"];
                        }
                    }
                    if (isSumTypeString) {
                        if (aggregateQry.sum !== avgColumn) {
                            delete datas[index]["sum(" + avgColumn + ")"];
                        }
                        else if (aggregateQry.sum.indexOf(avgColumn) === -1) {
                            delete datas[index]["sum(" + avgColumn + ")"];
                        }
                    }
                }
            }
        }
    }
    this.results = datas;
};

;// ./src/worker/utils/get_regex_from_like.ts

var getRegexFromLikeExpression = function (likeExpression) {
    var filterValues = likeExpression.split('%');
    var filterValue;
    var occurence;
    if (filterValues[1]) {
        filterValue = filterValues[1];
        occurence = filterValues.length > 2 ? OCCURENCE.Any : OCCURENCE.Last;
    }
    else {
        filterValue = filterValues[0];
        occurence = OCCURENCE.First;
    }
    switch (occurence) {
        case OCCURENCE.First:
            return new RegExp("^".concat(filterValue), 'i');
        case OCCURENCE.Last:
            return new RegExp("".concat(filterValue, "$"), 'i');
        default:
            return new RegExp("".concat(filterValue), 'i');
    }
};

;// ./src/worker/utils/clone.ts

var clone_isObject = function (value) {
    return getDataType(value) === 'object' && !(value instanceof RegExp);
};
var clone = function (obj) {
    if (clone_isObject(obj)) {
        var copy = {};
        for (var i in obj) {
            copy[i] = obj[i] != null && clone_isObject(obj[i]) ? clone(obj[i]) : obj[i];
        }
        return copy;
    }
    return obj;
};

;// ./src/worker/utils/compare.ts


var compare = function (value, compareValue, symbol) {
    var type1 = getDataType(value);
    var type2 = getDataType(compareValue);
    if (type1 !== type2)
        return false;
    if (type1 === DATA_TYPE.DateTime) {
        value = value.getTime();
        compareValue = compareValue.getTime();
    }
    switch (symbol) {
        // greater than
        case QUERY_OPTION.GreaterThan:
            return value > compareValue;
        // less than
        case QUERY_OPTION.LessThan:
            return value < compareValue;
        // less than equal
        case QUERY_OPTION.LessThanEqualTo:
            return value <= compareValue;
        // greather than equal
        case QUERY_OPTION.GreaterThanEqualTo:
            return value >= compareValue;
        // Not equal to
        case QUERY_OPTION.NotEqualTo:
            return value !== compareValue;
        default:
            if (type1 === 'array') {
                if (value.length !== compareValue.length)
                    return false;
                var status_1;
                value.every(function (item, index) {
                    status_1 = item === compareValue[index];
                    return status_1;
                });
                return status_1;
            }
            return value === compareValue;
    }
};

;// ./src/worker/executors/where_checker.ts


/**
 * For matching the different column value existance for where option
 *
 * @export
 * @class WhereChecker
 */
var WhereChecker = /** @class */ (function () {
    function WhereChecker(where, checkFlag) {
        this.where = clone(where);
        this.checkFlag = checkFlag;
    }
    WhereChecker.prototype.remove = function (props) {
        var last = props.pop();
        var value = props.reduce(function (prev, curr) { return prev && prev[curr]; }, this.where);
        delete value[last];
    };
    WhereChecker.prototype.check = function (rowValue) {
        var _this = this;
        var status = true;
        if (!this.checkFlag)
            return status;
        var where = this.where;
        var _loop_1 = function (columnName) {
            if (!status) {
                return { value: status };
            }
            var whereColumnValue = where[columnName];
            var columnValue = rowValue[columnName];
            var isArrayColumnValue = isArray(columnValue);
            var isArrayWhereColumnValue = isArray(whereColumnValue);
            var executeCompare = function (executor) {
                if (isArrayColumnValue && !isArrayWhereColumnValue) {
                    columnValue.every(function (q) {
                        status = executor(q);
                        return !status;
                    });
                }
                else {
                    status = executor(columnValue);
                }
                return;
            };
            if (getDataType(whereColumnValue) === "object") {
                var _loop_2 = function (key) {
                    if (!status) {
                        return { value: status };
                    }
                    switch (key) {
                        case QUERY_OPTION.In:
                            executeCompare(function (compareValue) {
                                return _this.checkIn(whereColumnValue[QUERY_OPTION.In], compareValue);
                            });
                            break;
                        case QUERY_OPTION.Like:
                            executeCompare(function (compareValue) {
                                return _this.checkLike_(columnName, compareValue);
                            });
                            break;
                        case QUERY_OPTION.Regex:
                            executeCompare(function (compareValue) {
                                return _this.checkRegex(columnName, compareValue);
                            });
                            break;
                        case QUERY_OPTION.Between:
                        case QUERY_OPTION.GreaterThan:
                        case QUERY_OPTION.LessThan:
                        case QUERY_OPTION.GreaterThanEqualTo:
                        case QUERY_OPTION.LessThanEqualTo:
                        case QUERY_OPTION.NotEqualTo:
                            executeCompare(function (compareValue) {
                                return _this.checkComparisionOp_(columnName, compareValue, key);
                            });
                            break;
                        default:
                            status = false;
                    }
                };
                for (var key in whereColumnValue) {
                    var state_2 = _loop_2(key);
                    if (typeof state_2 === "object")
                        return state_2;
                }
            }
            else {
                executeCompare(function (storedValue) {
                    return compare(whereColumnValue, storedValue);
                });
            }
        };
        for (var columnName in where) {
            var state_1 = _loop_1(columnName);
            if (typeof state_1 === "object")
                return state_1.value;
        }
        return status;
    };
    WhereChecker.prototype.checkIn = function (whereColumnValue, value) {
        return whereColumnValue.find(function (q) { return compare(q, value); }) != null;
    };
    WhereChecker.prototype.checkLike_ = function (column, value) {
        return getRegexFromLikeExpression(this.where[column][QUERY_OPTION.Like]).test(value);
    };
    WhereChecker.prototype.checkRegex = function (column, value) {
        return this.where[column][QUERY_OPTION.Regex].test(value);
    };
    WhereChecker.prototype.checkComparisionOp_ = function (column, value, symbol) {
        var compareValue = this.where[column][symbol];
        if (symbol != QUERY_OPTION.Between) {
            return compare(value, compareValue, symbol);
        }
        return compare(value, compareValue.low, '>=') &&
            compare(value, compareValue.high, '<=');
    };
    return WhereChecker;
}());


;// ./src/worker/executors/base_fetch.ts
var base_fetch_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





var BaseFetch = /** @class */ (function (_super) {
    base_fetch_extends(BaseFetch, _super);
    function BaseFetch() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.limitAtEnd = false;
        _this.skipAtEnd = false;
        return _this;
    }
    BaseFetch.prototype.goToWhereLogic = function () {
        var _this = this;
        var query = this.query;
        var whereQuery = query.where;
        var firstColumn = (function () {
            for (var key in whereQuery) {
                if (_this.objectStore.indexNames.contains(key)) {
                    return key;
                }
            }
        })();
        if (firstColumn == null) {
            firstColumn = getObjectFirstKey(whereQuery);
            if (!query.store) {
                return promiseReject(new LogHelper(ERROR_TYPE.NoIndexFound, { column: firstColumn }));
            }
        }
        var value = whereQuery[firstColumn];
        if (getDataType(value) === 'object') {
            var checkFlag = getLength(value) > 1 ||
                getLength(whereQuery) > 1;
            this.whereChecker = new WhereChecker(whereQuery, checkFlag);
            var key = getObjectFirstKey(value);
            this.whereChecker.remove([firstColumn, key]);
            switch (key) {
                case QUERY_OPTION.Like: {
                    var regexVal = getRegexFromLikeExpression(value[QUERY_OPTION.Like]);
                    return this.executeRegexLogic(firstColumn, regexVal);
                }
                case QUERY_OPTION.Regex:
                    return this.executeRegexLogic(firstColumn, value[QUERY_OPTION.Regex]);
                case QUERY_OPTION.In:
                    return this.executeInLogic(firstColumn, value[QUERY_OPTION.In]);
                case QUERY_OPTION.Between:
                case QUERY_OPTION.GreaterThan:
                case QUERY_OPTION.LessThan:
                case QUERY_OPTION.GreaterThanEqualTo:
                case QUERY_OPTION.LessThanEqualTo:
                    return this.executeWhereLogic(firstColumn, value, key, "next");
                case QUERY_OPTION.Aggregate: break;
                default:
                    return this.executeWhereLogic(firstColumn, value, null, "next");
            }
        }
        else {
            var checkFlag = getLength(whereQuery) > 1;
            this.whereChecker = new WhereChecker(whereQuery, checkFlag);
            this.whereChecker.remove([firstColumn]);
            return this.executeWhereLogic(firstColumn, value, null, "next");
        }
    };
    return BaseFetch;
}(Base));


;// ./src/worker/executors/select/regex.ts


var executeRegexLogic = function (column, exp) {
    var _this = this;
    var skip = this.skipRecord;
    var skipOrPush = function (val) {
        if (skip === 0) {
            _this['pushResult'](val);
        }
        else {
            --skip;
        }
    };
    this.shouldAddValue = function (cursor) {
        return exp.test(cursor.key) &&
            _this.whereChecker.check(cursor.value);
    };
    var cursorRequest = this.objectStore.index(column).openCursor();
    var onSuccess = getCursorOnSuccess.call(this, executeSimpleForWhere_, executeLimitForWhere_, regex_executeSkipForWhere_, regex_executeSkipAndLimitForWhere_);
    return promise(function (res, rej) {
        cursorRequest.onerror = rej;
        cursorRequest.onsuccess = onSuccess.call(_this, res, skipOrPush);
    });
};
var regex_executeSkipAndLimitForWhere_ = function (onFinish, skipOrPush) {
    var _this = this;
    return function (e) {
        var cursor = e.target.result;
        if (_this.results.length !== _this.limitRecord && cursor) {
            if (_this.shouldAddValue(cursor)) {
                skipOrPush(cursor.value);
            }
            cursor.continue();
        }
        else {
            onFinish();
        }
    };
};
var regex_executeSkipForWhere_ = function (onFinish, skipOrPush) {
    var _this = this;
    return function (e) {
        var cursor = e.target.result;
        if (cursor) {
            if (_this.shouldAddValue(cursor)) {
                skipOrPush((cursor.value));
            }
            cursor.continue();
        }
        else {
            onFinish();
        }
    };
};

;// ./src/worker/executors/select/in.ts



var executeInLogic = function (column, values) {
    var _this = this;
    var skip = this.skipRecord;
    var skipOrPush = function (val) {
        if (skip === 0) {
            _this['pushResult'](val);
        }
        else {
            --skip;
        }
    };
    var onSuccess = getCursorOnSuccess.call(this, executeSimpleForWhere_, executeLimitForWhere_, regex_executeSkipForWhere_, regex_executeSkipAndLimitForWhere_);
    var runInLogic = function (value) {
        return promise(function (res, rej) {
            var cursorRequest = _this.objectStore.index(column).openCursor(_this.util.keyRange(value));
            cursorRequest.onsuccess = onSuccess.call(_this, res, skipOrPush);
            cursorRequest.onerror = rej;
        });
    };
    return promiseAll(values.map(runInLogic));
};

;// ./src/worker/executors/select/join.ts
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};




var executeJoinQuery = function () {
    return new Join(this).execute();
};
var Join = /** @class */ (function () {
    function Join(select) {
        this.joinQueryStack_ = [];
        this.currentQueryStackIndex_ = 0;
        this.tablesFetched = [];
        this.results = [];
        this.select = select;
    }
    Object.defineProperty(Join.prototype, "query", {
        get: function () {
            return this.select.query;
        },
        enumerable: false,
        configurable: true
    });
    Join.prototype.getTable = function (name) {
        return this.select.table(name);
    };
    Join.prototype.executeSelect = function (query) {
        return new Select(query, this.select.util).
            execute();
    };
    Join.prototype.execute = function () {
        var _this = this;
        var query = this.query;
        this.joinQueryStack_ = getDataType(query.join) === DATA_TYPE.Object ?
            [query.join] : query.join;
        // get the data for first table
        var tableName = query.from;
        var tablesToFetch = [];
        if (tableName) {
            tablesToFetch.push(tableName);
        }
        var joinQueryStack = this.joinQueryStack_;
        for (var i = 0, length_1 = joinQueryStack.length; i < length_1; i++) {
            var item = joinQueryStack[i];
            var jointblInfo = this.getJoinTableInfo_(item.on);
            // table 1 is fetched & table2 needs to be fetched for join
            if (item.with === jointblInfo.table1.table) {
                jointblInfo = {
                    table1: jointblInfo.table2,
                    table2: jointblInfo.table1
                };
            }
            var err = this.checkJoinQuery_(jointblInfo, item);
            if (err) {
                return promiseReject(err);
            }
            joinQueryStack[i].joinTableInfo = jointblInfo;
            if (item.with) {
                tablesToFetch.push(item.with);
            }
        }
        if (!this.select.isTxQuery && tablesToFetch.length > 0) {
            this.select.util.createTransaction(tablesToFetch);
        }
        var whereQuery = query.where;
        // remove column which not exist in first table
        if (whereQuery && !query.store) {
            var table_1 = this.getTable(tableName);
            var removeJoinColumn_1 = function (whereQryParam) {
                var whereQryAfterJoin;
                if (Array.isArray(whereQryParam)) {
                    whereQryAfterJoin = [];
                    whereQryParam = whereQryParam.filter(function (qry) {
                        var result = removeJoinColumn_1(qry);
                        if (Object.keys(result.whereQryAfterJoin).length > 0) {
                            whereQryAfterJoin.push(result.whereQryAfterJoin);
                        }
                        return !result.isWhereEmpty;
                    });
                }
                else {
                    whereQryAfterJoin = {};
                    var _loop_1 = function (column) {
                        switch (column) {
                            case "or":
                                var filteredOr = {};
                                var whereQryOr = whereQryParam[column];
                                var _loop_2 = function (orColumn) {
                                    var columnInTable_1 = table_1.columns.find(function (q) { return q.name === orColumn; });
                                    if (!columnInTable_1) {
                                        filteredOr[orColumn] = whereQryOr[orColumn];
                                    }
                                };
                                for (var orColumn in whereQryOr) {
                                    _loop_2(orColumn);
                                }
                                if (getLength(filteredOr) > 0) {
                                    whereQryAfterJoin['or'] = filteredOr;
                                    for (var orColumn in filteredOr) {
                                        delete whereQryOr[orColumn];
                                    }
                                }
                                break;
                            default:
                                var columnInTable = table_1.columns.find(function (q) { return q.name === column; });
                                if (!columnInTable) {
                                    whereQryAfterJoin[column] = whereQuery[column];
                                }
                        }
                    };
                    for (var column in whereQryParam) {
                        _loop_1(column);
                    }
                    for (var column in whereQryAfterJoin) {
                        delete whereQryParam[column];
                    }
                }
                return {
                    isWhereEmpty: getLength(whereQryParam) === 0,
                    whereQryAfterJoin: whereQryAfterJoin,
                    whereQueryModified: whereQryParam
                };
            };
            var removeJoinColumnResult = removeJoinColumn_1(whereQuery);
            var whereQryAfterJoin = removeJoinColumnResult.whereQryAfterJoin;
            query.where = removeJoinColumnResult.whereQueryModified;
            if (removeJoinColumnResult.isWhereEmpty) {
                delete query.where;
            }
            var joinQuery = this.joinQueryStack_[0];
            Object.assign(joinQuery['whereJoin'], whereQryAfterJoin);
        }
        return this.executeSelect({
            from: tableName,
            where: query.where,
            case: query.case,
            flatten: query.flatten,
            store: query.store,
            meta: query.meta
        }).then(function (results) {
            _this.results = results.map(function (item) {
                var _a;
                return _a = {},
                    _a[_this.currentQueryStackIndex_] = item,
                    _a;
            });
            _this.tablesFetched.push(joinQueryStack[0].joinTableInfo.table1.table);
            return _this.startExecutingJoinLogic_();
        });
    };
    Join.prototype.onJoinQueryFinished_ = function () {
        if (this.results.length === 0)
            return;
        var selectApi = this.select;
        try {
            var results_1 = [];
            var tables = getKeys(this.results[0]);
            var tablesLength_1 = tables.length;
            this.results.forEach(function (result) {
                var data = result["0"]; // first table data
                for (var i = 1; i < tablesLength_1; i++) {
                    data = __assign(__assign({}, data), result[i]);
                }
                results_1.push(data);
            });
            selectApi['results'] = results_1;
            selectApi.setLimitAndSkipEvaluationAtEnd_();
            selectApi.query.flatten = null;
            if (true) {
                try {
                    selectApi.processOrderBy();
                }
                catch (ex) {
                    return promiseReject(new LogHelper(ERROR_TYPE.InvalidOrderQuery, ex.message));
                }
            }
            else {}
        }
        catch (ex) {
            return promiseReject(new LogHelper(ERROR_TYPE.InvalidJoinQuery, ex.message));
        }
    };
    Join.prototype.startExecutingJoinLogic_ = function () {
        var _this = this;
        var joinQuery = this.joinQueryStack_[this.currentQueryStackIndex_];
        if (joinQuery) {
            try {
                var jointblInfo_1 = joinQuery.joinTableInfo;
                return this.executeSelect({
                    from: joinQuery.with,
                    where: joinQuery.where,
                    case: joinQuery.case,
                    flatten: joinQuery.flatten,
                    store: joinQuery.store,
                    meta: joinQuery.meta
                }).then(function (results) {
                    _this.jointables(joinQuery, jointblInfo_1, results);
                    _this.tablesFetched.push(jointblInfo_1.table2.table);
                    ++_this.currentQueryStackIndex_;
                    return _this.startExecutingJoinLogic_();
                });
            }
            catch (ex) {
                return promiseReject(new LogHelper(ERROR_TYPE.InvalidJoinQuery, ex.message));
            }
        }
        else {
            return this.onJoinQueryFinished_();
        }
    };
    Join.prototype.jointables = function (joinQuery, jointblInfo, secondtableData) {
        var _this = this;
        var joinType = joinQuery.type;
        var output = [];
        var column1 = jointblInfo.table1.column;
        var column2 = jointblInfo.table2.column;
        var table1Index = this.tablesFetched.indexOf(jointblInfo.table1.table);
        var table2Index = this.currentQueryStackIndex_ + 1;
        var asQuery = joinQuery.as;
        var mapWithAlias = asQuery ? function (value) {
            for (var key in asQuery) {
                var asValue = asQuery[key];
                if (value[asValue] === undefined) {
                    value[asValue] = value[key];
                    delete value[key];
                }
            }
            return value;
        } : function (val) { return val; };
        var index = 0;
        var valueMatchedFromSecondTable;
        var whereQry = Object.assign({}, joinQuery['whereJoin']);
        var whereCheker = new WhereChecker(whereQry, (getLength(whereQry) > 0));
        var joinerComparer;
        var performInnerJoin = function () {
            joinerComparer = function (valueFromSecondTable, valueFromFirstTable) {
                return valueFromFirstTable[table1Index][column1] === valueFromSecondTable[column2];
            };
            defaultValueSetter = function () { };
        };
        var defaultValueSetter;
        var performleftJoin = function () {
            var columnDefaultValue = {};
            var nullValue = null;
            if (joinQuery.store) {
                getKeys(joinQuery.store).forEach(function (columnName) {
                    columnDefaultValue[columnName] = nullValue;
                });
            }
            else {
                _this.getTable(jointblInfo.table2.table).columns.forEach(function (col) {
                    columnDefaultValue[col.name] = nullValue;
                });
            }
            if (table2Index === 1) {
                joinerComparer = function (valueFromSecondTable, valueFromFirstTable) {
                    return valueFromFirstTable[table1Index][column1] === valueFromSecondTable[column2];
                };
            }
            else {
                joinerComparer = function (valueFromSecondTable, valueFromFirstTable) {
                    var value = valueFromFirstTable[table1Index];
                    return value != null && value[column1] === valueFromSecondTable[column2];
                };
            }
            defaultValueSetter = function () {
                if (valueMatchedFromSecondTable.length === 0) {
                    valueMatchedFromSecondTable = [columnDefaultValue];
                }
            };
        };
        switch (joinType) {
            case "left":
                performleftJoin();
                break;
            default:
                performInnerJoin();
        }
        this.results.forEach(function (valueFromFirstTable) {
            valueMatchedFromSecondTable = [];
            // perform left join
            secondtableData.forEach(function (valueFromSecondTable) {
                if (joinerComparer(valueFromSecondTable, valueFromFirstTable)) {
                    valueMatchedFromSecondTable.push(__assign({}, valueFromSecondTable));
                }
            });
            defaultValueSetter();
            valueMatchedFromSecondTable.forEach(function (value) {
                value = mapWithAlias(value);
                if (!whereCheker.check(value))
                    return;
                output[index] = __assign({}, valueFromFirstTable);
                output[index++][table2Index] = value;
            });
        });
        this.results = output;
    };
    Join.prototype.getJoinTableInfo_ = function (joinOn) {
        joinOn = removeSpace(joinOn);
        var splittedjoinOn = joinOn.split("=");
        var splittedjoinOnbydotFirst = splittedjoinOn[0].split(".");
        var splittedjoinOnbydotSecond = splittedjoinOn[1].split(".");
        var info = {
            table1: {
                table: splittedjoinOnbydotFirst[0],
                column: splittedjoinOnbydotFirst[1]
            },
            table2: {
                table: splittedjoinOnbydotSecond[0],
                column: splittedjoinOnbydotSecond[1]
            }
        };
        return info;
    };
    Join.prototype.checkJoinQuery_ = function (jointblInfo, qry) {
        if (qry.store)
            return null;
        var table1 = jointblInfo.table1;
        var table2 = jointblInfo.table2;
        var tableSchemaOf1stTable = this.getTable(table1.table);
        var tableSchemaOf2ndTable = this.getTable(table2.table);
        var err;
        // check on info & with info 
        if (qry.with !== table2.table) {
            err = new LogHelper(ERROR_TYPE.InvalidJoinQuery, "on value should contains value of with");
        }
        // check for column existance
        if (tableSchemaOf1stTable.columns.find(function (q) { return q.name === table1.column; }) == null) {
            err = new LogHelper(ERROR_TYPE.InvalidJoinQuery, "column ".concat(table1.column, " does not exist in table ").concat(table1.table));
        }
        else if (tableSchemaOf2ndTable.columns.find(function (q) { return q.name === table2.column; }) == null) {
            err = new LogHelper(ERROR_TYPE.InvalidJoinQuery, "column ".concat(table2.column, " does not exist in table ").concat(table2.table));
        }
        // check for column match in both table
        if (qry.as == null) {
            qry.as = {};
        }
        tableSchemaOf1stTable.columns.every(function (column) {
            var columnFound = tableSchemaOf2ndTable.columns.find(function (q) { return q.name === column.name && q.name !== table1.column; });
            if (columnFound != null && qry.as[columnFound.name] == null) {
                err = new LogHelper(ERROR_TYPE.InvalidJoinQuery, "column ".concat(column.name, " exist in both table ").concat(table1.table, " & ").concat(table2.table));
                return false;
            }
            return true;
        });
        var whereQry = qry.where;
        if (whereQry) {
            var removeNonExistingColumnFromCurrentTable_1 = function (qry, whereJoinParam) {
                var _loop_3 = function (columnName) {
                    switch (columnName) {
                        case "or":
                        case "in":
                            break;
                        default:
                            var columnFound = tableSchemaOf2ndTable.columns.find(function (q) { return q.name === columnName; });
                            if (!columnFound) {
                                whereJoinParam[columnName] = qry[columnName];
                                delete qry[columnName];
                            }
                    }
                };
                for (var columnName in qry) {
                    _loop_3(columnName);
                }
            };
            var whereJoin_1;
            if (Array.isArray(whereQry)) {
                whereJoin_1 = [];
                whereQry = whereQry.filter(function (item) {
                    var whereForExtraColumn = {};
                    removeNonExistingColumnFromCurrentTable_1(item, whereForExtraColumn);
                    if (getLength(whereForExtraColumn) !== 0) {
                        whereJoin_1.push(whereForExtraColumn);
                    }
                    return getLength(item) !== 0;
                });
            }
            else {
                whereJoin_1 = {};
                removeNonExistingColumnFromCurrentTable_1(whereQry, whereJoin_1);
            }
            if (getLength(whereQry) === 0) {
                qry.where = null;
            }
            qry['whereJoin'] = whereJoin_1;
        }
        else {
            qry['whereJoin'] = {};
        }
        return err;
    };
    return Join;
}());

;// ./src/worker/memory_store/index.ts


var MemoryObjectStore = /** @class */ (function () {
    function MemoryObjectStore(data) {
        this.data = data;
    }
    Object.defineProperty(MemoryObjectStore.prototype, "indexNames", {
        get: function () {
            var keys = getKeys(this.data[0]);
            return {
                contains: function (columnName) {
                    return keys.indexOf(columnName) >= 0;
                }
            };
        },
        enumerable: false,
        configurable: true
    });
    MemoryObjectStore.prototype.index = function (column) {
        var _this = this;
        return {
            openCursor: function (keyRange) {
                var cursorRequest = {};
                var index = 0;
                var cursor = {
                    continue: function () {
                        ++index;
                        execute();
                    },
                };
                var callOnSuccess = function (result) {
                    cursorRequest.onsuccess({
                        target: {
                            result: result
                        }
                    });
                };
                var execute = function () {
                    var value = _this.data[index];
                    if (value) {
                        var columnValue = value[column];
                        if (columnValue && (keyRange == null || keyRange.includes(columnValue))) {
                            cursor.key = columnValue;
                            cursor.value = value;
                            callOnSuccess(cursor);
                        }
                        else {
                            cursor.continue();
                        }
                    }
                    else {
                        callOnSuccess(null);
                    }
                };
                promiseResolve().then(execute);
                return cursorRequest;
            }
        };
    };
    return MemoryObjectStore;
}());


;// ./src/worker/executors/select/index.ts
var select_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var select_assign = (undefined && undefined.__assign) || function () {
    select_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return select_assign.apply(this, arguments);
};














var Select = /** @class */ (function (_super) {
    select_extends(Select, _super);
    function Select(query, util) {
        var _this = _super.call(this) || this;
        _this.sorted = false;
        _this.isSubQuery = false;
        _this.thenEvaluator = new ThenEvaluator();
        _this.returnResult_ = function () {
            if (_this.results.length > 0) {
                var query = _this.query;
                if (query.flatten) {
                    var flattendData_1 = [];
                    var indexToDelete_1 = new Map();
                    query.flatten.forEach(function (column) {
                        _this.results.forEach(function (data, i) {
                            data[column].forEach(function (item) {
                                var _a;
                                flattendData_1.push(select_assign(select_assign({}, data), (_a = {}, _a[column] = item, _a)));
                            });
                            indexToDelete_1.set(i, true);
                        });
                    });
                    var itemsDeleted_1 = 0;
                    indexToDelete_1.forEach(function (_, key) {
                        _this.results.splice(key - itemsDeleted_1, 1);
                        ++itemsDeleted_1;
                    });
                    _this.results = _this.results.concat(flattendData_1);
                }
                _this.processGroupDistinctAggr();
                _this.processOrderBy();
                if (_this.skipAtEnd) {
                    _this.results.splice(0, query.skip);
                }
                if (_this.limitAtEnd) {
                    _this.results = _this.results.slice(0, query.limit);
                }
            }
            return _this.results;
        };
        _this.query = query;
        _this.util = util;
        _this.tableName = query.from;
        _this.setPushResult();
        if (isArray(query.where)) {
            _this.isArrayQry = true;
            _this.setLimitAndSkipEvaluationAtEnd_();
        }
        else {
            _this.skipRecord = query.skip;
            _this.limitRecord = query.limit;
        }
        var orderQuery = query.order;
        if (orderQuery) {
            if (isArray(orderQuery) || orderQuery.case || isObject(orderQuery.by)) {
                (orderQuery.idbSorting) = false;
            }
            _this.setLimitAndSkipEvaluationAtEnd_();
        }
        else if (query.groupBy) {
            _this.setLimitAndSkipEvaluationAtEnd_();
        }
        return _this;
    }
    Select.prototype.execute = function (beforeExecute) {
        var _this = this;
        var pResult;
        if (!beforeExecute) {
            beforeExecute = function () { return promiseResolve(null); };
        }
        var query = this.query;
        try {
            var err = new QueryHelper(this.db).validate(API.Select, query);
            if (err)
                return promiseReject(err);
            return beforeExecute().then(function (_) {
                _this.initTransaction_();
                if (query.join == null) {
                    if (query.where != null) {
                        if (isArray(query.where)) {
                            pResult = _this.processWhereArrayQry();
                        }
                        else {
                            pResult = _this.processWhere_();
                        }
                    }
                    else {
                        pResult = _this.executeWhereUndefinedLogic();
                    }
                }
                else {
                    pResult = _this.executeJoinQuery();
                }
                return pResult.then(_this.returnResult_.bind(_this));
            });
        }
        catch (ex) {
            return this.onException(ex);
        }
    };
    Select.prototype.processWhereArrayQry = function () {
        var _this = this;
        this.isArrayQry = true;
        var whereQuery = this.query.where;
        var pKey = this.primaryKey();
        var isFirstWhere = true, output = [], operation;
        var isItemExist = function (keyValue) {
            return output.findIndex(function (item) { return item[pKey] === keyValue; }) >= 0;
        };
        var onSuccess = function () {
            if (operation === QUERY_OPTION.And) {
                var doAnd = function () {
                    var andResults = [];
                    _this.results.forEach(function (item) {
                        if (isItemExist(item[pKey])) {
                            andResults.push(item);
                        }
                    });
                    output = andResults;
                    andResults = null;
                };
                if (isFirstWhere === true) {
                    output = _this.results;
                }
                else if (output.length > 0) {
                    doAnd();
                }
            }
            else {
                if (output.length > 0) {
                    // this.results = [...output, ...this.results];
                    _this.mergeWithResults(output);
                }
                output = _this.results;
            }
            isFirstWhere = false;
            if (whereQuery.length > 0) {
                _this.results = [];
                return processFirstQry();
            }
            else {
                _this.results = output;
            }
            return promiseResolve();
        };
        var executeWhere = function (whereQuery) {
            var select = new Select({
                from: _this.query.from,
                where: whereQuery
            }, _this.util);
            return select.execute().then(function (results) {
                _this.results = results;
                return onSuccess();
            });
        };
        var processFirstQry = function () {
            var whereQueryToProcess = whereQuery.shift();
            var whereQueryOr = whereQueryToProcess[QUERY_OPTION.Or];
            if (whereQueryOr) {
                if (isArray(whereQueryOr)) {
                    operation = QUERY_OPTION.Or;
                    return executeWhere(whereQueryOr);
                }
                if (getLength(whereQueryToProcess) === 1) {
                    operation = QUERY_OPTION.Or;
                    whereQueryToProcess = whereQueryOr;
                }
                else {
                    operation = QUERY_OPTION.And;
                }
            }
            else {
                operation = QUERY_OPTION.And;
                if (isArray(whereQueryToProcess)) {
                    return executeWhere(whereQueryToProcess);
                }
            }
            _this.query.where = whereQueryToProcess;
            return _this.processWhere_().then(onSuccess);
        };
        return processFirstQry();
    };
    Select.prototype.initTransaction_ = function () {
        var store = this.query.store;
        if (store) {
            this.objectStore = new MemoryObjectStore(store);
            return;
        }
        if (!this.isTxQuery) {
            this.util.createTransactionIfNotExist([this.tableName], IDB_MODE.ReadOnly);
        }
        this.objectStore = this.util.objectStore(this.tableName);
    };
    Select.prototype.processWhere_ = function () {
        var _this = this;
        this.shouldAddValue = function (cursor) {
            var cursorValue = cursor.value;
            var that = _this;
            var proxy = new Proxy(cursorValue, {
                get: function (target, p, receiver) {
                    var val = cursorValue[p];
                    if (!val) {
                        var column = that.getColumnInfo(p);
                        if (column && column.keyPath) {
                            return column.keyPath.map(function (col) {
                                return cursorValue[col];
                            });
                        }
                    }
                    return val;
                },
            });
            return _this.whereChecker.check(proxy);
        };
        if (this.query.where.or) {
            this.processOrLogic_();
        }
        return this.goToWhereLogic().then(function () {
            return _this.onWhereEvaluated();
        });
    };
    Select.prototype.onWhereEvaluated = function () {
        if (this.isOr) {
            return this.orQuerySuccess_();
        }
    };
    Select.prototype.orQuerySuccess_ = function () {
        var _this = this;
        var query = this.query;
        var orInfo = this.orInfo;
        if (this.results.length > 0) {
            this.mergeWithResults(orInfo.results);
        }
        return new Select({
            where: orInfo.orQuery,
            from: query.from,
            case: query.case,
            store: query.store,
            meta: query.meta
        }, this.util).execute().then(function (results) {
            _this.mergeWithResults(results);
            _this.isOr = false;
            // free or info memory
            _this.orInfo = null;
        });
    };
    Select.prototype.processOrLogic_ = function () {
        this.isOr = true;
        var where = this.query.where;
        this.orInfo = {
            orQuery: where.or,
            results: []
        };
        this.setLimitAndSkipEvaluationAtEnd_();
        // free or memory
        delete where.or;
    };
    return Select;
}(BaseFetch));

Select.prototype.executeInLogic = executeInLogic;
Select.prototype.executeWhereUndefinedLogic = executeWhereUndefinedLogic;
Select.prototype.executeWhereLogic = executeWhereLogic;
Select.prototype.executeRegexLogic = executeRegexLogic;
Select.prototype.setLimitAndSkipEvaluationAtEnd_ = setLimitAndSkipEvaluationAtEnd;
Select.prototype.setPushResult = setPushResult;
Select.prototype.mergeWithResults = mergeWithResults;
Select.prototype.executeJoinQuery = executeJoinQuery;
Select.prototype.processGroupDistinctAggr = processGroupDistinctAggr;
Select.prototype.processOrderBy = processOrderBy;
Select.prototype.processAggregateQry = processAggregateQry;
Select.prototype.executeAggregateGroupBy = executeAggregateGroupBy;
Select.prototype.processGroupBy = processGroupBy;

;// ./src/worker/executors/count/not_where.ts

var not_where_executeWhereUndefinedLogic = function () {
    var _this = this;
    var countRequest;
    var objectStore = this.objectStore;
    var onSuccess = (function () {
        if (objectStore.count) {
            countRequest = objectStore.count();
            return function (onFinish) {
                return function () {
                    _this.resultCount = countRequest.result;
                    onFinish();
                };
            };
        }
        else {
            var cursor_1;
            countRequest = objectStore.openCursor();
            return function (onFinish) {
                return function (e) {
                    cursor_1 = e.target.result;
                    if (cursor_1) {
                        ++_this.resultCount;
                        cursor_1.continue();
                    }
                    else {
                        onFinish();
                    }
                };
            };
        }
    })();
    return promise(function (res, rej) {
        countRequest.onerror = rej;
        countRequest.onsuccess = onSuccess(res);
    });
};

;// ./src/worker/executors/count/is_where_keys_length_one.ts

function isWhereKeysLengthOne(where) {
    var status = getLength(where) === 1;
    if (status) {
        var key = getObjectFirstKey(where);
        status = getLength(where[key]) === 1;
    }
    return status;
}
;

;// ./src/worker/executors/count/where.ts


var onWhereCount = function (onFinish) {
    var _this = this;
    return function (e) {
        var cursor = e.target.result;
        if (cursor) {
            if (_this.shouldAddValue(cursor)) {
                ++_this.resultCount;
            }
            cursor.continue();
        }
        else {
            onFinish();
        }
    };
};
var where_executeWhereLogic = function (column, value, op) {
    var _this = this;
    value = op ? value[op] : value;
    var cursorRequest;
    var isWhereKeysLengthOneValue = isWhereKeysLengthOne(this.query.where);
    var objectStore = this.objectStore;
    return promise(function (res, rej) {
        if (isWhereKeysLengthOneValue && objectStore.count) {
            cursorRequest = objectStore.index(column).count(_this.util.keyRange(value, op));
            cursorRequest.onsuccess = function () {
                _this.resultCount = cursorRequest.result;
                res();
            };
        }
        else {
            cursorRequest = objectStore.index(column).openCursor(_this.util.keyRange(value, op));
            cursorRequest.onsuccess = onWhereCount.call(_this, res);
        }
        cursorRequest.onerror = rej;
    });
};

;// ./src/worker/executors/count/regex.ts


var regex_executeRegexLogic = function (column, exp) {
    var _this = this;
    var cursorRequest = this.objectStore.index(column).openCursor();
    this.shouldAddValue = function (cursor) {
        return exp.test(cursor.key) &&
            _this.whereChecker.check(cursor.value);
    };
    return promise(function (res, rej) {
        cursorRequest.onerror = rej;
        cursorRequest.onsuccess = onWhereCount.call(_this, res);
    });
};

;// ./src/worker/executors/count/in.ts



var in_executeInLogic = function (column, values) {
    var _this = this;
    var objectStore = this.objectStore;
    var columnStore = objectStore.index(column);
    var isWhereKeysLengthOneValue = isWhereKeysLengthOne(this.query.where);
    var runInLogic = function (value) {
        var keyRange = _this.util.keyRange(value);
        if (isWhereKeysLengthOneValue && objectStore.count) {
            return promise(function (res, rej) {
                var cursorRequest = columnStore.count(keyRange);
                cursorRequest.onsuccess = function (e) {
                    _this.resultCount += e.target.result;
                    res();
                };
                cursorRequest.onerror = rej;
            });
        }
        return promise(function (res, rej) {
            var cursorRequest = columnStore.openCursor(keyRange);
            cursorRequest.onsuccess = onWhereCount.call(_this, res);
            cursorRequest.onerror = rej;
        });
    };
    return promiseAll(values.map(function (val) {
        return runInLogic(val);
    }));
};

;// ./src/worker/executors/count/index.ts
var count_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();









var Count = /** @class */ (function (_super) {
    count_extends(Count, _super);
    function Count(query, util) {
        var _this = _super.call(this) || this;
        _this.resultCount = 0;
        _this.query = query;
        _this.util = util;
        _this.tableName = query.from;
        return _this;
    }
    Count.prototype.execute = function (beforeExecute) {
        var _this = this;
        var queryHelper = new QueryHelper(this.db);
        var query = this.query;
        var err = queryHelper.validate(API.Count, query);
        if (err) {
            return promiseReject(err);
        }
        return beforeExecute().then(function (_) {
            var result;
            try {
                var getDataFromSelect = function () {
                    var selectInstance = new Select(query, _this.util);
                    selectInstance.isTxQuery = _this.isTxQuery;
                    return selectInstance.execute().then(function (results) {
                        _this.resultCount = results.length;
                    });
                };
                _this.initTransaction_();
                if (query.join == null) {
                    if (query.where != null) {
                        if (query.where.or || isArray(query.where)) {
                            result = getDataFromSelect();
                        }
                        else {
                            _this.shouldAddValue = function (cursor) {
                                return _this.whereChecker.check(cursor.value);
                            };
                            result = _this.goToWhereLogic();
                        }
                    }
                    else {
                        result = _this.executeWhereUndefinedLogic();
                    }
                }
                else {
                    result = getDataFromSelect();
                }
            }
            catch (ex) {
                _this.onException(ex);
            }
            return result.then(function (_) {
                return _this.resultCount;
            });
        });
    };
    Count.prototype.initTransaction_ = function () {
        var tableName = this.query.from;
        if (!this.isTxQuery) {
            this.util.createTransaction([tableName], IDB_MODE.ReadOnly);
        }
        this.objectStore = this.util.objectStore(tableName);
    };
    return Count;
}(BaseFetch));

Count.prototype.executeWhereUndefinedLogic = not_where_executeWhereUndefinedLogic;
Count.prototype.executeWhereLogic = where_executeWhereLogic;
Count.prototype.executeRegexLogic = regex_executeRegexLogic;
Count.prototype.executeInLogic = in_executeInLogic;

;// ./src/worker/utils/resolve.ts

var variableFromPath = function (path) {
    var properties = isArray(path) ? path : path.split(".");
    return properties.reduce(function (prev, curr) { return prev && prev[curr]; }, self);
};

;// ./src/worker/executors/update/update_value.ts


var updateValue = function (query, storedValue) {
    var setValue = query.set;
    var mapSet = query.mapSet;
    if (mapSet) {
        var result = mapSet(setValue, storedValue);
        if (result != null) {
            setValue = result;
        }
    }
    for (var key in setValue) {
        var columnSetValue = setValue[key];
        if (getDataType(columnSetValue) !== DATA_TYPE.Object) {
            storedValue[key] = columnSetValue;
        }
        else {
            for (var op in columnSetValue) {
                var value = columnSetValue[op];
                switch (op) {
                    case '+':
                        storedValue[key] += value;
                        break;
                    case '-':
                        storedValue[key] -= value;
                        break;
                    case '*':
                        storedValue[key] *= value;
                        break;
                    case '/':
                        storedValue[key] /= value;
                        break;
                    case '{push}':
                        storedValue[key].push(value);
                        break;
                    default: storedValue[key] = columnSetValue;
                }
                break;
            }
        }
    }
    return storedValue;
};

;// ./src/worker/executors/update/not_where.ts


var update_not_where_executeWhereUndefinedLogic = function () {
    var _this = this;
    var cursorRequest = this.objectStore.openCursor();
    return promise(function (res, rej) {
        cursorRequest.onsuccess = function (e) {
            var cursor = e.target.result;
            if (cursor) {
                try {
                    var cursorUpdateRequest = cursor.update(updateValue(_this.query, cursor.value));
                    cursorUpdateRequest.onsuccess = function () {
                        ++_this.rowAffected;
                        cursor.continue();
                    };
                    cursorUpdateRequest.onerror = rej;
                }
                catch (ex) {
                    rej(ex);
                }
            }
            else {
                res();
            }
        };
        cursorRequest.onerror = rej;
    });
};

;// ./src/worker/executors/update/in.ts


var update_in_executeInLogic = function (column, values) {
    var _this = this;
    var columnStore = this.objectStore.index(column);
    var query = this.query;
    var runInLogic = function (value) {
        return promise(function (res, rej) {
            var cursorRequest = columnStore.openCursor(_this.util.keyRange(value));
            cursorRequest.onsuccess = function (e) {
                var cursor = e.target.result;
                if (cursor) {
                    var value_1 = cursor.value;
                    if (_this.whereChecker.check(value_1)) {
                        try {
                            var cursorUpdateRequest = cursor.update(updateValue(query, value_1));
                            cursorUpdateRequest.onsuccess = function () {
                                ++_this.rowAffected;
                                cursor.continue();
                            };
                            cursorUpdateRequest.onerror = rej;
                        }
                        catch (ex) {
                            rej(ex);
                        }
                    }
                    else {
                        cursor.continue();
                    }
                }
                else {
                    res();
                }
            };
            cursorRequest.onerror = rej;
        });
    };
    return promiseAll(values.map(function (val) {
        return runInLogic(val);
    }));
};

;// ./src/worker/executors/update/regex.ts


var update_regex_executeRegexLogic = function (column, exp) {
    var _this = this;
    var cursor;
    var cursorOpenRequest = this.objectStore.index(column).openCursor();
    this.shouldAddValue = function (cursor) {
        return exp.test(cursor.key) &&
            _this.whereChecker.check(cursor.value);
    };
    return promise(function (res, rej) {
        cursorOpenRequest.onsuccess = function (e) {
            cursor = e.target.result;
            if (cursor) {
                if (_this.shouldAddValue(cursor)) {
                    try {
                        var cursorUpdateRequest = cursor.update(updateValue(_this.query, cursor.value));
                        cursorUpdateRequest.onsuccess = function () {
                            ++_this.rowAffected;
                            cursor.continue();
                        };
                        cursorUpdateRequest.onerror = rej;
                    }
                    catch (ex) {
                        rej(ex);
                    }
                }
                else {
                    cursor.continue();
                }
            }
            else {
                res();
            }
        };
        cursorOpenRequest.onerror = rej;
    });
};

;// ./src/worker/executors/update/where.ts


var update_where_executeWhereLogic = function (column, value, op) {
    var _this = this;
    var query = this.query;
    value = op ? value[op] : value;
    var cursorRequest = this.objectStore.index(column).openCursor(this.util.keyRange(value, op));
    return promise(function (res, rej) {
        cursorRequest.onsuccess = function (e) {
            var cursor = e.target.result;
            if (cursor) {
                if (_this.whereChecker.check(cursor.value)) {
                    try {
                        var cursorUpdateRequest = cursor.update(updateValue(query, cursor.value));
                        cursorUpdateRequest.onsuccess = function () {
                            ++_this.rowAffected;
                            cursor.continue();
                        };
                        cursorUpdateRequest.onerror = rej;
                    }
                    catch (ex) {
                        rej(ex);
                    }
                }
                else {
                    cursor.continue();
                }
            }
            else {
                res();
            }
        };
        cursorRequest.onerror = rej;
    });
};

;// ./src/worker/executors/update/index.ts
var update_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();









var Update = /** @class */ (function (_super) {
    update_extends(Update, _super);
    function Update(query, util) {
        var _this = _super.call(this) || this;
        _this.query = query;
        _this.util = util;
        _this.tableName = query.in;
        var mapSet = query.mapSet;
        if (mapSet) {
            var method = getDataType(mapSet) === DATA_TYPE.String ?
                variableFromPath(mapSet) : mapSet;
            if (!method) {
                throw new LogHelper(ERROR_TYPE.MethodNotExist, mapSet);
            }
            query.mapSet = method;
        }
        return _this;
    }
    Update.prototype.execute = function (beforeExecute) {
        var _this = this;
        var query = this.query;
        try {
            var queryHelper = new QueryHelper(this.db);
            var err = queryHelper.validate(API.Update, query);
            if (err)
                return promiseReject(err);
            return beforeExecute().then(function (_) {
                _this.initTransaction();
                var pResult;
                if (query.where != null) {
                    if (query.where.or || isArray(query.where)) {
                        pResult = _this.executeComplexLogic_();
                    }
                    else {
                        pResult = _this.goToWhereLogic();
                    }
                }
                else {
                    pResult = _this.executeWhereUndefinedLogic();
                }
                return pResult.then(function () {
                    return _this.rowAffected;
                });
            });
        }
        catch (ex) {
            return this.onException(ex);
        }
    };
    Update.prototype.executeComplexLogic_ = function () {
        var _this = this;
        var query = this.query;
        var selectObject = new Select({
            from: query.in,
            where: query.where,
            ignoreCase: query.ignoreCase
        }, this.util);
        selectObject.isTxQuery = this.isTxQuery;
        return selectObject.execute().then(function (results) {
            var _a, _b;
            var key = _this.primaryKey(query.in);
            var inQuery = [];
            results.forEach(function (value) {
                inQuery.push(value[key]);
            });
            results = null;
            var whereQry = (_a = {}, _a[key] = (_b = {}, _b[QUERY_OPTION.In] = inQuery, _b), _a);
            _this.query.where = whereQry;
            _this.initTransaction();
            return _this.goToWhereLogic();
        });
    };
    Update.prototype.initTransaction = function () {
        var tableName = this.query.in;
        if (!this.isTxQuery) {
            this.util.createTransaction([tableName]);
        }
        this.objectStore = this.util.objectStore(tableName);
    };
    return Update;
}(BaseFetch));

Update.prototype.executeWhereUndefinedLogic = update_not_where_executeWhereUndefinedLogic;
Update.prototype.executeWhereLogic = update_where_executeWhereLogic;
Update.prototype.executeRegexLogic = update_regex_executeRegexLogic;
Update.prototype.executeInLogic = update_in_executeInLogic;

;// ./src/worker/intersect/index.ts
var intersect_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var intersect_assign = (undefined && undefined.__assign) || function () {
    intersect_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return intersect_assign.apply(this, arguments);
};


var Intersect = /** @class */ (function (_super) {
    intersect_extends(Intersect, _super);
    function Intersect(intersectQry, util) {
        var _this = _super.call(this) || this;
        _this.query = intersectQry;
        _this.util = util;
        return _this;
    }
    Intersect.prototype.execute = function () {
        var _this = this;
        var intersectQry = this.query;
        var index = 0;
        var hashMap = {};
        var hashMapTemp = {};
        var isQueryForSameTable = true;
        var queries = intersectQry.queries;
        var queryLength = queries.length;
        queries.every(function (qry, i) {
            if (i + 1 < queryLength && qry.from !== queries[i + 1].from) {
                isQueryForSameTable = false;
                return false;
            }
            return true;
        });
        var getHashKey;
        if (isQueryForSameTable) {
            var pKey_1 = this.primaryKey(queries[0].from);
            getHashKey = function (val) {
                return val[pKey_1];
            };
        }
        else {
            getHashKey = function (val) {
                var columnValKey = "";
                for (var key in val) {
                    columnValKey += val[key];
                }
                return columnValKey;
            };
        }
        var select;
        var fetchData = function () {
            if (index < queryLength) {
                select = new Select(queries[index], _this.util);
                return select.execute().then(function (selectResult) {
                    hashMap = {};
                    selectResult.forEach(function (val) {
                        var columnValKey = getHashKey(val);
                        if (index === 0) {
                            hashMapTemp[columnValKey] = val;
                        }
                        else if (hashMapTemp[columnValKey] != null) {
                            hashMap[columnValKey] = val;
                        }
                    });
                    if (index > 0) {
                        hashMapTemp = intersect_assign({}, hashMap);
                    }
                    ++index;
                    return fetchData();
                });
            }
            else {
                var results_1 = [];
                var resultPusher = void 0;
                var skip_1 = intersectQry.skip;
                var limit_1 = intersectQry.limit;
                var onFinished = function () {
                    select['results'] = results_1;
                    Object.assign(select.query, {
                        order: intersectQry.order,
                        join: {}
                    });
                    select.processOrderBy();
                    select.processGroupDistinctAggr();
                    return (select['results']);
                };
                var shouldStopLoop_1 = false;
                var key_1;
                var pushResult_1 = function () {
                    results_1.push(hashMap[key_1]);
                };
                var checkLimitAndPush_1 = function () {
                    if (results_1.length < limit_1) {
                        pushResult_1();
                    }
                    else {
                        shouldStopLoop_1 = true;
                    }
                };
                var skipChecker_1 = function (callBack) {
                    if (skip_1 === 0) {
                        callBack();
                    }
                    else {
                        --skip_1;
                    }
                };
                if (intersectQry.skip && intersectQry.limit) {
                    resultPusher = function () {
                        skipChecker_1(function () {
                            checkLimitAndPush_1();
                        });
                    };
                }
                else if (intersectQry.limit) {
                    resultPusher = checkLimitAndPush_1;
                }
                else if (intersectQry.skip) {
                    resultPusher = function () {
                        skipChecker_1(function () {
                            pushResult_1();
                        });
                    };
                }
                else {
                    resultPusher = function () {
                        pushResult_1();
                    };
                }
                if (limit_1) {
                    for (key_1 in hashMap) {
                        resultPusher(key_1);
                        if (shouldStopLoop_1) {
                            break;
                        }
                    }
                }
                else {
                    for (key_1 in hashMap) {
                        resultPusher(key_1);
                    }
                }
                return onFinished();
            }
        };
        return fetchData();
    };
    return Intersect;
}(Base));


;// ./src/worker/executors/drop_db.ts


var DropDb = /** @class */ (function () {
    function DropDb() {
    }
    DropDb.prototype.execute = function (dbName) {
        return promise(function (res, rej) {
            var dropDbRequest = indexedDB.deleteDatabase(dbName);
            dropDbRequest.onblocked = function () {
                var err = new LogHelper(ERROR_TYPE.DbBlocked);
                return rej(getError(err));
            };
            dropDbRequest.onerror = function (e) {
                return rej(getError(e));
            };
            dropDbRequest.onsuccess = function () {
                res();
            };
        });
    };
    return DropDb;
}());


;// ./src/worker/union/index.ts
var union_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var Union = /** @class */ (function (_super) {
    union_extends(Union, _super);
    function Union(query, util) {
        var _this = _super.call(this) || this;
        _this.query = query;
        _this.util = util;
        return _this;
    }
    Union.prototype.execute = function () {
        var _this = this;
        var query = this.query;
        var index = 0;
        var hashMap = new Map();
        var isQueryForSameTable = true;
        var queryLength = query.length;
        query.every(function (qry, i) {
            if (i + 1 < queryLength && qry.from !== query[i + 1].from) {
                isQueryForSameTable = false;
                return false;
            }
            return true;
        });
        var getHashKey;
        if (isQueryForSameTable) {
            var pKey_1 = this.primaryKey(query[0].from);
            getHashKey = function (val) {
                return val[pKey_1];
            };
        }
        else {
            getHashKey = function (val) {
                var columnValKey = "";
                for (var key in val) {
                    columnValKey += val[key];
                }
                return columnValKey;
            };
        }
        var select;
        var fetchData = function () {
            if (index < query.length) {
                select = new Select(query[index++], _this.util);
                return select.execute().then(function (selectResult) {
                    selectResult.forEach(function (val) {
                        hashMap.set(getHashKey(val), val);
                    });
                    return fetchData();
                });
            }
            else {
                return Array.from(hashMap.values());
            }
        };
        return fetchData();
    };
    return Union;
}(Base));


;// ./src/worker/executors/remove/not_where.ts

var remove_not_where_executeWhereUndefinedLogic = function () {
    var _this = this;
    var cursor;
    var cursorRequest = this.objectStore.openCursor();
    return promise(function (res, rej) {
        cursorRequest.onsuccess = function (e) {
            cursor = e.target.result;
            if (cursor) {
                cursor.delete();
                ++_this.rowAffected;
                cursor.continue();
            }
            else {
                res();
            }
        };
        cursorRequest.onerror = rej;
    });
};

;// ./src/worker/executors/remove/where.ts

var onWhereRemove = function (onFinish) {
    var _this = this;
    return function (e) {
        var cursor = e.target.result;
        if (cursor) {
            if (_this.shouldAddValue(cursor.value)) {
                cursor.delete();
                ++_this.rowAffected;
            }
            cursor.continue();
        }
        else {
            onFinish();
        }
    };
};
var remove_where_executeWhereLogic = function (column, value, op) {
    var _this = this;
    value = op ? value[op] : value;
    var cursorRequest = this.objectStore.index(column).openCursor(this.util.keyRange(value, op));
    return promise(function (res, rej) {
        cursorRequest.onsuccess = onWhereRemove.call(_this, res);
        cursorRequest.onerror = rej;
    });
};

;// ./src/worker/executors/remove/in.ts


var remove_in_executeInLogic = function (column, values) {
    var _this = this;
    var columnIndex = this.objectStore.index(column);
    var runInLogic = function (value) {
        return promise(function (res, rej) {
            var cursorRequest = columnIndex.openCursor(_this.util.keyRange(value));
            cursorRequest.onsuccess = onWhereRemove.call(_this, res);
            cursorRequest.onerror = rej;
        });
    };
    return promiseAll(values.map(function (val) {
        return runInLogic(val);
    }));
};

;// ./src/worker/executors/remove/regex.ts

var remove_regex_executeRegexLogic = function (column, exp) {
    var _this = this;
    var cursor;
    var cursorRequest = this.objectStore.index(column).openCursor();
    this.shouldAddValue = function (cursor) {
        return exp.test(cursor.key) &&
            _this.whereChecker.check(cursor.value);
    };
    return promise(function (res, rej) {
        cursorRequest.onsuccess = function (e) {
            cursor = e.target.result;
            if (cursor) {
                if (_this.shouldAddValue(cursor)) {
                    cursor.delete();
                    ++_this.rowAffected;
                }
                cursor.continue();
            }
            else {
                res();
            }
        };
        cursorRequest.onerror = rej;
    });
};

;// ./src/worker/executors/remove/index.ts
var remove_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();









var Remove = /** @class */ (function (_super) {
    remove_extends(Remove, _super);
    function Remove(query, util) {
        var _this = _super.call(this) || this;
        _this.query = query;
        _this.util = util;
        _this.tableName = query.from;
        return _this;
    }
    Remove.prototype.execute = function (beforeExecute) {
        var _this = this;
        var queryHelper = new QueryHelper(this.db);
        var query = this.query;
        var err = queryHelper.validate(API.Remove, query);
        if (err)
            return promiseReject(err);
        var pResult;
        return beforeExecute().then(function (_) {
            try {
                _this.initTransaction_();
                if (query.where != null) {
                    if (isArray(query.where)) {
                        pResult = _this.processWhereArrayQry();
                    }
                    else {
                        pResult = _this.processWhere_();
                    }
                }
                else {
                    pResult = _this.executeWhereUndefinedLogic();
                }
            }
            catch (ex) {
                return _this.onException(ex);
            }
            return pResult.then(function () {
                return _this.rowAffected;
            });
        });
    };
    Remove.prototype.processWhereArrayQry = function () {
        var _this = this;
        var selectObject = new Select(this.query, this.util);
        selectObject.isTxQuery = this.isTxQuery;
        return selectObject.execute().then(function (results) {
            var _a, _b;
            var keyList = [];
            var pkey = _this.primaryKey(_this.query.from);
            results.forEach(function (item) {
                keyList.push(item[pkey]);
            });
            results = null;
            var whereQry = (_a = {}, _a[pkey] = (_b = {}, _b[QUERY_OPTION.In] = keyList, _b), _a);
            _this.query[QUERY_OPTION.Where] = whereQry;
            return _this.processWhere_();
        });
    };
    Remove.prototype.processWhere_ = function () {
        var _this = this;
        this.shouldAddValue = function (value) {
            return _this.whereChecker.check(value);
        };
        if (this.query.where.or) {
            this.processOrLogic();
        }
        return this.goToWhereLogic().then(function () {
            return _this.onWhereEvaluated();
        });
    };
    Remove.prototype.initTransaction_ = function () {
        if (!this.isTxQuery) {
            this.util.createTransaction([this.query.from]);
        }
        this.objectStore = this.util.objectStore(this.query.from);
    };
    Remove.prototype.onWhereEvaluated = function () {
        if (this.isOr) {
            return this.orQuerySuccess_();
        }
    };
    Remove.prototype.orQuerySuccess_ = function () {
        var _this = this;
        var orQueryFromOrInfo = this._orInfo.OrQuery;
        var key = getObjectFirstKey(orQueryFromOrInfo);
        if (key != null) {
            var where = {};
            where[key] = orQueryFromOrInfo[key];
            delete orQueryFromOrInfo[key];
            this.query.where = where;
            return this.goToWhereLogic().then(function () {
                return _this.onWhereEvaluated();
            });
        }
        else {
            this.isOr = true;
        }
    };
    Remove.prototype.processOrLogic = function () {
        this.isOr = true;
        var where = this.query.where;
        this._orInfo = {
            OrQuery: where.or
        };
        // free or memory
        delete where.or;
    };
    return Remove;
}(BaseFetch));

Remove.prototype.executeInLogic = remove_in_executeInLogic;
Remove.prototype.executeWhereUndefinedLogic = remove_not_where_executeWhereUndefinedLogic;
Remove.prototype.executeWhereLogic = remove_where_executeWhereLogic;
Remove.prototype.executeRegexLogic = remove_regex_executeRegexLogic;

;// ./src/worker/executors/clear/index.ts
var clear_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var Clear = /** @class */ (function (_super) {
    clear_extends(Clear, _super);
    function Clear(tableName, util) {
        var _this = _super.call(this) || this;
        _this.query = tableName;
        _this.util = util;
        _this.tableName = tableName;
        return _this;
    }
    Clear.prototype.execute = function (beforeExecute) {
        var _this = this;
        var tableName = this.query;
        if (!this.isTxQuery) {
            this.util.createTransaction([tableName, MetaHelper.tableName]);
        }
        return beforeExecute().then(function (_) {
            var clearRequest = _this.util.objectStore(tableName).clear();
            try {
                return promise(function (res, rej) {
                    clearRequest.onsuccess = function (e) {
                        var currentTable = _this.table(tableName);
                        for (var columnName in currentTable.autoIncColumnValue) {
                            currentTable.autoIncColumnValue[columnName] = 0;
                        }
                        MetaHelper.set(MetaHelper.dbSchema, _this.util.db, _this.util).then(res).catch(rej);
                    };
                    clearRequest.onerror = rej;
                });
            }
            catch (ex) {
                return _this.onException(ex);
            }
        });
    };
    return Clear;
}(Base));


;// ./src/worker/executors/transaction/index.ts
var transaction_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();









var Transaction = /** @class */ (function (_super) {
    transaction_extends(Transaction, _super);
    function Transaction(qry, util) {
        var _this = _super.call(this) || this;
        _this.results = {};
        _this.reqQueue = [];
        _this.isQueryExecuting = false;
        _this.isTxStarted_ = false;
        _this.query = qry;
        _this.util = util;
        return _this;
    }
    Transaction.prototype.execute = function (cb) {
        var _this = this;
        this.beforeExecute = cb;
        var err = this.validate();
        if (err)
            return promiseReject(err);
        this.startExecution_();
        return promise(function (res, rej) {
            _this.onSuccess = res;
            _this.onError = rej;
        }).then(function (result) {
            _this.beforeExecute = null;
            _this.log("transaction finished");
            return result;
        });
    };
    Transaction.prototype.validate = function () {
        var query = this.query;
        var notExistingTable = this.notExistingTable_(query.tables);
        if (notExistingTable) {
            return new LogHelper(ERROR_TYPE.TableNotExist, { tableName: notExistingTable });
        }
        var methodName = query.method;
        var txLogic = variableFromPath(methodName);
        if (!txLogic) {
            return new LogHelper(ERROR_TYPE.MethodNotExist, methodName);
        }
    };
    Transaction.prototype.startExecution_ = function () {
        var _this = this;
        var query = this.query;
        var createPusher = function (api) {
            return function (qry) {
                return _this.pushReq_({
                    name: api,
                    query: qry
                });
            };
        };
        var setResult = function (key, value) {
            _this.results[key] = value;
        };
        var getResult = function (key) {
            return _this.results[key];
        };
        var abort = function (msg) {
            _this.abortTx_(msg);
        };
        var start = function () {
            _this.startTx_();
        };
        var methodName = query.method;
        var txLogic = variableFromPath(methodName);
        this.log("transaction query started");
        return txLogic.call(this, {
            data: query.data,
            insert: createPusher(API.Insert),
            select: createPusher(API.Select),
            update: createPusher(API.Update),
            remove: createPusher(API.Remove),
            count: createPusher(API.Count),
            setResult: setResult,
            getResult: getResult, abort: abort,
            start: start
        });
    };
    Transaction.prototype.log = function (message) {
        this.util.logger.log(message);
    };
    Transaction.prototype.startTx_ = function () {
        var _this = this;
        try {
            this.isTxStarted_ = true;
            var tableNames = this.query.tables;
            tableNames = tableNames.concat(MetaHelper.tableName);
            this.util.createTransaction(tableNames).then(function (_) {
                _this.onSuccess(_this.results);
            }).catch(function (err) {
                _this.onError(err);
            });
            return this.processExecutionOfQry_();
        }
        catch (ex) {
            this.onError(this.onException(ex));
        }
    };
    Transaction.prototype.onReqFinished_ = function (result) {
        var finisehdRequest = this.reqQueue.shift();
        this.log("finished request : ".concat(finisehdRequest.name, " "));
        if (finisehdRequest) {
            if (result.error) {
                this.abortTx_("automatic abort of transaction due to error occured");
                this.log("transaction aborted due to error occured");
                this.onError(result.error);
            }
            else {
                this.isQueryExecuting = false;
                if (finisehdRequest.onSuccess) {
                    finisehdRequest.onSuccess(result);
                }
                this.processExecutionOfQry_();
            }
        }
    };
    Transaction.prototype.abortTx_ = function (msg) {
        this.reqQueue = [];
        this.util.abortTransaction();
        this.log("transaction aborted. Msg : ".concat(msg));
    };
    Transaction.prototype.executeRequest_ = function (request) {
        var _this = this;
        this.isQueryExecuting = true;
        var requestObj;
        this.log("executing request : ".concat(request.name, " "));
        var onReqFinished = this.onReqFinished_.bind(this);
        var query = request.query;
        var callAPI = function (api) {
            requestObj = new api(query, _this.util);
        };
        switch (request.name) {
            case API.Select:
                callAPI(Select);
                break;
            case API.Insert:
                callAPI(Insert);
                break;
            case API.Update:
                callAPI(Update);
                break;
            case API.Remove:
                callAPI(Remove);
                break;
            case API.Count:
                callAPI(Count);
                break;
        }
        requestObj.isTxQuery = true;
        requestObj.execute(this.beforeExecute).then(onReqFinished).catch(function (err) {
            var result = {
                error: err
            };
            onReqFinished(result);
        });
    };
    Transaction.prototype.pushReq_ = function (request) {
        var promiseObj = promise(function (resolve, reject) {
            request.onSuccess = function (result) {
                resolve(result);
            };
            request.onError = function (error) {
                reject(error);
            };
        });
        this.reqQueue.push(request);
        if (this.isTxStarted_ === true) {
            this.processExecutionOfQry_();
        }
        this.log("request pushed : ".concat(request.name));
        return promiseObj;
    };
    Transaction.prototype.processExecutionOfQry_ = function () {
        if (this.isQueryExecuting === false) {
            if (this.reqQueue.length > 0) {
                this.executeRequest_(this.reqQueue[0]);
            }
        }
    };
    Transaction.prototype.notExistingTable_ = function (tables) {
        var _this = this;
        var invalidTable = null;
        tables.every(function (tableName) {
            var table = _this.table(tableName);
            if (table == null) {
                invalidTable = tableName;
                return false;
            }
            return true;
        });
        return invalidTable;
    };
    return Transaction;
}(Base));


;// ./src/worker/utils/db_schema.ts
var userDbSchema = function (db) {
    if (db == null) {
        throw new Error("userDbSchema db is null");
    }
    var database = {
        name: db.name,
        version: db.version,
        tables: []
    };
    db.tables.forEach(function (table) {
        var tableAsObj = {
            name: table.name,
            columns: {}
        };
        table.columns.forEach(function (column) {
            tableAsObj.columns[column.name] = column;
        });
        database.tables.push(tableAsObj);
    });
    return database;
};

;// ./src/worker/query_manager.ts
















var QueryManager = /** @class */ (function () {
    function QueryManager(fn) {
        this.middlewares = [];
        this.util = new IDBUtil();
        this.onQryFinished = IS_WORKER ? function (result) {
            self.postMessage(result);
        } : fn;
    }
    Object.defineProperty(QueryManager.prototype, "db", {
        get: function () {
            return this.util.db;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(QueryManager.prototype, "logger", {
        get: function () {
            return this.util.logger;
        },
        enumerable: false,
        configurable: true
    });
    QueryManager.prototype.executeMiddleware_ = function (request) {
        var _this = this;
        var lastIndex = getLength(this.middlewares) - 1;
        if (lastIndex < 0) {
            return promiseResolve();
        }
        var middlewareContext = {};
        var db = this.db;
        Object.defineProperty(middlewareContext, 'database', {
            get: function () {
                return userDbSchema(db);
            }
        });
        return promise(function (res) {
            var index = 0;
            var callNextMiddleware = function () {
                if (index <= lastIndex) {
                    var promiseResult = variableFromPath(_this.middlewares[index++])(request, middlewareContext);
                    if (!promiseResult || !promiseResult.then) {
                        promiseResult = Promise.resolve(promiseResult);
                    }
                    promiseResult.then(function (_) {
                        callNextMiddleware();
                    });
                }
                else {
                    res();
                }
            };
            callNextMiddleware();
        });
    };
    QueryManager.prototype.executeQuery = function (request, cb) {
        var queryResult;
        var query = request.query;
        var ctx = this;
        var idbutil = ctx.util;
        var callAPI = function (api, beforeExecute) {
            queryResult = new api(query, idbutil).
                execute(beforeExecute);
        };
        switch (request.name) {
            case API.OpenDb:
                cb();
                queryResult = ctx.openDb(query);
                break;
            case API.InitDb:
                cb();
                queryResult = ctx.initDb(query);
                break;
            case API.CloseDb:
                cb();
                queryResult = ctx.closeDb();
                break;
            case API.Insert:
                callAPI(Insert, cb);
                break;
            case API.Select:
                callAPI(Select, cb);
                break;
            case API.Count:
                callAPI(Count, cb);
                break;
            case API.Update:
                callAPI(Update, cb);
                break;
            case API.Intersect:
                cb();
                callAPI(Intersect);
                break;
            case API.DropDb:
                cb();
                queryResult = ctx.dropDb();
                break;
            case API.Terminate:
                cb();
                queryResult = ctx.terminate();
                break;
            case API.Union:
                cb();
                callAPI(Union);
                break;
            case API.Remove:
                callAPI(Remove, cb);
                break;
            case API.Clear:
                callAPI(Clear, cb);
                break;
            case API.Transaction:
                callAPI(Transaction, cb);
                break;
            case API.MapGet:
                cb();
                queryResult = MetaHelper.get(query, idbutil);
                break;
            case API.MapSet:
                cb();
                queryResult = MetaHelper.set(query.key, query.value, idbutil);
                break;
            case API.MapHas:
                cb();
                queryResult = MetaHelper.has(query, idbutil);
                break;
            case API.MapDelete:
                cb();
                queryResult = MetaHelper.remove(query, idbutil);
                break;
            case API.ImportScripts:
                cb();
                queryResult = ctx.importScripts_(request);
                break;
            case API.ChangeLogStatus:
                cb();
                ctx.logger.status = query;
                queryResult = Promise.resolve();
                break;
            case API.Middleware:
                cb();
                var value = variableFromPath(query);
                if (!value) {
                    return promiseReject(new LogHelper(ERROR_TYPE.InvalidMiddleware, query));
                }
                ctx.middlewares.push(query);
                return promiseResolve();
            default:
                if (true) {
                    console.error('The Api:-' + request.name + ' does not support.');
                }
                queryResult = promiseResolve();
        }
        ctx.logger.log("Executing query ".concat(request.name, " in web worker"));
        return queryResult;
    };
    QueryManager.prototype.callMiddleware_ = function (middlewares, result) {
        return promise(function (res) {
            var index = 0;
            var lastIndex = getLength(middlewares) - 1;
            var callNextMiddleware = function () {
                if (index <= lastIndex) {
                    var promiseResult = middlewares[index++](result);
                    if (!(promiseResult instanceof Promise)) {
                        promiseResult = promiseResolve(promiseResult);
                    }
                    promiseResult.then(function (modifiedResult) {
                        result = modifiedResult;
                        callNextMiddleware();
                    });
                }
                else {
                    res(result);
                }
            };
            callNextMiddleware();
        });
    };
    QueryManager.prototype.run = function (request) {
        var _this = this;
        var onResultCallback = [];
        var beforeExecuteCallback = [];
        request.onResult = function (cb) {
            onResultCallback.push(function (result) {
                return cb(result);
            });
        };
        request.beforeExecute = function (cb) {
            beforeExecuteCallback.push(function (result) {
                return cb(result);
            });
        };
        this.executeMiddleware_(request).then(function (_) {
            return _this.executeQuery(request, function () {
                return _this.callMiddleware_(beforeExecuteCallback);
            }).then(function (result) {
                return _this.callMiddleware_(onResultCallback, result).then(function (modifiedResult) {
                    _this.returnResult_({
                        result: modifiedResult
                    });
                });
            });
        }).catch(function (ex) {
            onResultCallback = [];
            var err = getError(ex);
            var result = {
                error: err
            };
            _this.returnResult_(result);
        });
    };
    QueryManager.prototype.importScripts_ = function (request) {
        return promise(function (res, rej) {
            try {
                importScripts.apply(void 0, request.query);
                res();
            }
            catch (e) {
                var err = new LogHelper(ERROR_TYPE.ImportScriptsFailed, e.message);
                rej(err);
            }
        });
    };
    QueryManager.prototype.returnResult_ = function (result) {
        this.logger.log("Query finished inside web worker");
        if (this.util) {
            this.util.emptyTx();
        }
        this.onQryFinished(result);
    };
    QueryManager.prototype.dropDb = function () {
        var dbName = this.db.name;
        return this.terminate().then(function () {
            return new DropDb().execute(dbName);
        });
    };
    QueryManager.prototype.closeDb = function () {
        return this.util.close();
    };
    QueryManager.prototype.terminate = function () {
        var _this = this;
        return this.closeDb().then(function () {
            _this.util.db = null;
        });
    };
    QueryManager.prototype.openDb = function (query) {
        var _this = this;
        return this.closeDb().then(function (_) {
            var pResult;
            if (_this.db && query.name === _this.db.name) {
                pResult = _this.initDb();
            }
            else {
                pResult = _this.initDb({
                    name: query.name,
                    tables: [],
                    version: query.version
                });
            }
            return pResult.then(function () {
                return _this.db;
            });
        });
    };
    QueryManager.prototype.initDb = function (dataBase) {
        var _this = this;
        if (!IS_IDB_SUPPORTED) {
            return promiseReject(new LogHelper(ERROR_TYPE.IndexedDbNotSupported));
        }
        var dbMeta = dataBase ? new DbMeta(dataBase) : this.db;
        if (dbMeta == null) {
            throw new Error("dbMeta is null");
        }
        this.util = new IDBUtil();
        return this.util.initDb(dbMeta).then(function (dbInfo) {
            return MetaHelper.get(MetaHelper.dbSchema, _this.util).then(function (dbFromCache) {
                if (dbInfo.isCreated) {
                    if (dbFromCache) {
                        dbFromCache.tables.forEach(function (tableFromCache) {
                            var targetTable = dbMeta.tables.find(function (q) { return q.name === tableFromCache.name; });
                            if (targetTable) {
                                for (var key in tableFromCache.autoIncColumnValue) {
                                    var savedAutoIncrementValue = tableFromCache.autoIncColumnValue[key];
                                    if (savedAutoIncrementValue) {
                                        targetTable.autoIncColumnValue[key] = savedAutoIncrementValue;
                                    }
                                }
                            }
                        });
                    }
                    _this.util.db = dbMeta;
                    dbInfo.database = userDbSchema(_this.db);
                    return MetaHelper.set(MetaHelper.dbSchema, dbMeta, _this.util).then(function () {
                        return dbInfo;
                    });
                }
                else {
                    return MetaHelper.get(MetaHelper.dbSchema, _this.util).then(function (value) {
                        _this.util.db = value;
                        dbInfo.database = userDbSchema(_this.db);
                        return dbInfo;
                    });
                }
            });
        });
    };
    return QueryManager;
}());


;// ./src/worker/index.ts



if (IS_WORKER) {
    var manager_1 = new QueryManager();
    self.onmessage = function (e) {
        manager_1.run(e.data);
    };
}

JsStoreWorker = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=jsstore.worker.js.map