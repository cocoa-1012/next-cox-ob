import classNames from "classnames";
import { useTranslation } from "next-i18next";
import Link from "next/link";

import EmptyContainer from "../../common/EmptyContainer";
import { useRouter } from "next/router";

/** Learning Center page header */
const LearningCenterPageHeader = ({ categories }) => {
  const { t } = useTranslation();

  const router = useRouter();
  if (!categories || categories.length === 0) return <EmptyContainer />;

  return (
    <section className="page-header position-relative overflow-hidden ptb-120 bg-dark">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-12">
            <div className="section-heading text-center">
              <h1 className="display-5 fw-bold">
                {t("learning_center_title")}
              </h1>
              <p className="lead mb-0">{t("learning_center_subtitle")}</p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center text-center">
          <div className="col-xl-8">
            {categories.map((category) => {
              const { slug, title, page } = category?.attributes || {};
              const pageSlug = page?.data?.attributes?.slug || "/";
              return (
                <Link
                  href={{
                    pathname: "/[pageSlug]/[slug]",
                    query: { slug, pageSlug },
                  }}
                  key={slug}
                >
                  <a
                    className={classNames("btn btn-pill btn-sm m-2", {
                      "btn-primary": router?.query?.category === slug,
                      "btn-soft-primary": router?.query?.category !== slug,
                    })}
                  >
                    {title}
                  </a>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningCenterPageHeader;
