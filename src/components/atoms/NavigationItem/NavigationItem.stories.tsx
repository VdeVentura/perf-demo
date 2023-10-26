import { Story } from '@storybook/react/types-6-0';
import React from 'react';
import { faSuitcase, faUserFriends, faEnvelope, faBell } from '@fortawesome/free-solid-svg-icons';

import NavigationItem, { INavigationItem } from './NavigationItem';

import Container from 'components/atoms/Container/Container';

export default {
  title: 'Atoms/NavigationItem',
  component: NavigationItem,
};

export const Base: Story<INavigationItem> = (args) => {
  return (
    <Container>
      <NavigationItem {...args} icon={faSuitcase} label="Jobs" />
      <NavigationItem {...args} icon={faUserFriends} label="Network" />
      <NavigationItem {...args} icon={faEnvelope} label="Inbox" />
      <NavigationItem {...args} icon={faBell} label="Alerts" />
    </Container>
  );
};

Base.args = {};

Base.argTypes = {};
