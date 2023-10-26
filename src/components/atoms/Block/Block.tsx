import styled from 'styled-components';
import { ReactNode } from 'react';
import { Property } from 'csstype';

import { theme } from '../../../styles/theme';
import { applyBreakpointWidth, applyStyle } from '../../../styles/utils';

export interface IBlock {
  children: ReactNode;
  height?: Property.Height;

  xs?: Property.Width;
  sm?: Property.Width;
  md?: Property.Width;
  lg?: Property.Width;
  xl?: Property.Width;

  margin?: Property.Margin;
  padding?: keyof typeof theme.spacing | 'none';
  verticalPadding?: keyof typeof theme.spacing | 'none';
  background?: keyof typeof theme.colors;
  textAlign?: Property.TextAlign;

  display?: Property.Display;
  flexGrow?: Property.FlexGrow;
  flexBasis?: Property.FlexBasis;
  flexDirection?: Property.FlexDirection;
  alignItems?: Property.AlignItems;
  justifyContent?: Property.JustifyContent;
}

const Block = styled.div<IBlock>`
  ${(props) => applyBreakpointWidth(props.xs || '100%', 'xs')};
  ${(props) => applyBreakpointWidth(props.sm, 'sm')};
  ${(props) => applyBreakpointWidth(props.md, 'md')};
  ${(props) => applyBreakpointWidth(props.lg, 'lg')};
  ${(props) => applyBreakpointWidth(props.xl, 'xl')};

  ${(props) => applyStyle('height', props.height || 'auto')};
  ${(props) => applyStyle('padding', props.theme.spacing[props.padding || 'normal'])};
  ${(props) => applyStyle('padding-top', props.verticalPadding && props.theme.spacing[props.verticalPadding])};
  ${(props) => applyStyle('padding-bottom', props.verticalPadding && props.theme.spacing[props.verticalPadding])};

  ${(props) => applyStyle('margin', props.margin)};
  ${(props) => applyStyle('text-align', props.textAlign)};
  ${(props) => applyStyle('background', props.background && props.theme.colors[props.background])};
  ${(props) => applyStyle('flex-grow', props.flexGrow)};
  ${(props) => applyStyle('flex-basis', props.flexBasis)};
  ${(props) => applyStyle('flex-direction', props.flexDirection)};
  ${(props) => applyStyle('align-items', props.alignItems)};
  ${(props) => applyStyle('justify-content', props.justifyContent)};
  ${(props) => applyStyle('display', props.display)};
`;

export default Block;
