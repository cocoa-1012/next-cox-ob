import React, { useContext } from "react";
import EmptyContainer from "../../components/common/EmptyContainer";
import { AppContext } from "../../lib/contextLib";
import {
  ComponentNavigationsSocialLink,
  Enum_Componentnavigationssociallink_Icon,
  Maybe,
} from "../../generated/graphql";

const getSocialIcon = (
  icon?: Maybe<Enum_Componentnavigationssociallink_Icon>
) => {
  if (!icon) return "";
  const SOCIAL_ICONS = {
    FACEBOOK: "fa-facebook-f",
    INSTAGRAM: "fa-instagram",
    TWITTER: "fa-twitter",
    YOUTUBE: "fa-youtube",
    LINKEDIN: "fa-linkedin",
  };
  return SOCIAL_ICONS[icon] ? SOCIAL_ICONS[icon] : "";
};

const SocialLink = (props: Maybe<ComponentNavigationsSocialLink>) => {
  if (!props?.url) return <EmptyContainer />;
  const { url, icon } = props;

  const socialIcon = getSocialIcon(icon);
  const href = url.includes("http") ? url : `https://${url}`;
  return (
    <li className="list-inline-item">
      <a href={href} target={"_blank"} rel="noreferrer">
        <i className={"fab " + socialIcon} />
      </a>
    </li>
  );
};

const SocialLinks = () => {
  const context = useContext(AppContext);
  const socialLinks =
    context?.siteData?.footer?.data?.attributes?.socialLinks || [];
  return (
    <ul className="list-unstyled list-inline footer-social-list mb-0">
      {socialLinks.map(
        (link: Maybe<ComponentNavigationsSocialLink>, index: number) => {
          return (
            <SocialLink
              key={index}
              id={link?.id || ""}
              url={link?.url}
              icon={link?.icon}
            />
          );
        }
      )}
    </ul>
  );
};

export default SocialLinks;
