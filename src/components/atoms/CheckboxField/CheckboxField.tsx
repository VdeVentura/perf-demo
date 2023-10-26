import React, { ReactNode } from 'react';
import styled, { css } from 'styled-components';

import useField from 'hooks/useField';

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  position: absolute;
  width: 0;
  height: 0;
  overflow: hidden;
  opacity: 0;
`;

const CheckboxFieldWrapper = styled.label`
  display: flex;
  width: fit-content;
  align-items: center;
  cursor: pointer;
`;

const CheckboxFieldSquare = styled.div<{ checked?: boolean; active: boolean }>`
  flex-shrink: 0;
  position: relative;
  width: 20px;
  height: 20px;
  border-radius: 2px;
  background: ${({ checked, theme }) => (checked ? theme.colors.primary : 'transparent')};
  border: 1px solid ${({ checked, theme }) => (checked ? theme.colors.primary : theme.colors.grey20)};
  margin-right: 8px;

  ${({ active }) =>
    css`
      &::before {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
        transition: all 0.1s ease-in-out;

        border-radius: 50%;

        content: '';
        display: block;
        width: ${active ? '32px' : '0px'};
        height: ${active ? '32px' : '0px'};
        background: ${({ theme }) => theme.colors.primary};
        opacity: 0.1;
        z-index: 0;
      }
    `}
`;

const CheckboxFieldChecked = styled.div`
  height: 12px;
  width: 6px;
  margin-top: 10px;
  margin-left: 3px;
  transform: scaleX(-1) rotate(135deg);
  transform-origin: left top;
  border-right: 2px solid ${({ theme }) => theme.colors.white};
  border-top: 2px solid ${({ theme }) => theme.colors.white};
  transition: all 0.2s ease-in-out;
`;

const FieldError = styled.div`
  width: 100%;
  font-size: ${({ theme }) => theme.font.size.small};
  color: ${({ theme }) => theme.colors.red};
`;

export interface ICheckboxField {
  label: ReactNode;
  name: string;
  validate?: (value: any) => string | undefined;
}

const CheckboxField = ({ label, name, validate }: ICheckboxField) => {
  const [field, meta] = useField({ name, type: 'checkbox', validate });

  return (
    <div>
      <CheckboxFieldWrapper>
        <HiddenCheckbox {...field} />
        <CheckboxFieldSquare active={field.active} checked={field.checked}>
          {field.checked && <CheckboxFieldChecked />}
        </CheckboxFieldSquare>
        {label}
      </CheckboxFieldWrapper>
      {meta.error && <FieldError>{meta.error}</FieldError>}
    </div>
  );
};

export default CheckboxField;
