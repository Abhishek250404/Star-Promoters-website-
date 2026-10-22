import React from "react";
import {
  EnvironmentOutlined,
  PhoneOutlined,
  MailOutlined,
  FacebookFilled,
  InstagramOutlined,
  LinkedinFilled,
  ArrowUpOutlined,
} from "@ant-design/icons";

import logo from "../../assets/logo.png";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0F172A] text-white">

      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Company */}

          <div>

            <img
              src={logo}
              alt="Star Promoters"
              className="h-24 w-auto rounded-lg bg-white p-2"
            />

            <p className="mt-6 leading-8 text-gray-300">
              Star Promoters is one of the trusted construction and
              real estate companies in Trichy offering DTCP approved
              plots, residential construction and commercial projects.
            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="mb-6 text-xl font-bold">
              Quick Links
            </h3>

            <ul className="space-y-4 text-gray-300">

              <li>
                <a href="/">Home</a>
              </li>

              <li>
                <a href="/about">About Us</a>
              </li>
              <li>
                <a href="/serivcepage">Our Service</a>
              </li>

              <li>
                <a href="/projectpage">Our Projects</a>
              </li>

              <li>
                <a href="/blog">Blog</a>
              </li>

              <li>
                <a href="contactpage">Contact Us</a>
              </li>

            </ul>

          </div>

          {/* Services */}

          <div>

            <h3 className="mb-6 text-xl font-bold">
              Services
            </h3>

            <ul className="space-y-4 text-gray-300">

              <li>Residential Construction</li>
              <li>Commercial Construction</li>
              <li>DTCP Approved Plots</li>
              <li>House Construction</li>
              <li>Real Estate Consulting</li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="mb-6 text-xl font-bold">
              Contact Us
            </h3>

            <div className="space-y-5 text-gray-300">

              <div className="flex gap-3">
                <EnvironmentOutlined className="mt-1 text-red-500" />
                <p>
                  Mahalakshmi Nagar Kamaraj Complex,
                  EVR Road, K K Nagar,
                  Trichy - 620021.
                </p>
              </div>

              <a
                href="tel:+9188248659355"
                className="flex items-center gap-3 hover:text-white"
              >
                <PhoneOutlined className="text-red-500" />
                +91 88248 659355
              </a>

              <a
                href="mailto:starpromoterstrichy@gmail.com"
                className="flex items-center gap-3 hover:text-white"
              >
                <MailOutlined className="text-red-500" />
                starpromoterstrichy@gmail.com
              </a>

            </div>

            <div className="mt-8 flex gap-4">

              <a
                href="#"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-red-600 transition hover:bg-red-500"
              >
                <FacebookFilled />
              </a>

              <a
                href="#"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-600 transition hover:bg-blue-500"
              >
                <InstagramOutlined />
              </a>

              <a
                href="#"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-sky-600 transition hover:bg-sky-500"
              >
                <LinkedinFilled />
              </a>

            </div>

          </div>

        </div>

      </div>

      {/* Bottom */}
<div className="border-t border-white/10">
  <div className="mx-auto flex max-w-7xl justify-center px-6 py-6">
    <div className="flex flex-wrap items-center justify-center gap-2 text-center">
      <p className="text-sm text-gray-400">
        © {year} Star Promoters. All Rights Reserved.
      </p>



      <span className="text-gray-500">|</span>

      <p className="text-sm text-gray-500">
        Designed &amp; Developed by{" "}
        <a
          href="https://nextaptive.com"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-orange-400 transition hover:text-orange-500"
        >
          Nextaptive Technologies
        </a>
      </p>
    </div>
  </div>
</div>

    </footer>
  );
};

export default Footer;