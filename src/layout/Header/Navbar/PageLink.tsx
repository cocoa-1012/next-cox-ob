import Link from "next/link";
import React from "react";
import { useTranslation } from "next-i18next";
import { getLocalizations } from "./helpers";
import { ComponentNavigationsPageLink } from "../../../generated/graphql";

const PageLink = ({ data }: { data: ComponentNavigationsPageLink }) => {
  const { i18n } = useTranslation();
  const localization = getLocalizations(data.page, i18n.language);
  const slug = localization?.data?.attributes?.slug || "";
  const title = localization?.data?.attributes?.title || "";
  return (
    <li>
      <Link href={`/${slug}`}>
        <a className="nav-link">{title}</a>
      </Link>
    </li>
  );
};

export default PageLink;
