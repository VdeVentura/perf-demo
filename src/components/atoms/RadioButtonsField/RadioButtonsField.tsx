import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled, { css } from 'styled-components';
import { transparentize } from 'polished';

import useField from 'hooks/useField';
import FieldError from 'components/atoms/FieldError';

const RadioButtonWrapper = styled.label<{ active: boolean; checked: boolean }>(
  ({ theme, active, checked }) => css`
    display: flex;
    align-items: center;
    width: 100%;
    height: ${theme.button.height};

    padding: ${theme.spacing.small};
    margin-bottom: ${theme.spacing.normal};

    border-radius: ${theme.borderRadius};
    border: 2px solid ${theme.colors.grey20};
    color: ${theme.colors.grey20};
    cursor: pointer;

    transition: all 0.1s linear;

    &:hover {
      background: ${transparentize(0.95, theme.colors.primary)};
    }

    ${active &&
    css`
      background: ${transparentize(0.95, theme.colors.primary)};
    `};

    ${checked &&
    css`
      color: ${theme.colors.primary};
      border-color: ${theme.colors.primary};
    `};
  `
);

const HiddenRadio = styled.input.attrs({ type: 'radio' })`
  position: absolute;
  width: 0;
  height: 0;
  overflow: hidden;
  opacity: 0;
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  width: 30px !important;
  margin-right: ${({ theme }) => theme.spacing.small};
`;

const RadioButton = ({
  label,
  icon,
  name,
  value,
}: { name: IRadioButtonsField['name'] } & IRadioButtonsField['options'][number]) => {
  const optionId = `${name}-${value}`;
  const [field] = useField({ name, type: 'radio', value });

  return (
    <RadioButtonWrapper htmlFor={optionId} checked={field.checked!} active={field.active}>
      <StyledFontAwesomeIcon icon={icon} size="lg" />
      {label}
      <HiddenRadio id={optionId} {...field} />
    </RadioButtonWrapper>
  );
};

export interface IRadioButtonsField {
  label?: string;
  name: string;
  options: { label: string; value: string | number; icon: IconDefinition }[];
}

const RadioButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const RadioButtonsField = ({ options, label, name }: IRadioButtonsField) => {
  const [, meta] = useField({ name, type: 'radio', value: '' });
  const hasError = meta.touched && !!meta.error;

  return (
    <RadioButtonsWrapper>
      {options.map((option) => (
        <RadioButton key={option.value} name={name} label={option.label} value={option.value} icon={option.icon} />
      ))}

      {hasError && <FieldError>{meta.error}</FieldError>}
    </RadioButtonsWrapper>
  );
};

export default RadioButtonsField;
