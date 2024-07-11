import dotenv from 'dotenv';

import { FMServerInstance } from './server';
import config from './environments/dev/config';

dotenv.config();

(() => {
    try {
        const server = new FMServerInstance();
        server.start({ cb: () => { console.log(`[✅ - FM_GEN]: Running on port: ${config.port}`) } });
    } catch (error) {
        console.error(error);   
    }
})();