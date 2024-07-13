type FormComponent = {
    id: string;
    type: string;
    key: string;
    original_key: string;
    label: string;
    placeholder: string;
    input: boolean;
    tooltip?: string;
    created_at: string;
    updated_at: string;
};

type TextFieldFormComponent = FormComponent & {};
type CheckboxFormComponent = FormComponent & {};
type SelectFormComponent = FormComponent & {
    data: Array<Record<string, unknown>>;
    data_source: string;
    template: string;
    multiple: boolean;
};

export {
    FormComponent,
    TextFieldFormComponent,
    SelectFormComponent,
    CheckboxFormComponent
};