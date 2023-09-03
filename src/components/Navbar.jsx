import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { amount } = useSelector((state) => state.cart);

  return (
    <div className="bg-[#645CFF] font-Mulish text-white px-5 md:px-0 ">
      <div className="container mx-auto">
        <div className="flex justify-between items-center h-24">
          {/* store */}
          <div>
            <h3 className="text-3xl">Store</h3>
          </div>
          {/* icon */}
          <div className="relative">
            <div className="z-20">
              <MdOutlineShoppingCartCheckout style={{ fontSize: "50px" }} />
            </div>
            <div className="absolute left-8 top-[-10px]">
              <div className="flex justify-center items-center bg-[#A29DFF] rounded-full h-8 w-8  text-base text-white">
                {amount}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
