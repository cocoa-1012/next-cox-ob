import React from "react";
import { CLASS_TYPES, getThemeClasses } from "../../../helpers";
import EmptyContainer from "../../common/EmptyContainer";
import PageHeaderParagraphs from "./PageHeaderParagraphs";
import { ComponentSectionsSimpleHeader } from "../../../generated/graphql";

const PageHeader = ({ data }: { data: ComponentSectionsSimpleHeader }) => {
  if (!data) return <EmptyContainer />;
  return (
    <>
      <section
        className={getThemeClasses(
          data,
          CLASS_TYPES.SECTION,
          "position-relative overflow-hidden ptb-60"
        )}
      >
        <div className="container">
          <div className={getThemeClasses(data, CLASS_TYPES.ROW)}>
            <div className="col-lg-8 col-md-12">
              {data.title && (
                <h1 className="display-5 fw-bold">{data.title}</h1>
              )}

              {data.subTitle && <p className="lead">{data.subTitle}</p>}
            </div>
          </div>
          <PageHeaderParagraphs data={data} />
        </div>
      </section>
    </>
  );
};
export default PageHeader;
