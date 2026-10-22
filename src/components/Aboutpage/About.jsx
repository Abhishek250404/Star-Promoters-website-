// import { CheckCircleFilled, SafetyCertificateFilled, TrophyOutlined } from "@ant-design/icons";
// import React from "react";

// /**
//  * Star Promoters — About Page
//  * React + Tailwind conversion of the original HTML page.
//  * Colors mapped 1:1 to the brand palette supplied:
//  *
//  *   Primary Red     #DC2626  -> CTAs, active nav, brick-red accents
//  *   Primary Blue    #0F4CC9  -> founder avatar gradient, deep blue accents
//  *   Secondary Blue  #2563EB  -> highlight spans, dots, links on dark bg
//  *   Dark Navy       #0B1633  -> headers on dark sections, footer, hero bg
//  *   Heading         #111827  -> all headings
//  *   Background      #FFFFFF  -> white cards / base bg
//  *   Section BG      #F9FAFB  -> light section background
//  *   Border           #E5E7EB -> hairline borders
//  *   Paragraph       #6B7280  -> body copy
//  *   Rating          #FBBF24  -> small accent dots / bullets
//  *   Success         #22C55E  -> "approved" style indicators
//  */

// const NAV_LINKS = [
//   { label: "Services", href: "#services" },
//   { label: "Projects", href: "#projects" },
//   { label: "About", href: "#about", active: true },
//   { label: "FAQ", href: "#faq" },
//   { label: "Contact", href: "#contact" },
// ];

// const TRUST_ITEMS = [
//   "DTCP & RERA Approved",
//   "Bank Loan Assistance",
//   "Clear Legal Documents",
//   "Turnkey Construction",
//   "Trichy & Pudukkottai District",
// ];

// const VALUES = [
//   { num: "01", title: "Approval Before Sale", body: "DTCP & RERA approval is confirmed before any plot is listed — not promised for later." },
//   { num: "02", title: "One Team, Full Process", body: "Land promotion and construction run under the same roof, so nothing gets lost between contractors." },
//   { num: "03", title: "Documentation Up Front", body: "Title and legal documents are verified and shared before you commit, not after." },
//   { num: "04", title: "Financing Support", body: "We coordinate directly with banks so loan approval doesn't stall your purchase." },
//   { num: "05", title: "Local Site Knowledge", body: "Every location is picked and verified in person across Trichy and Pudukkottai District." },
//   { num: "06", title: "Direct Communication", body: "One phone number, one team — no call centers or handoffs between departments." },
// ];

// const JOURNEY = [
//   { title: "Started in land promotion", body: "Began by developing DTCP-approved residential layouts in and around Trichy." },
//   { title: "Expanded into construction", body: "Added turnkey house and commercial construction, including design, plan approval, and electrical & plumbing work." },
//   { title: "Grew across districts", body: "Extended projects into Srirangam Taluk and Pudukkottai District, alongside Trichy city layouts like K K Nagar." },
//   { title: "Today", body: "Operating active RERA-approved villa and plot projects with bank loan assistance and full legal documentation for every buyer." },
// ];

// const STATS = [
//   { value: "DTCP & RERA", label: "Approved Projects" },
//   { value: "4+", label: "Active Projects" },
//   { value: "2", label: "Districts Served" },
//   { value: "100%", label: "Documented Titles" },
// ];

// const FOUNDERS = [
//   {
//     initials: "SP",
//     name: "Founder Name",
//     title: "Founder & Managing Director",
//     body: "A short background on experience in construction/real estate, what led to starting Star Promoters, and what they personally oversee — plots, construction, or client relationships.",
//   },
//   {
//     initials: "SP",
//     name: "Co-Founder Name",
//     title: "Co-Founder & Head of Construction",
//     body: "A short background on their construction/technical expertise and role in project execution, design, or site management.",
//   },
// ];

// function Eyebrow({ children }) {
//   return (
//     <p className="uppercase tracking-[.14em] text-xs font-bold text-[#DC2626]">
//       {children}
//     </p>
//   );
// }

// export default function AboutPage() {
//   return (
//     <div className=" text-[#111827] bg-white leading-relaxed">


//       <main>
//         {/* HERO */}
//         <section className="bg-gradient-to-br from-white via-blue-50 to-white">
//           <div className="mx-auto max-w-7xl px-6 py-20">

