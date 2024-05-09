import MetricBarChart from "../components/MetricsBarCharts/MetricsBarCharts";
import { ChartsProps } from "../types/graphs";

const DownTimeView = ({ metrics, highlight, onHighlight }: ChartsProps) => {
  return (
    <>
      <MetricBarChart
        metrics={metrics}
        highlight={highlight}
        onHighlight={onHighlight}
      />
    </>
  );
};
export default DownTimeView;
