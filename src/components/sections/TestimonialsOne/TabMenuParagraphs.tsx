import React from "react";
import TabMenu from "./TabMenu";
import EmptyContainer from "../../common/EmptyContainer";
import { ComponentBlocksParagraph, Maybe } from "../../../generated/graphql";

const TabMenuParagraphs = ({
  paragraphs = [],
}: {
  paragraphs?: Maybe<Maybe<ComponentBlocksParagraph>[]>;
}) => {
  if (!paragraphs) return <EmptyContainer />;
  return (
    <>
      {paragraphs.map((paragraph, index) => (
        <TabMenu paragraph={paragraph} index={index} key={index} />
      ))}
    </>
  );
};

export default TabMenuParagraphs;
