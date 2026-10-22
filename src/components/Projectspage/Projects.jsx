// src/pages/projectpage.jsx

import React, { useState } from "react";

import  projects from "../../data/Project";

import ProjectCard from "./ProjectCard";
import { Helmet } from "react-helmet-async";

const filters = ["All", "Plots", "Farm Land"];

function Projects() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? projects
      : projects.filter((item) => item.type === active);

  return (
    <>
    <Helmet> {/* Primary SEO */} <title> Our Projects in Trichy | Residential & Real Estate Projects | Star Promoters </title> <meta name="description" content="Explore Star Promoters' residential plots, construction and real estate projects in Trichy and surrounding areas, offering quality, trust and transparent property solutions." /> <meta name="keywords" content="real estate projects in Trichy, residential projects Trichy, plots in Trichy, DTCP approved plots Trichy, RERA approved plots Trichy, property projects Trichy, Star Promoters projects" /> <meta name="robots" content="index, follow" /> <meta name="author" content="Star Promoters" /> {/* Canonical */} <link rel="canonical" href="https://starpromoterstrichy.com/projectpage" /> {/* Open Graph */} <meta property="og:title" content="Our Projects in Trichy | Residential & Real Estate Projects | Star Promoters" /> <meta property="og:description" content="Explore Star Promoters' residential plots, construction and real estate projects in Trichy and surrounding areas, offering quality, trust and transparent property solutions." /> <meta property="og:type" content="website" /> <meta property="og:url" content="https://starpromoterstrichy.com/projectpage" /> <meta property="og:site_name" content="Star Promoters" /> <meta property="og:image" content="https://starpromoterstrichy.com/og-image.jpg" /> {/* Twitter / X */} <meta name="twitter:card" content="summary_large_image" /> <meta name="twitter:title" content="Our Projects in Trichy | Residential & Real Estate Projects | Star Promoters" /> <meta name="twitter:description" content="Explore Star Promoters' residential plots, construction and real estate projects in Trichy and surrounding areas, offering quality, trust and transparent property solutions." /> <meta name="twitter:image" content="https://starpromoterstrichy.com/og-image.jpg" /> </Helmet>
      <section className="bg-gradient-to-b from-slate-50 to-white py-20">

        <div className="mx-auto max-w-7xl px-6">

          <div className="mx-auto mb-12 max-w-3xl text-center">

            <span className="rounded-full bg-red-50 px-5 py-2 text-red-600 font-semibold">
              Available Projects
            </span>

            <h2 className="mt-5 text-5xl font-bold">

              Explore Our

              <span className="text-red-600">
                {" "}
                Latest Projects
              </span>

            </h2>

            <p className="mt-5 text-lg text-gray-600">

              Browse premium DTCP & RERA approved plots, villas and layouts by
              Star Promoters.

            </p>

          </div>

          <div className="mb-12 flex justify-center gap-4">

            {filters.map((item) => (
              <button
                key={item}
                onClick={() => setActive(item)}
                className={`rounded-full px-6 py-3 font-semibold transition ${
                  active === item
                    ? "bg-red-600 text-white"
                    : "border bg-white"
                }`}
              >
                {item}
              </button>
            ))}

          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            {filtered.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
              />
            ))}

          </div>

        </div>

      </section>
    </>
  );
}

export default Projects;