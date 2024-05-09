import styled from "styled-components";

export const Container = styled.div`
  margin: 20px 0;
`;

export const StyledLabel = styled.label`
  display: block;
  font-size: 16px;
  margin-bottom: 8px;
  color: #333;
`;

export const StyledSelect = styled.select`
  width: 100%;
  padding: 8px 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: white;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  &:hover {
    border-color: #888;
  }
  &:focus {
    outline: none;
    border-color: #0056b3;
    box-shadow: 0 0 0 3px rgba(0, 86, 179, 0.25);
  }
`;
