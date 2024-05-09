import { fireEvent, render, screen } from "@testing-library/react";
import { Metrics } from "../../../types/data";
import MetricTable from "../MetricsTable";

const mockData = [
  {
    id: "oee",
    label: "OEE",
    value: 0.68,
    type: "percentage",
    description: "Overall Equipment Effectiveness",
    category: "efficiency",
  },
] as Metrics;

describe("MetricTable", () => {
  test("renders correctly with data", () => {
    render(<MetricTable data={mockData} highlight="" onHighlight={() => {}} />);
    expect(screen.getByText("OEE")).toBeInTheDocument();
    expect(screen.getByText("0.68")).toBeInTheDocument();
  });

  test("triggers onHighlight when a row is clicked", () => {
    const handleHighlight = jest.fn();
    render(
      <MetricTable data={mockData} highlight="" onHighlight={handleHighlight} />
    );
    fireEvent.click(screen.getByText("OEE"));
    expect(handleHighlight).toHaveBeenCalledWith("oee");
  });
});
