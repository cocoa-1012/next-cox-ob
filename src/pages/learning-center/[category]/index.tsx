import Layout from "../../../layout/Layout";
import Navbar from "../../../layout/Header/Navbar";
import React from "react";
import Footer from "../../../layout/Footer";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { fetchAPI, getCategories, getCategory } from "../../../api/strapi";
import { fetchPageData } from "../../../lib/cms";
import SEO from "../../../components/SEO";
import { StaticPathsProps } from "../../[[...slug]]";
import LearningCenterPage from "../../../components/pages/LearningCenterPage";
import NotFound from "../../../components/NotFound";
import { CategoryData } from "../../../types";
import { config } from "../../../lib/configLib";

const Category = ({ categoryData }: { categoryData: CategoryData }) => {
  if (!categoryData) {
    return <NotFound />;
  }
  return (
    <Layout>
      <SEO seoData={categoryData?.attributes?.seo} />
      <Navbar />
      <LearningCenterPage />
      <Footer footerLight />
    </Layout>
  );
};

export default Category;

type Page = {
  id: number;
  attributes: { slug: string; locale: string; category: string };
};
export async function getStaticPaths(context: StaticPathsProps) {
  const pages: Page[] = await context.locales.reduce(
    async (currentPagesPromise: Promise<Page[]>, locale: string) => {
      const currentPages = await currentPagesPromise;
      const localePages = await fetchAPI("/categories", {
        locale,
        fields: ["slug", "locale"],
      });
      if (!localePages) return currentPages;
      return [...currentPages, ...localePages.data].map((data) => ({
        ...data,
        attributes: {
          ...data.attributes,
          category: data.attributes.slug,
          page: "learning-center",
        },
      }));
    },
    Promise.resolve([])
  );

  const paths = pages.map((page) => {
    const { slug, category, locale } = page.attributes;

    return {
      params: { page: slug, category: category },
      // Specify the locale to render
      locale,
    };
  });

  return { paths, fallback: true };
}

export async function getStaticProps({
  params,
  locale,
}: {
  locale: string;
  params: { category: string };
}) {
  const categoryData = await getCategory({ category: params.category }, locale);
  const categoriesData = await getCategories(locale);
  const pageData = await fetchPageData("learning-center", locale);

  const articles: {
    pinned: any[];
    other: any[];
  } = {
    pinned: [],
    other: [],
  };

  categoryData?.attributes?.articles?.data?.forEach((article: any) => {
    const attributes = article.attributes;
    const data = {
      ...attributes,
      category: {
        title: categoryData?.attributes?.title,
        slug: categoryData?.attributes?.slug,
      },
    };
    if (attributes.pinned) {
      articles.pinned.push(data);
    } else {
      articles.other.push(data);
    }
  });

  return {
    props: {
      ...(await serverSideTranslations(locale)),
      ...(categoryData && { categoryData }),
      ...(categoriesData && { categoriesData }),
      ...(pageData && { pageData }),
      articles,
    },
    revalidate: config.cms.revalidate,
  };
}
