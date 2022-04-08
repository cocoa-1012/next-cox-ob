import React from "react";
import SectionTitle from "../../common/SectionTitle";
import EmptyContainer from "../../common/EmptyContainer";
import TabMenuParagraphs from "./TabMenuParagraphs";
import TabContentParagraphs from "./TabContentParagraphs";
import { CLASS_TYPES, getThemeClasses } from "../../../helpers";
import { ComponentSectionsTestimonialsOne } from "../../../generated/graphql";

const TestimonialsOne = ({
  data,
}: {
  data: ComponentSectionsTestimonialsOne;
}) => {
  if (!data) return <EmptyContainer />;
  return (
    <>
      <section
        className={getThemeClasses(
          data,
          CLASS_TYPES.SECTION,
          "position-relative z-2 ptb-120"
        )}
      >
        <div className="container">
          <div className="row justify-content-center align-content-center">
            <div className="col-md-10 col-lg-6">
              <SectionTitle
                title={data.title}
                description={data.subTitle}
                centerAlign={data.align?.textAlign === "CENTER"}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="tab-content" id="testimonial-tabContent">
                <TabContentParagraphs paragraphs={data?.paragraphs} />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <ul
                className="nav nav-pills testimonial-tab-menu mt-60"
                id="testimonial"
                role="tablist"
              >
                <TabMenuParagraphs paragraphs={data?.paragraphs} />
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TestimonialsOne;
