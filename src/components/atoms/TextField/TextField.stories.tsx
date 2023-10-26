import { Story } from '@storybook/react/types-6-0';
import { Formik } from 'formik';
import React from 'react';

import Block from '../Block/Block';

import TextField, { ITextField } from './TextField';

export default {
  title: 'Atoms/TextField',
  component: TextField,
};

export const Base: Story<ITextField> = (args) => {
  return (
    <>
      <Block>
        <TextField {...args} name="empty" label="Empty Field" />
      </Block>
      <Block>
        <TextField {...args} name="filled" label="Filled Field" />
      </Block>
      <Block>
        <TextField {...args} name="error" label="Error Field" validate={() => 'Error'} />
      </Block>
      <Block>
        <TextField {...args} name="errorAndFilled" label="Error And Filled Field" validate={() => 'Error'} />
      </Block>
    </>
  );
};

Base.args = {};

Base.argTypes = {};

Base.decorators = [
  (Story) => (
    <Formik
      initialValues={{ filled: 'Value', errorAndFilled: 'Value', empty: '' }}
      initialErrors={{ error: 'Error', errorAndFilled: 'Error' }}
      onSubmit={() => {}}
    >
      <Story />
    </Formik>
  ),
];
