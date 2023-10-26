import { Story } from '@storybook/react/types-6-0';
import React from 'react';

import Modal, { useModal } from './Modal';

import Button from 'components/atoms/Button';

export default {
  title: 'Molecules/Modal',
  component: Modal,
};

export const Base: Story = (args) => {
  const { openModal, Modal } = useModal({ closeOnEsc: true, closeOnBackdrop: true });

  return (
    <>
      <Button onClick={openModal}>Open Modal</Button>
      <Modal header="This is a Header">This is the body</Modal>
    </>
  );
};

Base.args = {};

Base.argTypes = {};
