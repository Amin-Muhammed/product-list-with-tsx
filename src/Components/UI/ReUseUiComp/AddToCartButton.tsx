import type { ReactNode } from "react";
import Button from "./Button";
import cartSvg from "../../../assets/Images/icon-add-to-cart.svg";
interface AddToCartButtonProps {
  onClick: () => void;
  baseMenuBtnClass: string;
  addedClasses?: string;
}
const AddToCartButton = ({
  onClick: handleAddedToCart,
  baseMenuBtnClass,
  addedClasses = "",
}: AddToCartButtonProps): ReactNode => {
  return (
    <Button
      className={`${baseMenuBtnClass} ${addedClasses}`}
      onClick={handleAddedToCart}
      type={"addToCart"}
    >
      <span className="basis-[15%] lg:basis-[25%]">
        <img src={cartSvg} alt="" />
      </span>
      <span className="basis-[85%] lg:basis-[75%]">Add to Cart</span>
    </Button>
  );
};

export default AddToCartButton;
