import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartItems = () => {
  const { getCartItemCount } = useContext(CartContext);
  const itemCount = getCartItemCount();

  return (
    <div className="absolute top-[-5px] right-[-3px] w-[10px]">
      {itemCount > 0 && (
        <span className="absolute -top-1 -right-1 bg-[#b82929] text-white text-xs rounded-full h-3.5 w-3.5 flex items-center justify-center font-bold">
          {itemCount > 99 ? "99+" : itemCount}
        </span>
      )}
    </div>
  );
};

export default CartItems;
