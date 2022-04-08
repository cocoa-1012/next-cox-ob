import React, { FC } from "react";
import EmptyContainer from "../../common/EmptyContainer";
import FeatureContent from "./FeatureContent";
import { CLASS_TYPES, getThemeClasses } from "../../../helpers";
import { ComponentSectionsFeaturesWithImage } from "../../../generated/graphql";

const FeaturesWithImage: FC<{
  data: ComponentSectionsFeaturesWithImage;
}> = ({ data }) => {
  if (!data) return <EmptyContainer />;
  return (
    <>
      <section
        className={getThemeClasses(data, CLASS_TYPES.SECTION, "ptb-120")}
      >
        <div className="container">
          <div className="row justify-content-lg-between align-items-center flex-md-row-reverse">
            <FeatureContent data={data} />
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturesWithImage;
