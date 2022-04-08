import React, { FC } from "react";
import HeroTitle from "../../../components/common/HeroTitle";
import CmsImage from "../../common/CmsImage";
import { CLASS_TYPES, getBlurClasses, getThemeClasses } from "../../../helpers";
import classNames from "classnames";
import CTAList from "../../common/CTAList";
import { ComponentSectionsHeroFive } from "../../../generated/graphql";

const HeroFive: FC<{
  data: ComponentSectionsHeroFive;
}> = ({ data }) => {
  if (!data) return null;
  const image = data.image;

  return (
    <>
      <section
        className={getThemeClasses(
          data,
          CLASS_TYPES.SECTION,
          "hero-section ptb-120  d-flex align-items-center position-relative overflow-hidden"
        )}
      >
        <div className="container">
          <div
            className={classNames(
              "row justify-content-between align-items-center position-relative",
              {
                "flex-md-row-reverse": data.align?.textAlign !== "RIGHT",
              }
            )}
          >
            <div className={getBlurClasses(data, "hero-five")} />
            <div className="col-12 col-lg-6 col-md-6 mt-md-5 mb-md-0 mb-5 mt-lg-0">
              <div className="animated-img-wrap d-flex justify-content-end">
                <CmsImage
                  image={image}
                  className="position-relative img-fluid rounded-circle"
                />
              </div>
            </div>
            <div
              className={classNames(
                { "col-12 col-md-6": image },
                { "col-12": !image }
              )}
            >
              <div className="hero-content-wrap">
                <HeroTitle
                  subtitle=""
                  title={data.title}
                  desc={data.subTitle}
                />

                <div className="action-btns mt-5">
                  <CTAList list={data.CTA} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroFive;
