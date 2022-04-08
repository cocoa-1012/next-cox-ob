import i18next from "i18next";
import { generatePath } from "react-router-dom";
import {
  ARTICLE_PAGE_ROUTE,
  LEARNING_CENTER_ROUTE,
  LEARNING_CENTER_WITH_CATEGORY_ROUTE,
} from "../../config/routes";
import {
  buildLearningCenterCategoryURL,
  buildLearningCenterArticleURL,
  getLanguageFromPath,
  getPagePathWithoutLanguage,
} from "../cms";

describe("buildLearningCenterCategoryURL function", () => {
  beforeEach(() => {
    i18next.init();
    i18next.changeLanguage("en");
  });

  const categorySlug = "rent-or-buy";
  const urlWithCategory = generatePath(LEARNING_CENTER_WITH_CATEGORY_ROUTE, {
    lang: "en",
    category: categorySlug,
  });
  const urlWithoutCategory = generatePath(LEARNING_CENTER_ROUTE, {
    lang: "en",
  });

  it("Returns the learning center with a category url if a category is passed", () => {
    expect(buildLearningCenterCategoryURL(categorySlug)).toMatch(
      urlWithCategory
    );
  });

  it("Returns the learning center url if a category is not passed", () => {
    expect(buildLearningCenterCategoryURL()).toMatch(urlWithoutCategory);
  });
});

describe("buildLearningCenterArticleURL", () => {
  const categorySlug = "rent-or-buy";
  const articleSlug = "how-to-finance";
  const expectedUrl = generatePath(ARTICLE_PAGE_ROUTE, {
    lang: "en",
    category: categorySlug,
    article: articleSlug,
  });

  it("Returns the learning center with a category url if a category is passed", () => {
    expect(buildLearningCenterArticleURL(categorySlug, articleSlug)).toMatch(
      expectedUrl
    );
  });
});

describe("getLanguageFromPath function", () => {
  const language = "en";
  const path = `/${language}/learning-center`;

  it("Returns the current language locale id", () => {
    expect(getLanguageFromPath(path)).toMatch(language);
  });
});

describe("getPagePathWithoutLanguage function", () => {
  const language = "en";
  const path = `/${language}/learning-center`;
  const pathWithoutLanguage = `/learning-center`;

  it("Returns the path without the language parameter", () => {
    expect(getPagePathWithoutLanguage(path)).toMatch(pathWithoutLanguage);
  });
});
