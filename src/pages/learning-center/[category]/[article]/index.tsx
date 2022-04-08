import Layout from "../../../../layout/Layout";
import SEO from "../../../../components/SEO";
import Navbar from "../../../../layout/Header/Navbar";
import Footer from "../../../../layout/Footer";
import React from "react";
import ArticlePage from "../../../../components/pages/ArticlePage";
import { StaticPathsProps } from "../../../[[...slug]]";
import {fetchAPI, getArticle, getCategory} from "../../../../api/strapi";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import NotFound from "../../../../components/NotFound";
import { ArticleData } from "../../../../types";
import { config } from "../../../../lib/configLib";

const Article = ({
  articleData,
  preview,
}: {
  articleData: ArticleData;
  preview: boolean;
}) => {
  if (!articleData) {
    return <NotFound />;
  }
  return (
    <Layout preview={preview}>
      <SEO seoData={articleData?.attributes?.seo} />
      <Navbar />
      <ArticlePage />
      <Footer footerLight />
    </Layout>
  );
};

export default Article;

export async function getStaticPaths(context: StaticPathsProps) {
  const pages: any[] = await context.locales.reduce(
    async (currentPagesPromise: Promise<any[]>, locale: string) => {
      const currentPages = await currentPagesPromise;
      const localePages = await fetchAPI("/articles", {
        locale,
        fields: ["slug", "locale"],
        populate: ["category"],
      });
      if (!localePages) return currentPages;
      return [...currentPages, ...localePages.data].map((data) => {
        const category =
          typeof data.attributes.category === "string"
            ? data.attributes.category
            : data.attributes.category.data?.attributes?.slug;
        return {
          ...data,
          attributes: {
            ...data.attributes,
            article: data.attributes.slug,
            category: category,
            page: "learning-center",
          },
        };
      });
    },
    Promise.resolve([])
  );

  const paths = pages.map((page) => {
    const { article, category, locale } = page.attributes;
    return {
      params: { article, category },
      // Specify the locale to render
      locale,
    };
  });

  return { paths, fallback: true };
}

export async function getStaticProps({
  params,
  locale,
  preview,
}: {
  locale: string;
  preview: boolean | undefined;
  params: { category: string; article: string };
}) {
  const { article, category } = params;

  const articleData = await getArticle(
    {
      article: article,
      ...(((!preview && category) || (preview && category !== "preview")) && {
        category,
      }),
      ...(preview && { publicationState: "PREVIEW" }),
    },
    locale
  );
  const categoryData = await getCategory({ category: params.category }, locale);

  return {
    props: {
      ...(await serverSideTranslations(locale)),
      ...(articleData && { articleData }),
      ...(categoryData && { categoryData }),
      preview: !!preview,
    },
    revalidate: config.cms.revalidate,
  };
}
