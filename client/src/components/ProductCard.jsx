import { useState } from "react";

const ProductCard = ({ product, currency, onQuantityChange }) => {
  const [qty, setQty] = useState(0);
  const isAvailable = product.available !== false;

  const updateQty = (value) => {
    if (!isAvailable) return;
    const newQty = Math.max(0, value);
    setQty(newQty);
    onQuantityChange(product, newQty);
  };

  return (
    <div
      className={`bg-white rounded-2xl shadow-md overflow-hidden transition-all
        ${!isAvailable ? "opacity-60" : "active:scale-[0.98]"}`}
    >
      {/* IMAGE */}
      <div className="relative w-full aspect-[4/3]">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        {!isAvailable && (
          <span className="absolute top-2 left-2 bg-red-600 text-white text-xs px-3 py-1 rounded-full shadow-sm">
            Out of stock
          </span>
        )}
      </div>

      {/* CONTENT */}
      <div className="p-4 flex flex-col space-y-3">
        <h3 className="text-sm font-semibold leading-tight">{product.name}</h3>

        {product.description && (
          <p className="text-xs text-gray-500 line-clamp-2">{product.description}</p>
        )}

        <div className="flex justify-between items-center mt-2">
          {/* PRICE */}
          <span className="font-bold text-green-600 text-sm">
            {currency}{product.price}
          </span>

          {/* QUANTITY CONTROLS */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => updateQty(qty - 1)}
              disabled={!isAvailable || qty === 0}
              className="w-10 h-10 flex items-center justify-center rounded-full border text-lg font-medium
                         disabled:opacity-30 active:scale-95 transition"
            >
              −
            </button>

            <span className="min-w-[24px] text-center text-sm font-medium">{qty}</span>

            <button
              onClick={() => updateQty(qty + 1)}
              disabled={!isAvailable}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-green-600 text-white text-lg font-medium
                         disabled:opacity-40 active:scale-95 transition"
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
