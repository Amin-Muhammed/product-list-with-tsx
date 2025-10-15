import { type ReactNode } from "react";
import { useMenu } from "../../../Contexts/CartProvider";
import Button from "./Button";
import Total from "../../Cart/Total";

interface ModalContentProps {
  cart: Iterable<ReactNode>;
  setIsModalOpen: () => void;
  hasOrderConfirm: boolean;
  changeToConfirmState: React.SetStateAction<boolean>;
}
const ModalContent = ({
  cart,
  setIsModalOpen,
  hasOrderConfirm,
  changeToConfirmState,
}: ModalContentProps): ReactNode => {
  console.log(changeToConfirmState);
  const { startNewOrderFn } = useMenu();
  if (!hasOrderConfirm && changeToConfirmState) {
    return (
      <div className="bg-rose-50 w-150 p-6 max-h-200 h-150 flex flex-col justify-between rounded-xl">
        <img src="/Svgs/confirm-order.svg" alt="" className="w-10 " />
        <h1 className="text-3xl text-rose-900 font-bold">Order Confirmed</h1>
        <p className="text-xs">We hope you enjoy your food!</p>
        {/* strech the list and push the button to the end  */}
        <div className="flex-auto max-h-100 h-fit bg-rose-100 flex p-4  flex-col justify-between rounded-xl ">
          <ul className="overflow-auto flex flex-col gap-4">{cart}</ul>
          <Total />
        </div>
        <Button type={"confirm"} onClick={() => changeToConfirmState(true)}>
          Confirm Order
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-rose-50 w-150 p-6 max-h-200 h-150 flex flex-col justify-between rounded-xl">
      <img src="/Svgs/confirm-order.svg" alt="" className="min-h-100 " />
      <Button
        type={"startNewOrder"}
        onClick={() => {
          startNewOrderFn();
          setIsModalOpen();
          changeToConfirmState(false);
        }}
      >
        Start New Order
      </Button>
    </div>
  );
};

export default ModalContent;
