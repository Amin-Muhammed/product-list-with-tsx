import { useMemo, type JSX } from "react";
import { useMenu } from "../../Contexts/CartProvider";
import MenuCart from "./MenuCart";
import type { MenuTypes } from "../../Contexts/CartProvider";
import Diolog from "../UI/ReUseUiComp/Dialog";
import useDialog from "../../Hooks/useDialog";
import {
  dialogClass,
  dialogClassAnimation,
} from "../../Services/reUseTailwindClass";
import { OrbitProgress } from "react-loading-indicators";
import { useInView } from "react-intersection-observer";

const Menu = (): JSX.Element => {
  const { menu } = useMenu();
  // const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const { message, showMessage } = useDialog();

  // safer typing
  const menuComponents: JSX.Element[] = useMemo(
    () =>
      menu.map((m: MenuTypes) => (
        <MenuCart menu={m} key={m.name} showMessage={showMessage} />
      )),
    [menu]
  );

  // function handleDialog() {
  //   setIsDialogOpen((prev) => {
  //     // this is always return true the false is only to reset the animation and then make it true again
  //     if (prev) {
  //       // if it is open already, we re-render by returning false and reset the animation by makeing open agian.(this returns true and couse the effect run)
  //       requestAnimationFrame(() => setIsDialogOpen(true));
  //       return false;
  //       // if we return true here, the dialog will stay open and not re-render
  //     }
  //     // if it is not open, just open it
  //     return true;
  //   });
  // }
  // useEffect(() => {
  //   if (!isDialogOpen) return;
  //   const x = setTimeout(() => {
  //     setIsDialogOpen(false);
  //   }, 2000);
  //   return () => clearTimeout(x);
  // }, [isDialogOpen]);

  return (
    <div className="basis-[60%] md:px-[1%]">
      {menu.length > 0 ? (
        <>
          <h1 className="text-2xl font-extrabold">Desserts</h1>
          <div className="grid w-full grid-cols-[repeat(auto-fill,minmax(200px,1fr))] justify-center gap-4 ">
            {menuComponents}
          </div>
        </>
      ) : (
        <div className="w-full h-full flex justify-center items-center">
          <OrbitProgress color={"#e11d48"} size={"large"} />
        </div>
      )}

      <Diolog
        className={dialogClass}
        animationClassName={dialogClassAnimation}
        isOpen={!!message}
      >
        <p>{message}</p>
      </Diolog>
    </div>
  );
};

export default Menu;
