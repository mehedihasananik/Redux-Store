import { useSelector } from "react-redux";
import CartItems from "./CartItems";

const CartContainer = () => {
  const { cart, amount, total } = useSelector((state) => state.cart);

  if (amount < 1) {
    return (
      <div className="text-center py-10">
        <h3 className="text-lg md:text-6xl">Your Bag</h3>
        <p className="text-sm md:text-2xl py-3">Is Empty</p>
      </div>
    );
  }

  return (
    <div>
      <div className="container mx-auto">
        {cart.map((item) => {
          console.log(item);
          return <CartItems key={item.id} {...item} />;
        })}
      </div>
    </div>
  );
};

export default CartContainer;
