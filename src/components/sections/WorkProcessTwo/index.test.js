import { render } from "@testing-library/react";
import React from "react";
import WorkProcessTwo from "./index";

describe("WorkProcessOne Component", function () {
  it("Check if data is not passed", function () {
    render(<WorkProcessTwo />);
  });

  it("Check if empty data", function () {
    render(<WorkProcessTwo data={{}} />);
  });
  it("Check render dark mode", function () {
    const { container } = render(
      <WorkProcessTwo
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
