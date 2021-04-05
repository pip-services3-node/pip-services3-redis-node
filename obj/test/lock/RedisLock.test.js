"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const RedisLock_1 = require("../../src/lock/RedisLock");
const LockFixture_1 = require("../fixtures/LockFixture");
suite('RedisLock', () => {
    var _lock;
    var _fixture;
    setup((done) => {
        let host = process.env['REDIS_SERVICE_HOST'] || 'localhost';
        let port = process.env['REDIS_SERVICE_PORT'] || 6379;
        _lock = new RedisLock_1.RedisLock();
        let config = pip_services3_commons_node_1.ConfigParams.fromTuples('connection.host', host, 'connection.port', port);
        _lock.configure(config);
        _fixture = new LockFixture_1.LockFixture(_lock);
        _lock.open(null, done);
    });
    teardown((done) => {
        _lock.close(null, done);
    });
    test('Try Acquire Lock', (done) => {
        _fixture.testTryAcquireLock(done);
    });
    test('Acquire Lock', (done) => {
        _fixture.testAcquireLock(done);
    });
    test('Release Lock', (done) => {
        _fixture.testReleaseLock(done);
    });
});
//# sourceMappingURL=RedisLock.test.js.map