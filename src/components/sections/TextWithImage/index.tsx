import classNames from "classnames";
import React from "react";
import { CLASS_TYPES, getThemeClasses } from "../../../helpers";
import CmsImage from "../../common/CmsImage";
import EmptyContainer from "../../common/EmptyContainer";
import TextWithImageParagraphs from "./TextWithImageParagraphs";
import { ComponentSectionsTextWithImage } from "../../../generated/graphql";

const TextWithImage = ({ data }: { data: ComponentSectionsTextWithImage }) => {
  if (!data) return <EmptyContainer />;
  return (
    <section className={getThemeClasses(data, CLASS_TYPES.SECTION, "ptb-120")}>
      <div className="container mt-md-5">
        <div
          className={classNames("row justify-content-between col-12 m-0", {
            // "flex-md-row-reverse": data.textAlign === "RIGHT",
          })}
        >
          <div className="mb-5 mb-lg-0 col-lg-7 col-md-12">
            {data.title ? <h3 className={"col-12"}>{data.title}</h3> : null}
            {data.subTitle && (
              <p className="col-lg-10 col-md-12">{data.subTitle}</p>
            )}
            <TextWithImageParagraphs paragraphs={data.paragraphs} />
          </div>
          <div className="mt-5 mt-lg-0 col-lg-5 d-flex align-items-center justify-content-center justify-content-lg-start">
            <div className="position-relative">
              <div className="gradient yellow text-with-image" />
              <CmsImage
                className="img-fluid screen-img position-relative"
                image={data.image}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TextWithImage;
