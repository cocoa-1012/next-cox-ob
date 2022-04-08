describe("calculator links", () => {
  it("test calculator links | de", () => {
    const DATA = ["/de/calculator/raten-rechner"];
    cy.checkMenuLinks(DATA, "/", "calculator-dropdown");
  });

  it("test calculator links | en", () => {
    const DATA = ["/en/calculator/installment-calculator"];
    cy.checkMenuLinks(DATA, "/en", "calculator-dropdown");
  });
});
