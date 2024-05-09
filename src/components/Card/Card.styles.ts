import { styled } from "styled-components";
import { HIGHLIGHT_COLOR } from "../../constants/global";

type CardProp = {
  isActive?: boolean;
  isClickable?: boolean;
};

export const Card = styled.div<CardProp>`
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: inline-block;
  width: auto;
  box-sizing: border-box;
  border: ${({ isActive }) =>
    isActive ? `2px solid ${HIGHLIGHT_COLOR}` : "none"};
  transition: all 0.3s ease-in-out;
  cursor: ${({ isClickable }) => (isClickable ? "pointer" : "default")};
`;
