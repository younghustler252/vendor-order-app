/**
 * Generates a professional WhatsApp order request message
 * (Customer initiating an order with a vendor)
 */
export function generateWhatsAppMessage(order, vendor) {
  const currency = vendor?.settings?.currency || "";

  const itemsText = order.items
    .map((item, index) => {
      const itemTotal = item.price * item.quantity;
      return `${index + 1}. ${item.name}
   Quantity: ${item.quantity}
   Unit Price: ${currency}${item.price}
   Subtotal: ${currency}${itemTotal}`;
    })
    .join("\n\n");

  const message = `
Hello, I would like to place an order with you.

*Order Details*
${itemsText}

*Order Summary*
Total Amount: ${currency}${order.total}

*Customer Information*
Name: ${order.customer.name}
Phone: ${order.customer.phone}
Delivery Address: ${order.customer.address}

Please let me know the next steps.
Thank you.
  `.trim();

  const encodedMessage = encodeURIComponent(message);

  return `https://wa.me/${vendor.business.phone}?text=${encodedMessage}`;
}
