import { Story } from '@storybook/react/types-6-0';
import { Formik } from 'formik';
import React from 'react';

import FileField, { IFileField } from './FileField';

import Container from 'components/atoms/Container';
import Block from 'components/atoms/Block';

export default {
  title: 'Atoms/FileField',
  component: FileField,
};

export const Base: Story<IFileField> = (args) => {
  return (
    <Container>
      <Block>
        <FileField {...args} />
      </Block>
      <Block>
        <FileField {...args} name="displayDropzone" displayDropzone maxFiles={3} />
      </Block>
    </Container>
  );
};

Base.args = {
  name: 'base',
  label: 'Upload your resume',
};

Base.argTypes = {};

Base.decorators = [
  (Story) => (
    <Formik
      initialValues={{
        base: [
          {
            error: 'something went wrong',
            lastModified: 1604341419000,
            name: 'first file.pdf',
            path: 'first file.pdf',
            preview: 'blob:http://localhost:6006/45ee1ed4-96ec-461d-9ac3-f5e92d099a20',
            size: 297897,
            type: 'application/pdf',
            webkitRelativePath: '',
            key: `first file.pdf-1604341419000`,
          },
          {
            error: null,
            lastModified: 1604341419000,
            name: 'second file.pdf',
            path: 'second file.pdf',
            preview:
              'https://avatars3.githubusercontent.com/u/13772377?s=460&u=a166d6f95ce5ca22f647ba44e986cdefb18e82f7&v=4',
            size: 297897,
            type: 'image/pdf',
            webkitRelativePath: '',
            key: `second file.pdf-1604341419000`,
          },
        ],
        displayDropzone: [],
      }}
      onSubmit={() => {}}
    >
      <Story />
    </Formik>
  ),
];
