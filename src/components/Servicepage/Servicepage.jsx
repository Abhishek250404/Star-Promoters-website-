import React from "react";
import { Helmet } from "react-helmet-async";

/* ========================= DATA ========================= */

const PILLARS = [
  {
    tag: "Real Estate",
    title: "Land Promotion & Real Estate",
    description:
      "We develop and promote DTCP & RERA approved residential layouts with complete legal documentation, transparent pricing, and bank loan support.",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=900&q=80",
    points: [
      "DTCP & RERA Approved Layouts",
      "Land Promotion & Plot Sales",
      "Property Buying & Selling",
      "Bank Loan Assistance",
    ],
    color: "red",
  },
  {
    tag: "Construction",
    title: "House & Commercial Construction",
    description:
      "From concept to completion, we deliver premium residential and commercial construction with design, approvals, and turnkey execution.",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=80",
    points: [
      "House & Villa Construction",
      "Commercial Buildings",
      "2D & 3D Design",
      "Electrical & Plumbing",
    ],
    color: "blue",
  },
];

const SERVICES = [
  {
    icon: "🏠",
    title: "House Construction in Trichy",
    description:
      "Complete turnkey residential construction from foundation to final handover with premium quality materials and timely execution.",
  },
  {
    icon: "🏢",
    title: "Commercial Building Construction",
    description:
      "Construction of office buildings, retail spaces, warehouses, and commercial complexes tailored to your business needs.",
  },
  {
    icon: "📐",
    title: "Building Plan Approval",
    description:
      "Fast and hassle-free DTCP, CMDA, Panchayat and local authority approvals handled by our experienced team.",
  },
  {
    icon: "🖥️",
    title: "2D & 3D House Design",
    description:
      "Visualize your dream home before construction with modern floor plans, elevations and realistic 3D designs.",
  },
  {
    icon: "🎨",
    title: "Interior & Exterior Design",
    description:
      "Elegant interior spaces and attractive exterior elevations designed for comfort, functionality and aesthetics.",
  },
  {
    icon: "🔑",
    title: "Turnkey Construction",
    description:
      "From planning and approvals to finishing and handover, we manage every stage under one roof.",
  },
  {
    icon: "⚡",
    title: "Electrical & Plumbing",
    description:
      "Complete electrical wiring, plumbing systems, fittings and testing carried out by experienced professionals.",
  },
  {
    icon: "🗺️",
    title: "Land Promotion & DTCP Approved Plots",
    description:
      "DTCP & RERA approved layouts with legal verification, infrastructure development and transparent documentation.",
  },
  {
    icon: "🤝",
    title: "Property Buying & Selling in Trichy",
    description:
      "Professional guidance for buying, selling and investing in residential and commercial properties.",
  },
];

const PROCESS = [
  {
    step: "01",
    title: "Free Consultation",
    description:
      "We begin by understanding your requirements, budget, preferred location, and project goals before recommending the right solution.",
  },
  {
    step: "02",
    title: "Site Visit & Planning",
    description:
      "Our experts arrange a detailed site visit, evaluate the property, discuss possibilities, and prepare the best approach for your project.",
  },
  {
    step: "03",
    title: "Documentation & Approvals",
    description:
      "We verify legal documents, obtain DTCP & RERA approvals where applicable, and manage all required permissions for a hassle-free process.",
  },
  {
    step: "04",
    title: "Design & Estimation",
    description:
      "Our architects prepare 2D & 3D designs along with a transparent quotation so you know exactly what to expect before work begins.",
  },
  {
    step: "05",
    title: "Execution",
    description:
      "Construction or property registration begins with continuous quality checks, experienced supervision, and timely progress updates.",
  },
  {
    step: "06",
    title: "Final Handover",
    description:
      "After quality inspection and completion, we hand over the project with complete documentation and post-completion support.",
  },
];

