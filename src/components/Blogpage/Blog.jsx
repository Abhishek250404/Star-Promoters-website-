import React from "react";
import { Link } from "react-router-dom";
import {
    ArrowRightOutlined,
    CalendarOutlined,
} from "@ant-design/icons";
import { Helmet } from "react-helmet-async";


const blogs = [
    {
        id: 1,
        slug: "10-things-to-check-before-buying-a-residential-plot-in-trichy",
        category: "Property Guide",
        title: "10 Things To Check Before Buying A Residential Plot In Trichy",
        description:
            "Planning to buy a residential plot in Trichy? Learn about DTCP approval, legal documents, location, road access, infrastructure, water facilities, and future investment potential before making your decision.",
        date: "July 21, 2026",
        image:
            "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=900&q=80",
    },

    {
        id: 2,
        slug: "benefits-of-buying-dtcp-approved-plots-in-trichy",
        category: "Real Estate",
        title: "Benefits Of Buying DTCP Approved Plots In Trichy",
        description:
            "Discover why DTCP approved plots are the safest investment option in Trichy. Understand legal security, faster approvals, better resale value, bank loan eligibility, and long-term investment benefits.",
        date: "July 18, 2026",
        image:
            "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=900&q=80",
    },

    {
        id: 3,
        slug: "complete-house-construction-guide-in-trichy",
        category: "Construction",
        title: "Complete House Construction Guide In Trichy",
        description:
            "Learn every stage of building your dream home in Trichy, from planning and architectural design to approvals, budgeting, construction, interior work, and project completion.",
        date: "July 15, 2026",
        image:
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80",
    },

    {
        id: 4,
        slug: "why-trichy-is-the-best-place-for-real-estate-investment",
        category: "Investment",
        title: "Why Trichy Is The Best Place For Real Estate Investment",
        description:
            "Explore why Trichy has become one of Tamil Nadu's fastest-growing real estate destinations for residential plots, villas, commercial properties, and long-term property investment.",
        date: "July 10, 2026",
        image:
            "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80",
    },

    {
        id: 5,
        slug: "top-benefits-of-investing-in-residential-plots",
        category: "Investment",
        title: "Top Benefits Of Investing In Residential Plots",
        description:
            "Residential plots offer excellent appreciation, flexibility, and long-term returns. Learn why investing in land is one of the smartest real estate decisions for your future.",
        date: "July 05, 2026",
        image:
            "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",
    },

    {
        id: 6,
        slug: "how-to-choose-the-best-construction-company-in-trichy",
        category: "Construction",
        title: "How To Choose The Best Construction Company In Trichy",
        description:
            "Looking for a trusted builder? Discover the key factors to consider when selecting a construction company in Trichy, including experience, quality, transparency, and timely project delivery.",
        date: "July 01, 2026",
        image:
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=900&q=80",
    },
];


