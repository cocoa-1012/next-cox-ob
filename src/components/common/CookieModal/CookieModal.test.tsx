import { fireEvent, render } from "@testing-library/react";
import Cookies from "js-cookie";
import {
  COOKIE_SETTINGS_EXPIRY,
  COOKIE_SETTINGS_KEY,
} from "../../../config/constants";
import i18next from "../../../lib/localization/i18next";
import CookieModal from "./index";

describe("CookieModal Component", () => {
  beforeEach(() => {
    i18next.init();
    Cookies.remove(COOKIE_SETTINGS_KEY);
  });

  it("Renders if no cookie settings are set", () => {
    const { queryAllByRole } = render(<CookieModal />);

    expect(queryAllByRole("button")).toHaveLength(2);
    expect(queryAllByRole("checkbox")).toHaveLength(3);
  });

  it("Does not render if cookie settings are set", () => {
    const cookieSettings = {
      technicalCookies: true,
      analyticsCookies: true,
      marketingCookies: true,
    };

    Cookies.set(COOKIE_SETTINGS_KEY, JSON.stringify(cookieSettings), {
      expires: COOKIE_SETTINGS_EXPIRY,
    });

    const { queryAllByRole } = render(<CookieModal />);

    expect(queryAllByRole("button")).toHaveLength(0);
    expect(queryAllByRole("checkbox")).toHaveLength(0);
  });

  it("Creates a cookie with the selected options when the form is submitted", () => {
    const expectedCookies = {
      technicalCookies: true,
      analyticsCookies: false,
      marketingCookies: false,
    };

    const { getByTestId } = render(<CookieModal />);
    const form = getByTestId("cookie-modal-form");
    fireEvent.submit(form);
    const cookies = JSON.parse(String(Cookies.get(COOKIE_SETTINGS_KEY)));
    expect(cookies).toMatchObject(expectedCookies);
  });

  it("Creates a cookie with the selected options when the 'Save Selection' button is clicked", () => {
    const expectedCookies = {
      technicalCookies: true,
      analyticsCookies: false,
      marketingCookies: false,
    };

    const { getByTestId } = render(<CookieModal />);
    const saveSelectionButton = getByTestId("save-selection-button");
    fireEvent.click(saveSelectionButton);
    const cookies = JSON.parse(String(Cookies.get(COOKIE_SETTINGS_KEY)));
    expect(cookies).toMatchObject(expectedCookies);
  });

  it("Creates a cookie with all fields set to true", () => {
    const expectedCookies = {
      technicalCookies: true,
      analyticsCookies: true,
      marketingCookies: true,
    };

    const { getByTestId } = render(<CookieModal />);
    const acceptAllButton = getByTestId("accept-all-button");
    fireEvent.click(acceptAllButton);
    const cookies = JSON.parse(String(Cookies.get(COOKIE_SETTINGS_KEY)));
    expect(cookies).toMatchObject(expectedCookies);
  });
});
