/// <reference types="cypress" />

describe("Factory Metrics Dashboard Tests", () => {
  beforeEach(() => {
    cy.visit("https://factory-pal.vercel.app/");
  });

  it("renders the main dashboard with a title", () => {
    cy.contains("Factory Metrics Dashboard").should("be.visible");
  });

  it("navigates between categories using the selector", () => {
    cy.get("select").select("Efficiency");
    cy.contains("Factory Metrics Dashboard - Efficiency").should("be.visible");
  });

  it("highlights a metric when clicked", () => {
    cy.contains("Speed loss").click();
    cy.get("table")
      .contains("tr", "Speed loss")
      .should("have.css", "background-color", "rgb(134, 186, 241)");
  });

  it("displays percentage metrics correctly", () => {
    cy.contains("68%").should("exist");
  });

  it("shows table with metrics", () => {
    cy.get("table").contains("td", "oee");
    cy.get("table").contains("td", "Speed loss");
    cy.get("table").contains("td", "Shift duration");
  });

  it("shows table with correct metrics and graphs when picking values in dropdown", () => {
    cy.contains("Factory Metrics Dashboard - All").should("be.visible");
    cy.get("table").contains("td", "oee");
    cy.get("table").contains("td", "Speed loss");
    cy.get("table").contains("td", "Shift duration");
    cy.get("select").select("Shift");
    cy.contains("Factory Metrics Dashboard - Shift").should("be.visible");
    cy.contains("Factory Metrics Dashboard - All").should("not.exist");
    cy.get("table").contains("td", "oee").should("not.exist");
    cy.get("table").contains("td", "Speed loss").should("not.exist");
    cy.get("table").contains("td", "Shift duration");
  });
});
