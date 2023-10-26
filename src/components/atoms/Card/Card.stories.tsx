import { Story } from '@storybook/react/types-6-0';
import React from 'react';

import Card, { ICard } from './Card';

export default {
  title: 'Atoms/Card',
  component: Card,
};

export const Base: Story<ICard> = (args) => {
  return <Card {...args} />;
};

Base.args = {
  children: 'This is a Card',
};

Base.argTypes = {};
