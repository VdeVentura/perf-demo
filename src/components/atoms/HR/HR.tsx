import styled from 'styled-components';

export interface IHR {}

const HR = styled.hr`
  display: block;
  width: 100%;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey10};
  border-top: 1px solid ${({ theme }) => theme.colors.grey10};
`;

export default HR;
