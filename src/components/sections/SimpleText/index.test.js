import { render } from "@testing-library/react";
import React from "react";
import SimpleText from "./index";

describe("SimpleText Component", function () {
  it("Check if data is not passed", function () {
    render(<SimpleText />);
  });
  it("Check if empty data", function () {
    render(<SimpleText data={{}} />);
  });
  it("Check render dark background", function () {
    const { container } = render(<SimpleText data={{ background: "DARK" }} />);
    expect(container.querySelector("section")).toHaveClass(
      "bg-dark text-white"
    );
  });
});
