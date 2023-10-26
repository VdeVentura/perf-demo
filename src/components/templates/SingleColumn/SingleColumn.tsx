import { ReactNode } from "react";
import styled from "styled-components";
import { Property } from "csstype";

import Container from "@components/atoms/Container";
import { theme } from "@styles/theme";

export interface ISingleColumn {
  children: ReactNode;
  justifyContent?: Property.JustifyContent;
  maxBreakpoint?: keyof typeof theme.breakpoints;
  fullHeight?: boolean;
}

const SingleColumn = styled(Container)<ISingleColumn>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  min-height: ${({ fullHeight }) => fullHeight && "calc(100vh - 81px)"};
  @media (min-width: ${({ theme, maxBreakpoint }) =>
      theme.breakpoints[maxBreakpoint || "xl"]}) {
    max-width: ${({ theme, maxBreakpoint }) =>
      theme.breakpoints[maxBreakpoint || "xl"]};
  }
`;

export default SingleColumn;
