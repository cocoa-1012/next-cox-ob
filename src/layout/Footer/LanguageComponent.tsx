import React, { useContext } from "react";
import { AppContext } from "../../lib/contextLib";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { Maybe } from "../../generated/graphql";

const LanguageComponent = () => {
  const context = useContext(AppContext);
  const router = useRouter();
  const { i18n } = useTranslation();
  const chooseLanguage = (
    event: React.MouseEvent<HTMLElement>,
    localeId: Maybe<string> | undefined
  ) => {
    event.preventDefault();
    i18n.changeLanguage(localeId || "de");

    let nextPath = router.asPath;

    const replacePath = (arr: any[], path: string) => {
      let tempPath = path;
      arr.forEach((data) => {
        const localizationData = data?.attributes?.localizations?.data;
        if (localizationData) {
          const nextLocal = localizationData?.find(
            ({ attributes }: { attributes: { locale: string } }) =>
              attributes.locale === localeId
          );
          const currentSlug = data?.attributes?.slug;
          const nextSlug = nextLocal?.attributes?.slug;
          if (currentSlug && nextSlug) {
            tempPath = tempPath.replace(currentSlug, nextSlug);
          }
        }
      });
      return tempPath;
    };

    const localizationPageData = context?.pageData;
    const localizationCategoryData = context?.categoryData;
    const localizationArticleData = context?.articleData;
    nextPath = replacePath(
      [localizationPageData, localizationCategoryData, localizationArticleData],
      nextPath
    );
    router.push(nextPath, nextPath, { locale: localeId || "de" });
    // navigate(nextPath);
  };

  const getLanguageChoices = () => {
    return context?.siteData?.global?.data?.attributes?.languages || [];
  };

  return (
    <>
      {getLanguageChoices().map((language) => {
        return (
          <a
            href="#"
            key={language?.localeId}
            onClick={(event: React.MouseEvent<HTMLElement>) =>
              chooseLanguage(event, language?.localeId)
            }
            className="dropdown-link flex align-items-center my-2"
          >
            <span>
              <img
                src={"/assets/img/language/" + language?.countryCode + ".png"}
                width="35px"
                alt="flag"
              />
            </span>
            <div className="drop-title mx-2">{language?.displayName}</div>
          </a>
        );
      })}
    </>
  );
};

export default LanguageComponent;
