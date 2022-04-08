import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Meta from "../components/common/Meta";

const NotFound = () => {
  const { t } = useTranslation();
  return (
    <>
      <Meta />
      <section
        data-testid="not-found-page"
        className="vh-100 error-section d-flex align-items-center"
      >
        <div className="container">
          <div className="row flex-md-row-reverse col-12 align-items-center">
            <div className="col-md-12 col-lg-6">
              <img
                className={"img-fluid screen-img mb-120"}
                alt="404"
                src="assets/img/404.png"
              />
            </div>
            <div className="col-md-12 col-lg-6">
              <h1 className="display-5 fw-bold text-uppercase pb-60">
                {t("error_page_not_found_title")}
              </h1>

              <Link to="/" className="btn btn-primary mt-4">
                {t("link_back_home")}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFound;
