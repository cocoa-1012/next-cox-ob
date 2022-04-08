import { createContext } from "react";
import { ArticleData, CategoriesData, PageData, SiteData } from "../types";

interface ContextValue {
  [x: string]: any;
  siteData?: SiteData | null;
  categoriesData?: CategoriesData;
  pageData?: PageData;
  articleData?: ArticleData;
}
const defaultVal: ContextValue = {
  isAuthenticated: false,
  siteData: null,
  setUserAuthenticated: () => {},
  setProviderValue: () => {},
};
export const AppContext = createContext(defaultVal);
