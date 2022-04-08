import classNames from "classnames";
import React from "react";
import Link from "next/link";
// import {
//   getCategoryBadgeClasses,
//   getCategoryDisplayName,
//   getCategorySlug,
// } from "../../../lib/categories";
// import { buildLearningCenterArticleURL } from "../../../lib/cms";
// import { AppContext } from "../../../lib/contextLib";
// import { PagePreview } from "../../../types";
import CmsImage from "../CmsImage";
import EmptyContainer from "../EmptyContainer";

interface Props {
  article: any;
  pinned?: boolean;
}
const ArticlePreview: React.FC<Props> = ({ article, pinned }) => {
  if (!article) {
    return <EmptyContainer />;
  }
  const articleImage = article?.image;

  return (
    <Link
      href={{
        pathname: "/[page]/[category]/[article]",
        query: {
          page: "learning-center",
          category: article.category.slug,
          article: article.slug,
        },
      }}
    >
      <a
        className={classNames(
          "mb-4 text-decoration-none",
          { "col-lg-6 col-md-12": pinned },
          { "col-lg-4 col-md-6": !pinned }
        )}
      >
        <div
          className={classNames("single-article rounded-custom mb-4 mb-lg-0", {
            "feature-article": pinned,
          })}
        >
          <div
            className="article-img cursor-pointer"
            style={{ cursor: "pointer" }}
          >
            <CmsImage image={articleImage} className="img-fluid" />
          </div>
          <div className="article-content p-4">
            <div className="article-category mb-4 d-block">
              <div
                className={classNames(
                  "d-inline-block text-dark badge bg-primary-soft"
                )}
              >
                {article.category.title}
              </div>
            </div>

            <h2 className="h5 article-title limit-2-line-text">
              {article.title}
            </h2>

            <p className="limit-2-line-text text-dark">{article.summary}</p>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default ArticlePreview;
