import { render } from "@testing-library/react";
import React from "react";
import SectionTitle from "./SectionTitle";

describe("SectionTitle Component", function () {
  it("Check if item is not passed", function () {
    render(<SectionTitle />);
  });

  it("Renders with subtitle props", function () {
    const item = {
      subtitle: "subtitle",
    };
    let { container } = render(<SectionTitle {...item} />);
    expect(container.querySelector("h4")).toHaveTextContent("subtitle");
  });

  it("Renders with centerAlign props", function () {
    const item = {
      centerAlign: true,
    };
    let { container } = render(<SectionTitle {...item} />);
    expect(container.querySelector("div")).toHaveClass("text-center");
  });

  it("Renders with dark props when subtitle", function () {
    const item = {
      subtitle: "subtitle",
      background: "DARK",
    };
    let { container } = render(<SectionTitle {...item} />);
    expect(container.querySelector("h4")).toHaveClass("text-warning");
  });
});
