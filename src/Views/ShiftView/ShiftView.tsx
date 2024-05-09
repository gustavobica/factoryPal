import { useMemo } from "react";
import MetricCard from "../../components/MetricCard/MetricCard";
import MetricBarChart from "../../components/MetricsBarCharts/MetricsBarCharts";
import { capitalize, groupDataByType } from "../../components/utils/utils";
import { ChartsProps } from "../../types/graphs";
import { ChartsGrid } from "./ShiftView.styles";

const NON_TIME_TYPE = "nonTimeTypes";

const ShiftView = ({ metrics, highlight, onHighlight }: ChartsProps) => {
  const groupedData = useMemo(() => groupDataByType(metrics), [metrics]);

  return (
    <ChartsGrid>
      {Object.entries(groupedData).map(([type, data]) => {
        if (type === NON_TIME_TYPE) {
          return data.map((metric) => (
            <MetricCard
              key={metric.id}
              metric={metric}
              highlight={highlight}
              onHighlight={onHighlight}
            />
          ));
        }
        return (
          <div key={type}>
            <h3>Time in {capitalize(type)}</h3>
            <MetricBarChart
              metrics={data}
              highlight={highlight}
              onHighlight={onHighlight}
            />
          </div>
        );
      })}
    </ChartsGrid>
  );
};
export default ShiftView;
