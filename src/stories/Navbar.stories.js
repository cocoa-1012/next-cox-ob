import React from "react";

import CreateTemplate from "./CreateTemplate";
import Navbar from "../layout/Header/Navbar";
import { HERO_FIVE } from "./data/sectionsData";
import Section from "../components/sections/StrapiSection";
import { SITE_DATA } from "./data/siteData";

export default {
  title: "Components/Navbar",
  component: Navbar,
};

const SECTIONS = [
  {
    ...HERO_FIVE,
    background: "DARK",
  },
  {
    ...HERO_FIVE,
    background: "WHITE",
  },
  {
    ...HERO_FIVE,
    background: "ALTERNATIVE_ONE",
  },
  {
    ...HERO_FIVE,
    background: "LIGHT",
  },
  {
    ...HERO_FIVE,
    background: "DARK",
  },
  {
    ...HERO_FIVE,
    background: "WHITE",
  },
  {
    ...HERO_FIVE,
    background: "ALTERNATIVE_ONE",
  },
  {
    ...HERO_FIVE,
    background: "LIGHT",
  },
];

const Template = (args) => (
  <CreateTemplate providerProps={args.providerProps}>
    <Navbar {...args} />
    {SECTIONS.map((section, index) => (
      <Section section={section} key={index} />
    ))}
  </CreateTemplate>
);

export const NavbarExample = Template.bind({});

NavbarExample.args = {
  providerProps: {
    value: {
      siteData: SITE_DATA,
    },
  },
};
