import React from "react";
import { HIGHLIGHT_COLOR } from "../../constants/global";
import { Metric } from "../../types/data";
import { StyledTable } from "./MetricsTable.styles";

interface Props {
  data: Metric[];
  highlight: string;
  onHighlight: (id: string) => void;
}

const MetricsTable: React.FC<Props> = ({ data, highlight, onHighlight }) => {
  return (
    <StyledTable>
      <thead>
        <tr>
          <th>Label</th>
          <th>Value</th>
          <th>Type</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {data.map((metric) => (
          <tr
            key={metric.id}
            onClick={() => onHighlight(metric.id)}
            style={{
              backgroundColor:
                metric.id === highlight ? HIGHLIGHT_COLOR : "transparent",
            }}
          >
            <td>{metric.label}</td>
            <td>{metric.value}</td>
            <td>{metric.type}</td>
            <td>{metric.description}</td>
          </tr>
        ))}
      </tbody>
    </StyledTable>
  );
};

export default MetricsTable;
