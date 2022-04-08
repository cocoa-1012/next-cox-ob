import { useTranslation, withTranslation } from "react-i18next";
import { getCTAClassname } from "../CTA";
import { APPLICATION_PROCESS_ROUTE } from "../../../config/routes";
import Link from "../../Link";

type Props = {
  isPrimary?: boolean;
};

const ApplicationProcessCTA = ({ isPrimary }: Props) => {
  const { t } = useTranslation();

  return (
    <>
      <Link
        to={APPLICATION_PROCESS_ROUTE}
        className={getCTAClassname(isPrimary)}
      >
        {t("cta_application_process")}
      </Link>
    </>
  );
};

export default withTranslation()(ApplicationProcessCTA);
