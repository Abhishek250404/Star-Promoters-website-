import React from "react";
import {
    PhoneFilled,
    MailFilled,
    EnvironmentFilled,
    ClockCircleFilled,
    InstagramFilled,
    FacebookFilled,
    LinkedinFilled,
    WhatsAppOutlined,
    EnvironmentOutlined,
} from "@ant-design/icons";
import { Helmet } from "react-helmet-async";

function Contact() {
    return (
        <>
        <Helmet> {/* Primary SEO */} <title> Contact Star Promoters | Builders & Real Estate Company in Trichy </title> <meta name="description" content="Contact Star Promoters in Trichy for house construction, building projects, residential plots, property development and real estate services. Get in touch today." /> <meta name="keywords" content="contact builders in Trichy, contact Star Promoters, construction company Trichy, real estate company Trichy, builders near me, house construction Trichy, property developers Trichy" /> <meta name="robots" content="index, follow" /> <meta name="author" content="Star Promoters" /> {/* Canonical */} <link rel="canonical" href="https://starpromoterstrichy.com/contactpage" /> {/* Open Graph */} <meta property="og:title" content="Contact Star Promoters | Builders & Real Estate Company in Trichy" /> <meta property="og:description" content="Contact Star Promoters in Trichy for house construction, building projects, residential plots, property development and real estate services. Get in touch today." /> <meta property="og:type" content="website" /> <meta property="og:url" content="https://starpromoterstrichy.com/contactpage" /> <meta property="og:site_name" content="Star Promoters" /> <meta property="og:image" content="https://starpromoterstrichy.com/og-image.jpg" /> {/* Twitter / X */} <meta name="twitter:card" content="summary_large_image" /> <meta name="twitter:title" content="Contact Star Promoters | Builders & Real Estate Company in Trichy" /> <meta name="twitter:description" content="Contact Star Promoters in Trichy for house construction, building projects, residential plots, property development and real estate services. Get in touch today." /> <meta name="twitter:image" content="https://starpromoterstrichy.com/og-image.jpg" /> </Helmet>
            <section
                className="relative overflow-hidden bg-cover bg-center"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1800&q=80')",
                }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-[#0B1633]/65" />

                {/* Blueprint Pattern */}
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

                <div className="relative mx-auto max-w-7xl px-6 py-20">
                    <div className="max-w-3xl">

                        <div className="mb-5 inline-flex items-center rounded-full border border-red-400/30 bg-red-500/10 px-5 py-2 text-sm font-semibold text-red-300 backdrop-blur-sm">
                            Contact Star Promoters
                        </div>

                        <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl">
                            Contact Star Promoters –
                            <span className="text-[#D9A441]">
                                {" "}Construction & Real Estate Company In Trichy
                            </span>
                        </h1>

                        <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
                            Contact Star Promoters, a trusted Construction & Real Estate Company in
                            Trichy. Get expert assistance for DTCP & RERA approved plots, residential
                            and commercial construction, house plans, building approvals, villas,
                            property investment, and free site visits across Trichy and nearby areas.
                        </p>
                        <div className="mt-8 flex flex-wrap gap-4">
                            <a
                                href="tel:+918825767785"
                                className="rounded-lg bg-[#DC2626] px-7 py-3.5 font-semibold text-white transition hover:bg-[#B91C1C]"
                            >
                                📞 Call Now
                            </a>

                            <a
                                href="#location"
                                className="rounded-lg border border-white/30 bg-white/10 px-7 py-3.5 font-semibold text-white backdrop-blur transition hover:bg-white hover:text-[#0B1633]"
                            >
                                📍 Get Directions
                            </a>
                        </div>

                    </div>
                </div>
            </section>
            {/* ================= QUICK CONTACT ================= */}

            <section className="bg-linear-to-b from-slate-50 to-white py-20">
                <div className="mx-auto max-w-7xl px-6">

                    {/* Heading */}

                    <div className="mx-auto mb-14 max-w-3xl text-center">

                        <div className="mb-4 inline-flex rounded-full bg-red-50 px-5 py-2 text-sm font-semibold text-red-600">
                            Get In Touch
                        </div>

                        <h2 className="text-4xl font-bold text-gray-900">
                            Contact Star Promoters In
                            <span className="text-[#DC2626]"> Trichy</span>
                        </h2>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            Call, WhatsApp or visit our office for expert guidance on residential
                            plots, DTCP approved layouts, construction services, villas, and property
                            investment opportunities in Trichy.
                        </p>

                    </div>

                    {/* Cards */}

                    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

                        {/* Phone */}

                        <a
                            href="tel:+918825767785"
                            className="group rounded-3xl border border-gray-200 bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-2 hover:border-red-500 hover:shadow-2xl"
                        >
                            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-red-100 text-3xl text-red-600 transition group-hover:bg-red-600 group-hover:text-white">
                                <PhoneFilled />
                            </div>

                            <h3 className="text-2xl font-bold text-gray-900">
                                Call Us
                            </h3>

                            <p className="mt-3 text-gray-600">
                                +91 88257 67785
                            </p>

                            <p className="mt-1 text-sm text-gray-500">
                                Available Mon - Sat
                            </p>
                        </a>

                        {/* WhatsApp */}

                        <a
                            href="https://wa.me/918825767785"
                            target="_blank"
                            rel="noreferrer"
                            className="group rounded-3xl border border-gray-200 bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-2 hover:border-green-500 hover:shadow-2xl"
                        >
                            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100 text-3xl text-green-600 transition group-hover:bg-green-600 group-hover:text-white">
                                <WhatsAppOutlined />
                            </div>

                            <h3 className="text-2xl font-bold text-gray-900">
                                WhatsApp
                            </h3>

                            <p className="mt-3 text-gray-600">
                                Chat Instantly
                            </p>

                            <p className="mt-1 text-sm text-gray-500">
                                Quick Response Guaranteed
                            </p>
                        </a>

                        {/* Email */}

                        <a
                            href="mailto:info@starpromoters.in"
                            className="group rounded-3xl border border-gray-200 bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-2xl"
                        >
                            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-3xl text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                                <MailFilled />
                            </div>

                            <h3 className="text-2xl font-bold text-gray-900">
                                Email
                            </h3>

                            <p className="mt-3 break-all text-gray-600">
                                info@starpromoters.in
                            </p>

                            <p className="mt-1 text-sm text-gray-500">
                                We'll reply within 24 hours
                            </p>
                        </a>

                        {/* Office */}

                        <div className="group rounded-3xl border border-gray-200 bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-2 hover:border-[#DC2626] hover:shadow-2xl">

                            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-red-100 text-3xl text-red-600 transition group-hover:bg-red-600 group-hover:text-white">
                                <EnvironmentFilled />
                            </div>

                            <h3 className="text-2xl font-bold text-gray-900">
                                Office
                            </h3>

                            <p className="mt-3 text-gray-600">
                                Star Promoters
                                Mahalakshmi Nagar, Kamaraj Complex,
                                46A, EVR Road, K.K. Nagar,
                                Tiruchirappalli, Tamil Nadu – 620021
                            </p>

                            <p className="mt-1 text-sm text-gray-500">
                                Visit Our Office
                            </p>

                        </div>

                        {/* Working Hours */}

                        <div className="group rounded-3xl border border-gray-200 bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-2 hover:border-[#DC2626] hover:shadow-2xl">

                            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-100 text-3xl text-yellow-600 transition group-hover:bg-yellow-500 group-hover:text-white">
                                <ClockCircleFilled />
                            </div>

                            <h3 className="text-2xl font-bold text-gray-900">
                                Working Hours
                            </h3>

                            <p className="mt-3 text-gray-600">
                                Monday - Saturday
                            </p>

                            <p className="mt-1 text-gray-600">
                                9:00 AM - 7:00 PM
                            </p>

                        </div>

                        {/* Google Maps */}

                        <a
                            href="https://maps.google.com/?q=Star+Promoters+Trichy"
                            target="_blank"
                            rel="noreferrer"
                            className="group rounded-3xl border border-gray-200 bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-2 hover:border-[#DC2626] hover:shadow-2xl"
                        >
                            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-100 text-3xl text-indigo-600 transition group-hover:bg-indigo-600 group-hover:text-white">
                                <EnvironmentFilled />
                            </div>

                            <h3 className="text-2xl font-bold text-gray-900">
                                Google Maps
                            </h3>

                            <p className="mt-3 text-gray-600">
                                Get Directions
                            </p>

                            <p className="mt-1 text-sm text-gray-500">
                                Open in Google Maps
                            </p>

                        </a>

                    </div>

                </div>
            </section>
            {/* ================= MAP + CONTACT DETAILS ================= */}

            <section className="bg-slate-50 py-20">
                <div className="mx-auto max-w-7xl px-6">

                    <div className="grid gap-10 lg:grid-cols-2">

                        {/* Google Map */}

                        <div className="overflow-hidden rounded-3xl shadow-xl">

                            <iframe
                                title="Star Promoters Location"
                                src="https://www.google.com/maps?q=Star+Promoters+Trichy&output=embed"
                                className="h-125 w-full border-0"
                                loading="lazy"
                                allowFullScreen
                            />

                        </div>

                        {/* Contact Info */}

                        <div className="flex flex-col justify-center">

                            <div className="mb-5 inline-flex w-fit rounded-full bg-red-50 px-5 py-2 text-sm font-semibold text-red-600">
                                Reach Us
                            </div>

                            <h2 className="text-4xl font-bold text-[#0B1633]">
                                Visit Our Office
                            </h2>

                            <p className="mt-5 text-lg leading-8 text-gray-600">
                                We'd love to meet you in person. Visit our office, schedule a
                                free site visit, or contact us through your preferred platform.
                            </p>

                            <div className="mt-10 space-y-6">

                                <div className="flex items-start gap-4">
                                    <EnvironmentOutlined className="mt-1 text-2xl text-[#DC2626]!" />
                                    <div>
                                        <h4 className="font-bold text-gray-900">Office Address</h4>
                                        <address className="not-italic text-gray-600">
                                            Star Promoters<br />
                                            Mahalakshmi Nagar, Kamaraj Complex,<br />
                                            46A, EVR Road, K.K. Nagar,<br />
                                            Tiruchirappalli – 620021
                                        </address>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <PhoneFilled className="mt-1 text-2xl text-[#DC2626]!" />
                                    <div>
                                        <h4 className="font-bold text-gray-900">Phone</h4>
                                        <a
                                            href="tel:+918825767785"
                                            className="text-gray-600 hover:text-red-600"
                                        >
                                            +91 88257 67785
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <MailFilled className="mt-1 text-2xl text-[#DC2626]!" />
                                    <div>
                                        <h4 className="font-bold text-gray-900">Email</h4>
                                        <a
                                            href="mailto:info@starpromoters.in"
                                            className="text-gray-600 hover:text-red-600"
                                        >
                                            info@starpromoters.in
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <ClockCircleFilled className="mt-1 text-2xl text-[#DC2626]!" />
                                    <div>
                                        <h4 className="font-bold text-gray-900">
                                            Working Hours
                                        </h4>
                                        <p className="text-gray-600">
                                            Monday - Saturday
                                            <br />
                                            9:00 AM - 7:00 PM
                                        </p>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>
            </section>

            {/* ================= FOOTER CTA ================= */}

            <section className="bg-[#0B1633] py-20 text-center text-white">

                <div className="mx-auto max-w-4xl px-6">

                    <div className="mb-5 inline-flex rounded-full border border-red-400/30 bg-red-500/10 px-5 py-2 text-sm font-semibold text-red-300">
                        Let's Build Together
                    </div>

                    <h2 className="text-4xl font-bold text-white md:text-5xl">
                        Looking For A Trusted
                        <span className="text-[#D9A441]">
                            {" "}Real Estate & Construction Company In Trichy?
                        </span>
                    </h2>

                    <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                        Buy DTCP & RERA approved plots, build your dream home, or invest in premium
                        real estate with Star Promoters. Contact our expert team today for a free
                        consultation and site visit.
                    </p>

                    <div className="mt-10 flex flex-wrap justify-center gap-5">

                        <a
                            href="tel:+918825767785"
                            className="rounded-xl bg-[#DC2626] px-8 py-4 font-semibold text-white transition hover:bg-red-700"
                        >
                            📞 Call Now
                        </a>

                        <a
                            href="https://wa.me/918825767785"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-xl border border-white/20 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur hover:bg-white hover:text-[#0B1633]"
                        >
                            WhatsApp Us
                        </a>

                    </div>



                </div>

            </section>
            {/* ================= FAQ SECTION ================= */}

            <section className="bg-white py-20">

                <div className="mx-auto max-w-5xl px-6">

                    <div className="mx-auto mb-14 max-w-3xl text-center">

                        <div className="mb-5 inline-flex rounded-full bg-red-50 px-5 py-2 text-sm font-semibold text-red-600">
                            Frequently Asked Questions
                        </div>

                        <h2 className="text-4xl font-bold text-[#0B1633]">
                            Got Questions?
                            <span className="text-[#DC2626]"> We Have Answers</span>
                        </h2>

                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            Here are some of the most common questions our customers ask before
                            purchasing plots or starting construction.
                        </p>

                    </div>

                    <div className="space-y-5">

                        <div className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition hover:shadow-lg">
                            <h3 className="text-xl font-bold text-[#0B1633]">
                                Are your plots DTCP & RERA approved?
                            </h3>

                            <p className="mt-3 leading-7 text-gray-600">
                                Yes. Every project we market comes with proper DTCP or RERA approval,
                                ensuring legal safety and hassle-free registration.
                            </p>
                        </div>

                        <div className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition hover:shadow-lg">
                            <h3 className="text-xl font-bold text-[#0B1633]">
                                Do you provide bank loan assistance?
                            </h3>

                            <p className="mt-3 leading-7 text-gray-600">
                                Absolutely. We help customers obtain housing and plot loans through
                                leading banks with complete documentation support.
                            </p>
                        </div>

                        <div className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition hover:shadow-lg">
                            <h3 className="text-xl font-bold text-[#0B1633]">
                                Can I schedule a free site visit?
                            </h3>

                            <p className="mt-3 leading-7 text-gray-600">
                                Yes. We offer free guided site visits to all our available projects so
                                you can make an informed decision before purchasing.
                            </p>
                        </div>

                        <div className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition hover:shadow-lg">
                            <h3 className="text-xl font-bold text-[#0B1633]">
                                Do you undertake house construction?
                            </h3>

                            <p className="mt-3 leading-7 text-gray-600">
                                Yes. We provide complete residential construction services including
                                planning, design, approvals, construction, and turnkey project
                                delivery.
                            </p>
                        </div>

                    </div>

                </div>

            </section>
            {/* ================= WHY CHOOSE US ================= */}

            <section className="bg-linear-to-b from-slate-50 to-white py-20">

                <div className="mx-auto max-w-7xl px-6">

                    <div className="mx-auto mb-14 max-w-3xl text-center">

                        <div className="mb-5 inline-flex rounded-full bg-red-50 px-5 py-2 text-sm font-semibold text-red-600">
                            Why Choose Star Promoters
                        </div>

                        <h2 className="text-4xl font-bold text-[#0B1633]">
                            Trusted By Hundreds Of
                            <span className="text-[#DC2626]"> Happy Customers</span>
                        </h2>

                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            We combine transparency, legal assurance, quality construction and
                            customer-first service to deliver the best real estate experience.
                        </p>

                    </div>

                    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

                        <div className="rounded-3xl bg-white p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl">

                            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-red-100 text-3xl">
                                🏡
                            </div>

                            <h3 className="text-2xl font-bold text-[#0B1633]">
                                DTCP & RERA Approved
                            </h3>

                            <p className="mt-4 leading-7 text-gray-600">
                                Every project comes with verified approvals and clear legal
                                documentation.
                            </p>

                        </div>

                        <div className="rounded-3xl bg-white p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl">

                            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-3xl">
                                💰
                            </div>

                            <h3 className="text-2xl font-bold text-[#0B1633]">
                                Bank Loan Support
                            </h3>

                            <p className="mt-4 leading-7 text-gray-600">
                                Easy loan assistance from leading financial institutions with complete
                                documentation support.
                            </p>

                        </div>

                        <div className="rounded-3xl bg-white p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl">

                            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100 text-3xl">
                                🛠️
                            </div>

                            <h3 className="text-2xl font-bold text-[#0B1633]">
                                Construction Experts
                            </h3>

                            <p className="mt-4 leading-7 text-gray-600">
                                From planning to handover, we provide complete residential
                                construction solutions.
                            </p>

                        </div>

                        <div className="rounded-3xl bg-white p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl">

                            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-100 text-3xl">
                                🤝
                            </div>

                            <h3 className="text-2xl font-bold text-[#0B1633]">
                                Customer First
                            </h3>

                            <p className="mt-4 leading-7 text-gray-600">
                                Transparent pricing, honest guidance and dedicated customer support at
                                every stage.
                            </p>

                        </div>

                    </div>

                </div>

            </section>
            {/* ================= FINAL CTA ================= */}

            <section className="relative overflow-hidden bg-[#0B1633] py-24">

                {/* Background Pattern */}

                <div
                    className="absolute inset-0 opacity-[0.06]"
                    style={{
                        backgroundImage: `
              linear-gradient(rgba(255,255,255,.18) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,.18) 1px, transparent 1px)
            `,
                        backgroundSize: "34px 34px",
                    }}
                />

                <div className="relative mx-auto max-w-5xl px-6 text-center">

                    <div className="mb-6 inline-flex rounded-full border border-red-400/30 bg-red-500/10 px-5 py-2 text-sm font-semibold text-red-300">
                        Let's Build Your Future
                    </div>

                    <h2 className="text-4xl font-bold text-white md:text-5xl">
                        Looking For The Perfect
                        <span className="text-[#D9A441]"> Property?</span>
                    </h2>

                    <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                        Whether you're planning to buy a DTCP approved plot, build your dream
                        home, or invest in premium real estate, Star Promoters is here to help
                        you every step of the way.
                    </p>

                    <div className="mt-12 flex flex-wrap justify-center gap-5">

                        <a
                            href="tel:+918825767785"
                            className="rounded-xl bg-[#DC2626] px-8 py-4 font-semibold text-white transition hover:bg-red-700"
                        >
                            📞 Call Now
                        </a>

                        <a
                            href="https://wa.me/918825767785"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-xl border border-white/20 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur transition hover:bg-white hover:text-[#0B1633]"
                        >
                            💬 WhatsApp Us
                        </a>

                    </div>

                    <div className="mt-14 grid gap-8 border-t border-white/10 pt-10 md:grid-cols-3">

                        <div>
                            <h3 className="text-3xl font-bold text-[#D9A441]">500+</h3>
                            <p className="mt-2 text-slate-300">
                                Happy Customers
                            </p>
                        </div>

                        <div>
                            <h3 className="text-3xl font-bold text-[#D9A441]">15+</h3>
                            <p className="mt-2 text-slate-300">
                                Premium Projects
                            </p>
                        </div>

                        <div>
                            <h3 className="text-3xl font-bold text-[#D9A441]">100%</h3>
                            <p className="mt-2 text-slate-300">
                                Legal & Approved Properties
                            </p>
                        </div>

                    </div>

                </div>

            </section>

        </>
    );
}

export default Contact;