import {
  articleQuery,
  categoriesQuery,
  categoryQuery,
  globalQuery,
  pageQuery,
} from "./gqlQuerys";

const STRAPI_URL =
  process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337";

const toQueryString = (object: { [key: string]: string }) => {
  return Object.keys(object)
    .map((key) => `${key}=${encodeURIComponent(object[key])}`)
    .join("&");
};

export function getStrapiURL(path: string) {
  return STRAPI_URL + path;
}

/**
 * Helper to make GET requests to Strapi API endpoints
 * @param {string} path Path of the API route
 * @param {Object} urlParamsObject URL params object, will be stringified
 * @param {RequestInit} options Options passed to fetch
 * @returns Parsed API call response
 */
export async function fetchAPI(
  path: string,
  urlParamsObject = {},
  options = {}
) {
  try {
    // Merge default and user options
    const mergedOptions = {
      headers: {
        "Content-Type": "application/json",
      },
      ...options,
    };

    // Build request URL
    const queryString = toQueryString(urlParamsObject);
    const requestUrl = `${getStrapiURL(
      `/api${path}${queryString ? `?${queryString}` : ""}`
    )}`;

    // Trigger API call
    const response = await fetch(requestUrl, mergedOptions);

    // Handle response
    if (!response.ok) {
      console.error(response.statusText);
      return null;
    }
    return await response.json();
  } catch (e) {
    console.error(e);
    return null;
  }
}

const gqlFetch = async (
  query: any,
  variables?: {
    slug?: string;
    locale: string;
    pageSlug?: string;
    category?: string;
    publicationState?: "PREVIEW" | "LIVE";
  }
) => {
  const gqlEndpoint = getStrapiURL("/graphql");
  const res = await fetch(gqlEndpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: getGqlBody(query, variables),
  });
  return res.json();
};

export type LocalProps = string;

const getGqlBody = (
  query: any,
  variables?: { slug?: string; locale: string }
) => {
  return JSON.stringify({
    query: query?.loc?.source?.body,
    ...(variables && {
      variables: {
        ...variables,
        slug: Array.isArray(variables.slug)
          ? variables.slug.join("/")
          : variables.slug,
        locale: variables.locale,
      },
    }),
  });
};

export const getPageData = async (
  params: {
    slug: string;
  },
  locale: string
) => {
  try {
    const pagesData = await gqlFetch(pageQuery, {
      slug: params.slug,
      locale,
    });
    // Make sure we found something, otherwise return null
    if (!pagesData?.data?.pages || pagesData?.data?.pages?.length === 0) {
      return null;
    }

    // Return the first item since there should only be one result per slug
    return pagesData.data.pages.data[0];
  } catch (e) {
    console.error(e);
    return null;
  }
};

export const getGlobalData = async () => {
  try {
    const globalData = await gqlFetch(globalQuery);
    return globalData.data;
  } catch (e) {
    console.error(e);
    return null;
  }
};

export const getCategory = async (
  params: { category: string },
  locale: string
) => {
  try {
    const categoryData = await gqlFetch(categoryQuery, {
      slug: params.category,
      locale,
    });
    // Make sure we found something, otherwise return null
    if (
      !categoryData?.data?.categories ||
      categoryData?.data?.categories?.data?.length === 0
    ) {
      return null;
    }

    // Return the first item since there should only be one result per slug
    return categoryData.data.categories.data[0];
  } catch (e) {
    console.error(e);
    return null;
  }
};

export const getCategories = async (locale: string) => {
  try {
    const categoriesData = await gqlFetch(categoriesQuery, {
      locale,
    });
    // Make sure we found something, otherwise return null
    if (
      !categoriesData?.data?.categories ||
      categoriesData?.data?.categories?.length === 0
    ) {
      return null;
    }

    return categoriesData.data.categories.data;
  } catch (e) {
    console.error(e);
    return null;
  }
};

export const getArticle = async (
  params: {
    article: string;
    category?: string;
    publicationState?: "PREVIEW" | "LIVE";
  },
  locale: string
) => {
  try {
    const articleData = await gqlFetch(articleQuery, {
      slug: params.article,
      category: params.category,
      locale,
      publicationState: params.publicationState,
    });
    // Make sure we found something, otherwise return null
    if (
      !articleData?.data?.articles ||
      articleData?.data?.articles?.length === 0
    ) {
      return null;
    }

    // Return the first item since there should only be one result per slug
    return articleData.data.articles.data[0];
  } catch (e) {
    console.error(e);
    return null;
  }
};
