import { Story } from '@storybook/react/types-6-0';
import { Formik } from 'formik';
import React from 'react';
import { EditorState, convertFromRaw } from 'draft-js';

import Editor, { IEditor } from './Editor';

import Block from 'components/atoms/Block';
import Container from 'components/atoms/Container';

export default {
  title: 'Molecules/Editor',
  component: Editor,
};

export const Base: Story<IEditor> = (args) => {
  return (
    <Container>
      <Block>
        <Editor {...args} name="base" />
      </Block>
      <Block>
        <Editor {...args} name="initiallyExpanded" initiallyExpanded />
      </Block>
      <Block>
        <Editor {...args} name="preFilled" />
      </Block>
    </Container>
  );
};

Base.args = {
  name: 'editor',
  label: 'Write a post',
};

Base.argTypes = {};

Base.decorators = [
  (Story) => (
    <Formik
      initialValues={{
        base: EditorState.createEmpty(),
        initiallyExpanded: EditorState.createEmpty(),
        preFilled: EditorState.createWithContent(
          convertFromRaw(
            JSON.parse(
              '{"blocks":[{"key":"f8muq","text":"https://www.cnn.com/2020/07/07/tech/facebook-civil-rights-meeting/index.html FB has 8 million paying advertisers, most are boycotting them and most are small businesses ","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[{"offset":0,"length":76,"key":0}],"data":{}}],"entityMap":{"0":{"type":"LINK","mutability":"MUTABLE","data":{"href":"https://www.cnn.com/2020/07/07/tech/facebook-civil-rights-meeting/index.html","url":"https://www.cnn.com/2020/07/07/tech/facebook-civil-rights-meeting/index.html"}}}}'
            )
          )
        ),
      }}
      onSubmit={() => {}}
    >
      <Story />
    </Formik>
  ),
];
