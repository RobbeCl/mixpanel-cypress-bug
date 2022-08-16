describe("empty spec", () => {
  it("passes", () => {
    cy.clock();

    cy.visit("http://localhost:8080");
  });
});
