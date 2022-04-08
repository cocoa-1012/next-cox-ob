import React from "react";
import FaqOneParagraph from "./FaqOneParagraph";
import { ComponentBlocksParagraph, Maybe } from "../../../generated/graphql";

const FaqOneParagraphs = ({
  paragraphs = [],
}: {
  paragraphs?: Maybe<Maybe<ComponentBlocksParagraph>[]>;
}) => {
  return (
    <>
      {paragraphs?.map((paragraph, index) => (
        <FaqOneParagraph key={index} index={index} paragraph={paragraph} />
      ))}
    </>
  );
};

export default FaqOneParagraphs;