function Servicepage() {
  return (
    <>
    <Helmet> {/* Primary SEO */} 
      <title> Construction & Real Estate Services in Trichy | Star Promoters </title> 
      <meta name="description" content="Explore Star Promoters' construction and real estate services in Trichy, including house construction, commercial buildings, 2D & 3D plans, DTCP assistance and property development." /> <meta name="keywords" content="construction services in Trichy, house construction Trichy, commercial construction Trichy, building contractors Trichy, 2D 3D house plans Trichy, DTCP approval Trichy, property development Trichy, real estate services Trichy" /> <meta name="robots" content="index, follow" /> <meta name="author" content="Star Promoters" /> {/* Canonical */} <link rel="canonical" href="https://starpromoterstrichy.com/serivcepage" /> {/* Open Graph */} <meta property="og:title" content="Construction & Real Estate Services in Trichy | Star Promoters" /> <meta property="og:description" content="Explore Star Promoters' construction and real estate services in Trichy, including house construction, commercial buildings, 2D & 3D plans, DTCP assistance and property development." /> <meta property="og:type" content="website" /> <meta property="og:url" content="https://starpromoterstrichy.com/serivcepage" /> <meta property="og:site_name" content="Star Promoters" /> <meta property="og:image" content="https://starpromoterstrichy.com/og-image.jpg" /> {/* Twitter / X */} <meta name="twitter:card" content="summary_large_image" /> <meta name="twitter:title" content="Construction & Real Estate Services in Trichy | Star Promoters" /> <meta name="twitter:description" content="Explore Star Promoters' construction and real estate services in Trichy, including house construction, commercial buildings, 2D & 3D plans, DTCP assistance and property development." /> <meta name="twitter:image" content="https://starpromoterstrichy.com/og-image.jpg" /> </Helmet>
      {/* ========================= HERO SECTION ========================= */}
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
              ⭐ Our Services
            </div>

            <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl">
              Land Promoters, Construction &
              <br />
              <span className="text-[#D9A441]">
                Real Estate Company in Trichy
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Star Promoters is a trusted Land Promoters, Construction Company and Real Estate Company in Trichy offering DTCP & RERA approved plots, house construction, commercial construction, farm land, property development, building plan approval and turnkey construction services across Trichy, Pudukkottai and nearby locations.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#all-services"
                className="rounded-xl bg-[#DC2626] px-7 py-3 font-semibold text-white transition hover:bg-red-700"
              >
                Explore Services
              </a>

              <a
                href="tel:+918825767785"
                className="rounded-xl border border-white/30 bg-white/10 px-7 py-3 font-semibold text-white backdrop-blur transition hover:bg-white hover:text-[#0B1633]"
              >
                📞 Call Now
              </a>
            </div>

          </div>
        </div>
      </section>
      {/* ========================= TRUST STRIP ========================= */}
      <section className="bg-[#0B1633] border-t border-white/10">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-5 px-6 py-6 md:grid-cols-4">
          {[
            "DTCP & RERA Approved",
            "Bank Loan Assistance",
            "Turnkey Construction",
            "Free Site Visit",
          ].map((item) => (
            <div
              key={item}
              className="flex items-center justify-center gap-3 text-center text-sm font-semibold text-slate-200"
            >
              <span className="h-2 w-2 rounded-full bg-[#D9A441]" />
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* ========================= SERVICE PILLARS ========================= */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <div className="mb-4 inline-flex rounded-full bg-red-50 px-5 py-2 text-sm font-semibold text-red-600">
              Two Businesses • One Team
            </div>

            <h2 className="text-3xl font-bold text-gray-900 md:text-5xl">
              Complete Construction &
              <span className="text-[#DC2626]">Real Estate Services in Trich</span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Whether you're looking for an approved plot or planning your
              dream home, Star Promoters manages the complete journey with
              one trusted team.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {PILLARS.map((item) => (
              <div
                key={item.title}
                className="group overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />

                  <span
                    className={`absolute left-6 top-6 rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wider text-white ${item.color === "red" ? "bg-[#DC2626]" : "bg-[#0F4CC9]"
                      }`}
                  >
                    {item.tag}
                  </span>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-7 text-gray-600">
                    {item.description}
                  </p>

                  <div className="mt-7 space-y-4">
                    {item.points.map((point) => (
                      <div key={point} className="flex items-center gap-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-green-600">
                          ✓
                        </div>

                        <span className="font-medium text-gray-700">
                          {point}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8">
                    <a
                      href="#all-services"
                      className={`inline-flex items-center gap-2 font-semibold ${item.color === "red"
                        ? "text-[#DC2626]"
                        : "text-[#0F4CC9]"
                        }`}
                    >
                      Learn More
                      <span className="text-lg">→</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================= ALL SERVICES ========================= */}
      <section
        id="all-services"
        className="bg-linear-to-b from-gray-50 to-white py-20"
      >
        <div className="mx-auto max-w-7xl px-6">
          {/* Heading */}
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <div className="mb-4 inline-flex rounded-full bg-blue-50 px-5 py-2 text-sm font-semibold text-blue-700">
              Complete Service Portfolio
            </div>

            <h2 className="text-3xl font-bold text-gray-900 md:text-5xl">
              Our Construction &
              <span className="text-[#0F4CC9]"> Real Estate Services</span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our experienced team delivers complete real estate and
              construction solutions with transparency, quality workmanship
              and professional project management.
            </p>
          </div>

          {/* Grid */}
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service, index) => (
              <div
                key={index}
                className="group rounded-3xl border border-gray-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[#DC2626] hover:shadow-2xl"
              >
                {/* Icon */}
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br from-red-50 to-blue-50 text-3xl transition group-hover:scale-110">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 transition group-hover:text-[#DC2626]">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="mt-4 leading-7 text-gray-600">
                  {service.description}
                </p>

                {/* Divider */}
                <div className="my-6 h-px bg-gray-200"></div>

                {/* Footer */}
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-gray-500">
                    Star Promoters
                  </span>

                  <span className="font-semibold text-[#DC2626] transition group-hover:translate-x-1">
                    Learn More →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================= HOW WE WORK ========================= */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          {/* Heading */}
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <div className="mb-4 inline-flex rounded-full bg-red-50 px-5 py-2 text-sm font-semibold text-red-600">
              Our Working Process
            </div>

            <h2 className="text-3xl font-bold text-gray-900 md:text-5xl">
              From First Call
              <span className="text-[#DC2626]"> To Final Handover</span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Every project follows a structured workflow that ensures
              transparency, timely execution, and complete customer
              satisfaction.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative mx-auto max-w-5xl">
            {/* Vertical Line */}
            <div className="absolute left-5 top-0 h-full w-1 rounded-full bg-gray-200 lg:left-1/2 lg:-translate-x-1/2"></div>

            <div className="space-y-12">
              {PROCESS.map((item, index) => (
                <div
                  key={item.step}
                  className={`relative flex flex-col gap-8 lg:flex-row ${index % 2 === 0 ? "" : "lg:flex-row-reverse"
                    }`}
                >
                  {/* Content */}
                  <div className="w-full lg:w-1/2">
                    <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
                      <span className="mb-4 inline-block rounded-full bg-red-50 px-4 py-2 text-sm font-bold text-[#DC2626]">
                        Step {item.step}
                      </span>

                      <h3 className="text-2xl font-bold text-gray-900">
                        {item.title}
                      </h3>

                      <p className="mt-4 leading-7 text-gray-600">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="absolute left-0 top-10 lg:left-1/2 lg:-translate-x-1/2">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border-4 border-white bg-[#DC2626] text-lg font-bold text-white shadow-lg">
                      {item.step}
                    </div>
                  </div>

                  <div className="hidden lg:block lg:w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================= CTA SECTION ========================= */}
      <section id="contact" className="relative overflow-hidden bg-[#0B1633] py-24">
        {/* Background Pattern */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)
            `,
            backgroundSize: "34px 34px",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            {/* Left */}
            <div>
              <div className="mb-5 inline-flex rounded-full border border-yellow-500/20 bg-yellow-500/10 px-5 py-2 text-sm font-semibold text-[#FBBF24]">
                Let's Build Together
              </div>

              <h2 className="text-4xl font-bold leading-tight text-white md:text-5xl">
                Need DTCP Approved Plot
                <span className="text-[#FBBF24]"> {""}or House Construction in Trichy?</span>
              </h2>

              <p className="mt-7 max-w-xl text-lg leading-8 text-slate-300">
                Whether you're planning to buy DTCP & RERA approved plots, invest in farm land, build your dream home or develop a commercial project, Star Promoters provides complete real estate and construction solutions with trusted guidance and on-time delivery.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="tel:+918825767785"
                  className="rounded-lg bg-[#DC2626] px-7 py-4 font-semibold text-white transition hover:bg-[#B91C1C]"
                >
                  📞 Call Now
                </a>

                <a
                  href="https://wa.me/918825767785"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-white/20 bg-white/10 px-7 py-4 font-semibold text-white backdrop-blur transition hover:bg-white hover:text-[#0B1633]"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>

            {/* Right Card */}
            <div>
              <div className="rounded-3xl bg-white p-10 shadow-2xl">
                <h3 className="text-2xl font-bold text-gray-900">
                  Why Choose Star Promoters for Construction & Real Estate?
                </h3>

                <div className="mt-8 space-y-6">
                  {[
                    "DTCP & RERA Approved Projects",
                    "Transparent Pricing",
                    "Bank Loan Assistance",
                    "Experienced Construction Team",
                    "On-Time Project Delivery",
                    "Complete Legal Documentation",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-4">
                      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-green-100 text-lg text-green-600">
                        ✓
                      </div>

                      <span className="font-medium text-gray-700">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-10 rounded-2xl bg-red-50 p-6">
                  <p className="text-sm font-semibold uppercase tracking-wider text-red-600">
                    Contact
                  </p>

                  <a
                    href="tel:+918825767785"
                    className="mt-2 block text-3xl font-bold text-[#0B1633]"
                  >
                    +91 88257 67785
                  </a>

                  <p className="mt-2 text-gray-600">
                    Available for site visits, consultations and project
                    discussions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Servicepage;