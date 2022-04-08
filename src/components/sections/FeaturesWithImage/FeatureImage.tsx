import CmsImage from "../../common/CmsImage";
import { FC } from "react";
import { ComponentSectionsFeaturesWithImage } from "../../../generated/graphql";

const FeatureImage: FC<{
  data: ComponentSectionsFeaturesWithImage;
}> = ({ data }) => {
  return (
    <div className="col-lg-6 col-12">
      <div className="feature-img-holder mt-md-4 mt-lg-0 mt-xl-0 justify-content-center d-flex position-relative">
        <div className="gradient yellow feature-with-image" />
        <CmsImage image={data.image} className="img-fluid" />
      </div>
    </div>
  );
};

export default FeatureImage;
