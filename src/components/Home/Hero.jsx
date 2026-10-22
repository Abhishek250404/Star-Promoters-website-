import React from "react";
import { Link } from "react-router-dom";
import {
  PhoneOutlined,
  ArrowRightOutlined,
  CheckCircleFilled,
} from "@ant-design/icons";

import heroImage from "../../assets/hero.webp"; // Change your image

const Hero = () => {
  return (
    <section
      className="relative min-h-[750px] md:min-h-[600px] lg:h-[650px] overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=80')",
      }}
    >
      {/* Dark Overlay */}
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

      <div className="relative mx-auto flex h-full max-w-7xl items-center px-6 mt-8"><div className="relative mx-auto flex h-full max-w-7xl flex-col justify-center px-5 py-16 md:px-8 lg:flex-row lg:items-center lg:justify-between lg:py-0">
        <div className="w-full max-w-3xl text-center lg:text-left">

          {/* Badge */}

          <div className="mb-5 inline-flex items-center rounded-full border border-red-400/30 bg-red-500/10 px-4 py-2 text-xs font-semibold text-red-300 backdrop-blur-sm md:px-5 md:text-sm">
            ⭐ Trusted Land Promoters, Builders & Construction Company in Trichy
          </div>

          {/* Heading */}

          <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl">
            Star Promoters <br />
            <span className="text-[#DC2626]"> Land Promoters</span>
            <br />
            Builders & Construction Company
            <span className="text-[#D9A441]"> in Trichy</span>
          </h1>

          {/* Description */}

          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 md:text-lg md:leading-8">
            Star Promoters is a trusted land promoter, builder and construction
            company in Trichy, offering DTCP and RERA approved plots, house
            construction, residential and commercial buildings, villa construction,
            property development, building plan approval, and complete turnkey
            construction solutions with quality, transparency and on-time delivery.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <Link
              to="/projectpage"
              className="rounded-xl bg-[#DC2626] px-7 py-3 font-semibold text-white transition hover:bg-red-700"
            >
              View DTCP & RERA Approved Plots
            </Link>

            <a
              href="tel:+9188248659355"
              className="rounded-xl border border-white/30 bg-white/10 px-7 py-3 font-semibold text-white backdrop-blur transition hover:bg-white hover:text-[#0B1633]"
            >
              📞 Call Now
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-4">

          <div className="rounded-2xl border border-white/10 bg-white/10 p-4 text-center backdrop-blur">
            <h3 className="text-2xl font-bold text-[#DC2626]">10+</h3>
            <p className="mt-1 text-xs text-slate-300 md:text-sm">
              Years Experience
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/10 p-4 text-center backdrop-blur">
            <h3 className="text-2xl font-bold text-[#D9A441]">1000+</h3>
            <p className="mt-1 text-xs text-slate-300 md:text-sm">
              Happy Clients
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/10 p-4 text-center backdrop-blur">
            <h3 className="text-2xl font-bold text-[#DC2626]">250+</h3>
            <p className="mt-1 text-xs text-slate-300 md:text-sm">
              Projects Delivered
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/10 p-4 text-center backdrop-blur">
            <h3 className="text-2xl font-bold text-[#D9A441]">100%</h3>
            <p className="mt-1 text-xs text-slate-300 md:text-sm">
              DTCP & RERA Approved
            </p>
          </div>

        </div>

      </div>

      </div>
    </section >
  );
};

export default Hero;