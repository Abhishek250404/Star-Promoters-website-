// src/components/ProjectCard.jsx

import React from "react";
import { Link } from "react-router-dom";

import {
  EnvironmentOutlined,
  SafetyCertificateFilled,
  ArrowRightOutlined,
} from "@ant-design/icons";

function ProjectCard({ project }) {
  return (
    <div className="group overflow-hidden rounded-3xl bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">

      <div className="relative h-60 overflow-hidden">

        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

        <span className="absolute left-5 top-5 rounded-full bg-red-600 px-4 py-2 text-xs font-bold text-white">
          {project.badge}
        </span>

        <span className="absolute right-5 top-5 rounded-full bg-white px-4 py-2 text-xs font-semibold">
          {project.type}
        </span>

      </div>

      <div className="p-7">

        <h3 className="text-2xl font-bold">
          {project.title}
        </h3>

        <div className="mt-3 flex items-center gap-2 text-gray-500">

          <EnvironmentOutlined />

          {project.location}

        </div>

        <div className="mt-5 space-y-3">

          {project.features.slice(0, 4).map((item) => (
            <div key={item} className="flex items-center gap-3">

              <SafetyCertificateFilled className="text-green-600" />

              <span>{item}</span>

            </div>
          ))}

        </div>

        <div className="mt-6 border-t pt-5">

          <p className="text-xs uppercase tracking-widest text-gray-500">
            Starting Price
          </p>

          <h3 className="mt-2 text-2xl font-bold text-red-600">
            {project.price}
          </h3>

        </div>

        <Link
          to={`/projectpage/${project.slug}`}
          className="mt-6 flex items-center justify-center gap-2 rounded-xl bg-red-600 py-3 font-semibold text-white hover:bg-red-700"
        >
          View Project

          <ArrowRightOutlined />

        </Link>

      </div>
    </div>
  );
}

export default ProjectCard;