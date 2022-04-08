import React, { useEffect } from "react";
import Cookies from "js-cookie";
import CookieModal from "../components/common/CookieModal";
import { COOKIE_SETTINGS_KEY } from "../config/constants";
import CreateTemplate from "./CreateTemplate";

export default {
  title: "Components/Cookie Modal",
  component: CookieModal,
};

const Template = (args) => {
  useEffect(() => {
    Cookies.remove(COOKIE_SETTINGS_KEY);
  }, []);
  return (
    <CreateTemplate>
      <CookieModal {...args} />
    </CreateTemplate>
  );
};

export const CookieModalExample = Template.bind({});
