import React from "react";
import {
  PhoneOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">

        <div className="overflow-hidden rounded-[32px] bg-gradient-to-r from-red-600 via-red-500 to-blue-700 px-8 py-14 shadow-2xl md:px-16">

          <div className="flex flex-col items-center justify-between gap-10 lg:flex-row">

            {/* Left */}

            <div className="max-w-3xl">

              <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-semibold uppercase tracking-wider text-white">
                Trusted Land Promoters & Construction Company
              </span>

              <h2 className="mt-6 text-4xl font-bold leading-tight text-white md:text-5xl">
                Build Your Dream Home with
                <span className="block text-yellow-300">
                  Star Promoters in Trichy
                </span>
              </h2>

              <p className="mt-6 text-lg leading-8 text-white/90">
                Looking for DTCP & RERA approved plots, house construction,
                commercial building construction or farm land near Trichy?
                Star Promoters provides trusted real estate and construction
                solutions with quality, transparency and on-time delivery.
              </p>

            </div>

            {/* Right */}

            <div className="flex flex-col gap-5">

              <a
                href="tel:+9188248659355"
                aria-label="Call Star Promoters for construction and real estate consultation"
                className="flex items-center justify-center gap-3 rounded-full bg-white px-8 py-4 text-lg font-semibold text-red-600 transition hover:scale-105"
              >
                <PhoneOutlined />
                Get Free Consultation
              </a>
              <Link
                to="/contactpage"
                className="flex items-center justify-center gap-3 rounded-full border-2 border-white px-8 py-4 text-lg font-semibold text-white transition hover:bg-white hover:text-blue-700"
              >
                Contact Our Experts
                <ArrowRightOutlined />
              </Link>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default CTA;