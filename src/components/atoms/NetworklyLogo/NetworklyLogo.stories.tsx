import { Story } from '@storybook/react/types-6-0';
import React from 'react';

import NetworklyLogo, { INetworklyLogo } from './NetworklyLogo';

export default {
  title: 'Atoms/Logo',
  component: NetworklyLogo,
};

export const Base: Story<INetworklyLogo> = (args) => {
  return <NetworklyLogo {...args} width="200px" />;
};

Base.argTypes = {};
