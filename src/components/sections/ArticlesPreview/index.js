import React from "react";
import ArticlePreview from "../../common/ArticlePreview";

const ArticlesPreview = ({ links, pinned }) => {
  return (
    <div className="row">
      {links.map(
        (link, index) =>
          link?.category?.title &&
          link.slug && (
            <ArticlePreview article={link} key={index} pinned={pinned} />
          )
      )}
    </div>
  );
};

export default ArticlesPreview;
