import { useState } from "react";
import ProductCard from "../components/ProductCard";
import OrderSummary from "../components/OrderSummary";
import CustomerForm from "../components/CustomerForm";
import FloatingOrderButton from "../components/FloatingOrderButton";
import products from "../config/products";

const Home = () => {
  const [step, setStep] = useState("products");
  const [quantities, setQuantities] = useState({});
  const [customer, setCustomer] = useState({
    name: "",
    phone: "",
    address: "",
  });

  const handleQuantityChange = (product, quantity) => {
    setQuantities((prev) => ({
      ...prev,
      [product.id]: quantity,
    }));
  };

  const orderItems = products
    .filter((p) => quantities[p.id] > 0)
    .map((p) => ({ ...p, quantity: quantities[p.id] }));

  const total = orderItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const order = { items: orderItems, total, customer };

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* BANNER */}
      <div className="bg-green-600 text-white p-5 text-center">
        <h1 className="text-xl font-bold">Order Fresh Items</h1>
        <p className="text-sm opacity-90">Fast delivery via WhatsApp</p>
      </div>

      {/* STEP 1: PRODUCTS */}
      {step === "products" && (
        <div className="p-4 space-y-4">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              currency="₦"
              onQuantityChange={handleQuantityChange}
            />
          ))}

          {orderItems.length > 0 && (
            <FloatingOrderButton
              total={total}
              onClick={() => setStep("summary")}
            />
          )}
        </div>
      )}

      {/* STEP 2: ORDER SUMMARY */}
      {step === "summary" && (
        <OrderSummary
          orderItems={orderItems}
          total={total}
          onBack={() => setStep("products")}
          onNext={() => setStep("checkout")}
        />
      )}

      {/* STEP 3: CUSTOMER DETAILS */}
      {step === "checkout" && (
        <CustomerForm
          customer={customer}
          setCustomer={setCustomer}
          order={order}
          onBack={() => setStep("summary")}
        />
      )}
    </div>
  );
};

export default Home;
