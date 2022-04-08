import React from "react";
import FooterLinks from "./FooterLinks";
import { renderWithContext } from "../../test/renderWithContext";

describe("FooterLinks Component", function () {
  it("Check if data is not passed", function () {
    renderWithContext(<FooterLinks />);
  });

  it("Check render footerLinks", function () {
    const providerProps = {
      value: {
        siteData: {
          footer: {
            data: {
              attributes: {
                links: [
                  {
                    __typename: "ComponentNavigationsPageLink",
                    page: {
                      data: {
                        attributes: {
                          slug: "sl",
                          title: "title",
                        },
                      },
                    },
                  },
                  {
                    __typename: "ComponentNavigationsPageLink",
                    page: {
                      data: {
                        attributes: {
                          slug: "sl2",
                          title: "title",
                        },
                      },
                    },
                  },
                ],
              },
            },
          },
        },
      },
    };
    const { container } = renderWithContext(<FooterLinks />, { providerProps });
    expect(container.querySelectorAll("a")).toHaveLength(2);
  });
});
