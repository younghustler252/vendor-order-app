import OrderButton from "./OrderButton";

const CustomerForm = ({ customer, setCustomer, order, onBack }) => {
  return (
    <div className="p-4">
      <button onClick={onBack} className="text-sm mb-3">
        ← Back
      </button>

      <h2 className="text-lg font-semibold mb-4">Your Details</h2>

      <input
        type="text"
        placeholder="Full Name"
        value={customer.name}
        onChange={(e) =>
          setCustomer({ ...customer, name: e.target.value })
        }
        className="w-full mb-3 p-3 border rounded"
      />

      <input
        type="tel"
        placeholder="Phone Number"
        value={customer.phone}
        onChange={(e) =>
          setCustomer({ ...customer, phone: e.target.value })
        }
        className="w-full mb-3 p-3 border rounded"
      />

      <textarea
        placeholder="Delivery Address"
        value={customer.address}
        onChange={(e) =>
          setCustomer({ ...customer, address: e.target.value })
        }
        className="w-full mb-4 p-3 border rounded"
      />

      <OrderButton order={order} />
    </div>
  );
};

export default CustomerForm;
