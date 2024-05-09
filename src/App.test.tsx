import { fireEvent, render, screen } from "@testing-library/react";

import App from "./App";

describe("Full App rendering", () => {
  test("interaction between MetricTable and MetricChart", () => {
    render(<App />);
    // Assume MetricTable renders rows for each metric and clicking on a row updates something visible
    fireEvent.click(screen.getByRole("cell", { name: "OEE" }));
    // Example: Check if a detail pane, modal, or other components display additional info about 'OEE'
    expect(screen.getByText("Details for OEE")).toBeInTheDocument();
  });
});
