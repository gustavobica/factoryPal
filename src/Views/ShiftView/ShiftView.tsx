import { useMemo } from "react";
import MetricCard from "../../components/MetricCard/MetricCard";
import MetricsBarCharts from "../../components/MetricsBarCharts/MetricsBarCharts";
import { groupDataByType } from "../../components/utils/utils";
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
            <MetricsBarCharts
              metrics={data}
              highlight={highlight}
              onHighlight={onHighlight}
              type={type}
            />
          </div>
        );
      })}
    </ChartsGrid>
  );
};
export default ShiftView;
