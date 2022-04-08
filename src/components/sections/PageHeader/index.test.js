import { render } from "@testing-library/react";
import React from "react";
import PageHeader from "./index";

describe("PageHeader Component", function () {
  it("Check if data is not passed", function () {
    render(<PageHeader />);
  });

  it("Check render background", function () {
    const { container } = render(
      <PageHeader
        data={{
          background: "DARK",
        }}
      />
    );
    expect(container.querySelector("section")).toHaveClass("bg-dark");
  });
});
