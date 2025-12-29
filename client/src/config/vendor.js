import products from "./products";
import Logo from "../assets/logo.jpg";

const vendorConfig = {
    
    vendorId: "parfait-by-chioma",

    business: {
        name: "Parfait by Chioma",
        tagline: "Fresh, creamy, irresistible",
        phone: "2348080061178", // WhatsApp number
        address: "Lekki Phase 1, Lagos",
        socials: [
            { name: "Instagram", url: "https://instagram.com/parfaitbychioma" },
            { name: "TikTok", url: "https://tiktok.com/@parfaitbychioma" },
            { name: "Facebook", url: "https://facebook.com/parfaitbychioma" },
        ],
        reviews: [
            { rating: 5, comment: "Absolutely delicious parfaits!" },
            { rating: 4, comment: "Fresh and creamy every time." },
            { rating: 5, comment: "Fast delivery, amazing taste!" },
        ],
    },

    branding: {
        primaryColor: "#ec4899", // Tailwind pink-500
        logo: Logo, 
    },
    products,
    settings: {
        currency: "₦",
        deliveryEnabled: true,
    },
};

export default vendorConfig;
