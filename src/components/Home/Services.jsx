import React from "react";
import {
  HomeOutlined,
  BuildOutlined,
  ApartmentOutlined,
  SafetyCertificateOutlined,
  BgColorsOutlined,
  FileDoneOutlined,
} from "@ant-design/icons";
const services = [
  {
    icon: <HomeOutlined />,
    title: "DTCP & RERA Approved Plots in Trichy",
    description:
      "Premium DTCP & RERA approved residential plots in Trichy with clear legal documentation, bank loan assistance and excellent investment value.",
  },
  {
    icon: <ApartmentOutlined />,
    title: "Building Construction in Trichy",
    description:
      "Complete residential and commercial building construction services in Trichy with quality materials, modern architecture and timely project delivery.",
  },
  {
    icon: <BuildOutlined />,
    title: "House Construction in Trichy",
    description:
      "Custom house construction, villa construction and turnkey home building solutions designed to match your lifestyle and budget.",
  },
  {
    icon: <BgColorsOutlined />,
    title: "Interior & Exterior Design",
    description:
      "Modern interior and exterior design solutions including modular interiors, elevation design and space planning for homes and commercial buildings.",
  },
  {
    icon: <SafetyCertificateOutlined />,
    title: "Property Development",
    description:
      "Trusted land promotion and property development services with transparent documentation, premium layouts and secure investments.",
  },
  {
    icon: <FileDoneOutlined />,
    title: "Building Plan Approval",
    description:
      "Complete assistance for DTCP Approval, RERA guidance, building plan approval, registration, legal documentation and property consultation.",
  },
];

const Services = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mx-auto mb-14 max-w-3xl text-center">

          <span className="rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-600">
            OUR SERVICES
          </span>

          <h2 className="mt-5 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
            Best Land Promoters, Builders &
            <span className="text-red-600"> Construction Company in Trichy</span>
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            Star Promoters is a trusted Land Promoters in Trichy,
             Building Construction Company in Trichy and
             Real Estate Company in Trichy, offering
              DTCP & RERA Approved Plots, House Construction
            and complete property development solutions.
          </p>
        </div>

        {/* Cards */}

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

          {services.map((service, index) => (
            <div
              key={index}
              className="group rounded-3xl bg-white p-8 shadow-md transition duration-300 hover:-translate-y-3 hover:shadow-2xl"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-red-50 text-3xl text-red-600 transition group-hover:bg-red-600 group-hover:text-white">
                {service.icon}
              </div>

              <h3 className="mb-4 text-2xl font-bold text-gray-900">
                {service.title}
              </h3>

              <p className="leading-7 text-gray-600">
                {service.description}
              </p>

              <button className="mt-6 font-semibold text-blue-700 transition hover:text-red-600">
                Learn More →
              </button>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Services;