//             <div className="max-w-3xl">

//               <div className="mb-5 inline-flex items-center rounded-full border border-red-200 bg-red-50 px-5 py-2 text-sm font-semibold text-red-600">
//                 ⭐ About Star Promoters
//               </div>

//               <h1 className="text-4xl font-extrabold leading-tight text-gray-900 md:text-6xl">
//                 Every Plot
//                 <span className="text-red-600"> Approved</span>,
//                 <br />
//                 Every Project
//                 <span className="text-blue-700"> Delivered</span>
//               </h1>

//               <p className="mt-7 text-lg leading-8 text-gray-600">
//                 Star Promoters is one of the trusted real estate and construction
//                 companies in Trichy, offering DTCP & RERA approved plots,
//                 premium villas, independent homes and complete construction
//                 solutions with transparency, quality and on-time delivery.
//               </p>

//             </div>

//           </div>
//         </section>

//         {/* TRUST STRIP */}
//         <section className="bg-white py-12">
//           <div className="mx-auto grid max-w-7xl gap-6 px-6 md:grid-cols-2 lg:grid-cols-5">

//             {TRUST_ITEMS.map((item) => (

//               <div
//                 key={item}
//                 className="rounded-2xl bg-white p-6 text-center shadow-lg"
//               >
//                 <CheckCircleFilled className="text-3xl text-green-500" />

//                 <p className="mt-4 font-semibold text-gray-800">
//                   {item}
//                 </p>

//               </div>

//             ))}

//           </div>
//         </section>

//         {/* MISSION / VISION */}
//         <section className="bg-gray-50 py-20">
//           <div className="mx-auto max-w-7xl px-6">

//             <div className="mb-12 text-center">

//               <div className="mb-4 inline-flex rounded-full bg-red-50 px-4 py-2 font-semibold text-red-600">
//                 Mission & Vision
//               </div>

//               <h2 className="text-4xl font-extrabold text-gray-900">
//                 Building Trust Through Quality
//               </h2>

//             </div>

//             <div className="grid gap-8 md:grid-cols-2">

//               <div className="rounded-3xl bg-white p-8 shadow-xl">

//                 <TrophyOutlined className="text-5xl text-red-600" />

//                 <h3 className="mt-6 text-2xl font-bold">
//                   Our Mission
//                 </h3>

//                 <p className="mt-4 leading-8 text-gray-600">
//                   To provide legally approved plots and premium construction
//                   services with complete transparency and unmatched customer
//                   satisfaction.
//                 </p>

//               </div>

//               <div className="rounded-3xl bg-white p-8 shadow-xl">

//                 <SafetyCertificateFilled className="text-5xl text-blue-700" />

//                 <h3 className="mt-6 text-2xl font-bold">
//                   Our Vision
//                 </h3>

//                 <p className="mt-4 leading-8 text-gray-600">
//                   To become the most trusted real estate and construction
//                   company in Tamil Nadu by delivering excellence in every
//                   project.
//                 </p>

//               </div>

//             </div>

//           </div>
//         </section>
//         {/* FOUNDERS */}
//         <section className="bg-white py-20">
//           <div className="mx-auto max-w-7xl px-6">

//             <div className="mb-12 text-center">

//               <div className="mb-4 inline-flex rounded-full bg-blue-50 px-4 py-2 font-semibold text-blue-700">
//                 Leadership
//               </div>

//               <h2 className="text-4xl font-extrabold text-gray-900">
//                 Meet Our Leadership Team
//               </h2>

//             </div>

//             <div className="grid gap-8 md:grid-cols-2">

//               {FOUNDERS.map((person) => (

//                 <div
//                   key={person.name}
//                   className="rounded-3xl bg-white p-8 shadow-xl"
//                 >

//                   <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-700 text-3xl font-bold text-white">
//                     {person.initials}
//                   </div>

//                   <h3 className="mt-6 text-2xl font-bold">
//                     {person.name}
//                   </h3>

//                   <p className="font-semibold text-red-600">
//                     {person.title}
//                   </p>

//                   <p className="mt-4 leading-8 text-gray-600">
//                     {person.body}
//                   </p>

//                 </div>

//               ))}

//             </div>

//           </div>
//         </section>

