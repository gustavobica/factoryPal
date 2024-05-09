import { MetricTypes } from "../constants/global";

export type Metric = {
  id: string;
  label: string;
  value: number;
  type: MetricTypes;
  description: string;
  category: string;
};

export type Metrics = Metric[];

export type MetricsGroup = {
  [key in MetricTypes]?: Metric[];
} & { generic?: Metric[] };
