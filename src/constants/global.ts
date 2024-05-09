export const HIGHLIGHT_COLOR = "#86baf1";

export enum Categories {
  efficiency = "efficiency",
  shift = "shift",
  downtime = "downtime",
}

export enum MetricTypes {
  percentage = "percentage",
  number = "number",
  secs = "secs",
  hours = "hours",
  mins = "mins",
}

export type TimeTypes = Extract<
  MetricTypes,
  MetricTypes.secs | MetricTypes.hours | MetricTypes.mins
>;

export const TimeTypesObject = {
  [MetricTypes.secs]: MetricTypes.secs,
  [MetricTypes.mins]: MetricTypes.mins,
  [MetricTypes.hours]: MetricTypes.hours,
} as const;

export type PercentageTypes = Extract<MetricTypes, MetricTypes.percentage>;

export const PercentageTypesObject = {
  [MetricTypes.percentage]: MetricTypes.percentage,
} as const;

export const DEFAULT_CATEGORY = "All";

export const SMALL_SCREEN = "550px";
