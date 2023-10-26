import { Story } from '@storybook/react/types-6-0';
import React from 'react';

import Subtitle, { ISubtitle } from './Subtitle';

export default {
  title: 'Atoms/Subtitle',
  component: Subtitle,
};

export const Base: Story<ISubtitle> = (args) => {
  return <Subtitle {...args} />;
};

Base.args = {
  children: 'This is a Subtitle',
};

Base.argTypes = {};
