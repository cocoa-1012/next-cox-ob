import React from "react";
import EmptyContainer from "../../common/EmptyContainer";
import WorkProcessTwoParagraphs from "./WorkProcessTwoParagraphs";
import { CLASS_TYPES, getBlurClasses, getThemeClasses } from "../../../helpers";
import { ComponentSectionsWorkProcessTwo } from "../../../generated/graphql";

const WorkProcessTwo = ({
  data,
}: {
  data: ComponentSectionsWorkProcessTwo;
}) => {
  if (!data) return <EmptyContainer />;

  return (
    <>
      <section
        className={getThemeClasses(data, CLASS_TYPES.SECTION, "ptb-120")}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div>
              <div className="text-center" data-aos="fade-up">
                {data.title && <h3>{data.title}</h3>}
                {data.subTitle && <p>{data.subTitle}</p>}
              </div>
            </div>
          </div>
          <div className="row d-flex align-items-center justify-content-around position-relative">
            <div className={getBlurClasses(data, "work-process-four")} />
            <WorkProcessTwoParagraphs
              background={data.theme?.background}
              paragraphs={data.paragraphs}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default WorkProcessTwo;
