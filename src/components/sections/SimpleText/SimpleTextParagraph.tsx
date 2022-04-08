import React from "react";
import CmsImage from "../../common/CmsImage";
import styles from "./SimpleTextParagraph.module.scss";
import { ComponentBlocksParagraph, Maybe } from "../../../generated/graphql";

const SimpleTextParagraph: React.FC<{
  paragraph: Maybe<ComponentBlocksParagraph>;
}> = ({ paragraph }) => {
  if (!paragraph) {
    return null;
  }

  return (
    <div className="mt-5">
      {paragraph.title ? <h5 className="h5">{paragraph.title}</h5> : null}
      {paragraph.subTitle ? <h6 className="h6">{paragraph.subTitle}</h6> : null}
      {paragraph.body ? <p>{paragraph.body}</p> : null}

      <CmsImage image={paragraph.image} className={styles.cmsImage} />
    </div>
  );
};

export default SimpleTextParagraph;
