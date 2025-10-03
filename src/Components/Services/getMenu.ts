import type { MenuTypes } from "../../Contexts/CartProvider";
import data from "../../Data/data.json";
export const getMenu = async (): Promise<MenuTypes[]> => {
  await new Promise<void>((resolve: () => void) => setTimeout(resolve, 1000));
  const menuData: MenuTypes[] = data;
  const addedQuantity = menuData.map((item) => ({ ...item, quantity: 0 }));
  return addedQuantity;
};
