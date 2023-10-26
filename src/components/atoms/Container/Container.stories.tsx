import { Story } from '@storybook/react/types-6-0';
import React from 'react';

import { Base as Block } from '../Block/Block.stories';

import Container, { IContainer } from './Container';

export default {
  title: 'Atoms/Container',
  component: Container,
  parameters: {
    layout: 'fullscreen',
  },
};

export const Base: Story<IContainer> = (args) => {
  return (
    <>
      <Container {...args}>
        <Block xs="50%" background="primaryDark">
          Test1
        </Block>
        <Block xs="50%" background="primary">
          Test1
        </Block>
        <Block xs="100%" background="primaryLight">
          Test1
        </Block>
      </Container>
    </>
  );
};

Base.args = {};

Base.argTypes = {};
