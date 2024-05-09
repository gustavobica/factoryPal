import { useMemo } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Rectangle,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Metric } from "../../types/data";
import { CardsType } from "../../types/graphs";
import CardList from "../CardList/CardList";
import { capitalize, getRandomColor } from "../utils/utils";
import { ChartContainer } from "./MetricsBarCharts.styles";
import { MetricsBarChartsProps, MetricsWithColor } from "./types";

const MetricsBarCharts = ({
  metrics,
  highlight,
  onHighlight,
  type,
}: MetricsBarChartsProps) => {
  const handleBarClick = (data: Metric) => {
    onHighlight(data.id);
  };
  // add the color to each item so they match in the graph and info cards list
  const enhancedData: MetricsWithColor = useMemo(() => {
    return metrics.map((item) => ({
      ...item,
      fill: getRandomColor(),
    }));
  }, [metrics]);

  const cardsList = useMemo(
    () =>
      enhancedData.reduce((acc: CardsType, current) => {
        acc.push({
          text: current.description,
          fill: current.fill,
          id: current.id,
        });
        return acc;
      }, []),
    [enhancedData]
  );

  return (
    <ChartContainer>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={enhancedData}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip />

          <Bar
            dataKey="value"
            onClick={handleBarClick}
            fill="#fff"
            activeBar={<Rectangle fill="#ffc658" stroke="#ff7300" />}
          >
            {enhancedData.map((entry) => (
              <Cell
                key={entry.id}
                fill={entry.fill}
                stroke={highlight === entry.id ? "#ff7300" : entry.fill}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      <>
        <CardList
          header={type && <h3>Time in {capitalize(type)}</h3>}
          cards={cardsList}
          highlight={highlight}
          onHighlight={onHighlight}
        />
      </>
    </ChartContainer>
  );
};

export default MetricsBarCharts;
