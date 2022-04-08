import { render } from "@testing-library/react";
import React from "react";
import PageHeaderParagraphs from "./PageHeaderParagraphs";

describe("PageHeaderParagraphs Component", function () {
  it("Check if data is not passed", function () {
    render(<PageHeaderParagraphs />);
  });

  it("Check render background", function () {
    const { container } = render(
      <PageHeaderParagraphs
        data={{
          background: "DARK",
          paragraphs: [
            {
              title: "title",
            },
          ],
        }}
      />
    );
    expect(container.querySelector("p")).toHaveClass("text-white");
  });
});
