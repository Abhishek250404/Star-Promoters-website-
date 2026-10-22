import React from "react";
import {
  EnvironmentOutlined,
  ArrowRightOutlined,
  CheckCircleFilled,
} from "@ant-design/icons";

import project1 from "../../assets/pro1.png";
import project2 from "../../assets/pro2.png";
import project3 from "../../assets/pro3.png";
import { Link } from "react-router-dom";

const projects = [
  {
    image: project1,
    title: "Sakthi Nagar Residential Plots",
    location: "Srirangam Taluk, Trichy",
    type: "DTCP Approved Residential Plots",
    price: "Starting From ₹399 / Sq.Ft",
    status: "Available",
  },
  {
    image: project2,
    title: "Premium Farm Land",
    location: "Aavor Village, Near Panjappur, Trichy",
    type: "Agricultural Farm Land",
    price: "₹70,000 Per Cent",
    status: "Available",
  },
  {
    image: project3,
    title: "Rahath Avenue",
    location: "Kaththalur, Viralimalai, Pudukkottai",
    type: "DTCP & RERA Approved Premium Plots",
    price: "₹650 - ₹799 / Sq.Ft",
    status: "New Launch",
  },
];

const FeaturedProjects = () => {
  return (
    <section className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mx-auto mb-16 max-w-3xl text-center">

          <span className="rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-600">
            FEATURED PROJECTS
          </span>

          <h2 className="mt-5 text-4xl font-bold text-gray-900">
            Featured Real Estate Projects
            <span className="text-red-600"> in Trichy & Pudukkottai</span>
          </h2>
          <p className="mt-5 text-lg leading-8 text-gray-600">
            Explore DTCP approved plots in Trichy, DTCP & RERA approved premium plots in Pudukkottai and agricultural farm land near Trichy. Star Promoters offers secure real estate investments with clear legal documentation and excellent future appreciation.
          </p>
        </div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {projects.map((project, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-3xl bg-white shadow-lg transition duration-300 hover:-translate-y-3 hover:shadow-2xl"
            >

              {/* Image */}

              <div className="relative overflow-hidden">

                <img
                  src={project.image}
                  alt={project.title}
                  alt={`${project.title} - ${project.type} by Star Promoters`}
                  className="h-72 w-full object-cover transition duration-500 group-hover:scale-110"
                />

                <span className="absolute left-5 top-5 rounded-full bg-red-600 px-4 py-2 text-sm font-semibold text-white">
                  {project.status}
                </span>

              </div>

              {/* Content */}

              <div className="p-7">

                <h3 className="text-2xl font-bold text-gray-900">
                  {project.title}
                </h3>

                <div className="mt-4 flex items-center gap-2 text-gray-600">
                  <EnvironmentOutlined className="text-red-600" />
                  {project.location}
                </div>

                <div className="mt-4 flex items-center gap-2">
                  <CheckCircleFilled className="text-green-500" />
                  <span className="font-medium">
                    {project.type}
                  </span>
                </div>

                <div className="mt-5 text-xl font-bold text-blue-700">
                  {project.price}
                </div>
                <Link
                  to="/projectpage"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-red-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
                >
                  View Project
                  <ArrowRightOutlined />
                </Link>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default FeaturedProjects;