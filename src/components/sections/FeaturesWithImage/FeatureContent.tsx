import FeatureText from "./FeatureText";
import FeatureImage from "./FeatureImage";
import React, { FC } from "react";
import { ComponentSectionsFeaturesWithImage } from "../../../generated/graphql";

const Delimiter = () => <div className={"mb-5 mb-lg-0 d-lg-none"} />;

const FeatureContent: FC<{
  data: ComponentSectionsFeaturesWithImage;
}> = ({ data }) => {
  return data.align?.textAlign === "LEFT" ? (
    <>
      <FeatureImage data={data} />
      <Delimiter />
      <FeatureText data={data} />
    </>
  ) : (
    <>
      <FeatureText data={data} />
      <Delimiter />
      <FeatureImage data={data} />
    </>
  );
};

export default FeatureContent;
