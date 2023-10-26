import { ReactNode } from 'react';
import styled from 'styled-components';

import { clamp } from '../../../styles/utils';

export interface ISubtitle {
  children: ReactNode;
  center?: boolean;
  size?: 'small' | 'medium' | 'big';
  clamp?: number;
}

const Subtitle = styled.small<ISubtitle>`
  margin: 0;
  display: block;
  font-weight: ${(props) => props.theme.font.weight.bold};
  font-family: ${({ theme }) => theme.font.family.title};
  color: ${({ theme }) => theme.colors.grey20};

  font-size: ${({ size, theme }) => {
    switch (size) {
      case 'big':
        return theme.font.size.big;
      case 'small':
        return theme.font.size.small;
      default:
        return theme.font.size.base;
    }
  }};

  text-align: ${({ center }) => {
    switch (center) {
      case true:
        return 'center';
      default:
        return 'initial';
    }
  }};

  ${(props) => clamp(props.clamp)}
`;
export default Subtitle;
