import { Story } from '@storybook/react/types-6-0';
import React from 'react';

import ToggleField, { IToggleField } from './ToggleField';

export default {
  title: 'Atoms/ToggleField',
  component: ToggleField,
};

export const Base: Story<IToggleField> = (args) => {
  return <ToggleField {...args} />;
};

Base.args = {};

Base.argTypes = {};
