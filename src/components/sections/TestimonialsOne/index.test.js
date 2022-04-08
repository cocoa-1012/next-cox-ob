import { render } from "@testing-library/react";
import React from "react";
import TestimonialsOne from "./index";

describe("TestimonialsOne Component", function () {
  it("Check if data is not passed", function () {
    render(<TestimonialsOne />);
  });
  it("Check if empty data", function () {
    render(<TestimonialsOne data={{}} />);
  });
});
