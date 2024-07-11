import Joi from 'joi';
import moment from 'moment';
import dotenv from 'dotenv';

dotenv.config();

const config_schema = Joi.object({
    FM_PORT: Joi.number().default(8080).required(),
    FM_ENVIRONMENT: Joi.string().valid('development', 'production', 'test').default('development'),
    FM_DATABASE_URL: Joi.string().uri().required(),
}).unknown();

const { error, value: env_config } = config_schema.validate(process.env);

if (error) {
    // TODO: Create custom validation error
    throw new Error(`[❌][VALIDATION][${moment.utc()}]: Environment configuration validation failed`);
}

const config = {
    port: 8080,
    environment: 'development',
    databaseUrl: ''
};

export default config;