import { Link } from "react-router-dom";
import styled from "styled-components";

import { CardProps } from "./Card";

export const LeftCornerCircle = styled.div`
  background-color: #f00e7f;
  border-radius: 50%;
  height: 50px;
  left: -20px;
  top: -20px;
  position: absolute;
  width: 50px;
`;

export const PokeContainer = styled.div`
  position: absolute;
  right: -5px;
  top: -25px;
  svg {
    width: 120px;
    height: 150px;
  }
`;

export const CardContainer = styled(Link)<CardProps>`
  align-items: center;
  background-color: ${(props) => props.bgColor};
  border-radius: 10px;
  color: ${(props) => (props.color ? props.color : "#fffff")};
  display: flex;
  font-size: 16px;
  font-weight: bold;
  padding: 20px;
  min-height: 100px;
  overflow: hidden;
  position: relative;
  text-decoration: none;
  ${LeftCornerCircle} {
    background-color: ${(props) => props.shadow};
  }
  ${PokeContainer} {
    svg {
      path {
        fill: ${({ shadow }) => shadow};
      }
    }
  }
`;

export const CardContent = styled.div`
  position: relative;
`;
