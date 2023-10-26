import { Story } from '@storybook/react/types-6-0';
import React from 'react';

import { theme } from '../../../styles/theme';

import Button, { IButton } from './Button';

export default {
  title: 'Atoms/Button',
  component: Button,
};

export const Base: Story<IButton> = (args) => {
  return <Button {...args} />;
};

Base.args = {
  children: 'Test',
  color: 'primary',
  disabled: false,
  full: false,
};

Base.argTypes = {
  color: {
    control: {
      type: 'select',
      options: Object.keys(theme.colors),
    },
  },
};
