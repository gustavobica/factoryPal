import { useCallback, useMemo } from "react";
import { Fragment } from "react/jsx-runtime";

import MetricCard from "../../components/MetricCard/MetricCard";
import MetricCircleChart from "../../components/MetricCircleChart/MetricCircleChart";
import { isPercentageType } from "../../components/utils/utils";
import { Metric } from "../../types/data";
import { ChartsProps } from "../../types/graphs";
import { CardsGrid } from "./Efficiency.styles";

const EfficiencyView = ({ metrics, highlight, onHighlight }: ChartsProps) => {
  const renderComponent = useCallback(
    (metric: Metric) => {
      const { type } = metric;
      if (isPercentageType(type)) {
        return (
          <MetricCircleChart
            metric={metric}
            highlight={highlight}
            onHighlight={onHighlight}
          />
        );
      } else {
        return (
          <MetricCard
            metric={metric}
            highlight={highlight}
            onHighlight={onHighlight}
          />
        );
      }
    },
    [highlight, onHighlight]
  );

  const Cards = useMemo(
    () =>
      metrics.map((metric) => (
        <Fragment key={metric.id}>{renderComponent(metric)}</Fragment>
      )),
    [metrics, renderComponent]
  );

  return <CardsGrid>{Cards}</CardsGrid>;
};
export default EfficiencyView;
