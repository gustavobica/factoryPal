import { Metric } from "./data";

export type ChartsProps = {
  metrics: Metric[];
  highlight: string; // ID of the highlighted metric
  onHighlight: (id: string) => void;
};

export type CardType = {
  text: string;
  fill: string;
  id: string;
};
export type CardsType = CardType[];
