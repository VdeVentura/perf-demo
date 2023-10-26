import { Story } from '@storybook/react/types-6-0';
import React from 'react';

import Title, { ITitle } from './Title';

export default {
  title: 'Atoms/Title',
  component: Title,
};

export const Base: Story<ITitle> = (args) => {
  return <Title {...args} />;
};

Base.args = {
  children: 'This is a Title',
};

Base.argTypes = {};
