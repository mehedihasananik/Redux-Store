import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { decrease, increase } from "../feature/cart/cartSlice";
import { useDispatch } from "react-redux";

const CartItems = ({ amount, id, img, price, title }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex justify-between items-center">
      {/* left */}
      <div className="py-5 flex items-center">
        <div>
          <img className="w-32 object-cover" src={img} alt="" />
        </div>
        <div>
          <h3>{title}</h3>
          <p>${price}</p>
          <button className="text-[#504ACC] border-none">remove</button>
        </div>
      </div>
      {/* right */}
      <div className=" flex flex-col items-center space-y-4 px-6 md:px-0">
        <button onClick={() => dispatch(increase(id))}>
          <MdOutlineKeyboardArrowUp />
        </button>
        <h3>{amount}</h3>
        <button onClick={() => dispatch(decrease(id))}>
          <MdOutlineKeyboardArrowDown />
        </button>
      </div>
    </div>
  );
};

export default CartItems;
