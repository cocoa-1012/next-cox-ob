import React, { FC } from "react";
import { Control, Controller } from "react-hook-form";
import { ToggleButton, ToggleButtonGroup } from "../form/ToggleButton";
import { FormFieldDefinition } from "./interfaces";

export interface ToggleButtonFieldProps {
  fieldDefinition: FormFieldDefinition;
  control: Control;
  onSubmit: any;
}

const ToggleButtonField: FC<ToggleButtonFieldProps> = ({
  fieldDefinition,
  control,
  onSubmit,
}: ToggleButtonFieldProps) => {
  return (
    <Controller
      control={control}
      name={fieldDefinition.name}
      rules={fieldDefinition.rules}
      defaultValue={fieldDefinition.defaultValue}
      render={({ field }) => (
        <ToggleButtonGroup {...field}>
          {fieldDefinition.options?.map((option, index) => (
            <ToggleButton
              key={index}
              value={option.value}
              onClick={() => {
                setTimeout(() => onSubmit());
              }}
            >
              {option.label}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
      )}
    ></Controller>
  );
};

export default ToggleButtonField;
