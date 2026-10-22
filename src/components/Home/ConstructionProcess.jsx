import React from "react";
import {
    MessageOutlined,
    FileDoneOutlined,
    BuildOutlined,
    HomeOutlined,
    CheckCircleFilled,
    ArrowRightOutlined,
    ArrowDownOutlined,
} from "@ant-design/icons";

const process = [
    {
        icon: <MessageOutlined />,
        title: "Free Property Consultation",
        description:
            "Discuss your requirements for DTCP approved plots, house construction, farm land or commercial projects with our experts.",
    },
    {
        icon: <FileDoneOutlined />,
        title: "Planning & Legal Approval",
        description:
            "We provide building plan approval, DTCP & RERA guidance, legal documentation and complete project planning.",
    },
    {
        icon: <BuildOutlined />,
        title: "Construction & Development",
        description:
            "Quality residential and commercial construction using premium materials, modern engineering and experienced professionals.",
    },
    {
        icon: <HomeOutlined />,
        title: "Project Completion",
        description:
            "Timely project delivery with quality assurance, customer support and complete satisfaction.",
    },
];

const ConstructionProcess = () => {
    return (
        <section className="bg-white py-24">
            <div className="mx-auto max-w-7xl px-6">

                {/* Heading */}

                <div className="mx-auto mb-16 max-w-3xl text-center">
                    <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
                        OUR PROCESS
                    </span>

                    <h2 className="mt-6 text-4xl font-bold text-gray-900 md:text-5xl">
                        Our Process for
                        <span className="text-red-600">
                            House Construction & Real Estate in Trichy
                        </span>
                    </h2>

                    <p className="mt-5 text-lg leading-8 text-gray-600">
                        From buying DTCP & RERA approved plots to house construction,
                        building plan approval and project handover, Star Promoters
                        provides a transparent and hassle-free construction and real
                        estate experience in Trichy.
                    </p>
                </div>

                {/* Process */}

                <div className="flex flex-col items-center justify-center gap-8 lg:flex-row lg:items-stretch lg:gap-6">

                    {process.map((item, index) => (
                        <React.Fragment key={index}>

                            {/* Card */}

                         <div className="group flex min-h-[420px] w-full max-w-[320px] flex-col rounded-3xl border border-gray-200 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-3 hover:border-red-300 hover:shadow-xl">

  {/* Icon */}

  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-white p-2 shadow-lg transition-all duration-300 group-hover:scale-110">
    <div className="flex h-full w-full items-center justify-center rounded-full text-4xl text-red-600">
      {item.icon}
    </div>
  </div>

  {/* Step */}

  <div className="mt-6">
    <span className="rounded-full bg-blue-600 px-4 py-1 text-sm font-semibold text-white">
      Step {index + 1}
    </span>
  </div>

  {/* Title */}

  <h3 className="mt-6 min-h-[64px] text-2xl font-bold text-gray-900">
    {item.title}
  </h3>

  {/* Description */}

  <p className="mt-4 flex-grow leading-7 text-gray-600">
    {item.description}
  </p>

</div>

                            {/* Arrow */}

                            {index !== process.length - 1 && (
                                <>
                                    {/* Desktop */}
                                    <div className="hidden self-center text-5xl text-blue-600 lg:block animate-pulse">
                                        <ArrowRightOutlined />
                                    </div>

                                    {/* Mobile */}
                                    <div className="animate-bounce self-center text-4xl text-blue-600 lg:hidden">
                                        <ArrowDownOutlined />
                                    </div>
                                </>
                            )}
                        </React.Fragment>
                    ))}

                </div>

                {/* CTA */}

                <div className="mt-24 overflow-hidden rounded-3xl bg-gradient-to-r from-[#0B3FA8] via-[#1D4ED8] to-[#2563EB] p-12 text-center text-white shadow-2xl">

                    <CheckCircleFilled className="text-6xl text-yellow-300" />

                    <h2 className="mt-6 text-4xl font-bold md:text-5xl">
                        Build Your Dream Home with
                        <span className="text-yellow-300"> Star Promoters</span>
                    </h2>

                    <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/90">
                        Looking for DTCP approved plots in Trichy, farm land near Trichy,
                        house construction, villa construction or property development?
                        Contact Star Promoters for trusted real estate and construction
                        solutions with quality, transparency and timely delivery.
                    </p>

                    <a
                        href="tel:+9188248659355"
                        className="mt-10 inline-flex items-center gap-3 rounded-full bg-red-600 px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-red-700"
                    >
                        Get Free Consultation
                        <ArrowRightOutlined />
                    </a>

                </div>

            </div>
        </section>
    );
};

export default ConstructionProcess;