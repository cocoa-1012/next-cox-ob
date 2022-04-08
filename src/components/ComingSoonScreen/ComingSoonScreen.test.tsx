import ComingSoonScreen from "./ComingSoonScreen";
import { renderWithContext } from "../../test/renderWithContext";
import i18next from "../../lib/localization/i18next";

describe("ComingSoonScreen Component", function () {
  beforeEach(() => {
    i18next.init();
  });
  it("Check if props is not passed", function () {
    renderWithContext(<ComingSoonScreen />);
  });
});
