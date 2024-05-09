import { styled } from "styled-components";
import { SMALL_SCREEN } from "../../constants/global";

type SquareProps = { color: string };

export const Square = styled.div<SquareProps>`
  background: ${({ color }) => color || "black"};
  width: 2rem;
  height: 2rem;
  @media only screen and (max-width: ${SMALL_SCREEN}) {
    width: 1rem;
    height: 1rem;
  }
`;
