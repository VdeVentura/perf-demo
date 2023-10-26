import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled, { css } from 'styled-components';
import { transparentize } from 'polished';

import Block from 'components/atoms/Block';
import useField from 'hooks/useField';
import { useWindowSize } from 'hooks/useWindowSize';
import { theme } from 'styles/theme';
import RadioButtonsField from 'components/atoms/RadioButtonsField';
import FieldError from 'components/atoms/FieldError';
import Container from 'components/atoms/Container';

const RadioTileWrapper = styled.label<{ active: boolean; checked: boolean }>(
  ({ theme, active, checked }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 150px;
    height: 150px;
    border-radius: ${theme.borderRadius};
    border: 2px solid ${theme.colors.grey20};
    color: ${theme.colors.grey20};
    text-align: center;
    padding: ${theme.spacing.small};
    cursor: pointer;

    transition: all 0.1s linear;
    margin-bottom: ${theme.spacing.normal};

    &:not(:last-child) {
      margin-right: ${theme.spacing.normal};
    }

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
      transform: scale(1.02);
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

const RadioTile = ({
  label,
  icon,
  name,
  value,
}: { name: IRadioTilesField['name'] } & IRadioTilesField['options'][number]) => {
  const optionId = `${name}-${value}`;
  const [field] = useField({ name, type: 'radio', value });

  return (
    <RadioTileWrapper htmlFor={optionId} checked={field.checked!} active={field.active}>
      <Block>
        <FontAwesomeIcon icon={icon} size="2x" />
      </Block>
      {label}
      <HiddenRadio id={optionId} {...field} />
    </RadioTileWrapper>
  );
};

export interface IRadioTilesField {
  label?: string;
  name: string;
  options: { label: string; value: string | number; icon: IconDefinition }[];
}

const RadioTilesWrapper = styled.div``;

const RadioTilesField = ({ options, label, name }: IRadioTilesField) => {
  const [width] = useWindowSize();
  const [, meta] = useField({ name, type: 'radio', value: '' });
  const hasError = meta.touched && !!meta.error;
  if (width <= parseInt(theme.breakpoints.sm, 10)) {
    return <RadioButtonsField options={options} label={label} name={name} />;
  }

  return (
    <RadioTilesWrapper>
      <Container flexWrap="nowrap">
        {options.map((option) => (
          <RadioTile key={option.value} name={name} label={option.label} value={option.value} icon={option.icon} />
        ))}
      </Container>

      {hasError && <FieldError>{meta.error}</FieldError>}
    </RadioTilesWrapper>
  );
};

export default RadioTilesField;
