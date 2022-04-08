import React from "react";
import SocialLinks from "./SocialLinks";
import { renderWithContext } from "../../test/renderWithContext";

describe("SocialLinks Component", function () {
  it("Check if data is not passed", function () {
    renderWithContext(<SocialLinks />);
  });

  it("Check render SocialLinks", function () {
    const providerProps = {
      value: {
        siteData: {
          footer: {
            data: {
              attributes: {
                socialLinks: [
                  {
                    url: "url",
                  },
                  {
                    url: "url",
                  },
                ],
              },
            },
          },
        },
      },
    };
    const { container } = renderWithContext(<SocialLinks />, { providerProps });
    expect(container.querySelectorAll("a")).toHaveLength(2);
  });

  it("Check attribute SocialLinks", function () {
    const providerProps = {
      value: {
        siteData: {
          footer: {
            data: {
              attributes: {
                socialLinks: [
                  {
                    url: "url",
                  },
                ],
              },
            },
          },
        },
      },
    };
    const { container } = renderWithContext(<SocialLinks />, { providerProps });
    expect(container.querySelector("a")).toHaveAttribute("target", "_blank");
  });
});
