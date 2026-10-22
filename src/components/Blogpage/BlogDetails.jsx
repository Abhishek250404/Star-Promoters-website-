import React from "react";
import {
    ArrowLeftOutlined,
    CalendarOutlined,
    UserOutlined,
    CheckCircleFilled,
    PhoneFilled,
} from "@ant-design/icons";
import { Link, useParams } from "react-router-dom";





function BlogDetails() {

    const { id } = useParams();

    const BLOG_DATA = [
        {
            id: 1,
            slug: "10-things-to-check-before-buying-a-residential-plot-in-trichy",
            title: "10 Things To Check Before Buying A Residential Plot In Trichy",
            author: "Star Promoters",
            date: "July 21, 2026",
            image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1800&q=80",
            intro: "Buying a residential plot is a major investment. Before purchasing land in Trichy, verify DTCP approval, legal documents, location, infrastructure, and future growth potential.",

            content: [
                {
                    heading: "Verify DTCP Approval",
                    text: "Always ensure the property has valid DTCP approval before purchasing."
                },
                {
                    heading: "Check Legal Documents",
                    points: [
                        "Parent Documents",
                        "Patta & Chitta",
                        "Encumbrance Certificate",
                        "DTCP Approval Copy",
                        "Survey Sketch"
                    ]
                },
                {
                    heading: "Choose The Right Location",
                    text: "Select plots with good road connectivity, schools, hospitals and future development."
                }
            ]
        },

        {
            id: 2,
            slug: "benefits-of-buying-dtcp-approved-plots-in-trichy",
            title: "Benefits Of Buying DTCP Approved Plots In Trichy",
            author: "Star Promoters",
            date: "July 18, 2026",
            image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1800&q=80",
            intro: "DTCP approved plots provide legal security and better investment opportunities.",

            content: [
                {
                    heading: "Why DTCP Approval Matters",
                    text: "DTCP approved layouts follow government planning regulations."
                },
                {
                    heading: "Benefits",
                    points: [
                        "Easy Bank Loan",
                        "Legal Security",
                        "Higher Resale Value",
                        "Better Infrastructure",
                        "Safe Investment"
                    ]
                }
            ]
        },

        {
            id: 3,
            slug: "complete-house-construction-guide-in-trichy",
            title: "Complete House Construction Guide In Trichy",
            author: "Star Promoters",
            date: "July 15, 2026",
            image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=80",
            intro: "Complete guide to building your dream home from planning to handover.",

            content: [
                {
                    heading: "Planning",
                    text: "Prepare drawings, approvals and budget."
                },
                {
                    heading: "Construction Stages",
                    points: [
                        "Foundation",
                        "Structure",
                        "Brick Work",
                        "Electrical",
                        "Finishing"
                    ]
                }
            ]
        },

        {
            id: 4,
            slug: "why-trichy-is-the-best-place-for-real-estate-investment",
            title: "Why Trichy Is The Best Place For Real Estate Investment",
            author: "Star Promoters",
            date: "July 10, 2026",
            image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=80",
            intro: "Trichy is one of Tamil Nadu's fastest growing investment destinations.",

            content: [
                {
                    heading: "Investment Advantages",
                    points: [
                        "Growing Infrastructure",
                        "Affordable Prices",
                        "High Appreciation",
                        "Commercial Growth",
                        "Excellent Connectivity"
                    ]
                }
            ]
        }
    ];

    const blog = BLOG_DATA.find(
        (item) => item.id === Number(id)
    );

    if (!blog) {
        return (
            <h1 className="py-40 text-center text-4xl">
                Blog Not Found
            </h1>
        );
    }
    return (

        <div className="bg-white">


            {/* ================= HERO ================= */}

            <section
                className="relative h-137.5 overflow-hidden bg-cover bg-center"
                style={{
                    backgroundImage: `url(${blog.image})`
                }}
            >

                <div className="absolute inset-0 bg-[#0B1633]/70" />


                <div className="relative mx-auto flex h-full max-w-7xl items-center px-6">

                    <div className="max-w-4xl">


                        <div className="mb-5 inline-flex items-center rounded-full border border-red-400/30 bg-red-500/10 px-5 py-2 text-sm font-semibold text-red-300 backdrop-blur">
                            ⭐ Real Estate Insights
                        </div>


                        <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl">

                            {blog.title}

                        </h1>


                        <div className="mt-6 flex flex-wrap gap-6 text-slate-300">

                            <span className="flex items-center gap-2">
                                <CalendarOutlined />
                                {blog.date}
                            </span>


                            <span className="flex items-center gap-2">
                                <UserOutlined />
                                {blog.author}
                            </span>


                        </div>


                    </div>

                </div>


            </section>




            {/* ================= CONTENT ================= */}


            <section className="py-20">

                <div className="mx-auto max-w-5xl px-6">


                    <Link
                        to="/blog"
                        className="inline-flex items-center gap-2 text-[#DC2626] font-semibold"
                    >
                        <ArrowLeftOutlined />
                        Back To Blogs
                    </Link>



                    <div className="mt-10 rounded-3xl border border-gray-200 bg-white p-8 shadow-xl md:p-12">


                        <p className="text-xl leading-9 text-gray-600">
                            {blog.intro}
                        </p>



                        <div className="mt-10 space-y-10">


                            {
                                blog.content.map((item, index) => (

                                    <div key={index}>


                                        <h2 className="text-3xl font-bold text-[#0B1633]">
                                            {item.heading}
                                        </h2>



                                        {
                                            item.text &&
                                            <p className="mt-4 leading-8 text-gray-600">
                                                {item.text}
                                            </p>
                                        }



                                        {
                                            item.points &&

                                            <div className="mt-5 space-y-3">

                                                {
                                                    item.points.map(point => (

                                                        <div
                                                            key={point}
                                                            className="flex items-center gap-3"
                                                        >

                                                            <CheckCircleFilled className="text-green-500" />

                                                            <span className="text-gray-700">
                                                                {point}
                                                            </span>

                                                        </div>

                                                    ))
                                                }

                                            </div>

                                        }


                                    </div>

                                ))
                            }


                        </div>



                    </div>


                </div>


            </section>





            {/* ================= CTA ================= */}


            <section className="bg-[#0B1633] py-20 text-center text-white">


                <div className="mx-auto max-w-4xl px-6">


                    <h2 className="text-4xl font-bold">

                        Looking For Premium Properties?

                    </h2>


                    <p className="mt-5 text-lg text-slate-300">

                        Contact Star Promoters today for DTCP & RERA approved plots,
                        villas and construction solutions.

                    </p>



                    <a
                        href="tel:+918825767785"
                        className="mt-8 inline-flex items-center gap-3 rounded-xl bg-[#DC2626] px-8 py-4 font-semibold text-white"
                    >

                        <PhoneFilled />

                        Call Now

                    </a>


                </div>


            </section>



        </div>

    );
}


export default BlogDetails;