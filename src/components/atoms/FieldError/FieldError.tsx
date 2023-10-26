import { ReactNode } from 'react';
import styled from 'styled-components';

export interface IFieldError {
  children: ReactNode;
}
const FieldError = styled.div<IFieldError>`
  width: 100%;
  text-align: right;
  font-size: ${({ theme }) => theme.font.size.small};
  color: ${({ theme }) => theme.colors.red};
`;

export default FieldError;
