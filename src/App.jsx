import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import { ProductsProvider } from "./context/ProductsContext";
import { CartProvider } from "./context/CartContext";
import SelectorStateProvider from "./context/SelectorStateProvider";
import { OneProvider } from "./context/OneContext";

function App() {
  return (
    <>
      <SelectorStateProvider>
        <Cart />
        <ProductList />
      </SelectorStateProvider>

    </>
  );

  // return (
  //   <>
  //     <OneProvider>
  //       <Cart />
  //       <ProductList />
  //     </OneProvider>
  //   </>
  // );

  // return (
  //   <>
  //       <ProductsProvider>
  //           <CartProvider>
  //             <Cart />
  //             <ProductList />
  //           </CartProvider>
  //       </ProductsProvider>
  //   </>
  // )
}

export default App;
