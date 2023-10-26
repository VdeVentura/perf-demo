import { faFileContract, faSearch, faUsers, faUserTie } from '@fortawesome/free-solid-svg-icons';
import { Story } from '@storybook/react/types-6-0';
import { Formik } from 'formik';
import React from 'react';

import RadioButtonsField, { IRadioButtonsField } from './RadioButtonsField';

export default {
  title: 'Atoms/RadioButtonsField',
  component: RadioButtonsField,
};

export const Base: Story<IRadioButtonsField> = (args) => {
  return <RadioButtonsField {...args} />;
};

Base.args = {
  options: [
    { label: 'Actively looking', value: 'Active', icon: faSearch },
    { label: 'Open to offers', value: 'Passive', icon: faFileContract },
    { label: 'Building a network', value: 'Networking', icon: faUsers },
    { label: 'Looking for talent', value: 'Recruiter', icon: faUserTie },
  ],
  name: 'userType',
};

Base.argTypes = {};

Base.decorators = [
  (Story) => (
    <Formik initialValues={{ userType: 'Active' }} onSubmit={() => {}}>
      <Story />
    </Formik>
  ),
];
