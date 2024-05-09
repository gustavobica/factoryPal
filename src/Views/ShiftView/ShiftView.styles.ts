import { styled } from "styled-components";
import { SMALL_SCREEN } from "../../constants/global";

export const ChartsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 20px;
  padding: 20px;
  @media only screen and (max-width: ${SMALL_SCREEN}) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
`;
