import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useReducer,
} from "react";
import { getMenu } from "../Services/getMenu";
import { useSessionData } from "../Hooks/useSessionData";

// ---- Types ----
export interface CartType {
  name: string;
  price: number;
  quantity: number;
  id: number;
  total: number;
  thumbnail?: ImageTypes["thumbnail"];
}

export interface MenuTypes {
  image: ImageTypes;
  category: string;
  name: string;
  price: number;
  id: number;
}

export interface ImageTypes {
  thumbnail: string;
  mobile: string;
  tablet: string;
  desktop: string;
}

// State only
interface CartState {
  menu: MenuTypes[];
  total: number;
  cart: CartType[];
}

// Context = state + actions
export interface CartContextValue extends CartState {
  addToCart: (cartObj: CartType) => void;
  decQuantity: (id: CartType["id"]) => void;
  removeItemFromCart: (id: CartType["id"]) => void;
  startNewOrderFn: () => void;
  isLoading: boolean;
  errorMessage: Error | null;
}

// Reducer actions
type ActionType =
  | { type: "setMenuData"; payload: MenuTypes[] }
  | { type: "addToCart"; payload: CartType }
  | { type: "decQuantity"; payload: CartType["id"] } // id
  | { type: "removeItemFromCart"; payload: CartType["id"] } //payload is id so its a number;
  | { type: "startNewOrder" }; // no need to put payload

// ---- Context ----
const CartProviderContext = createContext<CartContextValue | undefined>(
  undefined
);

const initialState: CartState = {
  menu: [],
  total: 0,
  cart: [],
};

// Reducer
const reducer = (state: CartState, action: ActionType): CartState => {
  switch (action.type) {
    case "setMenuData":
      return {
        ...state,
        menu: action.payload as MenuTypes[], // ✅ menu instead of cart
      };

    case "addToCart": {
      const cartItem = action.payload as CartType;
      if (!action.payload) {
        throw new Error("Payload is required for addToCart action");
      } // payload should be defined
      const isItemInCart: boolean = state.cart.some(
        (prevCarts) => prevCarts.id === cartItem?.id
      );
      console.log(isItemInCart);
      const updatedCart = isItemInCart
        ? state.cart.map((item) =>
            item.id === cartItem.id
              ? {
                  ...item,
                  quantity: item.quantity + 1,
                  total: (item.quantity + 1) * item.price,
                }
              : item
          )
        : [...state.cart, { ...cartItem, total: cartItem.price }]; // add new item if it doesn't exist and the total should be the price
      return {
        ...state,
        cart: updatedCart, // add new item only if it doesn't exist
      };
    }
    case "decQuantity": {
      const id = action.payload as number;
      const updatedCart = state.cart
        .map(
          (item): CartType =>
            item.id === id
              ? { ...item, quantity: Math.max(0, item.quantity - 1) }
              : item
        )
        .filter((i) => i.quantity > 0);
      return { ...state, cart: updatedCart };
    }
    case "removeItemFromCart": {
      const id = action.payload as CartType["id"];
      return { ...state, cart: state.cart.filter((c) => c.id !== id) };
    }
    case "startNewOrder": {
      return { ...initialState, menu: state.menu };
    }

    default:
      throw new Error("Unknown action type!");
  }
};

// ---- Hook ----
const useMenu = (): CartContextValue => {
  const ctx = useContext(CartProviderContext);
  if (!ctx) throw new Error("useMenu must be used inside CartProvider");
  return ctx;
};

// ---- Provider ----
const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  // Fetch menu data on mount
  const { data, loading, error } = useSessionData<MenuTypes[]>({
    key: "menuData",
    fetcher: getMenu,
    expireMs: 0.01 * 60 * 1000, // refresh every 2 minutes for demo purposes
  });

  const addToCart = (cartObj: CartType): void => {
    dispatch({ type: "addToCart", payload: cartObj as CartType });
  };
  const decQuantity = (id: CartType["id"]): void => {
    dispatch({ type: "decQuantity", payload: id });
  };
  const removeItemFromCart = (id: CartType["id"]): void => {
    dispatch({ type: "removeItemFromCart", payload: id });
  };
  const startNewOrderFn = (): void => {
    dispatch({ type: "startNewOrder" });
  };
  useEffect(() => {
    console.log(data);
    if (data) {
      dispatch({ type: "setMenuData", payload: data });
    }
  }, [data]);
  const value: CartContextValue = useMemo(
    () => ({
      ...state,
      addToCart,
      decQuantity,
      removeItemFromCart,
      startNewOrderFn,
      isLoading: loading,
      errorMessage: error,
    }),
    [state]
  );

  return (
    <CartProviderContext.Provider value={value}>
      {children}
    </CartProviderContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export { CartProvider, useMenu };
