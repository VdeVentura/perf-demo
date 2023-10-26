import { Story } from '@storybook/react/types-6-0';
import React from 'react';

import Logo, { ILogo } from './Logo';

export default {
  title: 'Atoms/Logo',
  component: Logo,
};

export const Base: Story<ILogo> = (args) => {
  return <Logo {...args} />;
};

Base.args = {
  src: '',
};

Base.argTypes = {};
