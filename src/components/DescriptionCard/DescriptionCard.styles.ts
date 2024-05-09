import { styled } from "styled-components";
import { HIGHLIGHT_COLOR } from "../../constants/global";

type CardProps = {
  highlight: boolean;
};

export const Card = styled.div<CardProps>`
  display: flex;
  gap: 1rem;
  background: ${({ highlight }) =>
    highlight ? HIGHLIGHT_COLOR : "transparent"};
  justify-content: left;
  align-content: center;
  padding: 0.5rem;
  align-items: center;
`;
export const StyleSpan = styled.span`
  font-size: 0.9rem;
`;
