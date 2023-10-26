import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';

import { UserModel } from 'generated/graphql';
import { theme } from 'styles/theme';

const AvatarWrapper = styled.div<{ size: NonNullable<IAvatar['size']> }>`
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

const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const AvatarFallback = styled.div<{ size: NonNullable<IAvatar['size']> }>`
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

export interface IAvatar {
  firstName: UserModel['firstName'];
  lastName: UserModel['lastName'];
  src?: string;
  size?: keyof typeof theme.avatar.sizes;
  onClick?: () => void;
}

const Avatar = ({ firstName, lastName, src, size = 'sm', onClick }: IAvatar) => {
  const [useFallback, setUseFallback] = useState(!src);

  const fallback = `${firstName.charAt(0)}${lastName.charAt(0)}`;

  useEffect(() => {
    setUseFallback(!src);
  }, [src]);

  return (
    <AvatarWrapper onClick={onClick} size={size}>
      {useFallback ? (
        <AvatarFallback size={size}>{fallback}</AvatarFallback>
      ) : (
        <AvatarImage src={src} onLoad={() => setUseFallback(false)} onError={() => setUseFallback(true)} />
      )}
    </AvatarWrapper>
  );
};

export default Avatar;
