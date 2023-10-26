import { Story } from '@storybook/react/types-6-0';
import React from 'react';

import EditorRender, { IEditorRender } from './EditorRender';

export default {
  title: 'Molecules/EditorRender',
  component: EditorRender,
};

export const Base: Story<IEditorRender> = (args) => {
  return <EditorRender {...args} />;
};

Base.args = {
  content:
    '{"blocks":[{"key":"f8muq","text":"https://www.cnn.com/2020/07/07/tech/facebook-civil-rights-meeting/index.html FB has 8 million paying advertisers, most are boycotting them and most are small businesses ","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[{"offset":0,"length":76,"key":0}],"data":{}}],"entityMap":{"0":{"type":"LINK","mutability":"MUTABLE","data":{"href":"https://www.cnn.com/2020/07/07/tech/facebook-civil-rights-meeting/index.html","url":"https://www.cnn.com/2020/07/07/tech/facebook-civil-rights-meeting/index.html"}}}}',
};

Base.argTypes = {};
