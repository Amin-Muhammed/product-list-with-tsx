import type { ReactNode } from "react";
import Button from "./Button";
interface QuantityButtonsProps {
  baseMenuBtnClass: string;
  addedClasses?: string;
  quantity: number;
  increaseQuantity: () => void;
  decreaseQuantity: () => void;
}

const QuantityButtons = ({
  baseMenuBtnClass,
  addedClasses,
  quantity,
  increaseQuantity,
  decreaseQuantity,
}: QuantityButtonsProps): ReactNode => {
  return (
    <div className={`${baseMenuBtnClass} ${addedClasses}`}>
      <Button type={"adjustQuantity"} onClick={decreaseQuantity}>
        <img
          className="w-4 h-4"
          alt="button to adjust quantity"
          src={"/Svgs/minus.svg"}
        />
      </Button>
      <span className="text-xs">{quantity}</span>
      <Button type={"adjustQuantity"} onClick={increaseQuantity}>
        <img
          className="w-4 h-4"
          alt="button to adjust quantity"
          src={"/Svgs/plus.svg"}
        />
      </Button>
    </div>
  );
};

export default QuantityButtons;
