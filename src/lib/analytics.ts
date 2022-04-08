import Cookies from "js-cookie";
import TagManager, { TagManagerArgs } from "react-gtm-module";
import { COOKIE_SETTINGS_KEY, GTM_ID } from "../config/constants";

/**
 * @name initializeGoogleAnalytics
 * @description Initializes Google Analytics on the platform if the analytics cookie is set to true
 */
export function initializeGoogleAnalytics() {
  const cookies = Cookies.get(COOKIE_SETTINGS_KEY);
  if (!cookies) {
    return;
  }
  const cookieSettings = JSON.parse(cookies);

  if (
    cookieSettings &&
    cookieSettings.analyticsCookies &&
    typeof process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_CODE === "string"
  ) {
    const tagManagerArgs: TagManagerArgs = {
      gtmId: GTM_ID,
    };
    TagManager.initialize(tagManagerArgs);
  }
}
