import { CardType, CardsType, ChartsProps } from "../../types/graphs";
import DescriptionCard from "../DescriptionCard/DescriptionCard";
import { List } from "./CardList.styles";

type Props = Omit<ChartsProps, "metrics"> & {
  cards: CardsType;
  header?: React.ReactNode;
};

const CardList = ({ cards, onHighlight, highlight, header }: Props) => {
  return (
    <List>
      {header}
      {cards.map((card: CardType) => (
        <DescriptionCard
          key={card.id}
          text={card.text}
          fill={card.fill}
          id={card.id}
          highlight={highlight}
          onHighlight={onHighlight}
        />
      ))}
    </List>
  );
};
export default CardList;
