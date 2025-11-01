import { useState, type ReactNode } from "react";
import { useMenu, type CartType } from "../../Contexts/CartProvider";
import Button from "../UI/ReUseUiComp/Button";
import { convertToPrice } from "../../Services/convertToPrice";
import { type showMessageArguments } from "../../Hooks/useDialog";

interface CartItemProps {
  cart: CartType;
  showMessage?: ({ message, duration }: showMessageArguments) => void;
  type?: "confirmList";
}
const removeAnimationDuration = 700;
const CartItem = ({ cart, showMessage, type }: CartItemProps): ReactNode => {
  const { menu, removeItemFromCart } = useMenu();
  const [isItemRemove, setIsItemRemove] = useState<boolean>(false);
  const getMenuThumbnailImgPath = menu.find((m) => m.id === cart.id)?.image
    .thumbnail;
  function handleRemoveItem(): void {
    setIsItemRemove(true);
    setTimeout(() => {
      removeItemFromCart(cart.id);

      if (showMessage) showMessage({ message: "item removed" });
    }, removeAnimationDuration); //
  }
  if (type == "confirmList")
    return (
      <li
        className={`flex border-b-1 border-stone-200  motion-preset-slide-downbg-rose-100 rounded-lg gap-4
        }`}
      >
        <img
          src={getMenuThumbnailImgPath}
          alt="item ordered thumbnail"
          className="h-15 rounded-lg"
        />
        <div className="flex flex-col gap-2">
          <h4 className="flex-auto text-rose-900 font-semibold text-sm">
            {cart.name}
          </h4>
          <div className="flex">
            {/* to justify verticaly */}
            <div className="mr-2.5 text-red">{cart.quantity}x</div>
            <div className="text-rose-400 mr-1.5">
              @{convertToPrice({ price: cart.price })}
            </div>
          </div>
        </div>
        <div className="text-rose-900 self-center flex-auto  text-end">
          {" "}
          {convertToPrice({ price: cart.total })}
        </div>
      </li>
    );
  return (
    <li
      className={`flex border-b-1 border-stone-200  justify-between motion-preset-slide-down ${
        isItemRemove ? `animate-slide-up` : ""
      }`}
    >
      <div className="flex flex-col gap-2">
        <h4 className="flex-auto text-rose-900 font-semibold text-sm">
          {cart.name}
        </h4>
        <div className="flex">
          {/* to justify verticaly */}
          <div className="mr-2.5 text-red">{cart.quantity}x</div>
          <div className="text-rose-400 mr-1.5">
            @{convertToPrice({ price: cart.price })}
          </div>
          <div className="text-rose-500 ">
            {" "}
            {convertToPrice({ price: cart.total })}
          </div>
        </div>
      </div>{" "}
      <Button
        type="removeItem"
        onClick={handleRemoveItem}
        className={"shrink-0 "}
      >
        <img className="h-4 w-4" src="/Svgs/removeItem.svg" alt="" />
      </Button>
    </li>
  );
};

export default CartItem;
