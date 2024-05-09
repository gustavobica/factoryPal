import { styled } from "styled-components";

export const Label = styled.h2`
  font-size: 1.2em;
  margin-bottom: 0.5em;
`;

export const Value = styled.div`
  font-size: 1.5em;
  font-weight: bold;
  margin-bottom: 0.5em;
`;

export const Description = styled.p`
  font-size: 0.8em;
  color: #666;
`;
export const Content = styled.div`
  color: ${({ color }) => color || "black"};
`;
