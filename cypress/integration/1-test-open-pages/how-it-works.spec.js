describe("how-it-works page", () => {
  beforeEach(() => {
    cy.init();
  });

  it("test open how-it-works page | de", () => {
    cy.visitPage("/de/info/wie-es-funktioniert");
  });
  it("test open how-it-works page | en", () => {
    cy.visitPage("/en/info/how-it-works");
  });
});
