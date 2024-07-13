import Joi from 'joi';

import ComponentSchema from './components';

const PanelSchema = Joi.object({
    id: Joi.string().uuid().required(),
    title: Joi.string().required(),
    description: Joi.string().required(),
    key: Joi.string().required(),
    original_key: Joi.string().required(),
    components: Joi.object().schema(ComponentSchema),
    created_at: Joi.string().isoDate().required(),
    updated_at: Joi.string().isoDate().required(),
});

export {
    PanelSchema,
};