import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactNode } from "react";
import styled from "styled-components";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

import Title from "@components/atoms/Title";

const CardWrapper = styled.div`
  background: #fff;
  position: relative;
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: ${({ theme }) => theme.spacing.normal};
  box-shadow: ${({ theme }) => theme.shadow};
  height: auto;
  width: 100%;
`;

const CardHeader = styled.div`
  display: flex;
  margin-bottom: ${(props) => props.theme.spacing.normal};
`;

export interface ICard {
  children: ReactNode;
  title?: string;
  className?: string;
  icon?: IconDefinition;
}

const Card = ({ children, className, title, icon }: ICard) => {
  return (
    <CardWrapper className={className}>
      {title && (
        <CardHeader>
          <Title size="small">{title}</Title>
          {icon && <FontAwesomeIcon icon={icon} />}
        </CardHeader>
      )}
      {children}
    </CardWrapper>
  );
};

export default styled(Card)<ICard>``;
