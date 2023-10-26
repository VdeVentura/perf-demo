import React, { useContext } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';

import Block from 'components/atoms/Block';
import FileField from 'components/atoms/FileField';
import Avatar from 'components/atoms/Avatar/Avatar';
import useField from 'hooks/useField';
import Text from 'components/atoms/Text';
import { AuthContext } from 'providers/AuthProvider';

export interface IProfileImageField {
  name: string;
}

const ProfileImageFieldAvatarWrapper = styled.div`
  position: relative;
`;
const ProfileImageFieldAvatarIcon = styled(FontAwesomeIcon)`
  display: block;
  width: 40px !important;
  height: 40px;
  padding: 10px;
  border-radius: 50%;

  position: absolute;
  bottom: -8px;
  left: 50%;
  transform: translateX(-50%);

  background: ${({ theme }) => theme.colors.primaryLight};
  background: ${({ theme }) => theme.colors.white};

  color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.primary};

  box-shadow: ${({ theme }) => theme.shadow};
  border: solid 1px #e5ebee;
`;

const ProfileImageField = ({ name }: IProfileImageField) => {
  const [field] = useField({ name });
  const { user } = useContext(AuthContext);
  if (!user) {
    return null;
  }
  return (
    <FileField name={name} displayPreviews={false}>
      <Block xs="auto" textAlign="center">
        <ProfileImageFieldAvatarWrapper>
          <Avatar
            firstName={user.firstName}
            lastName={user.lastName}
            src={field.value[0]?.preview || user.profileImage}
            size="xl"
          />
          <ProfileImageFieldAvatarIcon icon={faCamera} />
        </ProfileImageFieldAvatarWrapper>
        <Text bold color="grey20">
          Change Profile Picture
        </Text>
      </Block>
    </FileField>
  );
};

export default ProfileImageField;