//         {/* VALUES */}
//         <section className="bg-white py-16">
//           <div className="max-w-[1160px] mx-auto px-6">
//             <div className="max-w-[64ch] mb-9">
//               <Eyebrow>How We Operate</Eyebrow>
//               <h2 className=" text-[#111827] text-2xl md:text-4xl mt-2">
//                 The standard behind every project
//               </h2>
//             </div>

//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#E5E7EB] border border-[#E5E7EB]">
//               {VALUES.map((v) => (
//                 <div key={v.num} className="bg-white p-6">
//                   <div className=" font-bold text-[#DC2626] text-[13px] tracking-wide">
//                     {v.num}
//                   </div>
//                   <h3 className="text-base font-bold text-[#111827] mt-2 mb-1.5">
//                     {v.title}
//                   </h3>
//                   <p className="text-sm text-[#6B7280]">{v.body}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* JOURNEY */}
//         <section className="py-16 bg-white">
//           <div className="max-w-[1160px] mx-auto px-6">
//             <div className="max-w-[64ch] mb-9">
//               <Eyebrow>Our Journey</Eyebrow>
//               <h2 className=" text-[#111827] text-2xl md:text-4xl mt-2">
//                 How we got here
//               </h2>
//             </div>

//             <div className="border-l-2 border-[#E5E7EB] ml-2">
//               {JOURNEY.map((j, i) => (
//                 <div key={j.title} className="relative pl-8 pb-8 last:pb-0">
//                   <span className="absolute -left-[7px] top-0.5 w-3 h-3 rounded-full bg-[#DC2626] border-[3px] border-white" />
//                   <h3 className="text-base font-bold text-[#111827] mb-1">
//                     {j.title}
//                   </h3>
//                   <p className="text-sm text-[#6B7280] max-w-[60ch]">
//                     {j.body}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* STATS */}
//         <section className="bg-[#F9FAFB] py-16">
//           <div className="max-w-[1160px] mx-auto px-6">
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
//               {STATS.map((s) => (
//                 <div
//                   key={s.label}
//                   className="bg-white border border-[#E5E7EB] rounded-lg p-6 text-center"
//                 >
//                   <div className=" font-bold text-2xl text-[#111827]">
//                     {s.value}
//                   </div>
//                   <div className="text-xs uppercase tracking-wide text-[#6B7280] mt-1.5">
//                     {s.label}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* CTA */}
//         <section id="contact" className="bg-[#0B1633] text-white text-center py-16">
//           <div className="max-w-[1160px] mx-auto px-6">
//             <h2 className=" text-white text-2xl md:text-4xl mb-3.5">
//               Talk to our team
//             </h2>
//             <p className="text-[#C9D0DC] max-w-[52ch] mx-auto mb-7">
//               Questions about a project or want to arrange a site visit? Call
//               us directly.
//             </p>
//             <a
//               href="tel:+918825767785"
//               className=" font-bold text-2xl text-[#FBBF24] block mb-5"
//             >
//               📞 +91 88257 67785
//             </a>
//             <a
//               href="tel:+918825767785"
//               className="inline-block bg-[#DC2626] hover:bg-[#B91C1C] text-white px-6.5 py-3.5 rounded-md font-bold transition-colors"
//             >
//               Call Now
//             </a>
//           </div>
//         </section>
//       </main>

//     </div>
//   );
// }
import { CheckCircleFilled, SafetyCertificateFilled, TrophyOutlined } from "@ant-design/icons";
import React from "react";
import { Link } from "react-router-dom";
import Founder from "../../assets/founder.jpg"
import { Helmet } from "react-helmet-async";
/**
 * Star Promoters — About Page
 * React + Tailwind conversion of the original HTML page.
 * Colors mapped 1:1 to the brand palette supplied:
 *
 *   Primary Red     #DC2626  -> CTAs, active nav, brick-red accents
 *   Primary Blue    #0F4CC9  -> founder avatar gradient, deep blue accents
 *   Secondary Blue  #2563EB  -> highlight spans, dots, links on dark bg
 *   Dark Navy       #0B1633  -> headers on dark sections, footer, hero bg
 *   Heading         #111827  -> all headings
 *   Background      #FFFFFF  -> white cards / base bg
 *   Section BG      #F9FAFB  -> light section background
 *   Border           #E5E7EB -> hairline borders
 *   Paragraph       #6B7280  -> body copy
 *   Rating          #FBBF24  -> small accent dots / bullets
 *   Success         #22C55E  -> "approved" style indicators
 *
 * Type scale (kept consistent across the whole page):
 *   H1 (hero)         -> text-4xl md:text-5xl font-bold
 *   H2 (section title)-> text-2xl md:text-3xl font-bold
 *   H3 (card title)    -> text-lg font-semibold
 *   Body copy          -> text-base leading-7 text-gray-600
 */

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about", active: true },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const TRUST_ITEMS = [
  "DTCP & RERA Approved",
  "Bank Loan Assistance",
  "Clear Legal Documents",
  "Turnkey Construction",
  "Trichy & Pudukkottai District",
];

