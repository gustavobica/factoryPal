import { CardType, ChartsProps } from "../../types/graphs";
import ColorBox from "../ColorBox/ColorBox";
import { Card, StyleSpan } from "./DescriptionCard.styles";

type Props = Omit<ChartsProps, "metrics"> & CardType;

const DescriptionCard = ({ fill, text, highlight, onHighlight, id }: Props) => {
  return (
    <Card onClick={() => onHighlight(id)} highlight={highlight === id}>
      <ColorBox color={fill} />
      <StyleSpan>{text}</StyleSpan>
    </Card>
  );
};

export default DescriptionCard;
