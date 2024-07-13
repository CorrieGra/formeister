import Joi from 'joi';

import { PanelSchema } from './panel';

const FormSchema = Joi.object({
    id: Joi.string().uuid().required(),
    title: Joi.string().required(),
    description: Joi.string().required(),
    key: Joi.string().required(),
    original_key: Joi.string().required(),
    panel: Joi.object().schema(PanelSchema),
    is_archived: Joi.boolean().required().default(false),
    created_at: Joi.string().isoDate().required(),
    updated_at: Joi.string().isoDate().required(),
});

export {
    FormSchema,
};