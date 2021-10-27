import { ReactComponent as PokeBALLSVG } from "../Assets/svg/pokeball.svg";

import {
  CardContainer,
  CardContent,
  CardProps,
  LeftCornerCircle,
  PokeContainer,
} from "./Card.styles";

export const Card = (props: CardProps) => {
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
