import classNames from "classnames";
import { useTranslation } from "next-i18next";
import Link from "next/link";

import { useRouter } from "next/router";
import { CategoriesData } from "../../../types";

const CategoryList = ({ categories }: { categories: CategoriesData }) => {
  const router = useRouter();
  return (
    <div className="row justify-content-center text-center">
      <div className="col-xl-8">
        {categories.map((category) => {
          const { slug, title } = category?.attributes || {};
          return (
            <Link
              href={{
                pathname: "/learning-center/[category]",
                query: { category: slug },
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
  );
};

/** Learning Center page header */
const LearningCenterPageHeader = ({
  categories,
}: {
  categories?: CategoriesData;
}) => {
  const { t } = useTranslation();

  if (!categories || categories.length === 0) return null;

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
        <CategoryList categories={categories} />
      </div>
    </section>
  );
};

export default LearningCenterPageHeader;
