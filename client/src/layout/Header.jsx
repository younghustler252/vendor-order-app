import { Info, Home } from "lucide-react";
import { useNavigate } from "react-router-dom";
import vendorConfig from "../config/vendor";

const Header = () => {
  const navigate = useNavigate();
  const { business, branding, vendorId } = vendorConfig;

  return (
    <header className="sticky top-0 z-30 bg-white shadow-sm flex items-center justify-between px-4 py-3">
      {/* Left: Logo & Name */}
      <div className="flex items-center gap-3">
        {branding.logo && (
          <img
            src={branding.logo}
            alt={business.name}
            className="w-12 h-12 rounded-full object-cover shadow-sm"
          />
        )}
        <div className="flex flex-col">
          <h1 className="text-sm font-bold" style={{ color: branding.primaryColor }}>
            {business.name}
          </h1>
          {business.tagline && (
            <p className="text-xs text-gray-500 line-clamp-1">{business.tagline}</p>
          )}
        </div>
      </div>

      {/* Right: Action buttons */}
      <div className="flex items-center gap-3">
        {/* Info Button */}
        <button
          onClick={() => navigate(`/vendor/${vendorId}`)}
          className="p-2 rounded-full hover:bg-gray-100 transition"
          aria-label="Vendor Info"
        >
          <Info className="w-5 h-5 text-gray-600" />
        </button>

        {/* Home Button */}
        <button
          onClick={() => navigate("/")}
          className="p-2 rounded-full hover:bg-gray-100 transition"
          aria-label="Home"
        >
          <Home className="w-5 h-5 text-gray-600" />
        </button>
      </div>
    </header>
  );
};

export default Header;
