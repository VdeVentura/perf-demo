/* eslint-disable @typescript-eslint/no-explicit-any */
import { faSpinner, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { darken, mix, readableColor, transparentize } from "polished";

import { ComponentProps, ReactNode, useRef } from "react";
import styled, { css, IStyledComponent } from "styled-components";
import { Link } from "react-router-dom";

import { theme } from "../../../styles/theme";
import { useRipple } from "../../../styles/useRipple";
import { Substitute } from "styled-components/dist/types";

// import { ROUTES } from "routes";

const StyledIcon = styled(FontAwesomeIcon)<{ right?: boolean }>`
  display: flex;
  height: 100%;
  align-items: center;
  position: absolute;
  top: 0;
  ${({ right, theme }) =>
    right
      ? css`
          right: ${theme.spacing.normal};
        `
      : css`
          left: ${theme.spacing.normal};
        `}
`;

const InlineIcon = styled(FontAwesomeIcon)`
  height: 1em;
  margin-left: 0.5rem;
`;

export type IButton = ComponentProps<
  IStyledComponent<
    "web",
    Substitute<
      React.DetailedHTMLProps<
        React.ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
      >,
      {
        children: ReactNode;
        icon?: IconDefinition;
        inlineIcon?: IconDefinition;
        full?: boolean;
        flat?: boolean;
        color?: keyof typeof theme.colors;
        isSubmitting?: boolean;
        as?: any;
        to?: string;
        size?: "small" | "normal";
        disabled?: boolean;
      }
    >
  >
>;

const StyledButton = styled.button<IButton>(
  ({ theme, size = "normal", color = "primary", full, flat }) => css`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 ${theme.spacing.big};
    height: ${theme.button.height[size]};
    border-radius: ${theme.borderRadius};
    border: 2px solid ${theme.colors[color]};
    background-color: ${theme.colors[color]};
    outline: none;

    color: ${() => {
      switch (color) {
        case "red":
          return theme.colors.white;
        default:
          return readableColor(theme.colors[color]);
      }
    }};
    font-family: ${theme.font.family.title};
    font-weight: 700;
    text-transform: uppercase;
    font-size: ${() => {
      switch (size) {
        case "small":
          return theme.font.size.extraSmall;
        case "normal":
          return theme.font.size.small;
        default:
          return theme.font.size.small;
      }
    }};
    letter-spacing: 0.0892857143em;

    transition: all 0.2s ease-in-out;

    width: 100%;

    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
      0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);

    @media (min-width: ${theme.breakpoints.sm}) {
      width: ${full ? "100%" : "auto"};
    }

    &:hover,
    &:focus {
      background: ${darken(0.05, theme.colors[color])};
      border-color: ${darken(0.05, theme.colors[color])};
      box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
        0px 4px 5px 0px rgba(0, 0, 0, 0.14),
        0px 1px 10px 0px rgba(0, 0, 0, 0.12);
    }

    &:disabled {
      color: ${mix(0.5, "#ffffff", readableColor(theme.colors[color]))};
      background: ${mix(0.5, "#ffffff", theme.colors[color])};
      border-color: ${mix(0.5, "#ffffff", theme.colors[color])};
      box-shadow: none;
      cursor: default;
    }

    ${flat &&
    css`
      background: transparent;
      color: ${theme.colors[color]};
      border: none;
      box-shadow: none;

      &:hover,
      &:focus {
        background: ${transparentize(0.7, theme.colors[color])};
        border: none;
        box-shadow: none;
      }
    `}
  `
);

const Button = ({
  children,
  icon,
  inlineIcon,
  isSubmitting,
  disabled,
  ...props
}: IButton) => {
  const ref = useRef<HTMLButtonElement>(null);
  useRipple(ref);
  return (
    <StyledButton {...props} ref={ref} disabled={disabled || isSubmitting}>
      {!!icon && <StyledIcon icon={icon} size="lg" />}
      {children}
      {!!inlineIcon && <InlineIcon icon={inlineIcon} size="lg" />}
      {isSubmitting && <StyledIcon right spin size="lg" icon={faSpinner} />}
    </StyledButton>
  );
};

export interface IButtonLink extends IButton {
  to: string;
}

export const ButtonLink = ({ to, ...props }: IButtonLink) => {
  return <Button as={Link} to={to} {...props} />;
};

export default Button;
