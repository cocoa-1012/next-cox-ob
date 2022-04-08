import React from "react";
import { ComponentBlocksParagraph, Maybe } from "../../../generated/graphql";

const TextWithImageParagraph = ({
  paragraph,
}: {
  paragraph: Maybe<ComponentBlocksParagraph>;
}) => {
  return (
    <div className="mt-5 line-height-20 font-weight-500">
      <h3 className="h5 col-lg-10 col-md-12">{paragraph?.title}</h3>
      <p className={"col-lg-9 col-md-12 text-align-justify"}>
        {paragraph?.body}
      </p>
    </div>
  );
};

export default TextWithImageParagraph;
