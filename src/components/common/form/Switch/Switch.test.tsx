import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";

import Switch from ".";

describe("Switch component", () => {
  const label = "Switch";

  it("renders without crashing", () => {
    const { container } = render(<Switch label={label} />);

    expect(container.querySelectorAll("input")).toHaveLength(1);
    expect(container.querySelectorAll("label")).toHaveLength(1);
  });

  it("changes state when clicked", () => {
    render(<Switch label={label} />);

    const checkbox = screen.getByTestId("checkbox");
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).not.toBeChecked();
    userEvent.click(checkbox);
    expect(checkbox).toBeChecked();
  });
});
