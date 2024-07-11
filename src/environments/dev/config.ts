import Joi from 'joi';
import moment from 'moment';
import dotenv from 'dotenv';

import { Config } from '@utils/types/core';

dotenv.config();

const config_schema = Joi.object({
    FM_PORT: Joi.number().default(8080).required(),
    FM_ENVIRONMENT: Joi.string().valid('development', 'production', 'test').default('development'),
    FM_DATABASE_URL: Joi.string().uri().required(),
}).unknown();

const { error, value: env_config } = config_schema.validate(process.env);

if (error) {
    // TODO: Create custom validation error
    throw new Error(`[❌ - FM_VAL][${moment.utc()}]: Environment configuration validation failed`);
}

const config: Config = {
    port: env_config.FM_PORT,
    environment: env_config.FM_ENVIRONMENT,
    databaseUrl: env_config.FM_DATABASE_URL,
};

export default config;