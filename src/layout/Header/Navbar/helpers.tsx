import { LocalProps } from "../../../api/strapi";
import {
  CategoryEntity,
  CategoryEntityResponse,
  Maybe,
  PageEntity,
  PageEntityResponse,
} from "../../../generated/graphql";

type Localization =
  | Maybe<PageEntityResponse>
  | Maybe<CategoryEntityResponse>
  | undefined;
export const getLocalizations = (
  obj: Localization,
  locale: LocalProps
): Localization => {
  if (!obj || !obj.data) return null;
  if (obj.data?.attributes?.locale === locale) {
    return obj;
  }
  const localizations: Array<PageEntity> | Array<CategoryEntity> | Array<any> =
    obj?.data?.attributes?.localizations?.data || [];

  const localization = localizations.find((localization) => {
    return localization?.attributes?.locale === locale;
  });

  return localization ? { data: localization } : obj;
};
