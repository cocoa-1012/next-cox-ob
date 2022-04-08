import { useForm } from "react-hook-form";
import Button from "react-bootstrap/Button";
import { FormDefinition } from "./interfaces";
import { FC } from "react";
import DynamicFormSection from "./DynamicFormSection";

export interface DynamicFormProps {
  formDefinition: FormDefinition;
  onSubmit: () => {};
  defaultValues: object;
}

const DynamicForm: FC<DynamicFormProps> = ({
  formDefinition,
  onSubmit,
  defaultValues,
}) => {
  const form = useForm({ mode: "onBlur", defaultValues });
  const handleSubmit = form.handleSubmit(onSubmit);
  const sections = formDefinition.sections.filter((section) =>
    section.condition ? section.condition(defaultValues) : true
  );

  return (
    <form noValidate onSubmit={handleSubmit}>
      {formDefinition.title && <h2 className="mb-1">{formDefinition.title}</h2>}
      {formDefinition.description && (
        <p className="mb-4">{formDefinition.description}</p>
      )}
      <div className="row">
        <div className="col">
          {sections.map((section, index) => (
            <DynamicFormSection
              key={index}
              defaultValues={defaultValues}
              handleSubmit={handleSubmit}
              section={section}
              form={form}
            />
          ))}
        </div>
      </div>
      {formDefinition.submit && (
        <div className="row">
          <div className="col-lg-6">
            <Button
              className="mt-3 w-100"
              variant="outline-primary"
              type="submit"
            >
              {formDefinition.submit}
              <i className="fa-solid fa-arrow-right ms-3"></i>
            </Button>
          </div>
        </div>
      )}
    </form>
  );
};

export default DynamicForm;
export * from "./interfaces";
