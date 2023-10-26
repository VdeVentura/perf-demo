import { Story } from '@storybook/react/types-6-0';
import React from 'react';

import HR, { IHR } from './HR';

export default {
  title: 'Atoms/Hr',
  component: HR,
};

export const Base: Story<IHR> = (args) => {
  return <HR {...args} />;
};

Base.args = {
  children: 'This is a Hr',
};

Base.argTypes = {};
