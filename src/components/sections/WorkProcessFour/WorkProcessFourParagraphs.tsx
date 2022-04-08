import { getParagraphIcon } from "../../../helpers";
import React from "react";
import { ComponentBlocksParagraph, Maybe } from "../../../generated/graphql";
import EmptyContainer from "../../common/EmptyContainer";

const WorkProcessFourParagraphs = ({
  paragraphs = [],
}: {
  paragraphs?: Maybe<Maybe<ComponentBlocksParagraph>[]>;
}) => {
  return (
    <>
      {paragraphs?.map((paragraph, index) => {
        if (!paragraph) return <EmptyContainer />;
        const { subTitle, title, body, icon } = paragraph;
        return (
          <li key={index} className="d-flex align-items-center my-4 mb-5">
            <div className="process-icon-2 border border-2 rounded-custom bg-secondary-light me-4">
              <i
                className={`${getParagraphIcon(
                  { icon },
                  "fas fa-check-circle "
                )} text-white`}
              />
            </div>
            <div className="icon-content">
              {subTitle && <span className="text-primary h6">{subTitle}</span>}
              {title && <h6>{title}</h6>}
              {body && <p className="m-0">{body}</p>}
            </div>
          </li>
        );
      })}
    </>
  );
};

export default WorkProcessFourParagraphs;
