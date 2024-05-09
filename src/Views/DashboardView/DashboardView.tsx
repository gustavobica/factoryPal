import React, { useCallback, useMemo } from "react";

import MetricsBarCharts from "../../components/MetricsBarCharts/MetricsBarCharts";
import MetricsCards from "../../components/MetricsCards/MetricsCards";
import MetricsCircleCharts from "../../components/MetricsCircleCharts/MetricsCircleCharts";
import {
  groupDataByType,
  isPercentageType,
  isTimeType,
} from "../../components/utils/utils";
import { Metrics } from "../../types/data";
import { ChartsProps } from "../../types/graphs";
import { CardsFlex } from "./DashboardView.styles";
const DashboardView = ({ metrics, highlight, onHighlight }: ChartsProps) => {
  // Group by type so same types will be bundle together and have the proper graph
  const groupedData = useMemo(() => groupDataByType(metrics), [metrics]);
  const renderComponent = useCallback(
    (metrics: Metrics, type: string) => {
      if (isTimeType(type)) {
        return (
          <div key={type} style={{ width: "100%" }}>
            <MetricsBarCharts
              metrics={metrics}
              highlight={highlight}
              onHighlight={onHighlight}
              type={type}
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
