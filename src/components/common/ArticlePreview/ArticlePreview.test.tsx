import { render } from "@testing-library/react";
import i18next from "i18next";
import { MemoryRouter } from "react-router-dom";
import ArticlePreview from ".";
import { siteData } from "../../../data/tests";
import { AppContext } from "../../../lib/contextLib";

const article = {
  id: 204,
  title: "Lorem",
  summary: "Lorem Ipsum",
  slug: "talk-about-equity",
  image: {
    data: {
      attributes: {
        url: "original",
        name: "name",
      },
    },
  },
  category: {
    title: "homebuying",
  },
};

const state: any = {
  siteData: siteData,
};
describe("ArticlePreview component", () => {
  beforeEach(() => {
    i18next.init();
    i18next.changeLanguage("en");
  });

  it("renders without crashing", () => {
    const { queryAllByRole, queryByText } = render(
      <MemoryRouter>
        <AppContext.Provider value={state}>
          <ArticlePreview article={article} />
        </AppContext.Provider>
      </MemoryRouter>
    );

    expect(queryAllByRole("img")).toHaveLength(1);
    expect(queryAllByRole("link")).toHaveLength(1);
    expect(queryByText(article.title)).toBeInTheDocument();
    expect(queryByText(article.summary)).toBeInTheDocument();
    expect(queryByText(article.category.title)).toBeInTheDocument();
  });
});
