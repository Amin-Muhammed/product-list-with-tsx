import { type JSX } from "react";
interface ButtonProps {
  children: JSX.Element | string | JSX.Element[];
  className?: string;
  applyStyle?: boolean;
  onClick?: () => void;
  type?:
    | "addToCart"
    | "adjustQuantity"
    | "removeItem"
    | "confirm"
    | "startNewOrder"
    | "button";
}
interface ButtonTypesClass {
  addToCart: string;
  adjustQuantity: string;
  removeItem: string;
  confirm: string;
}
const Button = ({
  children,
  className,
  applyStyle = false,
  onClick: handleAddedToCart,
  type = "button",
}: ButtonProps): JSX.Element => {
  const classObj = {
    addToCart: " bg-rose-50  py-1 capitalize text-xs  border-red ",
    adjustQuantity:
      " bg-transparent py-1 px-2  capitalize text-xs   flex items-center justify-center",
    removeItem: "  capitalize text-xs  border-gray ",
    confirm:
      " bg-red text-rose-100 text-xs xs:text-sm sm:text-base p-2.5 capitalize border-green rounded-full  ",
    startNewOrder:
      " bg-red text-rose-100 text-xs xs:text-sm sm:text-base p-2.5 capitalize border-green rounded-full  ",
    button: "", // Add a default style
  };
  return (
    <button
      className={`${className || ""} ${classObj[type]}   `}
      onClick={handleAddedToCart}
    >
      {children}
    </button>
  );
};

export default Button;
