import { Story } from '@storybook/react/types-6-0';
import React from 'react';
import Loader, { ILoader } from './Loader';

export default {
  title: 'Atoms/Loader',
  component: Loader,
};

export const Base: Story<ILoader> = (args) => {
  return <Loader {...args} />;
};

Base.args = {
  children: 'This is a Loader',
};

Base.argTypes = {};
