import { Metrics } from "../../types/data";
import MetricCircleChart from "../MetricCircleChart/MetricCircleChart";
import { CardsGrid } from "./MetricsCircleCharts.styles";

type Prop = {
  metrics: Metrics;
  highlight: string;
  onHighlight: (id: string) => void;
};

const MetricsCircleCharts = ({ metrics, highlight, onHighlight }: Prop) => {
  return (
    <CardsGrid>
      {metrics.map((metric) => (
        <MetricCircleChart
          metric={metric}
          highlight={highlight}
          onHighlight={onHighlight}
        />
      ))}
    </CardsGrid>
  );
};

export default MetricsCircleCharts;
