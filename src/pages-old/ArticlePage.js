import ArticlePageLayout from "../layout/ArticlePageLayout";
import Footer from "../layout/Footer";
import Navbar from "../layout/Header/Navbar";
import Layout from "../layout/Layout";
import Meta from "../components/common/Meta";
import usePageData from "../lib/hooks/usePageData";

const ArticlePage = () => {
  const pageData = usePageData("CONTENT");

  return (
    <Layout>
      {pageData && (
        <Meta description={pageData.subTitle} title={pageData.title} />
      )}
      <Navbar />
      <ArticlePageLayout pageData={pageData} />
      <Footer footerLight />
    </Layout>
  );
};

export default ArticlePage;
