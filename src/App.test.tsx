import { render, screen } from "@testing-library/react";

import userEvent from "@testing-library/user-event";
import App from "./App";
import { Categories } from "./constants/global";

describe("App component", () => {
  it("renders with default settings", () => {
    render(<App />);
    expect(
      screen.getByText(/Factory Metrics Dashboard - All/)
    ).toBeInTheDocument();
    expect(screen.getByRole("combobox")).toBeInTheDocument();
  });

  it("allows navigation between categories", async () => {
    render(<App />);

    userEvent.selectOptions(
      screen.getByRole("combobox"),
      Categories.efficiency
    );
    expect(
      screen.getByText(/Factory Metrics Dashboard - Efficiency/i)
    ).toBeInTheDocument();

    userEvent.selectOptions(screen.getByRole("combobox"), Categories.downtime);
    expect(
      screen.getByText(/Factory Metrics Dashboard - Downtime/i)
    ).toBeInTheDocument();

    userEvent.selectOptions(screen.getByRole("combobox"), Categories.shift);
    expect(
      screen.getByText(/Factory Metrics Dashboard - Shift/i)
    ).toBeInTheDocument();
  });
  it("renders circular graphs for percentage metrics", () => {
    render(<App />);
    const percentageMetric = screen.getByText(/68%/); // Assume the circular graph displays percentage inside it

    expect(percentageMetric).toBeInTheDocument();
  });

  it("correctly highlights a metric", async () => {
    render(<App />);
    const firstMetric = screen.getByText(/68%/);
    userEvent.click(firstMetric);

    expect(firstMetric).toMatchSnapshot();
  });

  it("handles unknown metric types gracefully", () => {
    render(<App />);
    expect(
      screen.getByTestId(/MetricCard-cln_shift_years/)
    ).toBeInTheDocument();
  });
});
