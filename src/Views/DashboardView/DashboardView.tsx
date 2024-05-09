import React, { useCallback, useMemo } from "react";

import MetricsBarCharts from "../../components/MetricsBarCharts/MetricsBarCharts";
import MetricsCards from "../../components/MetricsCards/MetricsCards";
import MetricsCircleCharts from "../../components/MetricsCircleCharts/MetricsCircleCharts";
import {
  capitalize,
  groupDataByType,
  isPercentageType,
  isTimeType,
} from "../../components/utils/utils";
import { Metrics } from "../../types/data";
import { ChartsProps } from "../../types/graphs";
import { CardsFlex } from "./DashboardView.styles";
const DashboardView = ({ metrics, highlight, onHighlight }: ChartsProps) => {
  const groupedData = useMemo(() => groupDataByType(metrics), [metrics]);
  const renderComponent = useCallback(
    (metrics: Metrics, type: string) => {
      if (isTimeType(type)) {
        return (
          <div key={type} style={{ width: "100%" }}>
            <h3>Time in {capitalize(type)}</h3>
            <MetricsBarCharts
              metrics={metrics}
              highlight={highlight}
              onHighlight={onHighlight}
            />
          </div>
        );
      } else if (isPercentageType(type)) {
        return (
          <MetricsCircleCharts
            metrics={metrics}
            highlight={highlight}
            onHighlight={onHighlight}
          />
        );
      } else {
        // Default to a generic metric card
        return (
          <MetricsCards
            metrics={metrics}
            highlight={highlight}
            onHighlight={onHighlight}
          />
        );
      }
    },
    [highlight, onHighlight]
  );

  const Graphs = useMemo(
    () =>
      Object.entries(groupedData).map(([type, metrics]) => (
        <div key={type}>{renderComponent(metrics, type)}</div>
      )),
    [groupedData, renderComponent]
  );

  return <CardsFlex>{Graphs}</CardsFlex>;
};
export default React.memo(DashboardView);
