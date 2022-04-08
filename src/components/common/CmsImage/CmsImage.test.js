import React from "react";
import { render } from "@testing-library/react";
import CmsImage from ".";

describe("CmsImage Component", () => {
  let imageElement;
  let imageContainer;

  it("renders an empty element if no image is passed", () => {
    const { container } = render(<CmsImage />);
    expect(container.querySelector("img")).toBeNull();
  });

  describe("when passing an image", () => {
    const URL = "https://url.com/original.jpg";
    beforeEach(() => {
      const image = {
        data: {
          attributes: {
            url: URL,
            name: "some alt",
            formats: {
              small: {
                url: "/small.png",
                width: 500,
              },
              medium: {
                url: "/medium.png",
                width: 750,
              },
              thumbnail: {
                url: "/thumbnail.png",
                width: 156,
              },
            },
          },
        },
      };
      const { container } = render(<CmsImage image={image} />);
      imageElement = container.querySelector("img");
      imageContainer = container;
    });

    it("renders an image", () => {
      expect(imageElement).not.toBeNull();
    });

    it("has a srcset attibute", () => {
      expect(imageContainer.getElementsByTagName("source")).toHaveLength(3);
    });

    it("has a src attribute", () => {
      expect(imageElement.getAttribute("src")).toBe(URL);
    });

    it("has lazy loading enabled", () => {
      expect(imageElement.getAttribute("loading")).toBe("lazy");
    });
  });
});
