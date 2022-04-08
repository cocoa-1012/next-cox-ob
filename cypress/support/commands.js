Cypress.Commands.add("visitPage", (link) => {
  cy.visit(link);
  cy.get("[data-testid=not-found-page]").should("have.length", 0);
});

Cypress.Commands.add("init", () => {
  Cypress.Cookies.debug(true);
  cy.visit("/");
  cy.acceptCookies();
});

Cypress.Commands.add("acceptCookies", () => {
  cy.wait(500);
  cy.get("[data-testid=accept-all-button]").should("have.length", 1);
  cy.get("[data-testid=accept-all-button]").click();
  cy.get("[data-testid=accept-all-button]").should("have.length", 0);

  cy.clearCookies();
});

Cypress.Commands.add("clickOnExistLink", (link) => {
  cy.log(link);
  cy.get(`a[href='${link}']`).filter(":visible").eq(0).click();
  cy.url().should("include", link);
  cy.get("[data-testid=not-found-page]").should("have.length", 0);
});

Cypress.Commands.add(
  "checkMenuLinks",
  (data = [], visit = "/", dropdown = "learn-dropdown") => {
    const onCLickMenuItem = (popover, link) => {
      cy.get(popover).filter(":visible").eq(0).click();
      cy.clickOnExistLink(link);
    };
    data.map((link) => {
      cy.viewport(1800, 660);
      cy.visit(visit);

      cy.wait(500);
      cy.get("[data-testid=offcanvas-menu]").should("be.not.visible");

      onCLickMenuItem(`[data-testid=${dropdown}]`, link);

      // test with burger menu
      cy.viewport(1000, 660);

      cy.visit(visit);
      cy.wait(500);

      cy.get("[data-testid=offcanvas-menu]").should("be.visible");
      cy.wait(100);
      cy.get("[data-testid=offcanvas-menu]").click();

      onCLickMenuItem(`[data-testid=${dropdown}]`, link);
    });
  }
);
