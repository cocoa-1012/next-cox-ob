import React from "react";

import CTA from "../components/cta/CTA";
import { CTAs } from "../config/sections";
import CreateTemplate from "./CreateTemplate";

export default {
  title: "Components/CTA",
  component: CTA,
  argTypes: {
    ctaType: {
      table: {
        disable: true,
      },
    },
  },
};

const Template = (args) => (
  <CreateTemplate>
    <CTA {...args} />
  </CreateTemplate>
);

export const CompareCTA = Template.bind({});
CompareCTA.args = {
  isPrimary: true,
  ctaType: CTAs.COMPARE_RATES,
};

export const CreateAccountCTA = Template.bind({});
CreateAccountCTA.args = {
  isPrimary: true,
  ctaType: CTAs.CREATE_ACCOUNT,
};

export const SubscribeCTA = Template.bind({});
SubscribeCTA.args = {
  isPrimary: true,
  ctaType: CTAs.SUBSCRIBE,
};

export const LearningCenterCta = Template.bind({});
LearningCenterCta.args = {
  isPrimary: true,
  displayAsLink: true,
  ctaType: CTAs.LEARNING_CENTER,
};
