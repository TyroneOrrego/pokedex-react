import { Link } from "react-router-dom";
import styled from "styled-components";

import { CardProps } from "./Card";

export const LeftCornerCircle = styled.div`
  background-color: #000000;
  border-radius: 50%;
  height: 50px;
  left: -20px;
  top: -20px;
  position: absolute;
  width: 50px;
`;

export const PokeContainer = styled.div`
  position: absolute;
  right: -20px;
  top: -35px;
  svg {
    width: 120px;
    height: 150px;
  }
`;

export const CardContainer = styled(Link)<CardProps>`
  align-items: center;
  background-color: ${({ bgColor }) => (bgColor ? bgColor : "#fffff")};
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 48%) 0px 2px 1px -1px,
    rgb(0 0 0 / 35%) 0px 1px 1px 0px, rgb(0 0 0 / 46%) 0px 1px 3px 0px;
  color: ${(props) => (props.color ? props.color : "#ffffff")};
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
