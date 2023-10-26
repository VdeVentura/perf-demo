import { Property } from 'csstype';
import { ReactNode } from 'react';
import styled, { css } from 'styled-components';

import { theme } from '../../../styles/theme';
import { clamp } from '../../../styles/utils';

export interface IText {
  children: ReactNode;
  color?: keyof typeof theme.colors;
  center?: boolean;
  size?: 'extraSmall' | 'small' | 'medium' | 'big';
  clamp?: number;
  uppercase?: boolean;
  bold?: boolean;
  margin?: Property.Margin;
}

const Text = styled.p<IText>`
  text-transform: ${({ uppercase }) => (uppercase ? 'uppercase' : 'none')};

  color: ${({ color, theme }) => {
    if (!color) {
      return 'inherit';
    }

    return theme.colors[color];
  }};

  font-family: ${({ theme }) => theme.font.family.base};

  font-weight: ${({ bold, theme }) => {
    switch (bold) {
      case true:
        return theme.font.weight.bold;
      default:
        return theme.font.weight.base;
    }
  }};

  font-size: ${({ size, theme }) => {
    switch (size) {
      case 'big':
        return theme.font.size.big;
      case 'extraSmall':
        return theme.font.size.extraSmall;
      case 'small':
        return theme.font.size.small;
      case 'medium':
      default:
        return theme.font.size.base;
    }
  }};

  ${({ margin }) =>
    css`
      margin: ${margin};
    `}

  ${(props) => clamp(props.clamp)}
`;
export default Text;
