import { ReactNode } from 'react';
import styled, { css } from 'styled-components';

import { theme } from 'styles/theme';

export type IBadge = {
  children: ReactNode;
  size?: keyof typeof theme.badge.padding;
  color?: keyof typeof theme.colors;
};

const Badge = styled.div<IBadge>(
  ({ theme, color = 'primary', size = 'md' }) => css`
    display: inline-block;
    padding: ${theme.badge.padding[size]};

    border-color: ${theme.colors[color]};
    border-width: 1px;
    border-style: solid;
    border-radius: ${theme.borderRadius};

    color: ${theme.colors[color]};
    font-size: ${() => {
      switch (size) {
        case 'sm':
          return theme.font.size.extraSmall;
        case 'md':
          return theme.font.size.small;
        case 'lg':
          return theme.font.size.base;
        default:
          return theme.font.size.base;
      }
    }};
  `
);

export default Badge;
