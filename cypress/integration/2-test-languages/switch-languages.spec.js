describe("switching languages", () => {
  beforeEach(() => {
    cy.init();
  });

  it("check switching languages", () => {
    cy.viewport(1800, 660);
    cy.url().should("eq", Cypress.config().baseUrl + "/de");
    cy.get("[data-testid=language-GB]").click();
    cy.url().should("eq", Cypress.config().baseUrl + "/en");
  });
});
