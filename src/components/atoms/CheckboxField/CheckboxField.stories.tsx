import { Story } from '@storybook/react/types-6-0';
import { Formik } from 'formik';
import React from 'react';

import CheckboxField, { ICheckboxField } from './CheckboxField';

import Block from 'components/atoms/Block';

export default {
  title: 'Atoms/CheckboxField',
  component: CheckboxField,
};

export const Base: Story<ICheckboxField> = (args) => {
  return (
    <>
      <Block>
        <CheckboxField {...args} label="default" name="default" />
      </Block>
      <Block>
        <CheckboxField {...args} label="checked" name="checked" />
      </Block>
      <Block>
        <CheckboxField {...args} label="error" name="error" validate={() => 'Error'} />
      </Block>
    </>
  );
};

Base.args = {
  label: 'Open to relocation',
  name: 'relocation',
};

Base.argTypes = {};

Base.decorators = [
  (Story) => (
    <Formik
      initialErrors={{ error: 'Error' }}
      initialValues={{ default: false, checked: true, error: false }}
      onSubmit={() => {}}
    >
      <Story />
    </Formik>
  ),
];
