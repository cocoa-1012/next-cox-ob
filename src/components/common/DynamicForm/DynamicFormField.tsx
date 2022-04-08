import React, { FC } from "react";
import { Control } from "react-hook-form";
import { FormFieldDefinition } from ".";
import InputField from "./InputField";
import ToggleButtonField from "./ToggleButtonField";

export interface DynamicFormFieldProps {
  fieldDefinition: FormFieldDefinition;
  control: Control;
  onSubmit: () => {};
}

const DynamicFormField: FC<DynamicFormFieldProps> = ({
  fieldDefinition,
  control,
  onSubmit,
}) => {
  if (fieldDefinition.component === "TOGGLE_BUTTON") {
    return (
      <ToggleButtonField
        control={control}
        fieldDefinition={fieldDefinition}
        onSubmit={onSubmit}
      />
    );
  }
  return <InputField control={control} fieldDefinition={fieldDefinition} />;
};

export default DynamicFormField;
