import CmsImage from "../../common/CmsImage";
import React from "react";
import EmptyContainer from "../../common/EmptyContainer";
import { ComponentBlocksParagraph, Maybe } from "../../../generated/graphql";

const TabContent = ({
  paragraph,
  index,
}: {
  paragraph?: Maybe<ComponentBlocksParagraph>;
  index: number;
}) => {
  if (!paragraph) {
    return <EmptyContainer />;
  }
  return (
    <div
      className={index === 0 ? "tab-pane fade active show" : "tab-pane fade"}
      id={"testimonial-tab-" + index}
      role="tabpanel"
      key={index}
    >
      <div className="row align-items-center justify-content-between">
        <div className="col-lg-6 col-md-6">
          <div className="testimonial-tab-content mb-5 mb-lg-0 mb-md-0">
            <img
              src="assets/img/testimonial/quotes-left.svg"
              alt="testimonial quote"
              width="65"
              className="img-fluid mb-32"
            />
            <div className="blockquote-title-review mb-4">
              <h3 className="mb-0 h4 fw-semi-bold">{paragraph.title}</h3>
            </div>
            <blockquote className="blockquote">
              <p>{paragraph.body}</p>
            </blockquote>
            <div className="author-info mt-4">
              <h6 className="mb-0">{paragraph.title}</h6>
              <span>{paragraph.subTitle}</span>
            </div>
          </div>
        </div>
        <div className="col-lg-5 col-md-6">
          <div className="author-img-wrap pt-5 ps-5">
            <div className="testimonial-video-wrapper position-relative">
              <CmsImage
                image={paragraph.image}
                className="img-fluid rounded-custom shadow-lg"
              />
              <div className="position-absolute bg-primary-dark z--1 dot-mask dm-size-16 dm-wh-350 top--40 left--40 top-left" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabContent;
