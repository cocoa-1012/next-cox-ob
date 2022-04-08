import { render } from "@testing-library/react";
import React from "react";
import WorkProcessFour from "./index";

describe("TestimonialsOne Component", function () {
  it("Check if data is not passed", function () {
    render(<WorkProcessFour />);
  });
  it("Check if empty data", function () {
    render(<WorkProcessFour data={{}} />);
  });
});
