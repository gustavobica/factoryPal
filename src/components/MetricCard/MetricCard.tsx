import { useMemo } from "react";
import { Metric } from "../../types/data";
import { Card } from "../Card/Card.styles";
import { getRandomColor } from "../utils/utils";
import { Content, Description, Label, Value } from "./MetricCard.styles";

type Prop = {
  metric: Metric;
  highlight: string;
  onHighlight: (id: string) => void;
};

const MetricCard = ({ metric, onHighlight, highlight }: Prop) => {
  const color = useMemo(() => getRandomColor(), []);
  return (
    <Card
      data-testid={`MetricCard-${metric.label}`}
      color={color}
      onClick={() => onHighlight(metric.id)}
      isActive={highlight === metric.id}
      isClickable
    >
      <Content color={color}>
        <Label>{metric.label}</Label>
        <Value>{metric.value}</Value>
        <Description>{metric.description}</Description>
      </Content>
    </Card>
  );
};

export default MetricCard;
