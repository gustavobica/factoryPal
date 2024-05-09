import { styled } from "styled-components";

export const StyledTable = styled.table`
  width: 100%;
  margin-top: 20px;
  border-collapse: collapse;
  background: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  table-layout: fixed;
  th,
  td {
    border: 1px solid #dee2e6; // Light gray border
    padding: 12px 15px;
    overflow: auto;
  }

  th {
    background-color: #007bff; // Blue header to match FactoryPal
    color: white;
  }

  tr:nth-child(even) {
    background-color: #f8f9fa;
  }
`;
