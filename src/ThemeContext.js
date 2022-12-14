import { createContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [isloged, setisloged] = useState(false);

  const checkifloged = () => {
    setisloged(true);
  };
  return (
    <CartContext.Provider value={{ isloged, checkifloged }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;
