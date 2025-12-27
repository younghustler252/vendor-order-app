import { generateWhatsAppMessage } from "../utils/whatsapp";
import vendorConfig from "../config/vendor";

const OrderButton = ({ order }) => {
  const handleOrder = () => {
    if (!order.items || order.items.length === 0) return;
    const link = generateWhatsAppMessage(order, vendorConfig);
    window.open(link, "_blank");
  };

  return (
    <button
      onClick={handleOrder}
      className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 rounded-lg mt-4 transition-colors duration-200"
    >
      Order via WhatsApp
    </button>
  );
};

export default OrderButton;
