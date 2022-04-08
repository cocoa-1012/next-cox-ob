import { render } from "@testing-library/react";
import React from "react";
import Feature from "./Feature";
import { DEFAULT_ICON, LIST_OF_ICONS, TYPE_OF_ICONS } from "../../helpers";

describe("Feature Component", function () {
  it("Check if item is not passed", function () {
    let { container } = render(<Feature />);
    expect(container.querySelectorAll("span")).toHaveLength(2);
    expect(container.getElementsByTagName("i")[0].className).toBe(DEFAULT_ICON);
  });

  it("Renders without crashing", function () {
    Object.keys(TYPE_OF_ICONS).forEach((type) => {
      const item = {
        title: "some title",
        icon: type,
      };
      let { container } = render(<Feature item={item} />);
      expect(container.getElementsByTagName("i")[0].className).toBe(
        LIST_OF_ICONS[type]
      );
    });
  });
});
