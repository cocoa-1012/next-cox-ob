import LanguageComponent from "./LanguageComponent";
import React from "react";
import { renderWithContext } from "../../test/renderWithContext";
import { screen } from "@testing-library/react";

describe("Footer Component", function () {
  it("Check render", function () {
    renderWithContext(<LanguageComponent />);
  });

  it("Check render SocialLinks", function () {
    const displayName = "England";
    const providerProps = {
      value: {
        siteData: {
          global: {
            data: {
              attributes: {
                languages: [
                  {
                    displayName,
                    localeId: "en",
                    countryCode: "GB",
                  },
                ],
              },
            },
          },
        },
      },
    };
    renderWithContext(<LanguageComponent />, { providerProps });
    const linkElement = screen.getByText(new RegExp(displayName, "i"));
    expect(linkElement).toBeInTheDocument();
  });
});
