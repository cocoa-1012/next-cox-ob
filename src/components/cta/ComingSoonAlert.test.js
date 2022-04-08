import { render, fireEvent } from "@testing-library/react";
import React from "react";
import ComingSoonAlert, { ComingSoonAlertForm } from "./ComingSoonAlert";
import { renderWithContext } from "../../test/renderWithContext";
import i18next from "../../lib/localization/i18next";

describe("ComingSoonAlert Component", function () {
  beforeEach(() => {
    i18next.init();
  });
  it("Check if props is not passed", function () {
    renderWithContext(<ComingSoonAlert />);
  });
  it("Check if props is not passed to form", function () {
    renderWithContext(<ComingSoonAlertForm />);
  });

  it("check submit called", async () => {
    const mockSubmit = jest.fn();
    const { getByTestId, queryByTestId } = render(
      <ComingSoonAlertForm handleSubmit={mockSubmit} />
    );

    fireEvent.change(queryByTestId("input"), {
      target: { value: "test@test.com" },
    }); // invoke handleChange

    fireEvent.submit(getByTestId("submit"));
    expect(mockSubmit).toHaveBeenCalled();
  });
});
