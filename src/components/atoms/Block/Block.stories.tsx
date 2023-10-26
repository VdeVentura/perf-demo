import { Story } from '@storybook/react/types-6-0';
import React from 'react';

import Block, { IBlock } from './Block';

export default {
  title: 'Atoms/Block',
  component: Block,
  parameters: {
    layout: 'fullscreen',
  },
};

export const Base: Story<IBlock> = (args) => {
  return <Block {...args} />;
};

Base.args = {
  children: 'Test',
  background: 'primaryDark',
};

Base.argTypes = {};
