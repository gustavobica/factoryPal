import { styled } from "styled-components";

export const Value = styled.div`
  position: absolute;
  top: calc(50% + 1.5rem + 1ch); //center on the card
  left: calc(50% - 1.5ch);
  font-size: 1.5em;
  font-weight: bold;
  margin-bottom: 0.5em;
`;

export const Label = styled.h2`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

export const Description = styled.p`
  font-size: 0.8rem;
  color: #666;
  overflow: hidden;
  overflow-y: auto;
  max-height: 3rem;
  min-height: 3rem;
`;
export const Content = styled.div`
  color: ${({ color }) => color || "black"};
`;
