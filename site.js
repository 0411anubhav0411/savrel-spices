export const BRAND = {
    name: "Savrel Natural Spices",
    tagline: "Masale Jo Swaad Banaye",
    description:
        "Manufacturer of premium Indian spices, including whole spices, powders, and masala blends. Hygienically processed and packed for bulk, wholesale, and private-label supply. Quality ingredients, consistent taste, and timely delivery across India.",
    phone: "+91 98103 31067",
    phoneHref: "tel:+919810331067",
    email: "savrelnaturalspices@gmail.com",
    address: "G-418, 419, UPSIDC, M.G. Road, Uttar Pradesh 201015",
    founder: "Rohit Jha",
};

export const CATEGORIES = [
    {
        slug: "whole-spices",
        name: "Whole Spices",
        hindi: "Sabut Masale",
        blurb: "Hand-sorted, sun-dried whole spices cleaned and graded at our facility — full aroma, zero adulteration.",
        image: "/assets/cloves.jpeg",
    },
    {
        slug: "spice-powders",
        name: "Spice Powders",
        hindi: "Masala Powders",
        blurb: "Low-temperature ground powders that lock in natural oils, colour and pungency — batch after batch.",
        image: "/assets/turmeric.webp",
    },
    {
        slug: "masala-blends",
        name: "Masala Blends",
        hindi: "Mishrit Masale",
        blurb: "Signature recipes blended in precise ratios for a consistent taste your customers can rely on.",
        image: "/assets/red-chilli.webp",
    },
];

// img: real pack photography where available; bg: brand colour panel otherwise
export const PRODUCTS = [
    // Whole spices
    { id: "black-pepper", name: "Black Pepper", hindi: "Kali Mirch", category: "whole-spices", image: "/assets/black-pepper.jpeg", packs: "50g · 100g · 500g · 25kg bulk" },
    { id: "cloves", name: "Cloves", hindi: "Laung", category: "whole-spices", image: "/assets/cloves.jpeg", packs: "50g · 100g · 500g · 25kg bulk" },
    { id: "bay-leaves", name: "Bay Leaves", hindi: "Tej Patta", category: "whole-spices", image: "/assets/bay-leaves.png", packs: "50g · 100g · 250g · 10kg bulk" },
    { id: "green-cardamom", name: "Green Cardamom", hindi: "Hari Elaichi", category: "whole-spices", bg: "#5B7A3A", packs: "50g · 100g · 500g · 10kg bulk" },
    { id: "cumin-seeds", name: "Cumin Seeds", hindi: "Jeera", category: "whole-spices", bg: "#8A5A2B", packs: "100g · 500g · 1kg · 30kg bulk" },
    { id: "coriander-seeds", name: "Coriander Seeds", hindi: "Sabut Dhania", category: "whole-spices", bg: "#A98A2C", packs: "100g · 500g · 1kg · 30kg bulk" },
    { id: "cinnamon", name: "Cinnamon Sticks", hindi: "Dalchini", category: "whole-spices", bg: "#7A4A21", packs: "50g · 100g · 500g · 10kg bulk" },
    { id: "mustard-seeds", name: "Mustard Seeds", hindi: "Rai / Sarson", category: "whole-spices", bg: "#8F6B12", packs: "100g · 500g · 1kg · 30kg bulk" },
    { id: "fennel-seeds", name: "Fennel Seeds", hindi: "Saunf", category: "whole-spices", bg: "#5F7E33", packs: "100g · 500g · 1kg · 25kg bulk" },
    { id: "dry-red-chilli", name: "Dry Red Chilli", hindi: "Sabut Lal Mirch", category: "whole-spices", bg: "#A31621", packs: "100g · 500g · 1kg · 25kg bulk" },
    // Powders
    { id: "red-chilli-fine", name: "Red Chilli Fine", hindi: "Mirch Powder", category: "spice-powders", image: "/assets/red-chilli.webp", packs: "100g · 200g · 500g · 25kg bulk" },
    { id: "turmeric-powder", name: "Turmeric Powder", hindi: "Haldi", category: "spice-powders", image: "/assets/turmeric.webp", packs: "100g · 200g · 500g · 25kg bulk" },
    { id: "coriander-powder", name: "Coriander Powder", hindi: "Dhania Powder", category: "spice-powders", bg: "#9C7C24", packs: "100g · 200g · 500g · 25kg bulk" },
    { id: "cumin-powder", name: "Cumin Powder", hindi: "Jeera Powder", category: "spice-powders", bg: "#7C5226", packs: "100g · 200g · 500g · 25kg bulk" },
    { id: "black-pepper-powder", name: "Black Pepper Powder", hindi: "Kali Mirch Powder", category: "spice-powders", bg: "#3E2C23", packs: "50g · 100g · 500g · 25kg bulk" },
    { id: "amchur-powder", name: "Dry Mango Powder", hindi: "Amchur", category: "spice-powders", bg: "#B97A0E", packs: "100g · 200g · 500g · 25kg bulk" },
    // Masala blends
    { id: "garam-masala", name: "Garam Masala", hindi: "Garam Masala", category: "masala-blends", bg: "#6E3A12", packs: "50g · 100g · 200g · 25kg bulk" },
    { id: "chhole-masala", name: "Chhole Masala", hindi: "Chhole Masala", category: "masala-blends", bg: "#8C2F1B", packs: "50g · 100g · 200g · 25kg bulk" },
    { id: "chicken-masala", name: "Chicken Masala", hindi: "Chicken Masala", category: "masala-blends", bg: "#A3400F", packs: "50g · 100g · 200g · 25kg bulk" },
    { id: "kitchen-king", name: "Kitchen King", hindi: "Kitchen King", category: "masala-blends", bg: "#96690D", packs: "50g · 100g · 200g · 25kg bulk" },
    { id: "chaat-masala", name: "Chaat Masala", hindi: "Chaat Masala", category: "masala-blends", bg: "#4F6226", packs: "50g · 100g · 200g · 25kg bulk" },
    { id: "pav-bhaji-masala", name: "Pav Bhaji Masala", hindi: "Pav Bhaji Masala", category: "masala-blends", bg: "#8A2E22", packs: "50g · 100g · 200g · 25kg bulk" },
];

export const NAV_LINKS = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About Us" },
    { to: "/founder", label: "Founder" },
    { to: "/team", label: "Team" },
    { to: "/private-label", label: "Private Label" },
    { to: "/quality", label: "Quality" },
    { to: "/contact", label: "Contact" },
];

export const PRODUCT_LINKS = [
    { to: "/products", label: "All Products" },
    { to: "/products/whole-spices", label: "Whole Spices" },
    { to: "/products/spice-powders", label: "Spice Powders" },
    { to: "/products/masala-blends", label: "Masala Blends" },
];
