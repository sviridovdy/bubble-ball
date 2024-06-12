describe("template spec", () => {
  it("passes", () => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    cy.visit("https://www.meetup.com/");
    cy.contains("Log in").click();
    const email = Cypress.env("USER_EMAIL");
    const password = Cypress.env("USER_PASSWORD");
    cy.get("input[type=email]").type(email);
    cy.get("input[type=password]").type(password);
    cy.get("div#modal").within(() => {
      cy.contains("button", "Log in").click();
    });
    cy.visit("https://www.meetup.com/bubbletea/events/");
  });
});
