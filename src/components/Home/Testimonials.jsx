import React from "react";
import { StarFilled, UserOutlined } from "@ant-design/icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const GOOGLE_LOGO =
    "https://www.gstatic.com/images/branding/product/2x/googleg_48dp.png";

const reviews = [
    {
        name: "Ramesh Kumar",
        location: "Trichy",
        review:
            "I purchased a DTCP approved plot from Star Promoters. The documentation was transparent and the registration process was smooth. Highly recommended.",
    },
    {
        name: "Priya S",
        location: "Pudukkottai",
        review:
            "Excellent support from site visit to registration. Rahath Avenue is a well-planned DTCP & RERA approved residential project with great investment potential.",
    },
    {
        name: "Arun Prakash",
        location: "K K Nagar, Trichy",
        review:
            "One of the best construction companies in Trichy. Professional team, quality workmanship and on-time project completion.",
    },
    {
        name: "Saravanan",
        location: "Srirangam",
        review:
            "Purchased a residential plot through Star Promoters. Clear legal documents, affordable pricing and excellent customer service.",
    },
    {
        name: "Lakshmi",
        location: "Trichy",
        review:
            "We chose Star Promoters for our house construction project. The team delivered quality work and maintained complete transparency throughout.",
    },
    {
        name: "Karthik",
        location: "Pudukkottai",
        review:
            "Rahath Avenue is an excellent investment. DTCP & RERA approved layout, prime location and hassle-free registration process.",
    },
    {
        name: "Meena",
        location: "Thuraiyur",
        review:
            "Very supportive team. They helped us select the right residential plot and guided us through every legal process.",
    },
    {
        name: "Vignesh",
        location: "Lalgudi",
        review:
            "Affordable pricing, professional guidance and trustworthy real estate service. Happy with my investment in Trichy.",
    },
];

const Testimonials = () => {
    return (
        <section className="bg-gray-50 py-24">
            <div className="mx-auto max-w-7xl px-6">

                {/* Heading */}
                <div className="mx-auto mb-16 max-w-3xl text-center">
                    <span className="rounded-full bg-red-100 px-5 py-2 text-sm font-semibold text-red-600">
                        TESTIMONIALS
                    </span>

                    <h2 className="mt-6 text-4xl font-bold text-gray-900 md:text-5xl">
                        Trusted Reviews for {""}
                        <span className="text-red-600">
                            Star Promoters in Trichy
                        </span>
                    </h2>
                    <p className="mt-5 text-lg leading-8 text-gray-600">
                        Read genuine customer reviews about Star Promoters, a trusted land promoter,
                        construction and real estate company in Trichy, known for DTCP & RERA approved
                        plots, house construction and quality property development.
                    </p>
                </div>

                {/* Rating */}
                <div className="mb-16 rounded-3xl border border-gray-200 bg-white p-10 shadow-lg">
                    <div className="flex flex-col items-center justify-between gap-10 lg:flex-row">
                        <div className="flex items-center gap-5">
                            <img src={GOOGLE_LOGO} alt="Google Reviews for Star Promoters" className="h-14 w-14" />
                            <div>
                                <h2 className="text-4xl font-bold text-gray-900">5.0</h2>
                                <div className="mt-2 flex gap-1 text-yellow-400">
                                    {[...Array(5)].map((_, i) => (
                                        <StarFilled key={i} />
                                    ))}
                                </div>
                                <p className="mt-2 text-gray-600">Based on Google Reviews</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-3 gap-10 text-center">
                            <div>
                                <h3 className="text-3xl font-bold text-red-600">5.0★</h3>
                                <p className="mt-2 text-gray-600">Google Rating</p>
                            </div>
                            <div>
                                <h3 className="text-3xl font-bold text-blue-700">1000+</h3>
                                <p className="mt-2 text-gray-600">
                                    Google Reviews from Happy Customers
                                </p>
                            </div>
                            <div>
                                <h3 className="text-3xl font-bold text-red-600">10+</h3>
                                <p className="mt-2 text-gray-600">Years Experience</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Review Slider */}
                <div className="testimonial-slider relative px-2 md:px-12">
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        navigation
                        pagination={{ clickable: true }}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        loop
                        spaceBetween={25}
                        breakpoints={{
                            0: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1200: { slidesPerView: 3 },
                        }}
                        className="pb-16"
                    >
                        {reviews.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className="flex h-[320px] flex-col rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
                                    {/* Header */}
                                    <div className="mb-6 flex items-center justify-between">
                                        <img src={GOOGLE_LOGO} alt="Google" className="h-7 w-7" />
                                        <div className="flex gap-1 text-yellow-400">
                                            {[...Array(5)].map((_, i) => (
                                                <StarFilled key={i} />
                                            ))}
                                        </div>
                                    </div>

                                    {/* Review */}
                                    <p className="flex-1 leading-8 text-gray-600">
                                        "{item.review}"
                                    </p>

                                    {/* User */}
                                    <div className="mt-8 flex items-center gap-4">
                                        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-red-100 text-lg font-bold text-red-600">
                                            {item.name.charAt(0)}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">{item.name}</h4>
                                            <p className="text-gray-500">{item.location}</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

            </div>

            {/* Custom Swiper navigation + pagination styling */}
            <style>{`
                .testimonial-slider .swiper-button-prev,
                .testimonial-slider .swiper-button-next {
                    top: 45%;
                    width: 44px;
                    height: 44px;
                    margin-top: -22px;
                    background: #ffffff;
                    border-radius: 9999px;
                    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.12);
                    color: #dc2626;
                    transition: background 0.2s ease, transform 0.2s ease;
                }

                .testimonial-slider .swiper-button-prev:hover,
                .testimonial-slider .swiper-button-next:hover {
                    background: #dc2626;
                    color: #ffffff;
                    transform: scale(1.05);
                }

                .testimonial-slider .swiper-button-prev::after,
                .testimonial-slider .swiper-button-next::after {
                    font-size: 16px;
                    font-weight: 700;
                }

                .testimonial-slider .swiper-button-prev {
                    left: -6px;
                }

                .testimonial-slider .swiper-button-next {
                    right: -6px;
                }

                @media (min-width: 768px) {
                    .testimonial-slider .swiper-button-prev {
                        left: -18px;
                    }
                    .testimonial-slider .swiper-button-next {
                        right: -18px;
                    }
                }

                .testimonial-slider .swiper-pagination {
                    position: static;
                    margin-top: 32px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 8px;
                }

                .testimonial-slider .swiper-pagination-bullet {
                    width: 9px;
                    height: 9px;
                    margin: 0 !important;
                    background: #d1d5db;
                    opacity: 1;
                    transition: all 0.25s ease;
                }

                .testimonial-slider .swiper-pagination-bullet-active {
                    width: 26px;
                    border-radius: 9999px;
                    background: #dc2626;
                }
            `}</style>
        </section>
    );
};

export default Testimonials;