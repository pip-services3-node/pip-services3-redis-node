import { ILock } from 'pip-services3-components-node';
export declare class LockFixture {
    private _lock;
    constructor(lock: ILock);
    testTryAcquireLock(done: (err: any) => void): void;
    testAcquireLock(done: (err: any) => void): void;
    testReleaseLock(done: (err: any) => void): void;
}
