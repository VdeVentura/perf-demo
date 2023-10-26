import { Property } from "csstype";
import { css } from "styled-components";
import { ReactElement } from "react";

import { theme } from "./theme";

import { useWindowSize } from "@hooks/useWindowSize";

export const applyStyle = (style: string, val?: any) => {
  return val !== undefined ? `${style}:${val}` : "";
};

export const applyBreakpointWidth = (
  val: Property.Width | undefined,
  breakpoint: keyof typeof theme.breakpoints
) => {
  if (val) {
    return css`
      @media (min-width: ${theme.breakpoints[breakpoint]}) {
        width: ${val};
      }
    `;
  }
};

export const clamp = (clamp?: number) => {
  if (!clamp) {
    return null;
  }

  return css`
    display: -webkit-box;
    -webkit-line-clamp: ${clamp};
    line-clamp: ${clamp};
    -webkit-box-orient: vertical;
    overflow: hidden;
    line-break: anywhere;
  `;
};

export const ShowXL = ({ children }: { children: ReactElement }) => {
  const [width] = useWindowSize();
  return width && width > parseInt(theme.breakpoints.xl, 10) ? children : null;
};

export const ShowLG = ({ children }: { children: ReactElement }) => {
  const [width] = useWindowSize();
  return width && width > parseInt(theme.breakpoints.lg, 10) ? children : null;
};

export const ShowMD = ({ children }: { children: ReactElement }) => {
  const [width] = useWindowSize();
  return width && width > parseInt(theme.breakpoints.md, 10) ? children : null;
};

export const ShowSM = ({ children }: { children: ReactElement }) => {
  const [width] = useWindowSize();
  return width && width > parseInt(theme.breakpoints.sm, 10) ? children : null;
};
export const HideXL = ({ children }: { children: ReactElement }) => {
  const [width] = useWindowSize();
  return width && width > parseInt(theme.breakpoints.xl, 10) ? null : children;
};

export const HideLG = ({ children }: { children: ReactElement }) => {
  const [width] = useWindowSize();
  return width && width > parseInt(theme.breakpoints.lg, 10) ? null : children;
};

export const HideMD = ({ children }: { children: ReactElement }) => {
  const [width] = useWindowSize();
  return width && width > parseInt(theme.breakpoints.md, 10) ? null : children;
};

export const HideSM = ({ children }: { children: ReactElement }) => {
  const [width] = useWindowSize();
  return width && width > parseInt(theme.breakpoints.sm, 10) ? null : children;
};
