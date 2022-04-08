import { render } from "@testing-library/react";
import React from "react";
import HeroFive from "./index";

describe("HeroFive Component", function () {
  it("Check if data is not passed", function () {
    render(<HeroFive />);
  });

  it("Check render background", function () {
    const { container } = render(
      <HeroFive
        data={{
          background: "DARK",
        }}
      />
    );
    expect(container.querySelector("section")).toHaveClass(
      "bg-dark text-white"
    );
  });
});