function Blog() {


    return (

        <>
<Helmet> {/* Primary SEO */} <title> Real Estate & Construction Blog | Star Promoters Trichy </title> <meta name="description" content="Read the latest real estate and construction insights from Star Promoters, covering house construction, property investment, DTCP, RERA, plots and building tips in Trichy." /> <meta name="keywords" content="real estate blog Trichy, construction blog Trichy, property investment Trichy, house construction tips, DTCP plots Trichy, RERA approved plots, real estate tips Tamil Nadu, construction tips" /> <meta name="robots" content="index, follow" /> <meta name="author" content="Star Promoters" /> {/* Canonical */} <link rel="canonical" href="https://starpromoterstrichy.com/blog" /> {/* Open Graph */} <meta property="og:title" content="Real Estate & Construction Blog | Star Promoters Trichy" /> <meta property="og:description" content="Read the latest real estate and construction insights from Star Promoters, covering house construction, property investment, DTCP, RERA, plots and building tips in Trichy." /> <meta property="og:type" content="website" /> <meta property="og:url" content="https://starpromoterstrichy.com/blog" /> <meta property="og:site_name" content="Star Promoters" /> <meta property="og:image" content="https://starpromoterstrichy.com/og-image.jpg" /> {/* Twitter / X */} <meta name="twitter:card" content="summary_large_image" /> <meta name="twitter:title" content="Real Estate & Construction Blog | Star Promoters Trichy" /> <meta name="twitter:description" content="Read the latest real estate and construction insights from Star Promoters, covering house construction, property investment, DTCP, RERA, plots and building tips in Trichy." /> <meta name="twitter:image" content="https://starpromoterstrichy.com/og-image.jpg" /> </Helmet>
            {/* ================= HERO ================= */}


            <section
                className="relative h-137.5 overflow-hidden bg-cover bg-center"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1800&q=80')",
                }}
            >

                {/* Overlay */}

                <div className="absolute inset-0 bg-[#0B1633]/70" />


                {/* Blueprint */}

                <div
                    className="absolute inset-0 opacity-[0.08]"
                    style={{
                        backgroundImage: `
                        linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)
                        `,
                        backgroundSize: "34px 34px",
                    }}
                />


                <div className="relative mx-auto flex h-full max-w-7xl items-center px-6">


                    <div className="max-w-3xl">


                        <div className="mb-5 inline-flex items-center rounded-full border border-red-400/30 bg-red-500/10 px-5 py-2 text-sm font-semibold text-red-300 backdrop-blur">

                            ⭐ Real Estate Insights

                        </div>


                        <h1 className="text-4xl font-bold leading-tight text-white md:text-6xl">
                            Real Estate Blog in
                            <span className="text-[#D9A441]"> Trichy</span>
                        </h1>



                        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                            Explore expert property buying tips, DTCP approved plots, house
                            construction guides, real estate investment advice, legal documentation,
                            and the latest real estate news in Trichy from Star Promoters.
                        </p>


                        <div className="mt-8">

                            <a
                                href="#blogs"
                                className="rounded-xl bg-[#DC2626] px-7 py-3 font-semibold text-white transition hover:bg-red-700"
                            >

                                Explore Blogs

                            </a>


                        </div>


                    </div>


                </div>


            </section>





            {/* ================= BLOG CARDS ================= */}


            <section
                id="blogs"
                className="bg-linear-to-b from-slate-50 to-white py-20"
            >


                <div className="mx-auto max-w-7xl px-6">



                    <div className="mx-auto mb-14 max-w-3xl text-center">


                        <div className="mb-5 inline-flex rounded-full bg-red-50 px-5 py-2 text-sm font-semibold text-red-600">

                            Latest Articles

                        </div>



                        <h2 className="text-4xl font-bold text-[#0B1633]">
                            Property Buying Tips, Construction Guides &
                            <span className="text-[#DC2626]"> Real Estate Insights</span>
                        </h2>

                        <p className="mt-5 text-lg leading-8 text-gray-600">
                            Read expert articles about residential plots, DTCP approved layouts,
                            house construction, property investment, legal approvals, and real estate
                            trends in Trichy.
                        </p>

                    </div>





                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">


                        {
                            blogs.map((blog) => (


                                <article
                                    key={blog.id}
                                    className="group overflow-hidden rounded-3xl bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
                                >



                                    <div className="h-60 overflow-hidden">


                                        <img
                                            src={blog.image}
                                            alt={`${blog.title} | Star Promoters Trichy`}
                                            loading="lazy"
                                            className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                                        />


                                    </div>





                                    <div className="p-7">


                                        <div className="flex items-center justify-between">


                                            <span className="rounded-full bg-red-50 px-4 py-1 text-sm font-semibold text-red-600">

                                                {blog.category}

                                            </span>


                                        </div>




                                        <h3 className="mt-5 text-2xl font-bold text-[#0B1633] leading-snug">
                                            {blog.title}
                                        </h3>



                                        <p className="mt-4 leading-7 text-gray-600">

                                            {blog.description}

                                        </p>




                                        <time
                                            dateTime="2026-07-21"
                                            className="mt-5 flex items-center gap-2 text-sm text-gray-500"
                                        >
                                            <CalendarOutlined />
                                            {blog.date}
                                        </time>



                                        <Link
                                              to={`/blog/${blog.id}`}

                                            aria-label={`Read more about ${blog.title}`}
                                            className="mt-6 inline-flex items-center gap-2 font-semibold text-[#DC2626]"
                                        >
                                            Read More
                                            <ArrowRightOutlined />
                                        </Link>



                                    </div>



                                </article>


                            ))
                        }



                    </div>



                </div>


            </section>


        </>

    );

}


export default Blog;