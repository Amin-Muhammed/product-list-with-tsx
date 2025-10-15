import {
  useEffect,
  useRef,
  type JSX,
  type ReactElement,
  type ReactNode,
} from "react";
import { useMenu } from "../../Contexts/CartProvider";
import emptyCartImg from "../../assets/images/illustration-empty-cart.svg";
import CartItem from "./CartItem";
import Diolog from "../UI/ReUseUiComp/Dialog";
import useDialog, { type showMessageArguments } from "../../Hooks/useDialog";
import {
  dialogClass,
  dialogClassAnimation,
} from "../Services/reUseTailwindClass";
const CartOverView = ({
  cartList,
  message,
}: {
  cartList: Iterable<ReactNode>;
  message: showMessageArguments["message"] | null;
}): JSX.Element => {
  const { cart } = useMenu();

  const cartDiv = useRef<HTMLDivElement>(null);

  //derived states
  const isCartEmpty: boolean = cart.length === 0;
  // const cartItems: ReactNode | [] = !isCartEmpty
  //   ? cart.map((c, i) => (
  //       <CartItem
  //         type={"cartList"}
  //         cart={c}
  //         key={i}
  //         showMessage={showMessage}
  //       />
  //     ))
  //   : [];

  function handleFocusCartDiv(event: React.MouseEvent<HTMLElement>): void {
    if (event.target !== event.currentTarget) return; // stop propigate for the purpose of the button inside the item carts for removing then so the element does not get focus every time user tries to remove thhhe item
    cartDiv.current?.focus();
  }

  useEffect(() => {
    // effect to make the container scroll to the bottom each time the item is added
    const el = cartDiv.current;

    if (cart.length > 0) {
      el?.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
    }
  }, [cart.length]);
  return (
    <>
      <h1 className="capitalize text-lg md:text-xl font-bold text-red border-b-0">
        Your Cart ({cart.length})
      </h1>
      <div
        className={` bg-rose-50 flex  focus:overflow-auto overflow-auto sm:overflow-hidden flex-col gap-4 back `}
        ref={cartDiv}
        tabIndex={-1}
        onClick={(event) => handleFocusCartDiv(event)}
      >
        {isCartEmpty ? (
          <>
            <img
              src={emptyCartImg}
              className="  mx-auto"
              alt="empty cart ilustration"
            />
            <p className="self-center">Your added items will apppear here</p>
          </>
        ) : (
          cartList
        )}
        <Diolog
          isOpen={!!message} // = message? true:false
          className={dialogClass}
          animationClassName={dialogClassAnimation}
        >
          <p>{message}</p>
        </Diolog>
      </div>
    </>
  );
};

export default CartOverView;
