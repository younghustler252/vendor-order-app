import Header from "./Header";

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center">
      {/* Card container */}
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg overflow-hidden">
        
        {/* Header component */}
        <Header />

        {/* Main content */}
        <main className="p-4">
          {children}
        </main>

      </div>
    </div>
  );
};

export default MainLayout;
