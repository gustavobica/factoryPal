import MetricsBarCharts from "../components/MetricsBarCharts/MetricsBarCharts";
import { ChartsProps } from "../types/graphs";

const DownTimeView = ({ metrics, highlight, onHighlight }: ChartsProps) => {
  return (
    <MetricsBarCharts
      metrics={metrics}
      highlight={highlight}
      onHighlight={onHighlight}
    />
  );
};
export default DownTimeView;
