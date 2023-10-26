import { faSuitcase } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';

import { theme } from 'styles/theme';

const LogoWrapper = styled.div<{ size: NonNullable<ILogo['size']> }>`
  display: inline-block;
  border-radius: 50%;
  width: ${({ size, theme }) => theme.avatar.sizes[size]};
  height: ${({ size, theme }) => theme.avatar.sizes[size]};
  overflow: hidden;

  ${({ onClick }) =>
    !!onClick &&
    css`
      &:hover {
        position: relative;
        cursor: pointer;

        &::before {
          content: '';
          display: block;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.2);
        }
      }
    `};
`;

const LogoImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const LogoFallback = styled.div<{ size: NonNullable<ILogo['size']> }>`
  cursor: default;
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;

  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.primaryDark};

  font-size: ${({ size, theme }) => theme.avatar.fallback.sizes[size]};
  text-transform: uppercase;
`;

export interface ILogo {
  src?: string;
  size?: keyof typeof theme.avatar.sizes;
}

const Logo = ({ src, size = 'sm' }: ILogo) => {
  const [useFallback, setUseFallback] = useState(!src);

  const fallback = <FontAwesomeIcon icon={faSuitcase} size={'lg'} />;

  useEffect(() => {
    setUseFallback(!src);
  }, [src]);

  return (
    <LogoWrapper size={size}>
      {useFallback ? (
        <LogoFallback size={size}>{fallback}</LogoFallback>
      ) : (
        <LogoImage src={src} onLoad={() => setUseFallback(false)} onError={() => setUseFallback(true)} />
      )}
    </LogoWrapper>
  );
};

export default Logo;
