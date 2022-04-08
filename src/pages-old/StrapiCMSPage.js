import React from "react";
import Meta from "../components/common/Meta";
import Footer from "../layout/Footer";
import Navbar from "../layout/Header/Navbar";
import Layout from "../layout/Layout";
import usePageData from "../lib/hooks/usePageData";
import StrapiSection from "../components/sections/StrapiSection";
import NotFound from "./NotFound";

function StrapiCMSPage({ pageType }) {
  const pageData = usePageData(pageType);

  if (pageData?.sections?.length === 0) {
    return <NotFound />;
  }

  return (
    <Layout>
      {pageData && (
        <Meta description={pageData.subTitle} title={pageData.title} />
      )}
      <Navbar />
      {pageData &&
        pageData.sections.map((section, index) => (
          <StrapiSection section={section} key={index} />
        ))}
      <Footer footerLight pageData={pageData} />
    </Layout>
  );
}
export default StrapiCMSPage;