const VALUES = [
  { num: "01", title: "Approval Before Sale", body: "DTCP & RERA approval is confirmed before any plot is listed — not promised for later." },
  { num: "02", title: "One Team, Full Process", body: "Land promotion and construction run under the same roof, so nothing gets lost between contractors." },
  { num: "03", title: "Documentation Up Front", body: "Title and legal documents are verified and shared before you commit, not after." },
  { num: "04", title: "Financing Support", body: "We coordinate directly with banks so loan approval doesn't stall your purchase." },
  { num: "05", title: "Local Site Knowledge", body: "Every location is picked and verified in person across Trichy and Pudukkottai District." },
  { num: "06", title: "Direct Communication", body: "One phone number, one team — no call centers or handoffs between departments." },
];

const JOURNEY = [
  { title: "Started in land promotion", body: "Began by developing DTCP-approved residential layouts in and around Trichy." },
  { title: "Expanded into construction", body: "Added turnkey house and commercial construction, including design, plan approval, and electrical & plumbing work." },
  { title: "Grew across districts", body: "Extended projects into Srirangam Taluk and Pudukkottai District, alongside Trichy city layouts like K K Nagar." },
  { title: "Today", body: "Operating active RERA-approved villa and plot projects with bank loan assistance and full legal documentation for every buyer." },
];

const STATS = [
  { value: "DTCP & RERA", label: "Approved Projects" },
  { value: "4+", label: "Active Projects" },
  { value: "2", label: "Districts Served" },
  { value: "100%", label: "Documented Titles" },
];

const FOUNDERS = [
  {
    image: Founder,
    name: "Mr. J. Sathiyaseelan",
    title: "Founder & Managing Director",
    body: "With strong experience in construction and real estate, Sathiyaseelan founded Star Promoters with a vision to deliver quality properties, transparent services, and trusted construction solutions. He personally oversees project development, customer relationships, and business growth.",
  },
];

function Eyebrow({ children }) {
  return (
    <p className="uppercase tracking-[.14em] text-xs font-bold text-[#DC2626]">
      {children}
    </p>
  );
}

// Shared classnames so every heading level stays visually consistent
const H2 = "text-2xl md:text-3xl font-bold text-gray-900";
const H3 = "text-lg font-semibold text-[#111827]";
const BODY = "text-base leading-7 text-black";

