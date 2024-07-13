import Joi from "joi";

const ComponentSchema = Joi.object({
  id: Joi.string().uuid().required(),
  type: Joi.string().required(),
  key: Joi.string().required(),
  original_key: Joi.string().required(),
  label: Joi.string().required(),
  placeholder: Joi.string(),
  input: Joi.boolean().required(),
  tooltip: Joi.string(),
  created_at: Joi.string().isoDate().required(),
  updated_at: Joi.string().isoDate().required(),
});

const TextFieldSchema = Joi.object().schema(ComponentSchema);

const TEMPLATE_PATTERN = new RegExp("<\w*>\{\{.*\}\}<\/\w*>");

const SelectSchema = Joi.object({
  data: Joi.array().items(Joi.object()).default([]),
  data_source: Joi.string().dataUri(),
  template: Joi.string().pattern(TEMPLATE_PATTERN).required(),
  multiple: Joi.boolean().required().default(false),
}).schema(ComponentSchema);

const CheckboxSchema = Joi.object().schema(ComponentSchema);

const ComponentSchemas = {
  TextFieldSchema,
  SelectSchema,
  CheckboxSchema,
};

export default ComponentSchemas;
