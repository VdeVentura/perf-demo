import { Story } from '@storybook/react/types-6-0';
import React from 'react';

import SingleColumn, { ISingleColumn } from './SingleColumn';

import Container from 'components/atoms/Container';
import Block from 'components/atoms/Block';

export default {
  title: 'Templates/SingleColumn',
  component: SingleColumn,
  parameters: {
    layout: 'fullscreen',
  },
};

export const Base: Story<ISingleColumn> = (args) => {
  return (
    <SingleColumn>
      <Container background="primaryDark">
        <Block>Single Column</Block>
      </Container>
    </SingleColumn>
  );
};

Base.args = {
  children: 'This is a SingleColumn',
};

Base.argTypes = {};
