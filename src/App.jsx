import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import CartContainer from "./components/CartContainer";
import Navbar from "./components/Navbar";
import { useEffect } from "react";
import { totalCalculations, getCartItems } from "./feature/cart/cartSlice";

import Modals from "./components/Modals";

function App() {
  const dispatch = useDispatch();
  const { cart, isLoading } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(totalCalculations());
  }, [cart]);

  useEffect(() => {
    dispatch(getCartItems());
  }, []);

  if (isLoading) {
    return <h3>...loading</h3>;
  }

  return (
    <>
      <Navbar />
      <CartContainer />
    </>
  );
}

export default App;
