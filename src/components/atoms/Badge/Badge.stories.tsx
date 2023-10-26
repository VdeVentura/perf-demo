import { Story } from '@storybook/react/types-6-0';
import React from 'react';

import Badge, { IBadge } from './Badge';

import Block from 'components/atoms/Block';
import Container from 'components/atoms/Container';

export default {
  title: 'Atoms/Badge',
  component: Badge,
};

export const Base: Story<IBadge> = (args) => {
  return (
    <Container>
      <Block>
        <Badge {...args} size="sm" />
      </Block>
      <Block>
        <Badge {...args} size="md" />
      </Block>
      <Block>
        <Badge {...args} size="lg" />
      </Block>
    </Container>
  );
};

Base.args = {
  children: 'This is a Badge',
};
