// the config is filled at build time from the environment variables
// a varible e.g. would be defined as "NEXT_PUBLIC_CMS_HOSTNAME"
// these variables are defined in ".env" files, but are overwritten from machine environment
// see: https://create-react-app.dev/docs/adding-custom-environment-variables/
export const config = {
  cms: {
    revalidate: 60,
    baseUrl: process.env.NEXT_PUBLIC_CMS_HOSTNAME_BASE_URL,
    endpoints: {
      site: process.env.NEXT_PUBLIC_CMS_SITE_PATH,
      home: process.env.NEXT_PUBLIC_CMS_HOME_PAGE_PATH,
      page: process.env.NEXT_PUBLIC_CMS_PAGE_PATH,
    },
  },
  imageBaseUrl:
    process.env.NEXT_PUBLIC_STORYBOOK === "true"
      ? "/assets/img"
      : process.env.NEXT_PUBLIC_IMAGE_BASE_URL,
  defaults: {
    language: {
      countryCode: "DE",
      defaultForSite: false,
      displayName: "Deutsch",
      localeId: "de",
    },
  },
};
