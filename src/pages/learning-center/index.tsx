import { getCategories } from "../../api/strapi";
import { fetchPageData } from "../../lib/cms";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Layout from "../../layout/Layout";
import SEO from "../../components/SEO";
import Navbar from "../../layout/Header/Navbar";
import Footer from "../../layout/Footer";
import React from "react";
import LearningCenterPage from "../../components/pages/LearningCenterPage";
import { PageData } from "../../types";
import { config } from "../../lib/configLib";

const LearningCenter = ({ pageData }: { pageData: PageData }) => {
  return (
    <Layout>
      <SEO seoData={pageData?.attributes?.seo} />
      <Navbar />
      <LearningCenterPage />
      <Footer footerLight />
    </Layout>
  );
};

export default LearningCenter;

export async function getStaticProps({ locale }: { locale: string }) {
  const categoriesData = await getCategories(locale);
  const pageData = await fetchPageData("learning-center", locale);
  const articles: any = {
    pinned: [],
    other: [],
  };
  categoriesData?.forEach((category: any) => {
    const categoryAttributes = category.attributes;
    categoryAttributes.articles.data.forEach((article: any) => {
      const attributes = article.attributes;
      const data = {
        ...attributes,
        category: {
          title: categoryAttributes.title,
          slug: categoryAttributes.slug,
        },
      };
      if (attributes.pinned) {
        articles.pinned.push(data);
      } else {
        articles.other.push(data);
      }
    });
  });
  return {
    props: {
      ...(await serverSideTranslations(locale)),
      ...(categoriesData && { categoriesData }),
      ...(pageData && { pageData }),
      articles,
    },
    revalidate: config.cms.revalidate,
  };
}
