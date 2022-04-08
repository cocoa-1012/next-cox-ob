import { useContext } from "react";
import { AppContext } from "../../../lib/contextLib";
import EmptyContainer from "../../../components/common/EmptyContainer";
import Dropdown from "./Dropdown";
import PageLink from "./PageLink";

import { Maybe, NavbarLinksDynamicZone } from "../../../generated/graphql";

enum TYPENAME {
  "PAGE_LINK" = "ComponentNavigationsPageLink",
  "DROPDOWN" = "ComponentNavigationsDropdown",
}

const NavigationComponent = ({
  data,
}: {
  data: Maybe<NavbarLinksDynamicZone>;
}) => {
  switch (data?.__typename) {
    case TYPENAME.DROPDOWN:
      return <Dropdown data={data} />;
    case TYPENAME.PAGE_LINK:
      return <PageLink data={data} />;
    default:
      return null;
  }
};

const NavLinks = () => {
  const context = useContext(AppContext);
  const navbarLinks = context?.siteData?.navbar?.data?.attributes?.links;

  if (!navbarLinks) return <EmptyContainer />;

  return (
    <ul className="nav col-12 col-md-auto justify-content-center main-menu">
      {navbarLinks.map((data, index: number) => (
        <NavigationComponent data={data} key={index} />
      ))}
    </ul>
  );
};

export default NavLinks;
