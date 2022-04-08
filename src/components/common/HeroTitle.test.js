import { render, screen } from "@testing-library/react";
import React from "react";
import HeroTitle from "./HeroTitle";

describe("HeroTitle Component", function () {
  it("Check render", function () {
    const item = {
      background: "DARK",
      desc: "description",
    };
    render(<HeroTitle {...item} />);
    const element = screen.getByText(/description/i);
    expect(element).toHaveTextContent("description");
  });

  it("Check if item is not passed", function () {
    render(<HeroTitle />);
  });
});
