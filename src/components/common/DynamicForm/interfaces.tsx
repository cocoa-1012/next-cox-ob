export type InputType = "TOGGLE_BUTTON" | "INPUT";

export interface FormDefinition {
  steps?: number;
  key: string;
  goto: string | ((value: any) => string);
  sections: FormSectionDefinition[];
  title?: string;
  description?: string;
  submit?: string;
}

export interface FormSectionDefinition {
  title?: string;
  fields: FormFieldDefinition[];
  collapsable?: boolean;
  condition?: FormCondition<any>;
}

export type FormCondition<T> = (value: T) => boolean;

export interface FormFieldDefinition {
  component: InputType;
  name: string;
  type?: string;
  label?: string;
  placeholder?: string;
  rules?: any;
  errorMessage?: string;
  options?: FormFieldOption[];
  defaultValue?: any;
  condition?: (value: any) => boolean;
}

export interface FormFieldOption {
  value: any;
  label: string;
}
