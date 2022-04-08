import { FC } from "react";
import { Form } from "react-bootstrap";
import { Control, Controller } from "react-hook-form";
import useId from "../../../lib/hooks/useId";
import { FormFieldDefinition } from "./interfaces";

export interface InputFieldProps {
  control: Control;
  fieldDefinition: FormFieldDefinition;
}

const InputField: FC<InputFieldProps> = ({ control, fieldDefinition }) => {
  const id = useId("input");

  return (
    <Form.Group className="mb-3" controlId={id}>
      <Form.Label>{fieldDefinition.label}</Form.Label>

      <Controller
        control={control}
        name={fieldDefinition.name}
        rules={fieldDefinition.rules}
        defaultValue={fieldDefinition.defaultValue}
        render={({
          field,
          fieldState: { isTouched, invalid },
          formState: { isSubmitted },
        }) => (
          <Form.Control
            {...field}
            type={fieldDefinition.type}
            placeholder={fieldDefinition.placeholder}
            isInvalid={(isTouched || isSubmitted) && invalid}
          />
        )}
      />
      <Form.Control.Feedback type="invalid">
        {fieldDefinition.errorMessage}
      </Form.Control.Feedback>
    </Form.Group>
  );
};

export default InputField;
