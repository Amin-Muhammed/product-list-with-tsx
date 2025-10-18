import { useEffect, useState, type JSX, type ReactNode } from "react";
import CartOverView from "./CartOverView";
import Total from "./Total";
import Button from "../UI/ReUseUiComp/Button";
import { useMenu } from "../../Contexts/CartProvider";
import CarbonDelivery from "./CarbonDelivery";
import ModalBlurBg from "../UI/ReUseUiComp/ModalBlurBg";
import ModalContent from "../UI/ReUseUiComp/ModalContent";
import { motion } from "framer-motion";
import CartItem from "./CartItem";
import useDialog from "../../Hooks/useDialog";
const Cart = (): JSX.Element => {
  const { cart } = useMenu();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [hasOrderConfirm, setHasOrderConfirm] = useState<boolean>(false);
  const { message, showMessage } = useDialog();
  function handleModalToggle() {
    setIsModalOpen(() => !isModalOpen);
  }
  const isCartEmpty: boolean = cart.length === 0;
  const cartItems: Iterable<ReactNode> | [] = !isCartEmpty
    ? cart.map((c, i) => (
        <CartItem cart={c} key={i} showMessage={showMessage} />
      ))
    : [];
  const confirmCartList: ReactNode | [] = !isCartEmpty
    ? cart.map((c, i) => <CartItem type={"confirmList"} cart={c} key={i + 1} />)
    : [];

  useEffect(() => {
    // run this effect to prevent the user to scroll when modal is open and give it back when the modal is closed
    document.body.style.overflow = isModalOpen ? "hidden" : "scroll";
  }, [isModalOpen]);
  if (!isModalOpen) {
    // the lay out transition causes the dialog open in the cart container so to prevent this we only apply it when its close
    return (
      <motion.div
        layout
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="basis-[40%] max-h-150  h-fit scroll-auto flex flex-col gap-4 bg-rose-50 rounded-xl p-3 xs:p-6"
      >
        <CartOverView cartList={cartItems} message={message} />
        {cart.length !== 0 && (
          <>
            <Total />
            <CarbonDelivery />
            <Button type={"confirm"} onClick={handleModalToggle}>
              Confirm Order
            </Button>
          </>
        )}
      </motion.div>
    );
  }
  return (
    <motion.div
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="basis-[40%] max-h-150  h-fit scroll-auto flex flex-col gap-4 bg-rose-50 rounded-xl p-3 xs:p-6"
    >
      <CartOverView cartList={cartItems} message={message} />
      {cart.length !== 0 && (
        <>
          <Total />
          <CarbonDelivery />
          <Button type={"confirm"} onClick={handleModalToggle}>
            Confirm Order
          </Button>
        </>
      )}{" "}
      {isModalOpen ? (
        <ModalBlurBg closeModalFn={handleModalToggle}>
          {hasOrderConfirm ? (
            <ModalContent
              cart={confirmCartList}
              setIsModalOpen={handleModalToggle}
              hasOrderConfirm={hasOrderConfirm}
              changeToConfirmState={setHasOrderConfirm}
            />
          ) : (
            <ModalContent
              cart={confirmCartList}
              setIsModalOpen={handleModalToggle}
              hasOrderConfirm={hasOrderConfirm}
              changeToConfirmState={setHasOrderConfirm}
            />
          )}
        </ModalBlurBg>
      ) : null}
    </motion.div>
  );
};

export default Cart;
