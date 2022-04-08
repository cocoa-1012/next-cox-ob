describe("info links", () => {
  it("test info links", () => {
    const DATA = [
      "/de/info/jobs",
      "/de/info/dataprivacy",
      "/de/info/impressum",
    ];

    DATA.forEach((link) => {
      cy.visit("/");
      cy.acceptCookies();
      cy.clickOnExistLink(link);
    });
  });
});
