import { Story } from '@storybook/react/types-6-0';
import { Formik } from 'formik';
import React from 'react';

import FieldLabel, { IFieldLabel } from 'components/atoms/FieldLabel/FieldLabel';
import Block from 'components/atoms/Block/Block';
import TextField from 'components/atoms/TextField/TextField';

export default {
  title: 'Atoms/FieldLabel',
  component: FieldLabel,
};

export const Base: Story<IFieldLabel> = (args) => {
  return (
    <>
      <>
        <Block>
          <TextField {...args} name="empty" label="Empty Label" />
        </Block>
        <Block>
          <TextField {...args} name="filled" label="Filled Label" />
        </Block>
        <Block>
          <TextField {...args} name="error" label="Error Label" validate={() => 'Error'} />
        </Block>
        <Block>
          <TextField {...args} name="errorAndFilled" label="Error And Filled Label" validate={() => 'Error'} />
        </Block>
      </>
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
