import classNames from "classnames";
import React from "react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import EmptyContainer from "../../components/common/EmptyContainer";
import ArticlesPreview from "../../components/sections/ArticlesPreview";
import Section from "../../components/sections/Section";
import TOC from "../../components/sections/TOC";
import { LEARNING_CENTER_ROUTE } from "../../config/routes";
import { getCategoryDisplayName } from "../../lib/categories";
import { getFirstImageOriginal } from "../../lib/cms";
import styles from "./ArticlePageLayout.module.scss";

const ArticlePageLayout = ({ pageData }) => {
  const { t } = useTranslation();
  if (!pageData) return <EmptyContainer />;

  const showToc =
    pageData.sections.filter((section) => section.title && section.title !== "")
      .length > 0;

  return (
    <>
      <Helmet>
        <title>{pageData.title}</title>
        <meta name="description" content={pageData.subtitle} />
      </Helmet>

      <article itemScope itemType="https://schema.org/Article">
        {pageData.categoryName ? (
          <meta
            itemProp="articleSection"
            content={getCategoryDisplayName(pageData.categoryName)}
          />
        ) : null}
        {pageData.summary ? (
          <meta itemProp="abstract" content={pageData.summary} />
        ) : null}
        {pageData.datePublished ? (
          <meta
            itemProp="datePublished"
            content={new Date(pageData.datePublished)}
          />
        ) : null}
        {pageData.lastUpdated ? (
          <meta
            itemProp="dateModified"
            content={new Date(pageData.lastUpdated)}
          />
        ) : null}
        {pageData.images?.FEATURE ? (
          <meta
            itemProp="image"
            content={getFirstImageOriginal(pageData.images, "FEATURE").url}
          />
        ) : null}

        {pageData.title ? (
          <section className="page-header position-relative overflow-hidden ptb-120 bg-dark">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-8 col-12">
                  <h1 className="fw-bold display-5" itemProp="headline">
                    {pageData.title}
                  </h1>
                </div>
              </div>
            </div>
          </section>
        ) : null}

        <section className="container ptb-60" itemProp="articleBody">
          <div className="row justify-content-between">
            <div
              className={classNames(
                {
                  "col-lg-8 col-md-8": showToc,
                },
                {
                  "col-lg-12 col-md-12": !showToc,
                }
              )}
            >
              {pageData.sections
                .filter((section) => section.layout !== "FLOATING_CTA")
                .map((section) => (
                  <div
                    id={section.id}
                    key={section.id}
                    className={styles.articleText}
                  >
                    <Section section={section} />
                  </div>
                ))}
            </div>

            {showToc ? (
              <div className="col-lg-3 col-md-4 d-none d-md-block d-lg-block">
                <TOC sections={pageData.sections} />
              </div>
            ) : null}
          </div>
        </section>
      </article>

      {pageData.linkPreviews ? (
        <section className="related-blog-list ptb-120 bg-light">
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-lg-6 col-md-12">
                <div className="section-heading mb-3">
                  <h4>{t("latest_articles")}</h4>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="text-start text-lg-end mb-4 mb-lg-0 mb-xl-0">
                  <a href={LEARNING_CENTER_ROUTE} className="btn btn-primary">
                    {t("view_all_articles")}
                  </a>
                </div>
              </div>
            </div>
            <ArticlesPreview links={pageData.linkPreviews} />
          </div>
        </section>
      ) : null}
    </>
  );
};

export default ArticlePageLayout;
