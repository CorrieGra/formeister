import express, { Express } from "express";

import config from './environments/dev/config';

class FMServerInstance {
    private instance: Express;

    constructor() {
        this.instance = express();
    }

    start({
        cb
    }: {
        cb: () => unknown;
    }): void {
        this
            .instance
            .listen(config.port, cb);
    }
}

export {
    FMServerInstance,
}