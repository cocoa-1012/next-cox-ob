import React, { FC } from "react";
import classNames from "classnames";
import CmsImage from "../../common/CmsImage";
import EmptyContainer from "../../common/EmptyContainer";
import { CLASS_TYPES, getBlurClasses, getThemeClasses } from "../../../helpers";
import CTAList from "../../common/CTAList";
import { ComponentSectionsFooterCta } from "../../../generated/graphql";

const CtaTwoImage: FC<{ image: any }> = ({ image }) => {
  return image ? (
    <div className="img-with-shape-wrap">
      <div className="shape-image">
        <CmsImage image={image} className="img-fluid screen-img" />
      </div>
    </div>
  ) : (
    <div className="d-flex justify-content-center">
      <img alt={"letter logo"} src={"/assets/img/logo-letter.png"} />
    </div>
  );
};

const CtaTwo: FC<{
  data: ComponentSectionsFooterCta;
}> = ({ data }) => {
  if (!data) return <EmptyContainer />;

  return (
    <section
      className={getThemeClasses(
        data,
        CLASS_TYPES.SECTION,
        "cta-with-subscribe pb-lg-5 pb-0 overflow-hidden"
      )}
    >
      <div className="container section-heading">
        <div className="rounded-custom position-relative">
          <div className={getBlurClasses(data, "cta-two")} />
          <div
            className={classNames(
              "row justify-content-between align-items-center",
              {
                "flex-md-row-reverse": data.align?.textAlign !== "RIGHT",
              }
            )}
          >
            <div className="col-lg-5 col-md-12">
              <CtaTwoImage image={data?.image} />
            </div>
            <div className="col-lg-7 col-md-12 mt-5 mt-xl-0 mb-5 mb-lg-0">
              <div className="cta-with-feature-wrap p-0 p-xl-5 mx-2 mx-md-0">
                <h2>{data.title}</h2>
                <p className={"lead"}>{data.subTitle}</p>
                <div className="form-block-banner mt-5">
                  <CTAList list={data.CTA} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaTwo;
