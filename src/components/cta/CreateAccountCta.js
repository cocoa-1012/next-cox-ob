import Link from "../Link";
import { useTranslation, withTranslation } from "next-i18next";
import { getCTAClassname } from "./CTA";

const CreateAccountCta = ({ isPrimary }) => {
  const { t } = useTranslation();

  return (
    <>
      <Link to={"/signup"} className={getCTAClassname(isPrimary)}>
        {t("cta_create_account")}
      </Link>
    </>
  );
};

export default withTranslation()(CreateAccountCta);
