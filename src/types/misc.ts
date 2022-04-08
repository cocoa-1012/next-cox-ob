import {
  ArticleEntity,
  CategoryEntity,
  Maybe,
  PageEntity,
  Query,
} from "../generated/graphql";

export interface SiteData {
  navbar?: Query["navbar"];
  footer?: Query["footer"];
  global?: Query["global"];
}

export type CategoryData = Maybe<CategoryEntity>;
export type CategoriesData = Array<CategoryEntity>;
export type PageData = Maybe<PageEntity>;
export type ArticleData = Maybe<ArticleEntity>;

export interface CookieSettings {
  technicalCookies: boolean;
  analyticsCookies: boolean;
  marketingCookies: boolean;
}
