const CartItems = ({ amount, id, img, price, title }) => {
  return (
    <div className="container mx-auto">
      <div>
        {/* left */}
        <div className="py-10">
          <div>
            <img className="w-32" src={img} alt="" />
          </div>
          <div>
            <h3>{title}</h3>
          </div>
        </div>
        {/* right */}
        <div></div>
      </div>
    </div>
  );
};

export default CartItems;
