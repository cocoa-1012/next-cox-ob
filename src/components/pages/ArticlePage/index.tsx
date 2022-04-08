import React, { useContext } from "react";
import { AppContext } from "../../../lib/contextLib";
// import {getCategoryDisplayName} from "../../../lib/categories";
// import {getFirstImageOriginal} from "../../../lib/cms";
import classNames from "classnames";
// import styles from "../../../layout/ArticlePageLayout/ArticlePageLayout.module.scss";
// import Section from "../../sections/Section";
import TOC from "../../sections/TOC";
// import {LEARNING_CENTER_ROUTE} from "../../../config/routes";
// import ArticlesPreview from "../../sections/ArticlesPreview";
// import {useTranslation} from "next-i18next";
// import Link from "next/link"
import StrapiSection, { ISection } from "../../sections/StrapiSection";

const ArticlePage = () => {
  const context = useContext(AppContext);
  const articleData = context?.articleData?.attributes;
  // const { t } = useTranslation();

  const sections = context?.articleData?.attributes?.contentSections;
  const showTOC = sections?.length !== 0 && !!articleData?.showTOC;

  return (
    <>
      <article itemScope itemType="https://schema.org/Article">
        {/*{articleData.categoryName ? (*/}
        {/*    <meta*/}
        {/*        itemProp="articleSection"*/}
        {/*        content={getCategoryDisplayName(articleData.categoryName)}*/}
        {/*    />*/}
        {/*) : null}*/}
        {/*{articleData.summary ? (*/}
        {/*    <meta itemProp="abstract" content={articleData.summary} />*/}
        {/*) : null}*/}
        {/*{articleData.datePublished ? (*/}
        {/*    <meta*/}
        {/*        itemProp="datePublished"*/}
        {/*        content={new Date(articleData.datePublished)}*/}
        {/*    />*/}
        {/*) : null}*/}
        {/*{articleData.lastUpdated ? (*/}
        {/*    <meta*/}
        {/*        itemProp="dateModified"*/}
        {/*        content={new Date(articleData.lastUpdated)}*/}
        {/*    />*/}
        {/*) : null}*/}
        {/*{articleData.images?.FEATURE ? (*/}
        {/*    <meta*/}
        {/*        itemProp="image"*/}
        {/*        content={getFirstImageOriginal(articleData.images, "FEATURE").url}*/}
        {/*    />*/}
        {/*) : null}*/}

        {articleData?.title && (
          <section className="page-header position-relative overflow-hidden ptb-120 bg-dark">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-8 col-12">
                  <h1 className="fw-bold display-5" itemProp="headline">
                    {articleData?.title}
                  </h1>
                </div>
              </div>
            </div>
          </section>
        )}

        <section
          className="container ptb-60 article__body"
          itemProp="articleBody"
        >
          <div className="row justify-content-between">
            <div
              className={classNames(
                {
                  "col-lg-8 col-md-8": showTOC,
                },
                {
                  "col-lg-12 col-md-12": !showTOC,
                }
              )}
            >
              {sections?.map((section: ISection, index: number) => {
                return (
                  <div key={index} id={`section_${index}`}>
                    <StrapiSection section={section} />
                  </div>
                );
              })}
            </div>

            {showTOC && (
              <div className="col-lg-3 col-md-4 d-none d-md-block d-lg-block">
                <TOC />
              </div>
            )}
          </div>
        </section>
      </article>

      {/*{articleData.linkPreviews ? (*/}
      {/*    <section className="related-blog-list ptb-120 bg-light">*/}
      {/*        <div className="container">*/}
      {/*            <div className="row align-items-center justify-content-between">*/}
      {/*                <div className="col-lg-6 col-md-12">*/}
      {/*                    <div className="section-heading mb-3">*/}
      {/*                        <h4>{t("latest_articles")}</h4>*/}
      {/*                    </div>*/}
      {/*                </div>*/}
      {/*                <div className="col-lg-6 col-md-12">*/}
      {/*                    <div className="text-start text-lg-end mb-4 mb-lg-0 mb-xl-0">*/}
      {/*                        <Link href={LEARNING_CENTER_ROUTE}>*/}
      {/*                            <a className="btn btn-primary">*/}
      {/*                                {t("view_all_articles")}*/}
      {/*                            </a>*/}
      {/*                        </Link>*/}

      {/*                    </div>*/}
      {/*                </div>*/}
      {/*            </div>*/}
      {/*<ArticlesPreview links={articleData.linkPreviews} />*/}
      {/*    </div>*/}
      {/*</section>*/}
      {/*) : null}*/}
    </>
  );
};

export default ArticlePage;
