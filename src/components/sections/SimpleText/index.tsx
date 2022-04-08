import React from "react";
import EmptyContainer from "../../common/EmptyContainer";
import SimpleTextParagraphs from "./SimpleTextParagraphs";
import { CLASS_TYPES, getThemeClasses } from "../../../helpers";
import { ComponentSectionsSimpleText } from "../../../generated/graphql";

const SimpleText = ({ data }: { data: ComponentSectionsSimpleText }) => {
  if (!data) return <EmptyContainer />;
  return (
    <section className={getThemeClasses(data, CLASS_TYPES.SECTION, "pt-120")}>
      <div className="container">
        <div
          className={getThemeClasses(
            data,
            CLASS_TYPES.ROW,
            "justify-content-between"
          )}
        >
          <div className="col">
            {data.title ? <h2>{data.title}</h2> : null}
            {data.subTitle ? <p>{data.subTitle}</p> : null}
            <SimpleTextParagraphs paragraphs={data.paragraphs} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimpleText;
