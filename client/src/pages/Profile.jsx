import vendorConfig from "../config/vendor";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const { business, branding } = vendorConfig;

  const whatsappLink = `https://wa.me/${business.phone.replace(/\D/g, "")}`;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">


      {/* Content */}
      <div className="flex-1 overflow-y-auto p-6 flex flex-col items-center space-y-6">
        {/* Logo */}
        {branding.logo && (
          <img
            src={branding.logo}
            alt={business.name}
            className="w-32 h-32 rounded-full object-cover shadow-lg"
          />
        )}

        {/* Tagline */}
        {business.tagline && (
          <p className="text-center text-gray-700 text-sm font-medium max-w-xs">
            {business.tagline}
          </p>
        )}

        {/* WhatsApp CTA */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full max-w-xs bg-green-600 text-white py-3 rounded-xl text-center font-semibold shadow-md hover:bg-green-700 transition"
        >
          Chat on WhatsApp
        </a>

        {/* Social Links */}
        <div className="flex gap-4 w-full max-w-xs justify-center">
          {business.socials.map((s) => (
            <a
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-gray-100 py-2 rounded-xl text-center text-sm font-medium hover:bg-gray-200 transition"
            >
              {s.name}
            </a>
          ))}
        </div>

        {/* Reviews */}
        {business.reviews && business.reviews.length > 0 && (
          <div className="w-full max-w-xs">
            <h2 className="text-sm font-semibold mb-3 text-gray-800">Customer Reviews</h2>
            <ul className="space-y-3">
              {business.reviews.map((r, i) => (
                <li key={i} className="bg-white p-3 rounded-xl shadow-sm flex flex-col">
                  <div className="flex items-center mb-1">
                    {Array.from({ length: r.rating }).map((_, idx) => (
                      <span key={idx} className="text-yellow-400">★</span>
                    ))}
                    {Array.from({ length: 5 - r.rating }).map((_, idx) => (
                      <span key={idx} className="text-gray-300">★</span>
                    ))}
                  </div>
                  <p className="text-xs text-gray-700">{r.comment}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
