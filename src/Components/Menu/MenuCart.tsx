import {
  useMenu,
  type CartType,
  type MenuTypes,
} from "../../Contexts/CartProvider";
import type { JSX } from "react";
import AddToCartButton from "../UI/ReUseUiComp/AddToCartButton";
import QuantityButtons from "../UI/ReUseUiComp/QuantityButtons";
import { convertToPrice } from "../../Services/convertToPrice";
import type { showMessageArguments } from "../../Hooks/useDialog";
import { useInView } from "react-intersection-observer";
interface MenuCartProps {
  menu: MenuTypes;
  showMessage: ({ message, duration }: showMessageArguments) => void;
}
import sss from "/MenuImages/image-baklava-desktop.jpg"; // to avoid error

const MenuCart = ({ menu, showMessage }: MenuCartProps): JSX.Element | null => {
  const { addToCart, cart, decQuantity } = useMenu();
  const { ref, inView: isInView } = useInView({
    threshold: 0.6,
    triggerOnce: true,
  });

  const sources = [
    { src: menu.image.desktop, media: "(min-width: 1024px)" },
    { src: menu.image.tablet, media: "(min-width: 640px)" },
    { src: menu.image.mobile, media: "(max-width: 639px)" },
  ];
  console.log(menu.image.mobile, sss);
  const btnStyle =
    "w-[clamp(155px,69%,180px)] max-h-8 absolute flex py-1.5 items-center -bottom-3 left-[50%] -translate-x-[50%] rounded-2xl border-red border-1 "; // can use memo if it got to big

  // Single find is enough
  const cartItem: CartType | undefined = cart.find(
    (item) => item.id === menu.id
  );
  //derrived states
  const isQuantityZero = cartItem?.quantity
    ? cartItem.quantity < 0
      ? true
      : false
    : true;
  // if cartItem is undefined, quantity is considered zero

  function handleAddedToCartAndIncQuantity(): void {
    // used to add to cart and increase quantity (watch the context case)
    const cartObj: CartType = {
      // total will be added in the dispatch so it is ok if we don't put in here
      name: menu.name,
      price: menu.price,
      quantity: 1,
      id: menu.id,
    };
    addToCart(cartObj);
    showMessage({ message: `${menu.name} added to the cart` });
  }
  function handleDecreaseQuantity(): void {
    if (!cartItem) return; // safety check}
    decQuantity(cartItem.id);
  }
  // if (!isInView) {
  //   return null;
  // }
  return (
    <div
      className={`basis-44 h-full flex flex-col gap-8 ${
        isInView ? "motion-preset-blur-down-lg" : "opacity-0"
      }  motion-duration-600`}
      ref={ref}
    >
      <picture className="relative">
        {cartItem ? (
          isQuantityZero ? (
            <AddToCartButton
              baseMenuBtnClass={btnStyle}
              onClick={handleAddedToCartAndIncQuantity}
              addedClasses={"gap-2 px-5"}
            />
          ) : (
            <QuantityButtons
              baseMenuBtnClass={btnStyle}
              quantity={cartItem.quantity}
              addedClasses={"text-rose-50 bg-red  px-1 justify-between"}
              increaseQuantity={handleAddedToCartAndIncQuantity}
              decreaseQuantity={handleDecreaseQuantity}
            />
          )
        ) : (
          <AddToCartButton
            baseMenuBtnClass={btnStyle}
            onClick={handleAddedToCartAndIncQuantity}
            addedClasses={"gap-2 px-5"}
          />
        )}

        {sources.map((s, idx) => (
          <source key={idx} srcSet={s.src} media={s.media} />
        ))}
        <img
          src={menu.image.mobile} // fallback image
          alt={menu.name}
          className={` w-full rounded-lg ${
            !isQuantityZero && "border-1 border-red"
          }`} // if quantity is not zero, add border
          loading="lazy"
        />
      </picture>

      <div className="flex flex-col justify-center">
        <h5 className="text-sm  lg:text-base text-rose-500">{menu.category}</h5>
        <h3 className="lg:text-lg text-base font-semibold ">{menu.name}</h3>
        <h4 className="text-red justify-self-end ">
          {convertToPrice({ price: menu.price })}
        </h4>
      </div>
    </div>
  );
};

export default MenuCart;
