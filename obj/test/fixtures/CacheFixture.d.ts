import { ICache } from 'pip-services3-components-node';
export declare class CacheFixture {
    private _cache;
    constructor(cache: ICache);
    testStoreAndRetrieve(done: any): void;
    testRetrieveExpired(done: any): void;
    testRemove(done: any): void;
}
