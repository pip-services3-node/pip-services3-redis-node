"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CacheFixture = void 0;
let assert = require('chai').assert;
let async = require('async');
let KEY1 = "key1";
let KEY2 = "key2";
let VALUE1 = "value1";
let VALUE2 = "value2";
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
                    assert.equal(VALUE2, val);
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