describe("learning center links", () => {
  it("test learning center links | de", () => {
    const DATA = [
      "/de/learning-center",
      "/de/learning-center/eigenkapitalluecke",
      "/de/learning-center/kaufen-oder-mieten",
      "/de/learning-center/eigenheimkauf",
      "/de/learning-center/grundlagen-einer-baufinanzierung",
      "/de/learning-center/refinanzierung",
    ];
    cy.checkMenuLinks(DATA);
  });

  it("test learning center links | en", () => {
    const DATA = [
      "/en/learning-center",
      "/en/learning-center/equity-gap",
      "/en/learning-center/rent-or-buy",
      "/en/learning-center/home-buying",
      "/en/learning-center/mortgage-basics",
      "/en/learning-center/refinancing",
    ];
    cy.checkMenuLinks(DATA, "/en");
  });

  it("test click on learning-center item", () => {
    cy.visit("/de/learning-center");
    cy.clickOnExistLink(
      "/de/learning-center/eigenkapitalluecke/wie-bank-entscheidet"
    );
  });
});
