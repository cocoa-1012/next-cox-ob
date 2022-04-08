import React from "react";
import EmptyContainer from "../../../components/common/EmptyContainer";
import { RenderLink } from "./common";
import Link from "next/link";
import { getLocalizations } from "./helpers";
import { useTranslation } from "next-i18next";
import {
  ComponentNavigationsCategoryLink,
  ComponentNavigationsDropdown,
  Enum_Componentnavigationscategorylink_Variant,
  Maybe,
} from "../../../generated/graphql";

const NavItemDropDown = ({ children }: { children: JSX.Element | string }) => {
  return (
    <a
      className="nav-link dropdown-toggle"
      href="/#"
      role="button"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      {children}
    </a>
  );
};

interface INestedItem extends ComponentNavigationsCategoryLink {
  parentSlug: string;
}

const NestedItem = (props: Maybe<INestedItem>) => {
  const { t, i18n } = useTranslation();
  if (!props) return null;
  const { icon, category, variant, parentSlug, page } = props;
  const data = !!category?.data ? category : page;
  const localization = getLocalizations(data, i18n.language);
  const slug = localization?.data?.attributes?.slug || "";
  const title = localization?.data?.attributes?.title || "";
  let path = "/";
  path += !!category?.data ? `${parentSlug}/${slug}` : slug;
  switch (variant) {
    case Enum_Componentnavigationscategorylink_Variant.Primary:
      return (
        <Link href={path}>
          <a className={"drop-heading-second"}>{title}</a>
        </Link>
      );
    case Enum_Componentnavigationscategorylink_Variant.ViewAll:
      return (
        <RenderLink
          path={path}
          icon={icon}
          text={t("nav_more_view_all")}
          withIcon={false}
        />
      );
    default:
      return (
        <RenderLink path={path} text={title} icon={icon} withIcon={true} />
      );
  }
};

const CategoryLinks = ({
  nestedLinks,
  parentSlug,
}: {
  nestedLinks: Maybe<Maybe<ComponentNavigationsCategoryLink>[]> | undefined;
  parentSlug: string;
}) => {
  if (!nestedLinks) {
    return <EmptyContainer />;
  }
  return (
    <>
      {nestedLinks.map((nested, index) => {
        return (
          <NestedItem
            id={nested?.id || ""}
            variant={nested?.variant}
            category={nested?.category}
            parentSlug={parentSlug}
            key={index}
            icon={nested?.icon}
            page={nested?.page}
          />
        );
      })}
    </>
  );
};

const Dropdown = ({ data }: { data: ComponentNavigationsDropdown }) => {
  const nestedLinks = data?.nestedLinks;
  const { i18n } = useTranslation();
  const localization = getLocalizations(data.page, i18n.language);
  const parentSlug = localization?.data?.attributes?.slug || "";
  const title = localization?.data?.attributes?.title || "";
  return (
    <li className="nav-item dropdown">
      <NavItemDropDown>{title}</NavItemDropDown>
      <div className="dropdown-menu border-0 rounded-custom shadow py-0 bg-white">
        <div className="dropdown-grid rounded-custom one-section">
          <div className="dropdown-grid-item rounded-custom">
            {/*<UnpinnedNavLinks />*/}
            <CategoryLinks nestedLinks={nestedLinks} parentSlug={parentSlug} />
          </div>
        </div>
      </div>
    </li>
  );
};

export default Dropdown;
