import { Property } from 'csstype';
import { ReactNode } from 'react';
import styled from 'styled-components';

import { theme } from '../../../styles/theme';
import { applyStyle } from '../../../styles/utils';

export interface IContainer {
  readonly children?: ReactNode;
  readonly height?: Property.Height;
  readonly flexWrap?: Property.FlexWrap;
  readonly flexDirection?: Property.FlexDirection;
  readonly justifyContent?: Property.JustifyContent;
  readonly alignItems?: Property.AlignItems;
  readonly background?: keyof typeof theme.colors;
  readonly padding?: Property.Padding;
  readonly margin?: Property.Margin;
  readonly textAlign?: Property.TextAlign;
}

const Container = styled.div<IContainer>`
  display: flex;
  width: 100%;
  margin: auto;
  flex-wrap: wrap;
  flex-flow: row wrap;
  ${(props) => applyStyle('height', props.height || 'auto')};
  ${(props) => applyStyle('flex-wrap', props.flexWrap)};
  ${(props) => applyStyle('flex-direction', props.flexDirection)};
  ${(props) => applyStyle('justify-content', props.justifyContent)};
  ${(props) => applyStyle('align-items', props.alignItems)};
  ${(props) => applyStyle('background', props.background && props.theme.colors[props.background])};
  ${(props) => applyStyle('padding', props.padding)};
  ${(props) => applyStyle('margin', props.margin)};
  ${(props) => applyStyle('text-align', props.textAlign)};
`;

export default Container;
