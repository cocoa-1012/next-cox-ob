import classNames from "classnames";
import i18next from "i18next";

export const getLinkPath = (link) => {
  switch (link.type) {
    case "INFO":
      return `/${i18next.language}/info/${link.slug}`;
    default:
      return `/${i18next.language}/${link.slug || ""}`;
  }
};

export const DEFAULT_ICON = "fas fa-check-circle text-primary";
export const TYPE_OF_ICONS = {
  HOUSE: "HOUSE",
  FACE_VIEWFINDER: "FACE_VIEWFINDER",
  FILE_CERTIFICATE: "FILE_CERTIFICATE",
  LIGHTBULB: "LIGHTBULB",
  LIST_CHECK: "LIST_CHECK",
  SMILE: "SMILE",
  SIGNATURE: "SIGNATURE",
  CHECKMARK: "CHECKMARK",
  HOUSE_HEART: "HOUSE_HEART",
  GLOBE: "GLOBE",
  COMMENTS: "COMMENTS",
  MAGNIFYING_GLASS_LOCATION: "MAGNIFYING_GLASS_LOCATION",
  LAPTOP: "LAPTOP",
  USER: "USER",
  THUMBS_UP: "THUMBS_UP",
  BOOK_USER: "BOOK_USER",
  HOUSE_USER: "HOUSE_USER",
  STEERING_WHEEL: "STEERING_WHEEL",
  DESKTOP: "DESKTOP",
  MONEY_BILLS: "MONEY_BILLS",
  HOUSE_TWO: "HOUSE_TWO",
  PIGGY_BANK: "PIGGY_BANK",
  HOURGLASS: "HOURGLASS",
  SIGN_POST: "SIGN_POST",
  HOUSE_LAPTOP: "HOUSE_LAPTOP",
};
export const LIST_OF_ICONS = {
  [TYPE_OF_ICONS.HOUSE]: "fad fa-house fa-2x",
  [TYPE_OF_ICONS.FACE_VIEWFINDER]: "far fa-smile fa-2x",
  [TYPE_OF_ICONS.FILE_CERTIFICATE]: "fad fa-regular fa-file-certificate fa-2x",
  [TYPE_OF_ICONS.LIGHTBULB]: "fad fa-solid fa-lightbulb-on fa-2x",
  [TYPE_OF_ICONS.LIST_CHECK]: "fad fa-solid fa-list-check fa-2x",
  [TYPE_OF_ICONS.SMILE]: "fad fa-solid fa-location-smile fa-2x",
  [TYPE_OF_ICONS.SIGNATURE]: "fad fa-solid fa-file-signature fa-2x",
  [TYPE_OF_ICONS.CHECKMARK]: "fad fa-check fa-2x",
  [TYPE_OF_ICONS.HOUSE_HEART]: "fa-light fa-house-heart fa-2x",
  [TYPE_OF_ICONS.GLOBE]: "fa-light fa-globe fa-2x",
  [TYPE_OF_ICONS.COMMENTS]: "fa-light fa-comments fa-2x",
  [TYPE_OF_ICONS.MAGNIFYING_GLASS_LOCATION]:
    "fa-regular fa-magnifying-glass-location fa-2x",
  [TYPE_OF_ICONS.LAPTOP]: "fa-light fa-laptop fa-2x",
  [TYPE_OF_ICONS.USER]: "fa-light fa-user fa-2x",
  [TYPE_OF_ICONS.THUMBS_UP]: "fa-light fa-thumbs-up fa-2x",
  [TYPE_OF_ICONS.BOOK_USER]: "fa-light fa-book-user fa-2x",
  [TYPE_OF_ICONS.HOUSE_USER]: "fa-light fa-house-user fa-2x",
  [TYPE_OF_ICONS.STEERING_WHEEL]: "fa-regular fa-steering-wheel fa-2x",
  [TYPE_OF_ICONS.DESKTOP]: "fa-solid fa-desktop fa-2x",
  [TYPE_OF_ICONS.MONEY_BILLS]: "fa-regular fa-money-bills fa-2x",
  [TYPE_OF_ICONS.HOUSE_TWO]: "fa-light fal fa-house fa-2x",
  [TYPE_OF_ICONS.PIGGY_BANK]: "fa-duotone fa-piggy-bank fa-2x",
  [TYPE_OF_ICONS.HOURGLASS]: "fa-regular fal fa-hourglass-half fa-2x",
  [TYPE_OF_ICONS.SIGN_POST]: "fa-solid fa-signs-post fa-2x",
  [TYPE_OF_ICONS.HOUSE_LAPTOP]: "fa-solid fa-house-laptop fa-2x",
};

export const getParagraphIcon = (paragraph, byDefault) => {
  if (!paragraph || !paragraph.icon)
    return byDefault ? byDefault : DEFAULT_ICON;
  const icon = LIST_OF_ICONS[paragraph.icon];
  if (icon) {
    return icon;
  }
  return byDefault ? byDefault : DEFAULT_ICON;
};

export const getIconClass = (icon) => {
  const tempIcon = getParagraphIcon({ icon });
  if (!tempIcon) return "far fa-life-ring";
  return tempIcon.replace("fa-2x", "");
};

export const CLASS_TYPES = {
  SECTION: "section",
  ROW: "row",
  PARAGRAPH: "PARAGRAPH",
};

export const THEMES = {
  WHITE: "WHITE",
  LIGHT: "LIGHT",
  DARK: "DARK",
  DARK_SOFT: "DARK_SOFT",
  ALTERNATIVE_ONE: "ALTERNATIVE_ONE",
};

const getSectionClasses = (data, extraClass) => {
  const background = data.background || data.theme?.background;
  return classNames(`${extraClass}`, {
    "bg-dark text-white": background === THEMES.DARK,
    "bg-dark-soft": background === THEMES.DARK_SOFT,
    "bg-light": background === THEMES.LIGHT,
    "bg-green": background === THEMES.ALTERNATIVE_ONE,
  });
};

export const getRowClasses = (data, extraClass = "") => {
  const textAlign = data.textAlign || data.align?.textAlign;
  return classNames(`row ${extraClass}`, {
    "justify-content-center text-center": textAlign === "CENTER",
    "justify-content-end text-end": textAlign === "RIGHT",
  });
};

export const getParagraphClasses = (data, extraClass = "") => {
  const background = data.background || data.theme?.background;
  return classNames(`lead ${extraClass}`, {
    "text-white":
      background === THEMES.DARK || background === THEMES.ALTERNATIVE_ONE,
  });
};

export const getThemeClasses = (data, type, extraClass = "", remove = "") => {
  let className;
  switch (type) {
    case CLASS_TYPES.SECTION:
      className = getSectionClasses(data, extraClass);
      break;
    case CLASS_TYPES.ROW:
      className = getRowClasses(data, extraClass);
      break;
    case CLASS_TYPES.PARAGRAPH:
      className = getParagraphClasses(data, extraClass);
      break;
    default:
      className = extraClass;
      break;
  }
  if (remove) {
    className = className.replace(remove, "");
  }
  return className;
};

export const getBlurClasses = (data, extraClass) => {
  const background = data.background || data.theme?.background;
  return classNames(
    `gradient ${extraClass}`,
    {
      green: background === THEMES.LIGHT,
    },
    {
      yellow: background === THEMES.ALTERNATIVE_ONE,
    },
    {
      "yellow-light":
        background === THEMES.DARK || data.background === THEMES.WHITE,
    },
    {
      left: background === THEMES.LIGHT && extraClass === "hero-five",
    }
  );
};
