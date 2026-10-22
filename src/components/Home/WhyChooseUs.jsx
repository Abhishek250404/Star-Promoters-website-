import React from "react";
import {
  CheckCircleFilled,
  TrophyOutlined,
  SafetyCertificateOutlined,
  TeamOutlined,
} from "@ant-design/icons";

import aboutImage from "../../assets/heo2.webp"; // Change your image

const features = [
  "DTCP & RERA Approved Plots in Trichy",
  "Residential & Commercial Construction",
  "House & Villa Construction",
  "Building Plan Approval Assistance",
  "Property Development & Land Promotion",
  "Transparent Documentation & On-Time Delivery",
];

const WhyChooseUs = () => {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-16 px-6 lg:flex-row">

        {/* Left Image */}

        <div className="relative flex-1">

          <img
            src={aboutImage}
            alt="About Star Promoters"
            className="w-full rounded-3xl shadow-2xl"
          />

          {/* Experience Card */}

          <div className="absolute -bottom-8 left-8 rounded-3xl bg-red-600 px-8 py-6 text-white shadow-xl">

            <h2 className="text-4xl font-bold">
              10+
            </h2>

            <p className="mt-2 text-lg">
              Years Experience
            </p>

          </div>

        </div>

        {/* Right */}

        <div className="flex-1">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            WHY CHOOSE STAR PROMOTERS
          </span>
          <h2 className="mt-6 text-4xl font-bold leading-tight text-gray-900">
            Trusted Land Promoters &
            <span className="text-red-600">
              Construction Company in Trichy
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Star Promoters is a trusted land promoter and construction company in Trichy,
            offering DTCP & RERA approved plots, house construction, residential and
            commercial building construction, property development and complete real
            estate solutions with quality, transparency and on-time delivery.
          </p>

          {/* Features */}

          <div className="mt-10 grid gap-5 sm:grid-cols-2">

            {features.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-3"
              >
                <CheckCircleFilled className="mt-1 text-lg text-green-500" />

                <p className="font-medium text-gray-700">
                  {item}
                </p>
              </div>
            ))}

          </div>

          {/* Cards */}

          <div className="mt-12 grid gap-6 sm:grid-cols-2">

            <div className="rounded-3xl bg-gray-50 p-6 transition hover:shadow-lg">

              <TrophyOutlined className="text-4xl text-red-600" />

              <h3 className="mt-4 text-xl font-bold">
                Quality Construction
              </h3>
              <p className="mt-2 text-gray-600">
                Residential and commercial construction using premium materials,
                modern engineering and quality workmanship.
              </p>
            </div>

            <div className="rounded-3xl bg-gray-50 p-6 transition hover:shadow-lg">

              <SafetyCertificateOutlined className="text-4xl text-blue-700" />

              <h3 className="mt-4 text-xl font-bold">
                DTCP & RERA Approved
              </h3>


              <p className="mt-2 text-gray-600">
                Approved layouts with legal documentation, registration assistance
                and complete property guidance.
              </p>

            </div>

            <div className="rounded-3xl bg-gray-50 p-6 transition hover:shadow-lg">

              <TeamOutlined className="text-4xl text-red-600" />
              <h3 className="mt-4 text-xl font-bold">
                Experienced Team
              </h3>
              <p className="mt-2 text-gray-600">
                Skilled architects, engineers and construction professionals
                delivering every project with precision.
              </p>
            </div>

            <div className="rounded-3xl bg-gray-50 p-6 transition hover:shadow-lg">

              <CheckCircleFilled className="text-4xl text-blue-700" />

              <h3 className="mt-4 text-xl font-bold">
                Customer First
              </h3>

              <p className="mt-2 text-gray-600">
                We focus on transparency, commitment and long-term
                customer relationships.
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;