import dayjs from "dayjs";

describe("empty spec", () => {
  it("passes", () => {
    const index = 0;
    let currentMonth = 3 * (index + 1);
    const year = dayjs().year();

    cy.clock(
      dayjs(`${year}-${currentMonth}-01`, "YYYY-MM-DD").add(5, "hour").toDate(),
      ["Date"],
      {
        log: true,
      }
    );

    cy.visit("http://localhost:8081");
  });
});
