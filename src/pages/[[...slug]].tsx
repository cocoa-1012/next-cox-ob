import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import StrapiSection from "../components/sections/StrapiSection";
import Footer from "../layout/Footer";
import Navbar from "../layout/Header/Navbar";
import NotFound from "../components/NotFound";
import Layout from "../layout/Layout";
import { fetchPageData } from "../lib/cms";
import { fetchAPI } from "../api/strapi";
import SEO from "../components/SEO";
import { filterStrapiPages, StrapiPage } from "../api/utilities";
import { PageData } from "../types";
import { config } from "../lib/configLib";

function CMSPage({ pageData }: { pageData: PageData }) {
  const sections = pageData?.attributes?.contentSections;
  if (!sections || sections?.length === 0) {
    return <NotFound />;
  }
  return (
    <Layout>
      <SEO seoData={pageData?.attributes?.seo} />
      <Navbar />
      {sections.map((section, index: number) => (
        <StrapiSection section={section} key={index} />
      ))}
      <Footer footerLight />
    </Layout>
  );
}
export default CMSPage;

type Params = {
  params: {
    slug: string;
  };
  locale: string;
};

export type StaticPathsProps = {
  locales: string[];
  defaultLocale: string;
};

export async function getStaticPaths(context: StaticPathsProps) {
  // Get all pages from Strapi
  const pages: StrapiPage[] = await context.locales.reduce(
    async (currentPagesPromise: Promise<StrapiPage[]>, locale: string) => {
      const currentPages = await currentPagesPromise;
      const localePages = await fetchAPI("/pages", {
        locale,
        fields: ["slug", "locale"],
      });
      if (!localePages) return currentPages;
      return [...currentPages, ...filterStrapiPages(localePages.data)];
    },
    Promise.resolve([])
  );

  const paths = pages.map((page) => {
    const { slug, locale } = page.attributes;
    // Decompose the slug that was saved in Strapi
    const slugArray = !slug ? false : slug.split("/");

    return {
      params: { slug: slugArray },
      // Specify the locale to render
      locale,
    };
  });

  return { paths, fallback: true };
}

export async function getStaticProps({ params, locale }: Params) {
  const pageData = await fetchPageData(params.slug, locale);

  return {
    props: {
      ...(await serverSideTranslations(locale)),
      ...(pageData && { pageData }),
    },
    revalidate: config.cms.revalidate,
  };
}
