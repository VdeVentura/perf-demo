import React from "react";
import styled, { css } from "styled-components";
import { Property } from "csstype";

import FieldError from "../FieldError";

import useField from "@hooks/useField";

const Wrapper = styled.div<{ justifyContent: Property.JustifyContent }>`
  display: flex;
  align-items: center;
  justify-content: ${({ justifyContent }) => justifyContent};
  text-align: center;
  flex-wrap: wrap;
`;

const HiddenToggle = styled.input`
  display: block;
  width: 0;
  height: 0;
  opacity: 0;
  margin: 0;
  padding: 0;
`;

const Toggle = styled.label<{ checked: boolean; isFocused: boolean }>`
  width: 50px;
  height: 24px;
  border-radius: 24px;
  position: relative;
  background: ${({ checked, theme }) =>
    checked ? theme.colors.primary : theme.colors.grey15};
  transition: all 0.2s ease-in-out;

  cursor: pointer;

  &::before {
    position: absolute;
    top: 50%;
    left: ${({ checked }) => (checked ? "28px" : "4px")};
    transform: translateY(-50%);
    transition: all 0.2s ease-in-out;
    ${({ isFocused }) =>
      isFocused &&
      css`
        box-shadow: 0px 0px 0px 8px rgb(63, 14, 64, 0.2);
      `};

    border-radius: 50%;

    content: "";
    display: block;
    width: 18px;
    height: 18px;
    background: white;
    z-index: 0;
  }
`;

const Label = styled.label`
  cursor: pointer;
  flex-basis: 0;
  flex-grow: 1;
  text-align: left;
  font-size: ${({ theme }) => theme.font.size.base};
`;

const ErrorWrapper = styled.div`
  width: 100%;
  text-align: left;
`;

export interface IToggleField {
  name: string;
  label: string;
  validate?: (value: any) => string | undefined;
  justifyContent?: Property.JustifyContent;
}

const ToggleField = ({
  name,
  label,
  validate,
  justifyContent = "left",
}: IToggleField) => {
  const [field, meta] = useField({ name, validate, type: "checkbox" });

  const value = field.value;
  const isFocused = field.active;
  const hasError = meta.touched && meta.error;
  return (
    <Wrapper justifyContent={justifyContent}>
      <HiddenToggle {...field} id={name} type="checkbox" checked={value} />
      <Label htmlFor={name}>
        {label}
        <ErrorWrapper>
          {hasError && <FieldError>{meta.error}</FieldError>}
        </ErrorWrapper>
      </Label>
      <Toggle htmlFor={name} isFocused={isFocused} checked={value} />
    </Wrapper>
  );
};

export default ToggleField;
