import axios from "axios";
import { t } from "i18next";
import { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useParams, useSearchParams } from "react-router-dom";
import Meta from "../components/common/Meta";
import PaginationButtons from "../components/common/PaginationButtons";
import ArticlesPreview from "../components/sections/ArticlesPreview";
import LearningCenterPageHeader from "../components/sections/LearningCenterPageHeader";
import { DEFAULT_PAGE_NUMBER, DEFAULT_PAGE_SIZE } from "../config/constants";
import Footer from "../layout/Footer";
import Navbar from "../layout/Header/Navbar";
import Layout from "../layout/Layout";
import { config } from "../lib/configLib";
import { AppContext } from "../lib/contextLib";

/** Learning Center Page */
const LearningCenter = () => {
  const { category } = useParams();
  const context = useContext(AppContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const { i18n } = useTranslation();
  const language = i18n.language;

  let page = searchParams.get("page");
  const [currentPage, setCurrentPage] = useState(
    typeof page === "string" ? parseInt(page) : DEFAULT_PAGE_NUMBER
  );
  const [articles, setArticles] = useState(undefined);
  const [fetchingArticles, setFetchingArticles] = useState(false);

  const { siteData } = context;

  useEffect(() => {
    setFetchingArticles(true);

    const page = searchParams.get("page");

    const getArticlesEndpoint = () => {
      const url = new URL(
        `${config.cms.baseUrl}${config.cms.endpoints.page}/contentSearch`
      );
      const hostname = window.location.hostname;

      url.searchParams.append("domain", hostname);
      url.searchParams.append("language", language);
      url.searchParams.append(
        "pageNumber",
        page ? page.toString() : DEFAULT_PAGE_NUMBER.toString()
      );
      url.searchParams.append("pageSize", DEFAULT_PAGE_SIZE.toString());

      if (category) {
        url.searchParams.append("categorySlug", category);
      }

      return url.href;
    };

    const fetchAllArticles = async () => {
      const url = getArticlesEndpoint();

      try {
        const { data } = await axios.get(url);
        return data;
      } catch (error) {
        let errorMessage = "Unable to fetch articles";
        if (error instanceof Error) errorMessage = error.message;
        throw new Error(errorMessage);
      }
    };

    fetchAllArticles()
      .then((res) => {
        setArticles(res);
      })
      .catch((err) => alert(err.message))
      .finally(() => setFetchingArticles(false));
  }, [searchParams, language, category]);

  const handlePageChange = (page) => {
    if (page < DEFAULT_PAGE_NUMBER) {
      return;
    }
    searchParams.set("page", page.toString());
    setSearchParams(searchParams);
    setCurrentPage(page);
  };

  const getPages = () => {
    if (
      articles ||
      !articles.totalNumberOfUnpinnedArticles ||
      typeof articles.totalNumberOfUnpinnedArticles !== "number"
    ) {
      return 1;
    }

    const pages = Math.ceil(
      articles.totalNumberOfUnpinnedArticles / DEFAULT_PAGE_SIZE
    );

    return pages;
  };

  return (
    <Layout>
      <Meta
        title={`${t("learning_center_title")} | Justhome`}
        description={t("learning_center_subtitle")}
      />
      <Navbar />
      <LearningCenterPageHeader categories={siteData.categories} />

      <div className="masonary-blog-section ptb-60">
        <div className="container">
          {fetchingArticles ? (
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          ) : (
            <>
              {articles ? (
                <>
                  {!articles.pinned && !articles.other ? (
                    <p>{t("error_no_articles_found")}</p>
                  ) : null}
                  {articles.pinned ? (
                    <ArticlesPreview pinned links={articles.pinned} />
                  ) : null}

                  {articles.other ? (
                    <ArticlesPreview links={articles.other} />
                  ) : null}

                  {articles.totalNumberOfUnpinnedArticles ? (
                    <PaginationButtons
                      currentPage={currentPage}
                      onPageChange={handlePageChange}
                      pages={getPages()}
                    />
                  ) : null}
                </>
              ) : null}
            </>
          )}
        </div>
      </div>

      <Footer footerLight />
    </Layout>
  );
};

export default LearningCenter;
