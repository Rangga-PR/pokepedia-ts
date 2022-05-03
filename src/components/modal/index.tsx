import React, { ReactNode } from "react";
import { createPortal } from "react-dom";
import { Overlay, ContentContainer } from "./style";
import Flexbox from "../common/flexbox";
import Img from "../common/img";

interface ModalProps {
  isOpen: boolean;
  setIsOpen: Function;
  children: ReactNode;
}

const Modal = ({ isOpen, setIsOpen, children }: ModalProps) => {
  const portalTarget = document.getElementById("__next")!;

  return createPortal(
    <Overlay isOpen={isOpen}>
      <ContentContainer isOpen={isOpen}>
        <Flexbox jc="end" p="8px">
          <Img
            c="pointer"
            role="button"
            alt="close"
            aria-label="close"
            src="/assets/svg/close_circle_black.svg"
            w="21px"
            h="21px"
            onClick={() => setIsOpen(false)}
          />
        </Flexbox>
        {children}
      </ContentContainer>
    </Overlay>,
    portalTarget
  );
};

export default Modal;
