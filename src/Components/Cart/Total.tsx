import type { ReactNode } from "react";
import { convertToPrice } from "../../Services/convertToPrice";
import { useMenu } from "../../Contexts/CartProvider";
const Total = (): ReactNode => {
  const { cart } = useMenu();
  const total = cart
    .map((c) => c.total)
    .reduce((price, total) => price + total, 0);
  //   console.log(typeof total);
  return (
    <div className="flex justify-between align-middle">
      <span className="capitalize text-xs xs:text-sm text-rose-900 self-center  ">
        {" "}
        order total
      </span>
      <span className="text-lg xs:text-xl font-bold">
        {convertToPrice({ price: total })}
      </span>
    </div>
  );
};

export default Total;
