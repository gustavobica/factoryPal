import { Square } from "./ColorBox.styles";

const ColorBox = ({ color }: { color: string }) => {
  return <Square color={color} />;
};
export default ColorBox;
