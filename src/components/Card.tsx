import React from "react";
import { LinkProps } from "react-router-dom";

import { ReactComponent as PokeBALLSVG } from "../Assets/svg/pokeball.svg";

import {
  CardContainer,
  CardContent,
  LeftCornerCircle,
  PokeContainer,
} from "./Card.styles";

export interface CardProps extends LinkProps {
  shadow?: string;
  color?: string;
  bgColor?: string;
}

export const Card: React.FC<CardProps> = (props) => {
  return (
    <CardContainer shadow={props.shadow} color={props.color} to={props.to}>
      <LeftCornerCircle />
      <PokeContainer>
        <PokeBALLSVG />
      </PokeContainer>
      <CardContent>{props.children}</CardContent>
    </CardContainer>
  );
};
