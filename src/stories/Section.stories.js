import React from "react";
import Section from "../components/sections/StrapiSection";
import CreateTemplate from "./CreateTemplate";
import {
  FAQ_ONE,
  FEATURES_WITH_IMAGE,
  FOOTER_CTA,
  HERO_FIVE,
  SIMPLE_HEADER,
  SIMPLE_TEXT,
  TESTIMONIALS_ONE,
  TEXT_WITH_IMAGE,
  WORK_PROCESS_FOUR,
  WORK_PROCESS_TWO,
  INSTALLMENT_CALCULATOR,
} from "./data/sectionsData";

export default {
  title: "Components/Sections",
  component: Section,
  argTypes: {
    background: {
      control: {
        type: "select",
        options: ["LIGHT", "WHITE", "DARK", "ALTERNATIVE_ONE"],
      },
    },
    layout: {
      table: {
        disable: true,
      },
    },
    primaryCta: {
      table: {
        disable: true,
      },
    },
    secondaryCta: {
      table: {
        disable: true,
      },
    },
    textAlign: {
      control: {
        type: "select",
        options: ["CENTER", "LEFT", "RIGHT", "NONE"],
      },
    },
  },
};

const Template = (args) => (
  <CreateTemplate>
    <Section section={args} />
  </CreateTemplate>
);

export const FeaturesWithImage = Template.bind({});

FeaturesWithImage.args = {
  ...FEATURES_WITH_IMAGE,
};

export const FAQOne = Template.bind({});

FAQOne.args = {
  ...FAQ_ONE,
};

export const FooterCTA = Template.bind({});

FooterCTA.args = {
  ...FOOTER_CTA,
};

export const HeroFive = Template.bind({});

HeroFive.args = {
  ...HERO_FIVE,
};

export const SimpleHeader = Template.bind({});

SimpleHeader.args = {
  ...SIMPLE_HEADER,
};

export const TextWithImage = Template.bind({});

TextWithImage.args = {
  ...TEXT_WITH_IMAGE,
};

export const simpleText = Template.bind({});

simpleText.args = {
  ...SIMPLE_TEXT,
};

export const testimonialsOne = Template.bind({});

testimonialsOne.args = {
  ...TESTIMONIALS_ONE,
};

export const workProcessTwo = Template.bind({});

workProcessTwo.args = {
  ...WORK_PROCESS_TWO,
};

export const workProcessFour = Template.bind({});

workProcessFour.args = {
  ...WORK_PROCESS_FOUR,
};

export const installmentCalculator = Template.bind({});

installmentCalculator.args = {
  ...INSTALLMENT_CALCULATOR,
};
