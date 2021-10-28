"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CacheFixture = void 0;
let assert = require('chai').assert;
let async = require('async');
let KEY1 = "key1";
let KEY2 = "key2";
let KEY3 = "key3";
let KEY4 = "key4";
let KEY5 = "key5";
let KEY6 = "key6";
let VALUE1 = "value1";
let VALUE2 = { val: "value2" };
let VALUE3 = new Date();
let VALUE4 = [1, 2, 3, 4];
let VALUE5 = 12345;
let VALUE6 = null;
class CacheFixture {
    constructor(cache) {
        this._cache = null;
        this._cache = cache;
    }
    testStoreAndRetrieve(done) {
        async.series([
            (callback) => {
                this._cache.store(null, KEY1, VALUE1, 5000, (err) => {
                    assert.isNull(err || null);
                    callback();
                });
            },
            (callback) => {
                this._cache.store(null, KEY2, VALUE2, 5000, (err) => {
                    assert.isNull(err || null);
                    callback();
                });
            },
            (callback) => {
                this._cache.store(null, KEY3, VALUE3, 5000, (err) => {
                    assert.isNull(err || null);
                    callback();
                });
            },
            (callback) => {
                this._cache.store(null, KEY4, VALUE4, 5000, (err) => {
                    assert.isNull(err || null);
                    callback();
                });
            },
            (callback) => {
                this._cache.store(null, KEY5, VALUE5, 5000, (err) => {
                    assert.isNull(err || null);
                    callback();
                });
            },
            (callback) => {
                this._cache.store(null, KEY6, VALUE6, 5000, (err) => {
                    assert.isNull(err || null);
                    callback();
                });
            },
            (callback) => {
                setTimeout(() => {
                    callback();
                }, 500);
            },
            (callback) => {
                this._cache.retrieve(null, KEY1, (err, val) => {
                    assert.isNull(err || null);
                    assert.isNotNull(val);
                    assert.equal(VALUE1, val);
                    callback();
                });
            },
            (callback) => {
                this._cache.retrieve(null, KEY2, (err, val) => {
                    assert.isNull(err || null);
                    assert.isNotNull(val);
                    assert.equal(VALUE2.val, val.val);
                    callback();
                });
            },
            (callback) => {
                this._cache.retrieve(null, KEY3, (err, val) => {
                    assert.isNull(err || null);
                    assert.isNotNull(val);
                    assert.equal(VALUE3.toISOString(), val);
                    callback();
                });
            },
            (callback) => {
                this._cache.retrieve(null, KEY4, (err, val) => {
                    assert.isNull(err || null);
                    assert.isNotNull(val);
                    assert.lengthOf(val, 4);
                    assert.equal(VALUE4[0], val[0]);
                    callback();
                });
            },
            (callback) => {
                this._cache.retrieve(null, KEY5, (err, val) => {
                    assert.isNull(err || null);
                    assert.isNotNull(val);
                    assert.equal(VALUE5, val);
                    callback();
                });
            },
            (callback) => {
                this._cache.retrieve(null, KEY6, (err, val) => {
                    assert.isNull(err || null);
                    assert.isNull(val);
                    callback();
                });
            }
        ], done);
    }
    testRetrieveExpired(done) {
        async.series([
            (callback) => {
                this._cache.store(null, KEY1, VALUE1, 1000, (err) => {
                    assert.isNull(err || null);
                    callback();
                });
            },
            (callback) => {
                setTimeout(() => {
                    callback();
                }, 1500);
            },
            (callback) => {
                this._cache.retrieve(null, KEY1, (err, val) => {
                    assert.isNull(err || null);
                    assert.isNull(val || null);
                    callback();
                });
            }
        ], done);
    }
    testRemove(done) {
        async.series([
            (callback) => {
                this._cache.store(null, KEY1, VALUE1, 1000, (err) => {
                    assert.isNull(err || null);
                    callback();
                });
            },
            (callback) => {
                this._cache.remove(null, KEY1, (err) => {
                    assert.isNull(err || null);
                    callback();
                });
            },
            (callback) => {
                this._cache.retrieve(null, KEY1, (err, val) => {
                    assert.isNull(err || null);
                    assert.isNull(val || null);
                    callback();
                });
            }
        ], done);
    }
}
exports.CacheFixture = CacheFixture;
//# sourceMappingURL=CacheFixture.js.map