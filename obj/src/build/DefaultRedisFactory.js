"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultRedisFactory = void 0;
/** @module build */
const pip_services3_components_node_1 = require("pip-services3-components-node");
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const RedisCache_1 = require("../cache/RedisCache");
const RedisLock_1 = require("../lock/RedisLock");
/**
 * Creates Redis components by their descriptors.
 *
 * @see [[RedisCache]]
 * @see [[RedisLock]]
 */
class DefaultRedisFactory extends pip_services3_components_node_1.Factory {
    /**
     * Create a new instance of the factory.
     */
    constructor() {
        super();
        this.registerAsType(DefaultRedisFactory.RedisCacheDescriptor, RedisCache_1.RedisCache);
        this.registerAsType(DefaultRedisFactory.RedisLockDescriptor, RedisLock_1.RedisLock);
    }
}
exports.DefaultRedisFactory = DefaultRedisFactory;
DefaultRedisFactory.Descriptor = new pip_services3_commons_node_1.Descriptor("pip-services", "factory", "redis", "default", "1.0");
DefaultRedisFactory.RedisCacheDescriptor = new pip_services3_commons_node_1.Descriptor("pip-services", "cache", "redis", "*", "1.0");
DefaultRedisFactory.RedisLockDescriptor = new pip_services3_commons_node_1.Descriptor("pip-services", "lock", "redis", "*", "1.0");
//# sourceMappingURL=DefaultRedisFactory.js.map