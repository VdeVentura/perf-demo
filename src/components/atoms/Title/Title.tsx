import { ReactNode } from "react";
import styled from "styled-components";

import { clamp } from "../../../styles/utils";

import { theme } from "@styles/theme";
import Subtitle from "@components/atoms/Subtitle";

export interface ITitle {
  children: ReactNode;
  center?: boolean;
  size?: "extraSmall" | "small" | "medium" | "big";
  clamp?: number;
  color?: keyof typeof theme.colors;
}

const Title = styled.h1<ITitle>`
  margin: 0;
  margin-bottom: ${(props) => props.theme.spacing.small};
  font-weight: ${(props) => props.theme.font.weight.bold};
  font-family: ${(props) => props.theme.font.family.title};

  font-size: ${({ size, theme }) => {
    switch (size) {
      case "big":
        return theme.font.size.extraBig;
      case "extraSmall":
        return theme.font.size.small;
      case "small":
        return theme.font.size.base;
      case "medium":
      default:
        return theme.font.size.big;
    }
  }};

  text-align: ${({ center }) => {
    switch (center) {
      case true:
        return "center";
      default:
        return "initial";
    }
  }};

  color: ${({ color, theme }) => {
    if (!color) {
      return "inherit";
    }

    return theme.colors[color];
  }};

  ${(props) => clamp(props.clamp)}

  & + ${Subtitle} {
    margin-top: -0.5rem;
  }
`;

export default Title;
