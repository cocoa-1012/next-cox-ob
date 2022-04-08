import React, { useEffect } from "react";
import i18next from "../lib/localization/i18next";
import { AppContext } from "../lib/contextLib";
import { SITE_DATA } from "./data/siteData";

const CreateTemplate = ({
  children,
  providerProps = { value: { siteData: SITE_DATA } },
}) => {
  i18next.init();
  const addBootstrapScripts = () => {
    const tag = document.createElement("script");
    tag.async = true;
    tag.id = "bootstrap_id";
    tag.src = "assets/js/bootstrap.bundle.min.js";
    const body = document.getElementsByTagName("body")[0];
    body.appendChild(tag);
  };
  const clearBootstrapScripts = () => {
    const script = document.getElementById("bootstrap_id");
    if (script) {
      script.remove();
    }
  };
  useEffect(() => {
    addBootstrapScripts();
    return () => clearBootstrapScripts();
  }, []);
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap"
        rel="stylesheet"
      />
      <link rel="stylesheet" href="assets/css/bootstrap.min.css" />
      <link rel="stylesheet" href="assets/css/fontawesome-all.min.css" />
      <link rel="stylesheet" href="assets/css/style.css" />

      <AppContext.Provider {...providerProps}>{children}</AppContext.Provider>
    </>
  );
};

export default CreateTemplate;
