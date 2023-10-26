import { Story } from '@storybook/react/types-6-0';
import React from 'react';

import Avatar, { IAvatar } from './Avatar';

import Block from 'components/atoms/Block';
import Container from 'components/atoms/Container';

export default {
  title: 'Atoms/Avatar',
  component: Avatar,
};

export const Base: Story<IAvatar> = (args) => {
  return (
    <Container>
      <Block>
        <Avatar {...args} />
      </Block>
      <Block>
        <Avatar {...args} src={undefined} />
      </Block>
    </Container>
  );
};

Base.args = {
  src:
    'https://static.demilked.com/wp-content/uploads/2016/08/biggest-maine-coon-cat-photography-robert-sijka-thumb640.jpg',
  onClick: () => {},
  firstName: 'irving',
  lastName: 'ventura',
  size: 'xl',
};

Base.argTypes = {};
