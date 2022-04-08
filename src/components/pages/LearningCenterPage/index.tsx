import React, { useContext } from "react";
import { t } from "i18next";
import LearningCenterPageHeader from "../../sections/LearningCenterPageHeader";
import { AppContext } from "../../../lib/contextLib";
import ArticlesPreview from "../../sections/ArticlesPreview";
// import PaginationButtons from "../../common/PaginationButtons";
import EmptyContainer from "../../common/EmptyContainer";

const ArticleList = () => {
  const context = useContext(AppContext);
  const articles = context.articles;

  if (!articles) {
    return <EmptyContainer />;
  }
  return (
    <div className="masonary-blog-section ptb-60">
      <div className="container">
        <>
          {!articles.pinned.length && !articles.other.length && (
            <p>{t("error_no_articles_found")}</p>
          )}
          {!!articles.pinned.length && (
            <ArticlesPreview links={articles.pinned} pinned />
          )}

          {!!articles.other.length && (
            <ArticlesPreview links={articles.other} pinned={false} />
          )}

          {/*{articles.totalNumberOfUnpinnedArticles ? (*/}
          {/*    <PaginationButtons*/}
          {/*        currentPage={currentPage}*/}
          {/*        onPageChange={handlePageChange}*/}
          {/*        pages={getPages()}*/}
          {/*    />*/}
          {/*) : null}*/}
        </>
      </div>
    </div>
  );
};

const LearningCenterPage = () => {
  const context = useContext(AppContext);
  return (
    <>
      <LearningCenterPageHeader categories={context.categoriesData} />
      <ArticleList />
    </>
  );
};

export default LearningCenterPage;
