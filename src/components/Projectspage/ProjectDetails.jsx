import React, { useState } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import {
    EnvironmentOutlined,
    PhoneFilled,
    ArrowLeftOutlined,
    SafetyCertificateFilled,
    PlusOutlined,
    MinusOutlined,
    ArrowRightOutlined,
    CheckCircleFilled,
    FileProtectOutlined,
    BankFilled,
    RiseOutlined,
    TeamOutlined,
    TrophyFilled,
    StarFilled,
} from "@ant-design/icons";

import projects from "../../data/Project";

const faqs = [
    {
        question: "Is this project DTCP & RERA Approved?",
        answer:
            "Yes. The project comes with the required approvals and legally verified documentation.",
    },
    {
        question: "Is Bank Loan Available?",
        answer:
            "Yes. Bank loan assistance is available through leading financial institutions.",
    },
    {
        question: "Can I visit the site before booking?",
        answer:
            "Absolutely. We offer free site visits for all interested buyers.",
    },
    {
        question: "Are the documents legally verified?",
        answer:
            "Yes. All documents are clear, verified and ready for registration.",
    },
];

// Trust markers shown under the hero. Feel free to move these onto the
// project object later if you want them to vary per project.
const trustStats = [
    { icon: <TrophyFilled />, value: "12+", label: "Years In Trichy" },
    { icon: <TeamOutlined />, value: "500+", label: "Families Settled" },
    { icon: <FileProtectOutlined />, value: "100%", label: "Verified Titles" },
];

