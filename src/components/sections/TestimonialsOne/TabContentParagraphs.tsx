import React from "react";
import TabContent from "./TabContent";
import { ComponentBlocksParagraph, Maybe } from "../../../generated/graphql";

const TabContentParagraphs = ({
  paragraphs = [],
}: {
  paragraphs?: Maybe<Maybe<ComponentBlocksParagraph>[]>;
}) => {
  if (!paragraphs) {
    return null;
  }
  return (
    <>
      {paragraphs.map((paragraph, index) => (
        <TabContent paragraph={paragraph} index={index} key={index} />
      ))}
    </>
  );
};

export default TabContentParagraphs;
