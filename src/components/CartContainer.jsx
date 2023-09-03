import { useDispatch, useSelector } from "react-redux";
import CartItems from "./CartItems";
import { removeCart } from "../feature/cart/cartSlice";

const CartContainer = () => {
  const dispatch = useDispatch();

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
    <div className="overflow-hidden">
      <div className="container mx-auto">
        <div className="md:flex md:justify-center md:items-center">
          <div className="w-full lg:w-[800px] mt-0 md:mt-20">
            {cart.map((item) => {
              return <CartItems key={item.id} {...item} />;
            })}
            <hr />
            <div className="flex justify-between">
              <div>total</div>
              <div>
                <p>{total}</p>
              </div>
            </div>
            <div className="text-center">
              <button
                onClick={() => dispatch(removeCart())}
                className="text-lg border-none"
              >
                Clear Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartContainer;
