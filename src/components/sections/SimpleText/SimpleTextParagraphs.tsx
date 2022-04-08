import React from "react";
import SimpleTextParagraph from "./SimpleTextParagraph";
import { ComponentBlocksParagraph, Maybe } from "../../../generated/graphql";
import EmptyContainer from "../../common/EmptyContainer";

const SimpleTextParagraphs = ({
  paragraphs = [],
}: {
  paragraphs?: Maybe<Maybe<ComponentBlocksParagraph>[]>;
}) => {
  if (!paragraphs) {
    return <EmptyContainer />;
  }
  return (
    <>
      {paragraphs.map((paragraph, index) => (
        <SimpleTextParagraph paragraph={paragraph} key={index} />
      ))}
    </>
  );
};

export default SimpleTextParagraphs;
