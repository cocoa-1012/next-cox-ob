import React from "react";
import SectionTitle from "../../common/SectionTitle";
import EmptyContainer from "../../common/EmptyContainer";
import FaqOneParagraphs from "./FaqOneParagraphs";
import { CLASS_TYPES, getThemeClasses } from "../../../helpers";
import { ComponentSectionsFaqOne } from "../../../generated/graphql";

const FaqOne = ({ data }: { data: ComponentSectionsFaqOne }) => {
  if (!data) return <EmptyContainer />;
  return (
    <>
      <section
        className={getThemeClasses(
          data,
          CLASS_TYPES.SECTION,
          "faq-section ptb-120"
        )}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7 col-12">
              <SectionTitle
                title={data.title}
                description={data.subTitle}
                centerAlign
              />
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-7 col-12">
              <div className="accordion faq-accordion" id="accordionExample">
                <FaqOneParagraphs paragraphs={data.paragraphs} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FaqOne;
