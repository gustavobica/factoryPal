import { Metrics } from "../../types/data";
import MetricCard from "../MetricCard/MetricCard";
import { CardsGrid } from "./MetricsCards.styles";

type Prop = {
  metrics: Metrics;
  highlight: string;
  onHighlight: (id: string) => void;
};

const MetricsCards = ({ metrics, highlight, onHighlight }: Prop) => {
  return (
    <CardsGrid>
      {metrics.map((metric) => (
        <MetricCard
          key={metric.id}
          metric={metric}
          highlight={highlight}
          onHighlight={onHighlight}
        />
      ))}
    </CardsGrid>
  );
};

export default MetricsCards;
