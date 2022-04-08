import Link from "../Link";
import { useTranslation, withTranslation } from "next-i18next";
import React from "react";
import { LEARNING_CENTER_ROUTE } from "../../config/routes";

interface Props {
  isPrimary?: boolean;
  displayAsLink?: boolean;
}
const LearningCenterCta: React.FC<Props> = ({ isPrimary, displayAsLink }) => {
  const { t } = useTranslation();

  return (
    <>
      <Link
        to={LEARNING_CENTER_ROUTE}
        className={
          displayAsLink
            ? "read-more-link text-decoration-none"
            : isPrimary
            ? "btn btn-primary me-3"
            : "btn btn-outline-light mt-4 mt-md-0"
        }
      >
        {t("cta_learning")} <i className="far fa-arrow-right ms-2" />
      </Link>
    </>
  );
};

export default withTranslation()(LearningCenterCta);
