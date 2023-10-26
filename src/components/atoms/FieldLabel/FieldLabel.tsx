import React, { ReactNode } from 'react';
import styled, { css, DefaultTheme } from 'styled-components';

export interface IFieldLabel {
  children: ReactNode;
  active: boolean;
  error: boolean;
  filled: boolean;
  disabled?: boolean;
}

const FieldLabelWrapper = styled.div<Omit<IFieldLabel, 'children'>>`
  position: absolute;
  pointer-events: none;
  top: 0;
  left: 0;
  display: flex;
  height: 100%;
  width: 100%;
`;

export const fieldBorder = ({
  theme,
  active,
  error,
  disabled,
}: Omit<IFieldLabel, 'children'> & { theme: DefaultTheme }) => css`
  border: 2px solid ${disabled ? theme.colors.grey15 : theme.colors.grey20};
  ${active &&
  css`
    border-color: ${theme.colors.primary};
  `};

  ${error &&
  css`
    border-color: ${theme.colors.red};
  `};
`;

const FieldLabelLeading = styled.div<Omit<IFieldLabel, 'children'>>(
  ({ theme }) => css`
    ${fieldBorder}
    border-right: none;
    border-top-left-radius: ${theme.borderRadius};
    border-bottom-left-radius: ${theme.borderRadius};

    width: ${theme.spacing.small};

    transition: all 100ms linear;
  `
);

const FieldLabelNotched = styled.div<Omit<IFieldLabel, 'children'>>(
  ({ theme, active, filled }) => css`
    ${fieldBorder};
    border-left: none;
    border-right: none;

    display: flex;
    padding: 0 ${theme.spacing.small};
    align-items: center;

    ${(active || filled) &&
    css`
      border-top: none;
      align-items: flex-start;
    `};
  `
);

const FieldLabelNotchedLabel = styled.div<Omit<IFieldLabel, 'children'>>(
  ({ theme, active, filled, error, disabled }) => css`
    color: ${disabled ? theme.colors.grey15 : theme.colors.grey20};
    font-size: ${theme.font.size.base};
    transition: all 100ms linear;

    ${active &&
    css`
      color: ${theme.colors.primary};
    `};

    ${error &&
    css`
      color: ${theme.colors.red};
    `};

    ${(active || filled) &&
    css`
      transform: translateY(-50%);
      font-size: ${theme.font.size.small};
    `};
  `
);

export const FieldLabelTrailing = styled.div<Omit<IFieldLabel, 'children'>>(
  ({ theme }) => css`
    ${fieldBorder};
    flex-grow: 1;
    border-left: none;
    border-top-right-radius: ${theme.borderRadius};
    border-bottom-right-radius: ${theme.borderRadius};
    transition: all 100ms linear;
  `
);

const FieldLabel = ({ children, active, error, filled, disabled }: IFieldLabel) => {
  return (
    <FieldLabelWrapper active={active} error={error} disabled={disabled} filled={filled}>
      <FieldLabelLeading active={active} error={error} disabled={disabled} filled={filled} />
      <FieldLabelNotched active={active} error={error} disabled={disabled} filled={filled}>
        <FieldLabelNotchedLabel active={active} error={error} disabled={disabled} filled={filled}>
          {children}
        </FieldLabelNotchedLabel>
      </FieldLabelNotched>
      <FieldLabelTrailing active={active} error={error} disabled={disabled} filled={filled} />
    </FieldLabelWrapper>
  );
};

export default FieldLabel;
