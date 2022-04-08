import { useKeycloak } from "@react-keycloak/web";
import { KeycloakProfile } from "keycloak-js";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Footer from "../../layout/Footer";
import Navbar from "../../layout/Header/Navbar";
import Layout from "../../layout/Layout";

function MyAccount() {
  const { keycloak, initialized } = useKeycloak();
  const { t } = useTranslation();

  const [userProfile, setUserProfile] = useState<undefined | KeycloakProfile>(
    undefined
  );
  const [fetching, setFetching] = useState(false);
  const [fetchError, setFetchError] = useState({ error: false, message: "" });

  useEffect(() => {
    setFetching(true);
    setFetchError({ error: false, message: "" });

    if (initialized) {
      keycloak
        .loadUserProfile()
        .then((res) => setUserProfile(res))
        .catch((error) => {
          let errorMessage = "Unable to fetch your account details";
          if (error instanceof Error) errorMessage = error.message;

          setFetchError({ error: true, message: errorMessage });
        })
        .finally(() => setFetching(false));
    } else {
      setFetching(false);
    }
  }, [keycloak, initialized]);

  return (
    <Layout>
      <Navbar navDark={undefined} />
      <div className="container ptb-60">
        {fetching ? (
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        ) : fetchError.error ? (
          <div className="alert alert-danger">{fetchError.message}</div>
        ) : userProfile ? (
          <div className="row">
            <div className="col-lg-12">
              <h4>{t("account_details")}</h4>
            </div>
            <div className="col-lg-4">
              <h6>{t("first_name")}</h6>
              <p>{userProfile.firstName || "N/A"}</p>
            </div>

            <div className="col-lg-4">
              <h6>{t("last_name")}</h6>
              <p>{userProfile.lastName || "N/A"}</p>
            </div>

            <div className="col-lg-4">
              <h6>{t("email_address")}</h6>
              <p>{userProfile.email || "N/A"}</p>
            </div>

            <div className="col-lg-4">
              <h6>{t("verified")}</h6>
              <p>{userProfile.emailVerified ? "Yes" : "No"}</p>
            </div>
          </div>
        ) : null}
      </div>
      <Footer footerLight style={undefined} footerGradient={undefined} />
    </Layout>
  );
}
export default MyAccount;
