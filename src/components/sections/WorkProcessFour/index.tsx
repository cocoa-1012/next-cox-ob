import React from "react";
import SectionTitle from "../../common/SectionTitle";
import CmsImage from "../../common/CmsImage";
import EmptyContainer from "../../common/EmptyContainer";
import WorkProcessFourParagraphs from "./WorkProcessFourParagraphs";
import classNames from "classnames";
import { CLASS_TYPES, getThemeClasses, THEMES } from "../../../helpers";
import { ComponentSectionsWorkProcessFour } from "../../../generated/graphql";

const WorkProcessFour = ({
  data,
}: {
  data: ComponentSectionsWorkProcessFour;
}) => {
  if (!data) return <EmptyContainer />;
  return (
    <>
      <section
        className={getThemeClasses(
          data,
          CLASS_TYPES.SECTION,
          "work-process ptb-120",
          "bg-light"
        )}
      >
        <div className="container">
          <div className="row align-items-center justify-content-between flex-lg-row flex-column-reverse">
            <div className="col-lg-5 col-md-12 order-1 order-lg-0 mb-5 mb-lg-0">
              <div className="img-wrap position-relative">
                <div className="gradient yellow work-process-four" />
                <div
                  className={classNames({
                    "work-process-left-bg":
                      data.theme?.background === THEMES.LIGHT,
                  })}
                />
                <CmsImage
                  image={data.image}
                  className="img-fluid rounded-custom position-relative"
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-12 order-0 order-lg-1">
              <div className="row">
                <div className="col-lg-12 col-md-12">
                  <SectionTitle
                    title={data.title}
                    description={data.subTitle}
                  />
                </div>
              </div>
              <ul className="work-process-list list-unstyled">
                <WorkProcessFourParagraphs paragraphs={data?.paragraphs} />
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WorkProcessFour;
