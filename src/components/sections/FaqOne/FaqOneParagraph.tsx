import React from "react";
import EmptyContainer from "../../common/EmptyContainer";
import { ComponentBlocksParagraph, Maybe } from "../../../generated/graphql";

const FaqOneParagraph = ({
  paragraph,
  index,
}: {
  paragraph: Maybe<ComponentBlocksParagraph>;
  index: number;
}) => {
  if (!paragraph) return <EmptyContainer />;
  return (
    <div className="accordion-item border border-2">
      <h5 className="accordion-header" id={`faq-${index}`}>
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#collapse-${index}`}
          aria-expanded="false"
        >
          {paragraph.title}
        </button>
      </h5>
      <div
        id={`collapse-${index}`}
        className="accordion-collapse collapse"
        aria-labelledby={`faq-${index}`}
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body text-dark">{paragraph.body}</div>
      </div>
    </div>
  );
};

export default FaqOneParagraph;
