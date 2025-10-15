import { type JSX, type ReactNode } from "react";

interface ModalBlurBgProps {
  children: JSX.Element;
  closeModalFn: () => void;
}

const ModalBlurBg = ({
  children,
  closeModalFn,
}: ModalBlurBgProps): ReactNode => {
  function closeModal(event: React.MouseEvent<HTMLDivElement>): void {
    if (event.target === event.currentTarget) {
      closeModalFn();
    }
  }

  return (
    <div
      className="bg-opacity-50 fixed inset-0 z-50 flex items-center justify-center bg-black/40 "
      onClick={closeModal}
    >
      {children}
    </div>
  );
};

export default ModalBlurBg;
