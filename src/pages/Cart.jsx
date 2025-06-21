import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    clearCart,
    getCartTotal,
    getCartItemCount,
  } = useContext(CartContext);

  if (cartItems.length === 0) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
        <div className="text-center py-12">
          <div className="text-gray-500 mb-4">
            <svg
              className="mx-auto h-16 w-16 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13M7 13l-2.5 5M17 13v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6"
              />
            </svg>
          </div>
          <h2 className="text-xl font-semibold text-gray-600 mb-2">
            Your cart is empty
          </h2>
          <p className="text-gray-500 mb-4">
            Add some medicines to your cart to get started!
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Your Cart</h1>
        <div className="text-right">
          <p className="text-sm text-gray-600">
            {getCartItemCount()} item{getCartItemCount() !== 1 ? "s" : ""} in
            cart
          </p>
          <button
            onClick={clearCart}
            className="text-red-600 hover:text-red-800 text-sm font-medium"
          >
            Clear Cart
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md">
        {cartItems.map((item) => (
          <div
            key={item.master_menu_item_id}
            className="flex items-center p-4 border-b border-gray-200 last:border-b-0"
          >
            {/* Product Image */}
            <div className="flex-shrink-0 w-20 h-20 mr-4">
              <img
                src={item.image?.image_name || "/placeholder-image.jpg"}
                alt={item.item_name}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            {/* Product Details */}
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-semibold text-gray-900 truncate">
                {item.item_name}
              </h3>
              <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                {item.item_description}
              </p>
              <p className="text-lg font-bold text-[#b82929] mt-2">
                ₹{parseFloat(item.price).toFixed(2)}
              </p>
            </div>

            {/* Quantity Controls */}
            <div className="flex items-center space-x-3 ml-4">
              <button
                onClick={() =>
                  updateQuantity(item.master_menu_item_id, item.quantity - 1)
                }
                className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20 12H4"
                  />
                </svg>
              </button>

              <span className="w-12 text-center font-semibold">
                {item.quantity}
              </span>

              <button
                onClick={() =>
                  updateQuantity(item.master_menu_item_id, item.quantity + 1)
                }
                className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </button>
            </div>

            {/* Item Total */}
            <div className="text-right ml-4">
              <p className="text-lg font-bold">
                ₹{(parseFloat(item.price) * item.quantity).toFixed(2)}
              </p>
            </div>

            {/* Remove Button */}
            <button
              onClick={() => removeFromCart(item.master_menu_item_id)}
              className="ml-4 p-2 text-red-600 hover:text-red-800 hover:bg-red-50 rounded-lg"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
            </button>
          </div>
        ))}
      </div>

      {/* Cart Summary */}
      <div className="mt-6 bg-gray-50 rounded-lg p-6">
        <div className="flex justify-between items-center mb-4">
          <span className="text-lg font-semibold">Subtotal:</span>
          <span className="text-2xl font-bold text-[#b82929]">
            ₹{getCartTotal().toFixed(2)}
          </span>
        </div>

        <div className="flex justify-between items-center mb-4 text-sm text-gray-600">
          <span>Delivery charges:</span>
          <span>Free</span>
        </div>

        <div className="border-t pt-4 flex justify-between items-center">
          <span className="text-xl font-bold">Total:</span>
          <span className="text-2xl font-bold text-[#b82929]">
            ₹{getCartTotal().toFixed(2)}
          </span>
        </div>

        <button className="w-full mt-4 bg-[#b82929] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#a02525] transition-colors">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
