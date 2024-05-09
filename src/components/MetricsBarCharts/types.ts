import { Metric } from "../../types/data";
import { ChartsProps } from "../../types/graphs";

export type MetricWithColor = Metric & { fill: string };

export type MetricsWithColor = MetricWithColor[];

export type MetricsBarChartsProps = ChartsProps & {
  type?: string;
};
