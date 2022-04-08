import React from "react";
import OffCanvasMenu from "./Navbar/OffCanvasMenu";
import { renderWithContext } from "../../test/renderWithContext";
import i18next from "../../lib/localization/i18next";

describe("OffCanvasMenu Component", function () {
  it("Check render", function () {
    i18next.t();
    renderWithContext(<OffCanvasMenu />);
  });
});
