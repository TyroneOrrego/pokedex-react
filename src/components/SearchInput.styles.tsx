import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  background-color: #f5f3f6;
  padding: 12px;
  border-radius: 16px;
  width: 100%;
  align-items: center;

  svg {
    path {
      fill: gray;
    }
  }
`;

export const Input = styled.input`
  background-color: transparent;
  outline: 0;
  border: 0;
  font-size: 20px;
  margin-left: 10px;
  height: 100%;
`;
