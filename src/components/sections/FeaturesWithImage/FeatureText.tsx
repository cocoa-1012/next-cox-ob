import Feature from "../../common/Feature";
import React, { FC } from "react";
import EmptyContainer from "../../common/EmptyContainer";
import CTAList from "../../common/CTAList";

import {
  ComponentBlocksParagraph,
  ComponentSectionsFeaturesWithImage,
  Maybe,
} from "../../../generated/graphql";

const Features: FC<{
  paragraphs: Maybe<Maybe<ComponentBlocksParagraph>[]> | undefined;
}> = ({ paragraphs }) => {
  if (!paragraphs) {
    return <EmptyContainer />;
  }
  return (
    paragraphs && (
      <ul className="list-unstyled d-flex flex-wrap list-two-col mt-4 mb-4">
        {paragraphs.map((paragraph, index) => (
          <Feature key={index} item={paragraph} className={"py-1"} />
        ))}
      </ul>
    )
  );
};

const FeatureText: FC<{
  data: ComponentSectionsFeaturesWithImage;
}> = ({ data }) => {
  return (
    <div className="col-lg-6 col-12">
      <div className="why-choose-content">
        <h3 className="mb-4">{data.title}</h3>
        <p className={"mb-32"}>{data.subTitle}</p>
        <div className={"mt-5"} />
        <Features paragraphs={data.paragraphs} />
        <CTAList list={data.CTA} />
      </div>
    </div>
  );
};

export default FeatureText;
