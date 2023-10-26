import { Story } from '@storybook/react/types-6-0';
import { Formik } from 'formik';
import React from 'react';

import ProfileImageField, { IProfileImageField } from './ProfileImageField';

import Container from 'components/atoms/Container';
import Block from 'components/atoms/Block';

export default {
  title: 'Molecules/ProfileImageField',
  component: ProfileImageField,
};

export const Base: Story<IProfileImageField> = (args) => {
  return (
    <Container>
      <Block>
        <ProfileImageField name="base" />
      </Block>
      <Block>
        <ProfileImageField name="pre-filled" />
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
        base: [],
        'pre-filled': [
          { preview: 'https://networkly.s3.us-east-2.amazonaws.com/users/5eac1240eab1000017ff054b/profile-image.jpeg' },
        ],
      }}
      onSubmit={() => {}}
    >
      <Story />
    </Formik>
  ),
];
