import { styled } from "styled-components";

export const CardsFlex = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  & > * {
    flex: 1 1;
  }
`;
export const CardComponent = styled.div`
  width: auto;
`;
