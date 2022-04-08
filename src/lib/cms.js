import { config } from "./configLib";
import { onError } from "./errorLib";
// import { getAsyncRequest } from "../api";
import {
  ARTICLE_PAGE_ROUTE,
  LEARNING_CENTER_ROUTE,
  LEARNING_CENTER_WITH_CATEGORY_ROUTE,
  CALCULATOR_ROUTE,
} from "../config/routes";
import { generatePath } from "react-router-dom";
import i18next from "i18next";
import { getGlobalData, getPageData } from "../api/strapi";

export function getLogo(siteData) {
  if (!siteData) {
    return;
  }
  return getFirstImageOriginal(siteData.images, "LOGO");
}

export function getInverseLogo(siteData) {
  if (!siteData) {
    return;
  }
  return getFirstImageOriginal(siteData.images, "LOGO_INVERSE");
}

export function getFirstImageOriginal(images, role) {
  return getFirstImage(images, role, "original");
}

export function getFirstImageBig(images, role) {
  return getFirstImage(images, role, "big");
}

export function getFirstImageThumbnail(images, role) {
  return getFirstImage(images, role, "thumbnail");
}

function getFirstImage(images, role, type) {
  const FIRST_IMAGE = 0;
  let image = images?.[role]?.[FIRST_IMAGE];
  if (!image) {
    return;
  }
  return {
    alt: image.altText,
    url: config.imageBaseUrl + image[type],
  };
}

// function getSiteDataURL(language) {
//   return getDataURL(language, config.cms.endpoints.site);
// }

/**
 * Builds the url for a learning center category
 * @param {string} categorySlug Articles category slug
 * @returns {string} Learning center url. If a category is passed, the url contains the category slug
 */
export function buildLearningCenterCategoryURL(categorySlug) {
  if (!categorySlug) {
    return generatePath(LEARNING_CENTER_ROUTE, {
      lang: i18next.language,
    });
  }

  return generatePath(LEARNING_CENTER_WITH_CATEGORY_ROUTE, {
    lang: i18next.language,
    category: categorySlug,
  });
}

/**
 * Builds the url for a learning center article
 * @param {string} categorySlug Article category slug
 * @param {string} articleSlug Article slug
 * @returns {string} Article url containing the category slug and the article slug
 */
export function buildLearningCenterArticleURL(categorySlug, articleSlug) {
  return generatePath(ARTICLE_PAGE_ROUTE, {
    lang: i18next.language,
    category: categorySlug,
    article: articleSlug,
  });
}

export function buildCalculatorURL(slug) {
  return generatePath(CALCULATOR_ROUTE, {
    lang: i18next.language,
    name: slug,
  });
}

/**
 * Returns the pathname without the :lang parameter
 * @param {string} path Page url pathname
 * @returns {string}
 */
export function getPagePathWithoutLanguage(path) {
  const newPath = path.split("/").slice(2).join("/");
  return `/${newPath}`;
}

/**
 * Returns the language locale id from the given path
 * @param {string} path Page url pathname
 * @returns {string}
 */
export function getLanguageFromPath(path) {
  const LANGUAGE = 1;
  return path.split("/")[LANGUAGE];
}

// function getPageDataURL(language, pageInfo) {
//   if (!pageInfo) {
//     return null;
//   }
//   let pagePath;
//   switch (pageInfo.pageType) {
//     case "HOME":
//       return getDataURL(language, config.cms.endpoints.home);
//
//     case "INFO":
//       pagePath = getPagePathWithoutLanguage(pageInfo.pagePath);
//       return getDataURL(language, config.cms.endpoints.page + pagePath);
//     case "CALCULATOR":
//       pagePath = getPagePathWithoutLanguage(pageInfo.pagePath);
//       return getDataURL(language, config.cms.endpoints.page + pagePath);
//     case "CONTENT":
//       const pagePathParts = pageInfo.pagePath.split("/");
//       const contentPathSlug = pagePathParts[pagePathParts.length - 1];
//
//       const contentPath = `/content/${contentPathSlug}`;
//       return getDataURL(language, config.cms.endpoints.page + contentPath);
//     case "STRAPI":
//       const strapiUrl = pageInfo.pagePath.replace(`/${language}/strapi/`, "");
//       return strapiUrl === `/${language}/strapi` ? "/" : strapiUrl;
//     default:
//       console.warn("page type unknown ..." + pageInfo.pageType);
//       return null;
//   }
// }

// function getDataURL(language, path) {
//   const devHosts = ["localhost", "preview.ui.dev.swiftbrick.de"];
//   const hostname = devHosts.includes(window.location.hostname)
//     ? "ui.dev.swiftbrick.de"
//     : window.location.hostname;
//
//   return path + "?domain=" + hostname + "&language=" + language;
// }

const checkFetchError = (data) => {
  data.forEach((item) => {
    if (item?.error) {
      onError(item.error);
    }
  });
};

export async function fetchPageData(slug, locale) {
  const pageData = await getPageData(
    {
      slug: slug || "/",
    },
    locale
  );
  checkFetchError([pageData]);
  return pageData?.error ? null : pageData;
}

export async function fetchSiteData() {
  const siteData = await getGlobalData();
  checkFetchError([siteData]);

  return siteData?.error ? null : siteData;
}
