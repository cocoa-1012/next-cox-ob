import React from "react";
import TextWithImageParagraph from "./TextWithImageParagraph";
import { ComponentBlocksParagraph, Maybe } from "../../../generated/graphql";

const TextWithImageParagraphs = ({
  paragraphs = [],
}: {
  paragraphs: Maybe<Maybe<ComponentBlocksParagraph>[]> | undefined;
}) => {
  return (
    <>
      {paragraphs?.map((paragraph, index) => (
        <TextWithImageParagraph paragraph={paragraph} key={index} />
      ))}
    </>
  );
};

export default TextWithImageParagraphs;
