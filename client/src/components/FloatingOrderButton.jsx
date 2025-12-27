const FloatingOrderButton = ({ total, onClick }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-20 bg-white border-t px-4 pb-safe">
      <button
        onClick={onClick}
        className="w-full bg-green-600 text-white py-4 rounded-2xl font-semibold shadow-lg
                   active:scale-95 transition flex items-center justify-between"
      >
        <span>View Order</span>
        <span className="text-sm font-bold">₦{total}</span>
      </button>
    </div>
  );
};

export default FloatingOrderButton;
