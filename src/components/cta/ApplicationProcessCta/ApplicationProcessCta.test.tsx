import i18next from "../../../lib/localization/i18next";
import { renderWithContext } from "../../../test/renderWithContext";
import ApplicationProcessCta from "./ApplicationProcessCta";

describe("ApplicationProcessCta component", () => {
  beforeEach(() => {
    i18next.init();
  });

  it("renders without crashing", () => {
    renderWithContext(<ApplicationProcessCta />);
  });
});
