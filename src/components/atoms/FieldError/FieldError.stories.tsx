import { Story } from '@storybook/react/types-6-0';
import React from 'react';

import FieldError, { IFieldError } from './FieldError';

export default {
  title: 'Atoms/FieldError',
  component: FieldError,
};

export const Base: Story<IFieldError> = (args) => {
  return <FieldError {...args} />;
};

Base.args = {
  children: 'This is a FieldError',
};

Base.argTypes = {};
