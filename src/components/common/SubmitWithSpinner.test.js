import { render, screen } from "@testing-library/react";
import React from "react";
import SubmitWithSpinner from "./SubmitWithSpinner";

describe("SubmitWithSpinner Component", function () {
  it("Check if props is not passed", function () {
    render(<SubmitWithSpinner />);
  });

  it("check isFetch prop", function () {
    const data = {
      isFetch: true,
      loadingText: "loading",
    };
    render(<SubmitWithSpinner {...data} />);
    const element = screen.getByText(/loading/i);
    expect(element).toHaveTextContent("loading");
  });

  it("check text prop", function () {
    const data = {
      text: "submit",
    };
    const { container } = render(<SubmitWithSpinner {...data} />);
    const element = container.querySelector("input");
    expect(element.value).toBe("submit");
  });
});
