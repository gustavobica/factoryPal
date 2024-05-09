import { styled } from "styled-components";

type SquareProps = { color: string };

export const Square = styled.div<SquareProps>`
  background: ${({ color }) => color || "black"};
  width: 2rem;
  height: 2rem;
`;
