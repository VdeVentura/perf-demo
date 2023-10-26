import { Story } from '@storybook/react/types-6-0';
import React from 'react';

import { theme } from '../../../styles/theme';

import Text, { IText } from './Text';

export default {
  title: 'Atoms/Text',
  component: Text,
};

export const Base: Story<IText> = (args) => {
  return <Text {...args} />;
};

Base.args = {
  children:
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt commodi, magnam dolores quibusdam nisi iste laboriosam tenetur nulla ipsa iusto quos accusantium vitae sequi architecto tempore saepe adipisci, ullam fugiat.',
};

Base.argTypes = {
  color: {
    control: {
      type: 'select',
      options: Object.keys(theme.colors),
    },
  },
};
