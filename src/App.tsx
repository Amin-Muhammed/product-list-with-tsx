import Cart from "./Components/Cart/Cart";
import Menu from "./Components/Menu/Menu";
import Main from "./Components/UI/ReUseUiComp/Main";
import { CartProvider } from "./Contexts/CartProvider";
import "./resources/CSS/global.css";
function App() {
  return (
    <CartProvider>
      <div className="font-primary bg-rose-100 min-h-screen flex">
        <Main>
          <Menu />
          <Cart />
        </Main>
      </div>
    </CartProvider>
  );
}

export default App;
