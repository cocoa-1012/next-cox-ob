import React from "react";
import Layout from "../../layout/Layout";
import SEO from "../../components/SEO";
import { PageData } from "../../types";
import ComingSoonScreen from "../../components/ComingSoonScreen/ComingSoonScreen";
import { fetchPageData } from "../../lib/cms";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { config } from "../../lib/configLib";

const ComingSoon = ({ pageData }: { pageData: PageData }) => {
  return (
    <Layout>
      <SEO seoData={pageData?.attributes?.seo} />
      <ComingSoonScreen />
    </Layout>
  );
};

export default ComingSoon;

export async function getStaticProps({ locale }: { locale: string }) {
  const pageData = await fetchPageData("coming-soon", locale);

  return {
    props: {
      ...(await serverSideTranslations(locale)),
      ...(pageData && pageData),
    },
    revalidate: config.cms.revalidate,
  };
}
