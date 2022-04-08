import { getRowClasses } from "../../../helpers";
import classNames from "classnames";
import React from "react";

const PageHeaderParagraphs = ({ data }) => {
  if (!data?.paragraphs) {
    return null;
  }
  return (
    <>
      {data.paragraphs.map((paragraph, index) => (
        <div className={getRowClasses(data)} key={index}>
          <div className="col-lg-8 col-md-12">
            <h1 className="display-5 fw-bold">{paragraph.title}</h1>
            <p
              className={classNames("lead", {
                "text-white": data.background === "DARK",
              })}
            >
              {paragraph.body}
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default PageHeaderParagraphs;
