import React, { useContext } from "react";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { AppContext } from "../../lib/contextLib";
import EmptyContainer from "../../components/common/EmptyContainer";
import { getLocalizations } from "../Header/Navbar/helpers";
import {
  FooterLinksDynamicZone,
  Maybe,
  PageEntityResponse,
} from "../../generated/graphql";

const FooterLink = ({ page }: { page: Maybe<PageEntityResponse> }) => {
  const { i18n } = useTranslation();
  const localization = getLocalizations(page, i18n.language);
  const path = localization?.data?.attributes?.slug || "";
  const title = localization?.data?.attributes?.title;
  return (
    <li className="col-md-4 col-lg-4 text-black-50">
      <Link href={`/${path}`}>
        <a className="text-decoration-none my-2">{title}</a>
      </Link>
    </li>
  );
};

const FooterLinks = () => {
  const context = useContext(AppContext);
  const footer = context?.siteData?.footer;
  if (!footer?.data) return <EmptyContainer />;
  return (
    <ul className="list-unstyled footer-nav-list mb-lg-0 row">
      {footer.data?.attributes?.links?.map(
        (link: Maybe<FooterLinksDynamicZone>, index: number) => {
          if (
            link?.__typename === "ComponentNavigationsPageLink" &&
            link?.page
          ) {
            return <FooterLink key={link.id || index} page={link.page} />;
          }
          return null;
        }
      )}
    </ul>
  );
};

export default FooterLinks;
