import Link from "next/link";
import { useTranslation } from "next-i18next";
import { getCTAClassname } from "./CTA";

const SubscribeCTA = ({ isPrimary }) => {
  const { t } = useTranslation("common");

  return (
    <>
      <Link href={"/subscribe"} className={getCTAClassname(isPrimary)}>
        {t("cta_subscribe")}
      </Link>
    </>
  );
};

export default SubscribeCTA;
