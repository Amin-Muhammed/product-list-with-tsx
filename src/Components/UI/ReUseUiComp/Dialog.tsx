import type { ReactNode } from "react";

interface DialogProps {
  children: ReactNode;
  isOpen: boolean;
  className?: string;
  animationClassName?: string;
  // setIsOpen: (isOpen: boolean) => void;
}
const Diolog = ({
  children,
  isOpen,
  className,
  animationClassName,
}: DialogProps): ReactNode => {
  console.log(isOpen);
  if (!isOpen) return null;
  return (
    <dialog
      className={`${className} text-center ${isOpen && animationClassName}`}
      open={isOpen}
    >
      {children}
    </dialog>
  );
};

export default Diolog;
