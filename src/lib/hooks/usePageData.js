import i18next from "i18next";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { fetchPageData } from "../cms";

export default function usePageData(pageType) {
  const [pageData, setPageData] = useState(null);
  const { pathname } = useLocation();
  const currentLanguage = i18next.language;

  useEffect(() => {
    async function fetchData() {
      if (!currentLanguage) return;
      if (pathname === "/") return;

      try {
        const result = await fetchPageData(pathname, currentLanguage);
        setPageData(result);
      } catch (e) {
        console.log(e);
      }
    }

    fetchData();
  }, [pageType, currentLanguage, pathname]);

  return pageData;
}
