import React, { useEffect, useState } from 'react';
import EditorCore, { createEditorStateWithText } from '@draft-js-plugins/editor';
import createLinkifyPlugin from '@draft-js-plugins/linkify';
import { ContentState, convertFromHTML, convertFromRaw, EditorState } from 'draft-js';
import styled from 'styled-components';

export interface IEditorRender {
  content: any;
}

const getEditorState = (content: any) => {
  const isPlainObject = (element: any) => {
    return Object.prototype.toString.call(element) === '[object Object]';
  };

  try {
    const editorContent = isPlainObject(content) ? convertFromRaw(content as any) : convertFromRaw(JSON.parse(content));
    return EditorState.createWithContent(editorContent);
  } catch (error) {
    try {
      const blocksFromHTML = convertFromHTML(content);
      const state = ContentState.createFromBlockArray(blocksFromHTML.contentBlocks, blocksFromHTML.entityMap);
      return EditorState.createWithContent(state);
    } catch (error) {
      return createEditorStateWithText(content);
    }
  }
};

const EditorRenderWrapper = styled.div`
  word-break: break-word;
  .public-DraftEditor-content {
    cursor: default;
  }
`;

const EditorRender = ({ content }: IEditorRender) => {
  const [editorState, setEditorState] = useState(getEditorState(content));

  useEffect(() => {
    setEditorState(getEditorState(content));
  }, [content]);

  if (!content.trim()) {
    return null;
  }
  const linkifyPlugin = createLinkifyPlugin();
  const plugins = [linkifyPlugin];

  return (
    <EditorRenderWrapper>
      <EditorCore readOnly editorState={editorState} onChange={setEditorState} plugins={plugins} />
    </EditorRenderWrapper>
  );
};

export default EditorRender;