export default function AboutPage() {
  return (
    <div className=" text-[#111827]  leading-relaxed">
<Helmet> {/* Primary SEO */} <title> About Star Promoters | Trusted Builders & Real Estate Company in Trichy </title> <meta name="description" content="Learn about Star Promoters, a trusted construction and real estate company in Trichy offering quality house construction, property development and reliable real estate solutions." /> <meta name="keywords" content="Star Promoters Trichy, construction company Trichy, real estate company Trichy, builders in Trichy, building contractors Trichy, property developers Trichy, house builders Trichy" /> <meta name="robots" content="index, follow" /> <meta name="author" content="Star Promoters" /> {/* Canonical */} <link rel="canonical" href="https://starpromoterstrichy.com/about" /> {/* Open Graph */} <meta property="og:title" content="About Star Promoters | Trusted Builders & Real Estate Company in Trichy" /> <meta property="og:description" content="Learn about Star Promoters, a trusted construction and real estate company in Trichy offering quality house construction, property development and reliable real estate solutions." /> <meta property="og:type" content="website" /> <meta property="og:url" content="https://starpromoterstrichy.com/about" /> <meta property="og:site_name" content="Star Promoters" /> <meta property="og:image" content="https://starpromoterstrichy.com/og-image.jpg" /> {/* Twitter / X */} <meta name="twitter:card" content="summary_large_image" /> <meta name="twitter:title" content="About Star Promoters | Trusted Builders & Real Estate Company in Trichy" /> <meta name="twitter:description" content="Learn about Star Promoters, a trusted construction and real estate company in Trichy offering quality house construction, property development and reliable real estate solutions." /> <meta name="twitter:image" content="https://starpromoterstrichy.com/og-image.jpg" /> </Helmet>

      <main>
        {/* HERO */}
        <section
          className="relative overflow-hidden bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-white/40"></div>

          <div className="relative mx-auto max-w-7xl px-6 py-20">

            <div className="max-w-3xl">

              <span className="mb-5 inline-flex items-center rounded-full border border-red-200 bg-red-50 px-5 py-2 text-sm font-semibold text-red-600">
                About Star Promoters
              </span>

              <h1 className="text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
                Every Plot
                <span className="text-red-600"> Approved</span>,
                <br />
                Every Project
                <span className="text-blue-700"> Delivered</span>
              </h1>

              <p className="mt-6 text-lg leading-8 text-black font-semibold">
                Star Promoters is a trusted construction and real estate company in Trichy,
                specializing in DTCP & RERA approved plots, house construction,
                commercial projects, farm land and property development. Our commitment
                to quality, transparency and customer satisfaction has helped us build
                lasting relationships with homeowners and investors across Tamil Nadu.
              </p>

            </div>

          </div>
        </section>

        {/* TRUST STRIP */}
        <section className="bg-white py-12">
          <div className="mx-auto grid max-w-7xl gap-6 px-6 md:grid-cols-2 lg:grid-cols-5">

            {TRUST_ITEMS.map((item) => (

              <div
                key={item}
                className="rounded-2xl bg-white p-6 text-center shadow-lg"
              >
                <CheckCircleFilled className="text-3xl text-green-500" />

                <p className="mt-4 text-sm font-semibold text-gray-800">
                  {item}
                </p>

              </div>

            ))}

          </div>
        </section>

        {/* MISSION / VISION */}
        <section className="bg-gray-50 py-20">
          <div className="mx-auto max-w-7xl px-6">

            <div className="mb-12 text-center">

              <div className="mb-4 inline-flex rounded-full bg-red-50 px-4 py-2 text-sm font-semibold text-red-600">
                Mission & Vision
              </div>

              <h2 className="mt-6 text-4xl font-bold leading-tight  md:text-5xl">
                Building Trust Through
                <span className="block text-red-600">
                  Quality Construction & Real Estate
                </span>
              </h2>

            </div>

            <div className="grid gap-8 md:grid-cols-2">

              <div className="rounded-3xl bg-white p-8 shadow-xl">

                <TrophyOutlined className="text-4xl text-red-600" />

                <h3 className={`mt-6 ${H3}`}>
                  Our Mission
                </h3>

                <p className={`mt-3 ${BODY}`}>
                  To provide legally approved plots and premium construction
                  services with complete transparency and unmatched customer
                  satisfaction.
                </p>

              </div>

              <div className="rounded-3xl bg-white p-8 shadow-xl">

                <SafetyCertificateFilled className="text-4xl text-blue-700" />

                <h3 className={`mt-6 ${H3}`}>
                  Our Vision
                </h3>

                <p className={`mt-3 ${BODY}`}>
                  To become the most trusted real estate and construction
                  company in Tamil Nadu by delivering excellence in every
                  project.
                </p>

              </div>

            </div>

          </div>
        </section>
        {/* FOUNDERS */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-6">

            <div className="mb-12 text-center">

              <div className="mb-4 inline-flex rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
                Leadership
              </div>

              <h2 className={H2}>
                Meet Our Leadership Team
              </h2>

            </div>

            <div className="grid gap-8">

              {FOUNDERS.map((person) => (

                <div
                  key={person.name}
                  className="rounded-3xl bg-white p-10 shadow-xl transition hover:shadow-2xl"
                >

                  <div className="grid items-center gap-10 md:grid-cols-2">

                    {/* Founder Image */}

                    <div className="flex justify-center">

                      <img
                        src={person.image}
                        alt={`${person.name} - Founder of Star Promoters`}
                        className="h-96 w-96 rounded-3xl object-cover shadow-lg"
                      />

                    </div>


                    {/* Founder Details */}

                    <div>

                      <h3 className={`text-4xl font-bold ${H3}`}>
                        {person.name}
                      </h3>


                      <p className="mt-2 text-lg font-semibold text-red-600">
                        {person.title}
                      </p>


                      <p className={`mt-6 text-lg leading-8 ${BODY}`}>
                        {person.body}
                      </p>


                      <div className="mt-8">

                        <span className="rounded-full bg-blue-50 px-5 py-2 text-sm font-semibold text-blue-700">
                          Star Promoters | Trichy
                        </span>

                      </div>

                    </div>


                  </div>


                </div>

              ))}

            </div>
          </div>
        </section>

        {/* VALUES */}
        <section className="bg-white py-16">
          <div className="max-w-290 mx-auto px-6">
            <div className="max-w-[64ch] mb-9">
              <Eyebrow>How We Operate</Eyebrow>
              <h2 className={`mt-2 ${H2}`}>
                The standard behind every project
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#E5E7EB] border border-[#E5E7EB]">
              {VALUES.map((v) => (
                <div key={v.num} className="bg-white p-6">
                  <div className=" font-bold text-[#DC2626] text-[13px] tracking-wide">
                    {v.num}
                  </div>
                  <h3 className={`mt-2 mb-1.5 ${H3}`}>
                    {v.title}
                  </h3>
                  <p className="text-sm leading-6 text-[#6B7280]">{v.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* JOURNEY */}
        <section className="py-16 bg-white">
          <div className="max-w-290 mx-auto px-6">
            <div className="max-w-[64ch] mb-9">
              <Eyebrow>Our Journey</Eyebrow>
              <h2 className={`mt-2 ${H2}`}>
                How we got here
              </h2>
            </div>

            <div className="border-l-2 border-[#E5E7EB] ml-2">
              {JOURNEY.map((j, i) => (
                <div key={j.title} className="relative pl-8 pb-8 last:pb-0">
                  <span className="absolute -left-1.75 top-0.5 w-3 h-3 rounded-full bg-[#DC2626] border-[3px] border-white" />
                  <h3 className="text-base font-semibold text-[#111827] mb-1">
                    {j.title}
                  </h3>
                  <p className="text-sm leading-6 text-[#6B7280] max-w-[60ch]">
                    {j.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="bg-[#F9FAFB] py-16">
          <div className="max-w-290 mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              {STATS.map((s) => (
                <div
                  key={s.label}
                  className="bg-white border border-[#E5E7EB] rounded-lg p-6 text-center"
                >
                  <div className="font-bold text-xl text-[#111827]">
                    {s.value}
                  </div>
                  <div className="text-xs uppercase tracking-wide text-[#6B7280] mt-1.5">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gray-50 py-20">
          <div className="mx-auto max-w-7xl px-6">

            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#DC2626] via-[#EF4444] to-[#2563EB] p-10 shadow-[0_20px_60px_rgba(0,0,0,0.15)] md:p-14">

              {/* Decorative Blur */}
              <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-white/10 blur-3xl"></div>
              <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-white/10 blur-3xl"></div>

              <div className="relative z-10 mx-auto max-w-4xl text-center">

                <span className="inline-flex rounded-full bg-white/15 px-5 py-2 text-sm font-semibold tracking-wide text-white backdrop-blur">
                  ⭐ Free Consultation
                </span>

                <h2 className="mt-6 text-3xl font-bold leading-tight text-white md:text-5xl">
                  Ready to Start Your
                  <span className="block text-yellow-300">
                    Property Investment or Construction Project?
                  </span>
                </h2>

                <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/90">
                  Whether you're looking for DTCP & RERA approved plots, farm land,
                  house construction, commercial buildings or complete real estate
                  solutions in Trichy and Pudukkottai, our experts are ready to guide you.
                </p>

                <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

                  <a
                    href="tel:+9188248659355"
                    className="rounded-full bg-white px-8 py-4 font-semibold text-red-600 transition duration-300 hover:scale-105 hover:shadow-xl"
                  >
                    📞 Talk to Our Experts
                  </a>

                  <Link
                    to="/contactpage"
                    className="rounded-full border-2 border-white px-8 py-4 font-semibold text-white transition duration-300 hover:bg-white hover:text-[#0B1633]"
                  >
                    Get Free Consultation
                  </Link>

                </div>

              </div>

            </div>

          </div>
        </section>
      </main>

    </div>
  );
}