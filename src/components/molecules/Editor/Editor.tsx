import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import EditorCore from '@draft-js-plugins/editor';
import createLinkifyPlugin from '@draft-js-plugins/linkify';
import createToolbarPlugin, { Separator } from '@draft-js-plugins/static-toolbar';
import {
  ItalicButton,
  BoldButton,
  UnderlineButton,
  CodeButton,
  UnorderedListButton,
  OrderedListButton,
  BlockquoteButton,
} from '@draft-js-plugins/buttons';
import { EditorState } from 'draft-js';

import { fieldBorder } from 'components/atoms/FieldLabel';
import useField from 'hooks/useField';

import 'draft-js/dist/Draft.css';
import '@draft-js-plugins/static-toolbar/lib/plugin.css';

const EditorWrapper = styled.label`
  display: flex;
  flex-direction: column;

  position: relative;
  border-radius: ${({ theme }) => theme.borderRadius};
  ${fieldBorder};

  .public-DraftEditor-content {
    padding: ${({ theme }) => theme.spacing.normal};
    cursor: text;
  }

  .toolbar {
    background: transparent;
    display: flex;
    padding: 0.5rem;
    overflow: scroll;
  }

  .toolbar__button-wrapper {
    &:not(:last-child) {
      margin-right: ${({ theme }) => theme.spacing.small};
    }
  }

  .toolbar__button {
    height: 40px;
    width: 40px;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0.5rem;
    display: inline-flex;
    justify-content: center;
    align-items: center;

    border-radius: ${({ theme }) => theme.borderRadius};

    &:hover {
      background: rgba(0, 0, 0, 0.2);
    }

    &&--active {
      background: rgba(0, 0, 0, 0.2);
      fill: ${({ theme }) => theme.colors.primaryLight};
    }
  }
`;

const FieldLabel = styled.div`
  padding: ${({ theme }) => theme.spacing.normal};
  color: ${({ theme }) => theme.colors.grey15};
  cursor: pointer;
`;

export interface IEditor {
  id?: string;
  name: string;
  label: string;
  validate?: (value: any) => string | undefined;
  initiallyExpanded?: boolean;
  enableToolbar?: boolean;
}

const Editor = ({ name, id, label, validate, initiallyExpanded = false, enableToolbar = true }: IEditor) => {
  const [field, meta, helpers] = useField<EditorState>({ name, validate });

  const hasError = meta.touched && !!meta.error;
  const editorRef = useRef<EditorCore>(null);
  const hasInitialContent = meta.initialValue?.getCurrentContent().hasText();

  const [expanded, setExpanded] = useState(initiallyExpanded || hasInitialContent);
  useEffect(() => {
    if (!initiallyExpanded && !hasInitialContent && expanded === true) {
      setTimeout(() => editorRef.current?.focus());
    }
  }, [expanded, hasInitialContent, initiallyExpanded]);

  const toolbarPlugin = createToolbarPlugin({
    theme: {
      buttonStyles: {
        buttonWrapper: 'toolbar__button-wrapper',
        button: 'toolbar__button',
        active: 'toolbar__button--active',
      },
      toolbarStyles: { toolbar: 'toolbar' },
    },
  });
  const { Toolbar: ToolbarCore } = toolbarPlugin;

  const Toolbar = () => {
    return (
      <ToolbarCore>
        {(externalProps) => (
          <>
            <BoldButton {...externalProps} />
            <ItalicButton {...externalProps} />
            <UnderlineButton {...externalProps} />
            <Separator />
            <UnorderedListButton {...externalProps} />
            <OrderedListButton {...externalProps} />
            <Separator />
            <CodeButton {...externalProps} />
            <BlockquoteButton {...externalProps} />
          </>
        )}
      </ToolbarCore>
    );
  };

  const linkifyPlugin = createLinkifyPlugin();

  const plugins = [linkifyPlugin, toolbarPlugin];

  return (
    <EditorWrapper
      htmlFor={id || name}
      active={field.active}
      error={hasError}
      filled={!!field.value.getCurrentContent().hasText()}
      onClick={() => setExpanded(true)}
    >
      {expanded ? (
        <>
          {enableToolbar && <Toolbar />}
          <EditorCore
            {...field}
            onBlur={() => field.onBlur(id || name)}
            onChange={helpers.setValue}
            editorState={field.value}
            ref={editorRef}
            plugins={plugins}
          />
        </>
      ) : (
        <FieldLabel>{label}</FieldLabel>
      )}
    </EditorWrapper>
  );
};

export default Editor;
