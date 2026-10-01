import { useParams, Navigate, Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Reveal";
import { ProductCard } from "../components/ProductCard";
import { CATEGORIES, PRODUCTS } from "../data/site";

const SPECS = {
    "whole-spices": [
        ["Cleaning", "Destoned, air-classified and hand-sorted"],
        ["Moisture", "Controlled to FSSAI limits per spice"],
        ["Adulteration", "Nil — whole form, no fillers"],
        ["Shelf life", "12 months in sealed food-grade packs"],
    ],
    "spice-powders": [
        ["Grinding", "Low-temperature milling to retain volatile oils"],
        ["Mesh size", "Consistent fine grind, sieved per batch"],
        ["Colour & pungency", "Tested against retained reference sample"],
        ["Shelf life", "9–12 months in sealed food-grade packs"],
    ],
    "masala-blends": [
        ["Recipe control", "Weighed to the gram, blended in batches"],
        ["Consistency", "Every batch tasted against the master blend"],
        ["Additives", "No artificial colour or flavour added"],
        ["Shelf life", "9 months in sealed food-grade packs"],
    ],
};

const INTROS = {
    "whole-spices": "Sabut masale, sorted and graded the old way — by people who know what a good clove smells like. Cleaned, destoned and packed within days of processing.",
    "spice-powders": "Ground slow and cool so the colour, heat and aroma stay in the powder. Every batch is sieved, tested and matched to a reference sample before packing.",
    "masala-blends": "Our signature recipes, weighed to the gram and blended in controlled batches — so the chhole you make in June tastes like the one you made in January.",
};

export default function Category() {
    const { slug } = useParams();
    const cat = CATEGORIES.find((c) => c.slug === slug);
    if (!cat) return <Navigate to="/products" replace />;

    const list = PRODUCTS.filter((p) => p.category === slug);
    const specs = SPECS[slug];

    return (
        <div data-testid={`category-page-${slug}`}>
            <PageHero eyebrow="Products" title={cat.name} sub={INTROS[slug]} crumb={cat.name} />

            <section className="bg-white py-12 sm:py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6">
                        {list.map((p, i) => (
                            <Reveal key={p.id} delay={Math.min(i * 0.05, 0.3)}>
                                <ProductCard p={p} />
                            </Reveal>
                        ))}
                    </div>

                    <div className="mt-16 grid lg:grid-cols-2 gap-8 items-start">
                        <Reveal>
                            <div data-testid="spec-table" className="rounded-2xl border border-gray-200 overflow-hidden">
                                <div className="bg-[#1F1410] px-6 py-4">
                                    <h3 className="font-display text-lg font-bold text-white">Specifications & Standards</h3>
                                </div>
                                <table className="w-full text-sm">
                                    <tbody>
                                        {specs.map(([k, v], i) => (
                                            <tr key={k} className={i % 2 ? "bg-[#FDFBF8]" : "bg-white"}>
                                                <td className="px-6 py-3.5 font-semibold text-gray-900 w-2/5">{k}</td>
                                                <td className="px-6 py-3.5 text-gray-600">{v}</td>
                                            </tr>
                                        ))}
                                        <tr className={specs.length % 2 ? "bg-[#FDFBF8]" : "bg-white"}>
                                            <td className="px-6 py-3.5 font-semibold text-gray-900">Pack sizes</td>
                                            <td className="px-6 py-3.5 text-gray-600">50g – 1kg retail · 10–30kg bulk · custom on request</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </Reveal>
                        <Reveal delay={0.08}>
                            <div className="rounded-2xl bg-[#FDFBF8] border border-gray-200 p-8">
                                <h3 className="font-display text-xl font-bold text-gray-900">Need {cat.name.toLowerCase()} in bulk or under your label?</h3>
                                <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                                    We supply wholesalers, distributors, HoReCa buyers and private-label brands
                                    with batch-coded packs, consistent specs and pan-India dispatch. Samples ship
                                    within days.
                                </p>
                                <Link to="/contact" data-testid="category-enquiry-btn"
                                    className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#C8102E] px-6 py-3 text-sm font-semibold text-white hover:bg-[#A50B24] transition-colors">
                                    Request Samples & Pricing <ArrowRight className="h-4 w-4" />
                                </Link>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>
        </div>
    );
}