function ProjectDetails() {
    const { slug } = useParams();
    const [openFAQ, setOpenFAQ] = useState(0);
    const project = projects.find((item) => item.slug === slug);

    if (!project) {
        return <Navigate to="/projectpage" replace />;
    }

    // Optional: add a `gallery: [img1, img2, img3, ...]` array to this
    // project's entry in data/Project.js for a full photo wall. Until then
    // it gracefully falls back to the hero image so nothing breaks.
    const gallery =
        project.gallery && project.gallery.length > 0
            ? project.gallery
            : [project.image];

    const pageTitle = `${project.title} | DTCP & RERA Approved Plots | Star Promoters Trichy`;

    const pageDescription = `${project.title} offers premium ${project.badge} residential plots in ${project.location}. Clear legal documents, bank loan assistance, immediate registration and excellent investment opportunity with Star Promoters.`;

    const canonical = `https://starpromoterstrichy.com/projectpage/${project.slug}`;

    const realEstateSchema = {
        "@context": "https://schema.org",
        "@type": "Residence",
        name: project.title,
        description: pageDescription,
        image: project.image,
        url: canonical,
        address: {
            "@type": "PostalAddress",
            addressLocality: project.location,
            addressRegion: "Tamil Nadu",
            addressCountry: "India",
        },
        provider: {
            "@type": "Organization",
            name: "Star Promoters",
            url: "https://starpromoterstrichy.com",
            telephone: "+918825767785",
        },
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
            },
        })),
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://starpromoterstrichy.com/" },
            { "@type": "ListItem", position: 2, name: "Projects", item: "https://starpromoterstrichy.com/projectpage" },
            { "@type": "ListItem", position: 3, name: project.title, item: canonical },
        ],
    };

    return (
        <>
            <Helmet>
                <title>{pageTitle}</title>
                <meta name="description" content={pageDescription} />
                <meta
                    name="keywords"
                    content={`${project.title}, DTCP Approved Plots, RERA Approved Plots, Trichy Real Estate, Pudukkottai Plots, Star Promoters`}
                />
                <link rel="canonical" href={canonical} />
                <meta property="og:title" content={pageTitle} />
                <meta property="og:description" content={pageDescription} />
                <meta property="og:image" content={project.image} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={canonical} />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={pageTitle} />
                <meta name="twitter:description" content={pageDescription} />
                <meta name="twitter:image" content={project.image} />

                {/* Premium type pairing: Fraunces for display, Manrope for body/UI */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Manrope:wght@400;500;600;700;800&display=swap"
                    rel="stylesheet"
                />

                <script type="application/ld+json">{JSON.stringify(realEstateSchema)}</script>
                <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
                <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
            </Helmet>

            <div style={{ fontFamily: "'Manrope', sans-serif" }} className="text-[#1B2233]">
                {/* ===================== HERO ===================== */}
                <section className="relative overflow-hidden bg-[#0A1730]">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="absolute inset-0 h-full w-full object-cover opacity-45"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0A1730] via-[#0A1730]/95 to-[#0A1730]/60" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A1730] via-transparent to-transparent" />

                    {/* thin gold rule across the very top — a small "surveyed & sealed" signature */}
                    <div className="relative h-[3px] w-full bg-gradient-to-r from-red-600 via-[#E7CE8C] to-red-600" />

                    <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28">
                        {/* Breadcrumb */}
                        <div className="mb-10 flex items-center gap-2 text-sm tracking-wide text-white/60">
                            <Link to="/" className="hover:text-[#E7CE8C]">Home</Link>
                            <span>/</span>
                            <Link to="/projectpage" className="hover:text-[#E7CE8C]">Projects</Link>
                            <span>/</span>
                            <span className="text-[#E7CE8C]">{project.title}</span>
                        </div>

                        <div className="grid items-end gap-14 lg:grid-cols-[1.15fr_0.85fr]">
                            {/* LEFT */}
                            <div>
                                <span className="inline-flex items-center gap-2 rounded-full border border-red-600/50 bg-red-600/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#E7CE8C]">
                                    <FileProtectOutlined /> {project.badge}
                                </span>

                                <h1
                                    style={{ fontFamily: "'Fraunces', serif" }}
                                    className="mt-7 text-5xl font-semibold leading-[1.08] text-white md:text-6xl"
                                >
                                    {project.title}
                                </h1>

                                <div className="mt-6 flex items-center gap-3 text-lg text-white/70">
                                    <EnvironmentOutlined className="text-[#E7CE8C]" />
                                    {project.location}
                                </div>

                                <p className="mt-8 max-w-2xl text-lg leading-8 text-white/70">
                                    {project.shortDescription}
                                </p>

                                <div className="mt-10 flex flex-wrap gap-4">
                                    <a
                                        href="tel:+918825767785"
                                        className="inline-flex items-center gap-2 rounded-full bg-red-500 px-8 py-4 font-semibold text-white transition hover:bg-red-400"
                                    >
                                        <PhoneFilled /> Enquire Now
                                    </a>
                                    <Link
                                        to="/projectpage"
                                        className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur transition hover:bg-white hover:text-[#0A1730]"
                                    >
                                        <ArrowLeftOutlined /> Back to Projects
                                    </Link>
                                </div>

                                {/* Trust strip */}
                                <div className="mt-14 grid grid-cols-3 gap-6 border-t border-white/10 pt-8">
                                    {trustStats.map((stat) => (
                                        <div key={stat.label}>
                                            <div className="text-2xl text-[#E7CE8C]">{stat.icon}</div>
                                            <div
                                                style={{ fontFamily: "'Fraunces', serif" }}
                                                className="mt-2 text-3xl font-semibold text-white"
                                            >
                                                {stat.value}
                                            </div>
                                            <div className="mt-1 text-xs uppercase tracking-wide text-white/50">
                                                {stat.label}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* RIGHT — price / enquiry card */}
                            <div className="lg:justify-self-end lg:w-full">
                                <div className="rounded-3xl border border-red-600/20 bg-white p-8 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)]">
                                    <span className="inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
                                        <CheckCircleFilled /> Available Now
                                    </span>

                                    <h2
                                        style={{ fontFamily: "'Fraunces', serif" }}
                                        className="mt-6 text-4xl font-semibold text-[#0A1730]"
                                    >
                                        {project.price}
                                    </h2>
                                    <p className="mt-1 text-gray-500">Starting Price</p>

                                    <div className="mt-8 space-y-4">
                                        {project.features.map((item) => (
                                            <div key={item} className="flex items-center gap-3">
                                                <SafetyCertificateFilled className="text-red-600" />
                                                <span className="text-[#1B2233]">{item}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <a
                                        href="tel:+918825767785"
                                        className="mt-10 flex w-full items-center justify-center rounded-full bg-[#0A1730] py-4 text-lg font-semibold text-white transition hover:bg-[#152A55]"
                                    >
                                        Book Free Site Visit
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ===================== PHOTO GALLERY ===================== */}
                <section className="bg-white py-20">
                    <div className="mx-auto max-w-7xl px-6">
                        <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
                            <div>
                                <span className="text-xs font-bold uppercase tracking-[0.2em] text-red-600">
                                    Gallery
                                </span>
                                <h2
                                    style={{ fontFamily: "'Fraunces', serif" }}
                                    className="mt-3 text-4xl font-semibold text-[#0A1730]"
                                >
                                    A Closer Look At {project.title}
                                </h2>
                            </div>
                            <p className="max-w-md text-gray-600">
                                Real site photographs — layout, roads, and the surrounding
                                landscape, so you know exactly what you're investing in.
                            </p>
                        </div>

                        {/* Masonry-style photo wall. Add a `gallery: []` array of image
                            imports to this project in data/Project.js to populate it fully. */}
                        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-5">
                            <div className="col-span-2 row-span-2 overflow-hidden rounded-3xl">
                                <img
                                    src={gallery[0]}
                                    alt={`${project.title} - main view`}
                                    className="h-full max-h-[520px] w-full object-cover transition duration-500 hover:scale-105"
                                />
                            </div>
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="overflow-hidden rounded-2xl">
                                    <img
                                        src={gallery[i % gallery.length]}
                                        alt={`${project.title} - view ${i}`}
                                        className="h-[150px] w-full object-cover transition duration-500 hover:scale-105 md:h-[248px]"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ===================== LOCATION SECTION ===================== */}
                <section className="bg-[#F6F4EF] py-20">
                    <div className="mx-auto max-w-7xl px-6">
                        <div className="mb-14 text-center">
                            <span className="text-xs font-bold uppercase tracking-[0.2em] text-red-600">
                                Project Location
                            </span>
                            <h2
                                style={{ fontFamily: "'Fraunces', serif" }}
                                className="mt-4 text-4xl font-semibold text-[#0A1730]"
                            >
                                Excellent Connectivity & Prime Location
                            </h2>
                            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-gray-600">
                                {project.title} is strategically located in{" "}
                                <strong>{project.location}</strong>, offering easy access to
                                schools, colleges, hospitals, transport facilities, shopping
                                centers, and major highways. It's an ideal destination for both
                                living and long-term investment.
                            </p>
                        </div>

                        <div className="grid gap-10 lg:grid-cols-2">
                            {/* LEFT SIDE */}
                            <div className="rounded-3xl bg-white p-8 shadow-lg">
                                <h3
                                    style={{ fontFamily: "'Fraunces', serif" }}
                                    className="mb-8 text-2xl font-semibold text-[#0A1730]"
                                >
                                    Nearby Landmarks
                                </h3>

                                <div className="space-y-5">
                                    {[
                                        { icon: "🏫", title: "Schools & Colleges", desc: "Within 5–10 Minutes Drive" },
                                        { icon: "🏥", title: "Hospitals", desc: "Multi-Speciality Hospitals Nearby" },
                                        { icon: "🛍", title: "Shopping Centers", desc: "Daily Essentials & Retail Stores" },
                                        { icon: "🚉", title: "Transport Connectivity", desc: "Bus Stand, Railway Station & Highways" },
                                    ].map((item) => (
                                        <div key={item.title} className="flex items-start gap-4">
                                            <div className="rounded-xl bg-red-600/10 p-3 text-lg">{item.icon}</div>
                                            <div>
                                                <h4 className="font-semibold text-[#0A1730]">{item.title}</h4>
                                                <p className="text-gray-600">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-10 rounded-2xl bg-[#0A1730] p-6 text-white">
                                    <h4 style={{ fontFamily: "'Fraunces', serif" }} className="text-xl font-semibold">
                                        Why Invest Here?
                                    </h4>
                                    <ul className="mt-5 space-y-3">
                                        {[
                                            "Fast Growing Residential Area",
                                            "Excellent Road Connectivity",
                                            "High Appreciation Potential",
                                            "DTCP & RERA Approved Layout",
                                            "Ready For Immediate Registration",
                                        ].map((point) => (
                                            <li key={point} className="flex items-center gap-3">
                                                <CheckCircleFilled className="text-[#E7CE8C]" /> {point}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* GOOGLE MAP */}
                            <div className="overflow-hidden rounded-3xl shadow-xl">
                                <iframe
                                    title={project.title}
                                    src="https://www.google.com/maps?q=Tiruchirappalli&output=embed"
                                    width="100%"
                                    height="100%"
                                    loading="lazy"
                                    allowFullScreen
                                    className="min-h-[550px] w-full border-0"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* ===================== ENQUIRY CTA SECTION ===================== */}
                <section className="relative overflow-hidden bg-[#0A1730] py-20">
                    <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-red-600/10 blur-3xl" />
                    <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-red-600/10 blur-3xl" />

                    <div className="relative mx-auto max-w-7xl px-6">
                        <div className="grid items-center gap-12 lg:grid-cols-2">
                            {/* LEFT */}
                            <div>
                                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#E7CE8C]">
                                    Book Your Free Site Visit
                                </span>
                                <h2
                                    style={{ fontFamily: "'Fraunces', serif" }}
                                    className="mt-5 text-4xl font-semibold leading-tight text-white md:text-5xl"
                                >
                                    Ready To Own Your <span className="text-[#E7CE8C]">Dream Property?</span>
                                </h2>
                                <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
                                    Visit <strong>{project.title}</strong> and explore premium{" "}
                                    {project.badge} residential plots with clear legal documents,
                                    immediate registration, bank loan assistance, and excellent
                                    investment potential.
                                </p>

                                <div className="mt-10 grid gap-5 sm:grid-cols-2">
                                    {[
                                        { icon: <FileProtectOutlined />, title: "Clear Documentation", desc: "100% legally verified plots with DTCP/RERA approvals." },
                                        { icon: <BankFilled />, title: "Bank Loan Assistance", desc: "Easy financing support from leading banks." },
                                        { icon: <CheckCircleFilled />, title: "Immediate Registration", desc: "Hassle-free registration process with expert assistance." },
                                        { icon: <RiseOutlined />, title: "High Growth Potential", desc: "Located in a fast-developing investment corridor." },
                                    ].map((card) => (
                                        <div
                                            key={card.title}
                                            className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur"
                                        >
                                            <h4 className="flex items-center gap-2 font-semibold text-white">
                                                <span className="text-[#E7CE8C]">{card.icon}</span> {card.title}
                                            </h4>
                                            <p className="mt-2 text-sm text-white/60">{card.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* RIGHT */}
                            <div className="rounded-3xl bg-white p-8 shadow-2xl">
                                <h3 style={{ fontFamily: "'Fraunces', serif" }} className="text-3xl font-semibold text-[#0A1730]">
                                    Contact Star Promoters
                                </h3>
                                <p className="mt-3 text-gray-600">
                                    Schedule a free site visit or speak with our property expert today.
                                </p>

                                <div className="mt-8 space-y-4">
                                    <a
                                        href="tel:+918825767785"
                                        className="flex w-full items-center justify-center gap-2 rounded-full bg-red-600 px-6 py-4 text-lg font-semibold text-white transition hover:bg-red-600"
                                    >
                                        <PhoneFilled /> Call Now
                                    </a>
                                    <a
                                        href="https://wa.me/918825767785"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex w-full items-center justify-center gap-2 rounded-full bg-green-600 px-6 py-4 text-lg font-semibold text-white transition hover:bg-green-700"
                                    >
                                        💬 WhatsApp Now
                                    </a>
                                 
                                </div>

                                <div className="mt-10 rounded-2xl bg-[#F6F4EF] p-5">
                                    <h4 style={{ fontFamily: "'Fraunces', serif" }} className="font-semibold text-[#0A1730]">
                                        Office Contact
                                    </h4>
                                    <div className="mt-4 space-y-3 text-gray-700">
                                        <p>📍 Star Promoters, Trichy</p>
                                        <p>📞 +91 88257 67785</p>
                                        <p>☎ +91 82486 59355</p>
                                        <p>🌐 www.starpromoterstrichy.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ================= FAQ SECTION ================= */}
                <section className="bg-white py-20">
                    <div className="mx-auto max-w-6xl px-6">
                        <div className="mb-14 text-center">
                            <span className="text-xs font-bold uppercase tracking-[0.2em] text-red-600">
                                Frequently Asked Questions
                            </span>
                            <h2
                                style={{ fontFamily: "'Fraunces', serif" }}
                                className="mt-4 text-4xl font-semibold text-[#0A1730]"
                            >
                                Everything You Need To Know
                            </h2>
                            <p className="mt-4 text-lg text-gray-600">
                                Common questions about {project.title}.
                            </p>
                        </div>

                        <div className="space-y-5">
                            {faqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className={`overflow-hidden rounded-2xl border transition ${openFAQ === index ? "border-red-600/50" : "border-gray-200"
                                        }`}
                                >
                                    <button
                                        onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                                        className="flex w-full items-center justify-between p-6 text-left"
                                    >
                                        <span className="text-lg font-semibold text-[#0A1730]">
                                            {faq.question}
                                        </span>
                                        <span
                                            className={`flex h-8 w-8 items-center justify-center rounded-full ${openFAQ === index ? "bg-[#0A1730] text-white" : "bg-gray-100 text-[#0A1730]"
                                                }`}
                                        >
                                            {openFAQ === index ? <MinusOutlined /> : <PlusOutlined />}
                                        </span>
                                    </button>
                                    {openFAQ === index && (
                                        <div className="border-t bg-[#F6F4EF] px-6 py-5 leading-8 text-gray-600">
                                            {faq.answer}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ================= RELATED PROJECTS ================= */}
                <section className="bg-[#F6F4EF] py-20">
                    <div className="mx-auto max-w-7xl px-6">
                        <div className="mb-14 text-center">
                            <span className="text-xs font-bold uppercase tracking-[0.2em] text-red-600">
                                Explore More
                            </span>
                            <h2
                                style={{ fontFamily: "'Fraunces', serif" }}
                                className="mt-4 text-4xl font-semibold text-[#0A1730]"
                            >
                                Related Projects
                            </h2>
                        </div>

                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                            {projects
                                .filter((item) => item.slug !== project.slug)
                                .slice(0, 3)
                                .map((item) => (
                                    <div
                                        key={item.id}
                                        className="group overflow-hidden rounded-3xl bg-white shadow-lg transition hover:-translate-y-2 hover:shadow-2xl"
                                    >
                                        <div className="overflow-hidden">
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className="h-60 w-full object-cover transition duration-500 group-hover:scale-110"
                                            />
                                        </div>
                                        <div className="p-6">
                                            <span className="rounded-full bg-red-600/10 px-4 py-2 text-sm font-semibold text-[#8A6A20]">
                                                {item.badge}
                                            </span>
                                            <h3
                                                style={{ fontFamily: "'Fraunces', serif" }}
                                                className="mt-5 text-2xl font-semibold text-[#0A1730]"
                                            >
                                                {item.title}
                                            </h3>
                                            <div className="mt-3 flex items-center gap-2 text-gray-500">
                                                <EnvironmentOutlined /> {item.location}
                                            </div>
                                            <h4 className="mt-6 text-2xl font-semibold text-[#8A6A20]">
                                                {item.price}
                                            </h4>
                                            <Link
                                                to={`/projectpage/${item.slug}`}
                                                className="mt-8 flex items-center justify-center gap-2 rounded-full bg-[#0A1730] py-3 font-semibold text-white transition hover:bg-red-600 hover:text-[#0A1730]"
                                            >
                                                View Details <ArrowRightOutlined />
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

export default ProjectDetails;