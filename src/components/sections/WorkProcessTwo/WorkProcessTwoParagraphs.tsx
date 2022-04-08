import React from "react";
import WorkProcessTwoParagraph from "./WorkProcessTwoParagraph";
import EmptyContainer from "../../common/EmptyContainer";
import { ComponentBlocksParagraph, Maybe } from "../../../generated/graphql";

const WorkProcessTwoParagraphs = ({
  background,
  paragraphs,
}: {
  paragraphs?: Maybe<Maybe<ComponentBlocksParagraph>[]>;
  background?: string;
}) => {
  if (!paragraphs) return <EmptyContainer />;
  return (
    <>
      {paragraphs.map((paragraph, index) => (
        <WorkProcessTwoParagraph
          key={index}
          paragraph={paragraph}
          index={index}
          background={background}
        />
      ))}
    </>
  );
};

export default WorkProcessTwoParagraphs;
