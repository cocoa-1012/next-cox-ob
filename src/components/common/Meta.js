import React, { useContext } from "react";
// import { Helmet } from "react-helmet-async";
import { AppContext } from "../../lib/contextLib";

const SiteMeta = ({ title, description }) => {
  const context = useContext(AppContext);

  const getTitle = () => {
    return title || context?.siteData?.title;
  };

  const getDescription = () => {
    return description || context?.siteData?.description;
  };

  // const getScript = () => {
  //   if (context && context.siteData) return context.siteData.footer_include;
  // };

  return (
    <
      // script={[
      //   {
      //     type: "text/javascript",
      //     innerHTML: getScript(),
      //   },
      // ]}
    >
      <title>{getTitle()}</title>
      <meta name="description" content={getDescription()} />
    </>
  );
};

export default SiteMeta;
