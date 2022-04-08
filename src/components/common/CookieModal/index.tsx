import Cookies from "js-cookie";
import React, { useContext, useEffect, useState } from "react";
import { useTranslation } from "next-i18next";
import {
  COOKIE_SETTINGS_EXPIRY,
  COOKIE_SETTINGS_KEY,
} from "../../../config/constants";
import { initializeGoogleAnalytics } from "../../../lib/analytics";
import { AppContext } from "../../../lib/contextLib";
import { CookieSettings } from "../../../types";
import Switch from "../form/Switch";
import Link from "../../Link";
import styles from "./CookieModal.module.scss";
import { getLocalizations } from "../../../layout/Header/Navbar/helpers";
import {
  ComponentNavigationsCookieModalLink,
  Maybe,
} from "../../../generated/graphql";

const CookieModalLinks = ({
  cookieModalLinks,
}: {
  cookieModalLinks?: Maybe<Array<Maybe<ComponentNavigationsCookieModalLink>>>;
}) => {
  const { t, i18n } = useTranslation();

  if (
    !cookieModalLinks ||
    (cookieModalLinks && cookieModalLinks.length === 0)
  ) {
    return null;
  }

  return (
    <div className="cookie-modal__links">
      <span>{t("cookie_modal_links")}</span>
      {cookieModalLinks.map((link, index) => {
        if (!link) {
          return null;
        }
        const localization = getLocalizations(link.page, i18n.language);
        const url = `/${localization?.data?.attributes?.slug || ""}`;
        return (
          <Link to={url} className="cookie-modal__link" key={index}>
            {localization?.data?.attributes?.title}
          </Link>
        );
      })}
    </div>
  );
};

const CookieModal = () => {
  const { t } = useTranslation();
  const context = useContext(AppContext);

  const { siteData } = context;
  useEffect(() => {
    const cookie = Cookies.get(COOKIE_SETTINGS_KEY);
    if (!cookie) {
      setShowModal(true);
    } else {
      initializeGoogleAnalytics();
    }
  }, []);

  const [showModal, setShowModal] = useState(false);
  const [cookieFormFields, setCookieFormFields] = useState<CookieSettings>({
    technicalCookies: true,
    analyticsCookies: false,
    marketingCookies: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setCookieFormFields({
      ...cookieFormFields,
      [e.target.name]: e.target.checked,
    });

  const handleAcceptAllCookies = () => {
    const cookies = {
      technicalCookies: true,
      analyticsCookies: true,
      marketingCookies: true,
    };
    Cookies.set(COOKIE_SETTINGS_KEY, JSON.stringify(cookies), {
      expires: COOKIE_SETTINGS_EXPIRY,
    });
    setShowModal(false);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    Cookies.set(COOKIE_SETTINGS_KEY, JSON.stringify(cookieFormFields), {
      expires: COOKIE_SETTINGS_EXPIRY,
    });

    if (cookieFormFields.analyticsCookies) {
      initializeGoogleAnalytics();
    }
    setShowModal(false);
  };

  if (!showModal) return null;

  const cookieModalLinks = siteData?.global?.data?.attributes?.cookieModalLinks;

  return (
    <div
      className={`fixed-bottom bottom-0 w-75 px-4 py-3 mx-auto shadow-sm rounded-top mb-4 rounded-custom custom-shadow ${styles.cookieModal}`}
    >
      <h3>{t("cookie_modal_title")}</h3>
      <p>{t("cookie_modal_subtitle")}</p>

      <CookieModalLinks cookieModalLinks={cookieModalLinks} />
      <form
        className="row gap-4 mt-4"
        onSubmit={handleFormSubmit}
        data-testid="cookie-modal-form"
      >
        <div className="col-lg-3 col-md-3">
          <Switch
            disabled
            name="technicalCookies"
            label={t("cookie_modal_technical_label")}
            checked={cookieFormFields.technicalCookies}
            onChange={handleInputChange}
          />
        </div>

        <div className="col-lg-3 col-md-3">
          <Switch
            name="analyticsCookies"
            label={t("cookie_modal_analytics_label")}
            checked={cookieFormFields.analyticsCookies}
            onChange={handleInputChange}
          />
        </div>

        <div className="col-lg-3 col-md-3">
          <Switch
            name="marketingCookies"
            label={t("cookie_modal_marketing_label")}
            checked={cookieFormFields.marketingCookies}
            onChange={handleInputChange}
          />
        </div>

        <div className="col-lg-12">
          <button
            type="submit"
            className="btn btn-outline-light me-3 my-3"
            data-testid="save-selection-button"
          >
            {t("cookie_modal_save_selection")}
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleAcceptAllCookies}
            data-testid="accept-all-button"
          >
            {t("cookie_modal_accept_all")}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CookieModal;
