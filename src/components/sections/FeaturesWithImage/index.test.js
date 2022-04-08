import { render } from "@testing-library/react";
import React from "react";
import FeaturesWithImage from "./index";

describe("FeaturesWithImage Component", function () {
  it("Check if data is not passed", function () {
    render(<FeaturesWithImage />);
  });

  it("Check render background", function () {
    const { container } = render(
      <FeaturesWithImage data={{ background: "DARK" }} />
    );
    expect(container.querySelector("section")).toHaveClass("bg-dark");
  });
});
