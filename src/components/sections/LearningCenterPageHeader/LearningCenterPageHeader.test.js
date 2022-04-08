import { MemoryRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import i18next from "../../../lib/localization/i18next";
import LearningCenterPageHeader from ".";

const categories = [
  {
    name: "homebuying",
    numberOfPages: 0,
    navText: "Eigenheimkauf",
    title: "Eigenheimkauf",
    icon: "HOUSE",
  },
  {
    name: "equitygap",
    numberOfPages: 0,
    navText: "Eigenkapitallücke",
    title: "Eigenkapitallücke",
    icon: "PIGGY_BANK",
  },
  {
    name: "mortgagebasics",
    numberOfPages: 0,
    navText: "Baufi Grundlagen",
    title: "Grundlagen einer Baufinanzierung",
    icon: "HOUSE_LAPTOP",
  },
  {
    name: "refinancing",
    numberOfPages: 0,
    navText: "Refinanzierung",
    title: "Refinanzierung",
    icon: "SIGN_POST",
  },
  {
    name: "rentorbuy",
    numberOfPages: 0,
    navText: "Kaufen oder Mieten",
    title: "Kaufen oder Mieten",
    icon: "SIGN_POST",
  },
];

describe("LearningCenterPageHeader Component", () => {
  beforeEach(() => {
    i18next.init();
  });

  it("renders without crashing", () => {
    const { container } = render(
      <MemoryRouter>
        <LearningCenterPageHeader categories={categories} />
      </MemoryRouter>
    );

    expect(container.querySelectorAll("h1")).toHaveLength(1);
    expect(container.querySelectorAll("p")).toHaveLength(1);
    expect(container.querySelectorAll("a")).toHaveLength(categories.length);
  });
});
