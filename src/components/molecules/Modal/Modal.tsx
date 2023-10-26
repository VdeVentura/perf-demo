import { ReactNode, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import styled, { createGlobalStyle } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import { useWindowSize } from "@hooks/useWindowSize";
import { theme } from "@styles/theme";
import Title from "@components/atoms/Title";
import { animated, useTransition } from "@react-spring/web";

export interface IModal {}

export interface IuseModal {
  closeOnEsc?: boolean;
  closeOnBackdrop?: boolean;
}

const Modal = ({
  isOpen,
  closeOnBackdrop,
  closeModal,
  modalDiv,
}: {
  isOpen: boolean;
  closeOnBackdrop?: boolean;
  closeModal: () => void;
  modalDiv: HTMLElement;
}) => {
  const [width] = useWindowSize();
  const isMobile = width < parseInt(theme.breakpoints.sm, 10);

  const transitions = useTransition(isOpen, {
    from: { bottom: "-150%" },
    enter: { bottom: isMobile ? "0%" : "50%" },
    leave: { bottom: "-150%" },
  });
  return ({ header, children }: { header: string; children: ReactNode }) => {
    return createPortal(
      transitions(
        (style, item) =>
          item && (
            <animated.div>
              <ModalWrapper>
                {isOpen && (
                  <ModalBackdrop
                    onClick={() => closeOnBackdrop && closeModal()}
                  />
                )}
                <ModalContent style={style}>
                  <ModalClose>
                    <FontAwesomeIcon
                      icon={faTimes}
                      onClick={closeModal}
                      size="lg"
                    />
                  </ModalClose>
                  <Title center>{header}</Title>
                  {children}
                </ModalContent>
                <BodyOverFlowHidden />
              </ModalWrapper>
            </animated.div>
          )
      ),
      modalDiv
    );
  };
};
const BodyOverFlowHidden = createGlobalStyle`
	body {
		overflow: hidden;
	}
`;

const ModalWrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
`;

const ModalBackdrop = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
`;

const ModalContent = styled(animated.div)`
  position: absolute;
  left: 0;

  width: 100%;
  max-height: 90vh;
  padding: ${(props) => props.theme.spacing.normal};

  overflow-y: auto;

  background: white;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.3), 0px 6px 8px rgba(0, 0, 0, 0.2);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;

  @media (min-width: ${(props) => props.theme.breakpoints.sm}) {
    left: 50%;
    transform: translate(-50%, 50%);
    height: initial;
    max-height: 90%;

    border-radius: 8px;

    width: ${(props) => props.theme.breakpoints.sm};
  }

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    width: ${(props) => props.theme.breakpoints.md};
  }
`;

const ModalClose = styled.div`
  cursor: pointer;
  position: absolute;
  right: 16px;
  top: 16px;
  border-radius: 50%;
  color: #adadad;
  overflow: hidden;
  transition: color 0.2s linear;

  &:hover {
    color: #000;
  }
`;

export const useModal = ({ closeOnEsc, closeOnBackdrop }: IuseModal = {}) => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const modalRoot = document.getElementById("modal-root")!;
  const modalDiv = useRef(document.createElement("div"));

  // setup modal Node
  useEffect(() => {
    const currentModalDiv = modalDiv.current;

    if (modalRoot) {
      modalRoot.append(currentModalDiv);
    }
    return () => {
      currentModalDiv.remove();
    };
  }, [modalRoot]);

  // setup esc listener
  useEffect(() => {
    const escListener = ({ keyCode }: { keyCode: number }) => {
      return keyCode === 27 && closeModal();
    };

    if (closeOnEsc) {
      document.addEventListener("keydown", escListener, false);
    }

    return () => {
      document.removeEventListener("keydown", escListener, false);
    };
  }, [closeOnEsc]);

  return {
    openModal,
    closeModal,
    Modal: Modal({
      modalDiv: modalDiv.current,
      closeOnBackdrop,
      closeModal,
      isOpen,
    }),
  };
};

export default Modal;
