import { Story } from '@storybook/react/types-6-0';
import React from 'react';

import BadgeList, { IBadgeList } from './BadgeList';

export default {
  title: 'Molecules/BadgeList',
  component: BadgeList,
};

export const Base: Story<IBadgeList> = (args) => {
  return <BadgeList {...args} />;
};

Base.args = {
  items: ['react', 'javascript', 'php'],
};

Base.argTypes = {};
