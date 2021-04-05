"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let process = require('process');
let assert = require('chai').assert;
let async = require('async');
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const RedisCache_1 = require("../../src/cache/RedisCache");
const CacheFixture_1 = require("../fixtures/CacheFixture");
suite('RedisCache', () => {
    let _cache;
    let _fixture;
    setup((done) => {
        let host = process.env['REDIS_SERVICE_HOST'] || 'localhost';
        let port = process.env['REDIS_SERVICE_PORT'] || 6379;
        _cache = new RedisCache_1.RedisCache();
        let config = pip_services3_commons_node_1.ConfigParams.fromTuples('connection.host', host, 'connection.port', port);
        _cache.configure(config);
        _fixture = new CacheFixture_1.CacheFixture(_cache);
        _cache.open(null, done);
    });
    teardown((done) => {
        _cache.close(null, done);
    });
    test('Store and Retrieve', (done) => {
        _fixture.testStoreAndRetrieve(done);
    });
    test('Retrieve Expired', (done) => {
        _fixture.testRetrieveExpired(done);
    });
    test('Remove', (done) => {
        _fixture.testRemove(done);
    });
});
//# sourceMappingURL=RedisCache.test.js.map