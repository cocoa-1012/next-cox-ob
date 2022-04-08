import React from "react";
import Navbar from "./Navbar";
import { renderWithContext } from "../../test/renderWithContext";
import i18next from "../../lib/localization/i18next";

describe("Navbar Component", function () {
  it("Check render", function () {
    i18next.t();
    renderWithContext(<Navbar />);
  });
});
