import { FC } from "react";
import AccordionLight from "../AccordionLight";
import DynamicFormField from "./DynamicFormField";
import { FormSectionDefinition } from "./interfaces";

export interface DynamicFormSectionProps {
  section: FormSectionDefinition;
  form: any;
  defaultValues: object;
  handleSubmit: () => {};
}

const DynamicFormSection: FC<DynamicFormSectionProps> = ({
  handleSubmit,
  section,
  defaultValues,
  form,
}) => {
  const fields = section.fields
    .filter((field) =>
      field.condition ? field.condition(defaultValues) : true
    )
    .map((field, index) => (
      <DynamicFormField
        key={index}
        fieldDefinition={field}
        control={form.control}
        onSubmit={handleSubmit}
      />
    ));

  return (
    <>
      <fieldset className="mt-2">
        {section.title && !section.collapsable && (
          <legend className="mb-3">{section.title}</legend>
        )}
        {section.collapsable ? (
          <AccordionLight title={section.title ?? ""}>
            <>{fields}</>
          </AccordionLight>
        ) : (
          fields
        )}
      </fieldset>
    </>
  );
};

export default DynamicFormSection;
