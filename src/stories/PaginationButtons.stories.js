import React from "react";
import PaginationButtons from "../components/common/PaginationButtons";
import CreateTemplate from "./CreateTemplate";

export default {
  title: "Components/Pagination Buttons",
  component: PaginationButtons,
  argTypes: {
    onPageChange: { action: "handleClick" },
  },
};

const Template = (args) => (
  <CreateTemplate>
    <PaginationButtons {...args} />{" "}
  </CreateTemplate>
);

export const PaginationButtonsExample = Template.bind();

PaginationButtonsExample.args = {
  currentPage: 1,
  pages: 20,
};
