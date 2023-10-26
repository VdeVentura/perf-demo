import React, { ReactNode } from 'react';
import styled from 'styled-components';

import Badge, { IBadge } from 'components/atoms/Badge';
import Container from 'components/atoms/Container';

export interface IBadgeList {
  items: ReactNode[];
  size?: IBadge['size'];
  color?: IBadge['color'];
}

const BadgeListItem = styled(Badge)`
  margin-bottom: ${({ theme }) => theme.spacing.small};
  &:not(:last-of-type) {
    margin-right: ${({ theme }) => theme.spacing.small};
  }
`;

const BadgeList = ({ items, size, color }: IBadgeList) => {
  return (
    <Container>
      {items.map((item, index) => (
        <BadgeListItem key={index} children={item} size={size} color={color} />
      ))}
    </Container>
  );
};

export default BadgeList;
