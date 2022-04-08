import Footer from "./index";
import { renderWithContext } from "../../test/renderWithContext";
import i18next from "i18next";

describe("Footer Component", function () {
  beforeEach(() => {
    i18next.init();
  });
  it("Check render", function () {
    renderWithContext(<Footer />);
  });
});
