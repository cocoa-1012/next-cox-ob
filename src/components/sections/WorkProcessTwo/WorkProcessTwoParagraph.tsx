import { getParagraphIcon } from "../../../helpers";
import React from "react";
import { ComponentBlocksParagraph, Maybe } from "../../../generated/graphql";
import EmptyContainer from "../../common/EmptyContainer";

const WorkProcessTwoParagraph = ({
  paragraph,
  index,
  background,
}: {
  paragraph: Maybe<ComponentBlocksParagraph>;
  index: number;
  background?: string;
}) => {
  if (!paragraph) return <EmptyContainer />;
  const getParagraphWrapperClasses = () => {
    if (background === "DARK") {
      return "process-card-two text-center px-4 py-lg-5 py-4 rounded-custom";
    }
    return "process-card-two text-center px-4 py-5 rounded-custom shadow-hover mt-4";
  };

  const getParagraphInnerClasses = () => {
    if (background === "DARK") {
      return "process-icon border border-light bg-custom-light rounded-custom p-3";
    }
    return "process-icon rounded-custom p-3 bg-green-lite";
  };

  return (
    <div className="col-md-6 col-lg-3">
      <div
        className={getParagraphWrapperClasses()}
        data-aos="fade-up"
        data-aos-delay={50 * (index + 1)}
      >
        <div className={getParagraphInnerClasses()}>
          <i className={`${getParagraphIcon(paragraph)} text-dark-green`} />
        </div>
        <div className={"line-height-20"}>
          {paragraph.title && <h6 className="m-0">{paragraph.title}</h6>}
          {paragraph.subTitle && <p className="mb-0">{paragraph.subTitle}</p>}
        </div>
      </div>
    </div>
  );
};

export default WorkProcessTwoParagraph;
