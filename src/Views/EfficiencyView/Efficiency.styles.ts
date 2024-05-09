import { styled } from "styled-components";

export const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 250px), 1fr));
  gap: 20px;
  padding: 20px;
  align-items: flex-start;
`;
