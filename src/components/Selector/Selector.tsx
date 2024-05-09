import { DEFAULT_CATEGORY } from "../../constants/global";
import { capitalize } from "../utils/utils";
import { Container, StyledLabel, StyledSelect } from "./Selector.styles";

type Props = {
  options: string[];
  selected: string;
  onChange: (value: string) => void;
};

const Selector = ({ selected, onChange, options }: Props) => {
  return (
    <Container>
      <StyledLabel htmlFor="category-select">Choose a category:</StyledLabel>
      <StyledSelect
        id="selector"
        onChange={(e) => onChange(e.target.value)}
        value={selected}
      >
        <option value={DEFAULT_CATEGORY}>{DEFAULT_CATEGORY}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {capitalize(option)}
          </option>
        ))}
      </StyledSelect>
    </Container>
  );
};
export default Selector;
