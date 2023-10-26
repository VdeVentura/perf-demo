import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { FileRejection, useDropzone } from 'react-dropzone';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile, faInbox, faTrash } from '@fortawesome/free-solid-svg-icons';

import Button from 'components/atoms/Button';
import useField from 'hooks/useField';
import Container from 'components/atoms/Container';
import Block from 'components/atoms/Block';
import Text from 'components/atoms/Text';
import Card from 'components/atoms/Card';
import { useWindowSize } from 'hooks/useWindowSize';
import { theme } from 'styles/theme';

export const FileFieldWrapper = styled(Container)``;

const Dropzone = styled(Container)`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: ${({ theme }) => theme.spacing.normal};

  border: 2px dashed ${({ theme }) => theme.colors.primaryLight};
  border-radius: ${({ theme }) => theme.borderRadius};
`;

const FilePreviewImage = styled.img`
  width: 60px;
  max-height: 60px;
  height: auto;
  border-radius: ${({ theme }) => theme.borderRadius};
  margin-right: ${({ theme }) => theme.spacing.normal};
`;

const FilePreviewIcon = styled(FontAwesomeIcon)`
  width: 60px !important;
  height: 60px;
  background: ${({ theme }) => theme.colors.grey10};
  padding: ${({ theme }) => theme.spacing.normal};
  border-radius: ${({ theme }) => theme.borderRadius};
  margin-right: ${({ theme }) => theme.spacing.normal};
`;

export interface IFile extends File {
  preview: string | null;
  error: string | null;
  key: string;
}

const isImageFileType = (type: string): boolean => type.indexOf('image/') === 0;

interface IFilePreview {
  file: IFile;
  onDelete: (fileKey: string) => any;
}
const FilePreview = ({ file, onDelete }: IFilePreview) => {
  const useImage = isImageFileType(file.type) && file.preview;

  return (
    <Block key={file.key} xs="auto" flexBasis="400px">
      <Card>
        <Container alignItems="center">
          {useImage ? <FilePreviewImage src={file.preview!} alt="" /> : <FilePreviewIcon size="3x" icon={faFile} />}

          <Block xs="auto" flexBasis="0" flexGrow={1} padding="none">
            <Text clamp={1} margin="0">
              {file.name}
            </Text>
            {file.error && (
              <Text clamp={1} margin="0" color="red" size="small">
                {file.error}
              </Text>
            )}
          </Block>
          <Block xs="auto" padding="none">
            <Button flat type="button" color="red" onClick={() => onDelete(file.key)}>
              <FontAwesomeIcon icon={faTrash} />
            </Button>
          </Block>
        </Container>
      </Card>
    </Block>
  );
};

const acceptedFileWithMetadata = (file: File) =>
  Object.assign(file, {
    key: `${file.name}-${file.lastModified}`,
    preview: URL.createObjectURL(file),
    error: null,
  });

const rejectedFileWithMetadata = ({ file, errors }: FileRejection) =>
  Object.assign(file, {
    key: `${file.name}-${file.lastModified}`,
    preview: URL.createObjectURL(file),
    error: errors[0].message,
  });

type IBaseField = {
  name: string;
  maxFiles?: number;
  displayDropzone?: boolean;
  displayPreviews?: boolean;
};

type ILabelFileField = IBaseField & {
  label: string;
  children?: undefined;
};

type IChildrenLabelField = IBaseField & {
  label?: undefined;
  children: ReactNode;
};

export type IFileField = ILabelFileField | IChildrenLabelField;

const FileField = ({ name, label, children, displayDropzone, displayPreviews = true, maxFiles = 1 }: IFileField) => {
  const [width] = useWindowSize();
  const isMobile = width <= parseInt(theme.breakpoints.sm, 10);

  const validate = (value: IFile[]) => (value.every((file) => file.error === null) ? undefined : 'error');

  const onDrop = (acceptedFiles: File[], rejectedFiles: FileRejection[]) => {
    helpers.setValue([...acceptedFiles.map(acceptedFileWithMetadata), ...rejectedFiles.map(rejectedFileWithMetadata)]);
  };

  const onDelete = (fileKey: string) => {
    const newFiles = field.value.filter((file) => file.key !== fileKey);
    const validatedFiles = newFiles.map((file) =>
      Object.assign(file, { error: newFiles.length <= maxFiles ? null : file.error })
    );
    helpers.setValue(validatedFiles);
  };

  const [field, , helpers] = useField<IFile[]>({ name, type: 'file', multiple: true, validate });

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    multiple: maxFiles > 1,
    maxFiles,
    onDrop,
    preventDropOnDocument: false,
  });

  const fileFieldInput = <input {...getInputProps()} name={name} />;

  const fileFieldButton = (
    <Block sm="auto">
      <Button type="button">{label}</Button>
    </Block>
  );

  const fileFieldPreviews = displayPreviews ? (
    <>
      {field.value.map((file) => (
        <FilePreview key={file.key} file={file} onDelete={onDelete} />
      ))}
    </>
  ) : null;

  if (displayDropzone && !isMobile) {
    return (
      <FileFieldWrapper>
        {fileFieldPreviews}
        <Block>
          <Dropzone {...getRootProps()}>
            {fileFieldInput}

            <Block textAlign="center">
              <FontAwesomeIcon icon={faInbox} size="4x" />
            </Block>

            <Text margin="0">{isDragActive ? 'Drop the files here' : 'Click or drag file to this area to upload'}</Text>
            {<Text size="small">Maximum files: {maxFiles}</Text>}

            {fileFieldButton}
          </Dropzone>
        </Block>
      </FileFieldWrapper>
    );
  }

  return (
    <FileFieldWrapper justifyContent="center">
      {fileFieldPreviews}
      <Block md="auto" padding="none" {...getRootProps()}>
        {fileFieldInput}
        {children || fileFieldButton}
      </Block>
    </FileFieldWrapper>
  );
};

export default FileField;
