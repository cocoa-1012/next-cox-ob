import App from "next/app";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
// import { ReactKeycloakProvider } from "@react-keycloak/web";

import "swiper/swiper.min.css";
import "react-modal-video/scss/modal-video.scss";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
// Import Swiper styles

import { AppContext } from "../lib/contextLib";
import { fetchSiteData } from "../lib/cms";
import CookieModal from "../components/common/CookieModal";
import ErrorBoundary from "../ErrorBoundary";
// import keycloak from "../lib/keycloak";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // <ReactKeycloakProvider
    //     authClient={keycloak}
    //     initOptions={{
    //         silentCheckSsoFallback: false,
    //         silentCheckSsoRedirectUri:
    //             window.location.origin + "/silent-check-sso.html",
    //     }}
    // >
    <ErrorBoundary>
    <AppContext.Provider
      value={{
        ...pageProps,
      }}
    >
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
        <CookieModal />
      </QueryClientProvider>
    </AppContext.Provider>
    </ErrorBoundary>
    // </ReactKeycloakProvider>
  );
}

MyApp.getInitialProps = async (appContext: any) => {
  // Calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext);
  const siteData = await fetchSiteData();
  return {
    ...appProps,
    pageProps: {
      siteData,
    },
  };
};

export default appWithTranslation(MyApp);
