import { useTranslation } from "react-i18next";
import Icon from "../components/common/Icon";
import Meta from "../components/common/Meta";

const WrongPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Meta />
      <div className="vw-100 vh-100 d-flex flex-column align-items-center justify-content-center">
        <Icon icon={"fa-regular fa-brake-warning fa-8x"} />
        <h1 className="my-3">{t("wrong_message")}</h1>
      </div>
    </>
  );
};

export default WrongPage;
