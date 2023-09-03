import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import CartContainer from "./components/CartContainer";
import Navbar from "./components/Navbar";
import { useEffect } from "react";
import { totalCalculations } from "./feature/cart/cartSlice";

function App() {
  const dispath = useDispatch();
  const { cart } = useSelector((state) => state.cart);

  useEffect(() => {
    dispath(totalCalculations());
  }, [cart]);

  return (
    <>
      <Navbar />
      <CartContainer />
    </>
  );
}

export default App;
