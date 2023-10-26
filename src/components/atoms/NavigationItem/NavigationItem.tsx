import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

export interface INavigationItem {
  icon: IconDefinition;
  label: string;
  className?: string;
}

const NavigationItemWrapper = styled.div`
  cursor: pointer;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  text-decoration: none;

  color: ${({ theme }) => theme.colors.grey20};

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 70px;
  }
`;

const NavigationItem = ({ icon, label, className }: INavigationItem) => {
  return (
    <NavigationItemWrapper className={className}>
      <FontAwesomeIcon icon={icon} size="lg" />
      {label}
    </NavigationItemWrapper>
  );
};

export default styled(NavigationItem)``;
