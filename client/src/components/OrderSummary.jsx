const OrderSummary = ({ orderItems, total, onBack, onNext }) => {
  return (
    <div className="p-4">
      <button onClick={onBack} className="text-sm mb-3">
        ← Back
      </button>

      <h2 className="text-lg font-semibold mb-4">Order Summary</h2>

      <div className="space-y-2 mb-4">
        {orderItems.map((item) => (
          <div key={item.id} className="flex justify-between text-sm">
            <span>
              {item.name} × {item.quantity}
            </span>
            <span>₦{item.price * item.quantity}</span>
          </div>
        ))}
      </div>

      <div className="border-t pt-3 flex justify-between font-semibold">
        <span>Total</span>
        <span>₦{total}</span>
      </div>

      <button
        onClick={onNext}
        className="w-full mt-6 bg-green-600 text-white py-3 rounded-lg font-semibold"
      >
        Proceed to Checkout
      </button>
    </div>
  );
};

export default OrderSummary;
