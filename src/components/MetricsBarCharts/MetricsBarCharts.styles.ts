import { styled } from "styled-components";
import { SMALL_SCREEN } from "../../constants/global";

export const ChartContainer = styled.div`
  background: white;
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  gap: 1.5rem;
  justify-content: space-evenly;
  @media only screen and (max-width: ${SMALL_SCREEN}) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
`;
