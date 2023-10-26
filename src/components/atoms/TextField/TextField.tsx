import styled, { css } from "styled-components";

import useField from "@hooks/useField";
import FieldLabel from "@components/atoms/FieldLabel";
import FieldError from "@components/atoms/FieldError";

export const FieldWrapper = styled.label`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  position: relative;
`;

const FieldInput = styled.input<{
  active: boolean;
  error: boolean;
  disabled?: boolean;
}>`
  width: 100%;
  height: 3rem;
  background: transparent;
  padding: 0 ${({ theme }) => theme.spacing.normal};
  font-family: ${({ theme }) => theme.font.family.base};
  font-size: ${({ theme }) => theme.font.size.base};
  ${({ theme, disabled }) =>
    disabled &&
    css`
      color: ${theme.colors.grey15};
    `};

  outline: none;
  border: none;

  transition: all 100ms linear;
`;

export interface ITextField {
  id?: string;
  name: string;
  label: string;
  type?: HTMLInputElement["type"];
  disabled?: boolean;
  validate?: (value: any) => string | undefined;
  autoFocus?: boolean;
  autoComplete?: HTMLInputElement["autocomplete"];
}

const TextField = ({
  name,
  id,
  label,
  validate,
  type,
  disabled,
  autoFocus,
  autoComplete,
}: ITextField) => {
  const [field, meta] = useField({ name, validate, type });
  const hasError = meta.touched && !!meta.error;

  return (
    <FieldWrapper htmlFor={id || name}>
      <FieldWrapper htmlFor={id || name}>
        <FieldLabel
          active={field.active}
          error={hasError}
          filled={!!field.value}
          disabled={disabled}
        >
          {label}
        </FieldLabel>
        <FieldInput
          {...field}
          id={id || name}
          error={hasError}
          type={type}
          autoFocus={autoFocus}
          autoComplete={autoComplete}
          disabled={disabled}
        />
      </FieldWrapper>
      {hasError && <FieldError>{meta.error}</FieldError>}
    </FieldWrapper>
  );
};

export default TextField;
