import React, { useContext } from "react";
import { useTranslation } from "next-i18next";
import SocialLinks from "../../layout/Footer/SocialLinks";
import { AppContext } from "../../lib/contextLib";
import CmsImage from "../common/CmsImage";
import CTA from "../cta/CTA";
import Link from "../Link";

const CTAContainer = () => {
  const { t } = useTranslation();
  return (
    <div className="row px-3 pb-5 mb-5 pb-lg-0 mb-lg-0 max-vw-100">
      <div className="col-lg-12 col-md-12">
        <div className="subscribe-info-wrap position-relative z-2">
          <div className="section-heading">
            <h2>{t("coming_soon_title")}</h2>
            <p>{t("coming_soon_sub_title")}</p>
          </div>
          <CTA ctaType={"COMING_SOON_ALERT"} />
        </div>
      </div>
    </div>
  );
};

const ComingSoonScreen = () => {
  const context = useContext(AppContext);
  const { t } = useTranslation();
  return (
    <div className="min-vh-100 flex-column d-flex align-items-center container">
      <div className="width-100-percent justify-content-start p-3">
        <Link to="/">
          <CmsImage
            image={context?.siteData?.global?.data?.attributes?.logo}
            className="nav-logo"
          />
        </Link>
      </div>
      <div className="flex-lg-grow-1 align-items-lg-center d-flex">
        <div className="row flex-column-reverse flex-lg-row align-items-lg-center">
          <div className={"col-lg-4 col-md-12"}>
            <CTAContainer />
          </div>
          <div className={"col-lg-8 col-md-12"}>
            <div className="position-relative d-flex justify-content-center flex-column flex-lg-row align-items-center">
              <img
                src="/assets/img/kommt-bald.png"
                alt=""
                className="coming-soon image img-fluid"
              />
              <h1 className={"d-flex coming-soon title"}>{t("coming_soon")}</h1>
            </div>
          </div>
        </div>
      </div>

      <div className={"width-100-percent p-3"}>
        <SocialLinks />
      </div>
    </div>
  );
};

export default ComingSoonScreen;
