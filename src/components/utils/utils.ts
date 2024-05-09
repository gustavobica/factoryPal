import {
  MetricTypes,
  PercentageTypes,
  PercentageTypesObject,
  TimeTypes,
  TimeTypesObject,
} from "../../constants/global";
import { Metrics, MetricsGroup } from "../../types/data";

export const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

export const isTimeType = (type: MetricTypes | string): type is TimeTypes => {
  return type in TimeTypesObject;
};

export const isPercentageType = (
  type: MetricTypes | string
): type is PercentageTypes => {
  return type in PercentageTypesObject;
};
export const capitalize = (value: string) => {
  return value[0].toUpperCase() + value.slice(1);
};
export const groupDataByType = (data: Metrics) => {
  return data.reduce((acc, item) => {
    const type = item.type as MetricTypes;

    acc[type] = acc[type] || [];
    acc[type]!.push(item);

    return acc;
  }, {} as MetricsGroup);
};
