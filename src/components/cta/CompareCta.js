import Link from "../Link";
import { useTranslation, withTranslation } from "next-i18next";
import { getCTAClassname } from "./CTA";

const CompareCTA = ({ isPrimary }) => {
  const { t } = useTranslation();

  return (
    <>
      <Link to={"/compare"} className={getCTAClassname(isPrimary)}>
        {t("cta_compare")}
      </Link>
    </>
  );
};

export default withTranslation()(CompareCTA);
