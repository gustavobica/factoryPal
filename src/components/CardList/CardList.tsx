import { CardType, CardsType, ChartsProps } from "../../types/graphs";
import DescriptionCard from "../DescriptionCard/DescriptionCard";
import { List } from "./CardList.styles";

type Props = Omit<ChartsProps, "metrics"> & {
  cards: CardsType;
};

const CardList = ({ cards, onHighlight, highlight }: Props) => {
  return (
    <List>
      {cards.map((card: CardType) => (
        <DescriptionCard
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
