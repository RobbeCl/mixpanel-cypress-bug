import dayjs from "dayjs";

describe("empty spec", () => {
  it("passes", () => {
    cy.clock(dayjs(`2022-08-01`, "YYYY-MM-DD").add(5, "hour").toDate(), [
      "Date",
    ]);

    cy.visit("http://localhost:8080");
  });
});
