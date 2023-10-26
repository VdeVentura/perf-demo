import React from 'react';
import styled from 'styled-components';

import Text from '../Text';

export interface ILoader {}

const LoaderWrapper = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.colors.grey20};

  & > div {
    background-color: ${({ theme }) => theme.colors.grey20};
    height: 40px;
    width: 6px;
    display: inline-block;
    margin: 0 3px 0 0;

    animation: sk-stretchdelay 1.2s infinite ease-in-out;
  }

  & .rect2 {
    animation-delay: -1.1s;
  }

  & .rect3 {
    animation-delay: -1s;
  }

  & .rect4 {
    animation-delay: -0.9s;
  }

  & .rect5 {
    animation-delay: -0.8s;
  }

  @keyframes sk-stretchdelay {
    0%,
    40%,
    100% {
      transform: scaleY(0.6);
    }
    20% {
      transform: scaleY(1.2);
    }
  }
`;

const Loader = () => {
  return (
    <div>
      <LoaderWrapper>
        <div className="rect1" />
        <div className="rect2" />
        <div className="rect3" />
        <div className="rect4" />
        <div className="rect5" />
        <Text bold margin="8px 0 0 0">
          Loading
        </Text>
      </LoaderWrapper>
    </div>
  );
};

export default Loader;
