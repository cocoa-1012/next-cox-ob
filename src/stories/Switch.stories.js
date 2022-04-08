import React from "react";

import Switch from "../components/common/form/Switch";
import CreateTemplate from "./CreateTemplate";

export default {
  title: "Components/Switch",
  component: Switch,
};

const Template = (args) => (
  <CreateTemplate>
    <Switch {...args} />
  </CreateTemplate>
);

export const SwitchExample = Template.bind({});

SwitchExample.args = {
  label: "Switch",
};
