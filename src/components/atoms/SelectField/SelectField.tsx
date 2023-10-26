import React from "react";
import styled from "styled-components";
import Select, { Props as SelectProps } from "react-select";
import AsyncSelect, {
  AsyncProps as AsyncSelectProps,
} from "react-select/async";
import AsyncSelectCreatable, {
  AsyncCreatableProps as AsyncSelectCreatableProps,
} from "react-select/async-creatable";
import SelectCreatable from "react-select/creatable";

import useField from "@hooks/useField";
import FieldLabel from "@components/atoms/FieldLabel";
import FieldError from "@components/atoms/FieldError";

const SelectFieldWrapper = styled.label`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  position: relative;

  .react-select__menu {
    z-index: 10;
  }

  .react-select__control {
    background: transparent;
    border: none;
    box-shadow: none;
    min-height: 3rem;
    padding: 6px 0;
  }
  .react-select__value-container {
    cursor: text;
  }
  .react-select__indicator-separator {
    background-color: ${({ theme }) => theme.colors.grey15};
  }
  .react-select__indicator {
    color: ${({ theme }) => theme.colors.grey15};
  }
  .react-select__loading-indicator {
    color: ${({ theme }) => theme.colors.primary};
  }
  .react-select__multi-value {
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 100px;
    padding: 2px 12px;
  }
  .react-select__multi-value__label {
    font-size: ${({ theme }) => theme.font.size.small};
    color: ${({ theme }) => theme.colors.white};
  }
  .react-select__multi-value__remove {
    color: ${({ theme }) => theme.colors.white};
  }
`;

export interface ISelectField extends SelectProps {
  name: string;
  label: string;
  creatable?: boolean;
  validate?: (value: SelectProps["value"]) => string | undefined;
  onCreateOption?: (value: string) => Promise<{ label: string; value: string }>;
}

const SelectField = ({
  name,
  label,
  validate,
  creatable,
  ...rest
}: ISelectField) => {
  const [field, meta, helpers] = useField({
    name,
    validate,
    type: "select",
    multiple: rest.isMulti,
  });
  const hasError = meta.touched && !!meta.error;

  if (creatable) {
    return (
      <>
        <SelectFieldWrapper htmlFor={name}>
          <FieldLabel
            active={field.active}
            error={hasError}
            filled={!!field.value}
          >
            {label}
          </FieldLabel>
          <SelectCreatable
            {...field}
            onChange={(option) => helpers.setValue(option)}
            placeholder=""
            classNamePrefix="react-select"
            {...rest}
          />
        </SelectFieldWrapper>
        {hasError && <FieldError>{meta.error}</FieldError>}
      </>
    );
  }

  return (
    <>
      <SelectFieldWrapper htmlFor={name}>
        <FieldLabel
          active={field.active}
          error={hasError}
          filled={!!field.value}
        >
          {label}
        </FieldLabel>
        <Select
          {...field}
          onChange={(option) => helpers.setValue(option)}
          placeholder=""
          classNamePrefix="react-select"
          {...rest}
        />
      </SelectFieldWrapper>
      {hasError && <FieldError>{meta.error}</FieldError>}
    </>
  );
};

interface IAsyncSelectBase {
  name: string;
  label: string;
  validate?: (value: any) => string | undefined;
}

type IAsyncSelect = {
  creatable?: false;
  onCreateOption?: undefined;
} & IAsyncSelectBase &
  AsyncSelectProps<any, true, any>;

type IAsyncSelectCreatable = {
  creatable: true;
  onCreateOption: (value: string) => Promise<{ label: string; value: string }>;
} & IAsyncSelectBase &
  AsyncSelectCreatableProps<any, true, any>;

export type IAsyncSelectField = IAsyncSelect | IAsyncSelectCreatable;

export const AsyncSelectField = ({
  name,
  label,
  loadOptions,
  validate,
  creatable,
  onCreateOption,
  ...rest
}: IAsyncSelectField) => {
  const [field, meta, helpers] = useField({
    name,
    validate,
    type: "select",
    multiple: rest.isMulti,
  });
  const hasError = meta.touched && !!meta.error;
  const SelectComponent = creatable ? AsyncSelectCreatable : AsyncSelect;
  return (
    <SelectFieldWrapper htmlFor={name}>
      <FieldLabel
        active={field.active}
        error={hasError}
        filled={rest.isMulti ? !!field.value?.length : !!field.value}
      >
        {label}
      </FieldLabel>
      <SelectComponent
        {...field}
        onChange={(value) => helpers.setValue(value)}
        loadOptions={loadOptions}
        placeholder=""
        classNamePrefix="react-select"
        onCreateOption={async (data: any) => {
          if (onCreateOption) {
            const newOption = await onCreateOption(data);
            if (rest.isMulti) {
              helpers.setValue([...field.value, newOption]);
            } else {
              helpers.setValue(newOption);
            }
          }
        }}
        {...rest}
      />
    </SelectFieldWrapper>
  );
};

export default SelectField;
