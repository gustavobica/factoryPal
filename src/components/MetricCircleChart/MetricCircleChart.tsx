import { useMemo } from "react";
import { Pie, PieChart, ResponsiveContainer } from "recharts";
import { HIGHLIGHT_COLOR } from "../../constants/global";
import { Metric } from "../../types/data";
import { Card } from "../Card/Card.styles";

import { capitalize, getRandomColor } from "../utils/utils";
import { Content, Description, Label, Value } from "./MetricCircleChart.styles";

type Prop = {
  metric: Metric;
  highlight: string;
  onHighlight: (id: string) => void;
};

const MetricCircleChart = ({ metric, onHighlight, highlight }: Prop) => {
  const color = useMemo(() => getRandomColor(), []);
  const data = useMemo(
    () => [
      {
        ...metric,
        fill: color,
      },
      {
        id: metric.id + "remainder",
        description: "remainder",
        label: "Remainder",
        value: 1 - metric.value,
        fill: HIGHLIGHT_COLOR,
      },
    ],
    [color, metric]
  );

  return (
    <Card
      color={color}
      style={{ position: "relative" }}
      isActive={metric.id === highlight}
      onClick={() => onHighlight(metric.id)}
    >
      <Content color={color}>
        <Label>{capitalize(metric.label)}</Label>
        <Description>{capitalize(metric.description)}</Description>
        <Value>{(metric.value * 100).toFixed(0)}%</Value>
      </Content>
      <div style={{ width: "auto", height: 300 }}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart width={400} height={400}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              fill={color}
              dataKey="value"
              startAngle={90}
              endAngle={-270}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};
export default MetricCircleChart;
