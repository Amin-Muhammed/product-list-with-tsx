import type { ReactNode } from "react";
const CarbonDelivery = (): ReactNode => {
  return (
    <div className="flex py-2  items-center justify-center gap-2  bg-rose-100  rounded-sm mx-1">
      <img className="" src="/Svgs/carbon-delivery.svg" alt="" />
      <div className="text-xs xs:text-sm">
        This is a <span className="font-bold">carbon-neutral </span>
        delivery
      </div>
    </div>
  );
};

export default CarbonDelivery;
