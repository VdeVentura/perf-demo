import { Story } from '@storybook/react/types-6-0';
import { Formik } from 'formik';
import React from 'react';

import AddressField, { IAddressField } from './AddressField';

import Container from 'components/atoms/Container';
import Block from 'components/atoms/Block';

export default {
  title: 'Atoms/AddressField',
  component: AddressField,
};

export const Base: Story<IAddressField> = (args) => {
  return (
    <Container>
      <Block>
        <AddressField name="empty" label="Empty Field" />
      </Block>
      <Block>
        <AddressField name="pre-filled" label="Pre filled" />
      </Block>
    </Container>
  );
};

Base.args = {};

Base.argTypes = {};

Base.decorators = [
  (Story) => (
    <Formik
      initialValues={{
        base: '',
        'pre-filled': {
          label: 'what',
          value: '123',
        },
      }}
      onSubmit={() => {}}
    >
      <Story />
    </Formik>
  ),
];
