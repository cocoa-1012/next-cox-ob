import rehypeRaw from "rehype-raw";
import ReactMarkdown from "react-markdown";
import React from "react";
import { CLASS_TYPES, getThemeClasses } from "../../../helpers";
import { ComponentSectionsRichText } from "../../../generated/graphql";

const RichText = ({ data }: { data: ComponentSectionsRichText }) => {
  if (!data) return null;
  return (
    <section
      className={getThemeClasses(
        data,
        CLASS_TYPES.SECTION,
        "position-relative bg-light ptb-60"
      )}
    >
      <div className="container">
        <div className="row">
          <div className="col">
            <ReactMarkdown
              rehypePlugins={[rehypeRaw]}
              children={data.content || ""}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RichText;
