import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import InputWithError from "./InputWithError";

describe("InputWithError Component", function () {
  it("Check if props is not passed", function () {
    render(<InputWithError />);
  });

  it("Renders with error message", function () {
    const data = {
      error: {
        message: "error message",
      },
    };
    render(<InputWithError {...data} />);
    const element = screen.getByText(/error message/i);
    expect(element).toHaveTextContent("error message");
  });
  it("Renders with success message", function () {
    const data = {
      successMessage: "success message",
    };
    render(<InputWithError {...data} />);
    const element = screen.getByText(/success message/i);
    expect(element).toHaveTextContent("success message");
  });
  it("test input change", function () {
    const { container } = render(<InputWithError />);
    const input = container.querySelector("input");
    expect(input.value).toBe("");
    fireEvent.change(input, { target: { value: "Good Day" } });
    expect(input.value).toBe("Good Day");
  });
});
