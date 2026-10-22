import React from "react";
import { Helmet } from "react-helmet-async";

import Navbar from "../Navbar/Navbar";
import Hero from "./Hero";
import Services from "./Services";
import WhyChooseUs from "./WhyChooseUs";
import FeaturedProjects from "./FeaturedProjects";
import ConstructionProcess from "./ConstructionProcess";
import Testimonials from "./Testimonials";
import CTA from "./CTA";
import Footer from "../Footer/Footer";

function Homepage() {
    return (
        <>
            <Helmet>
                {/* Primary SEO */}
                <title>
                    Star Promoters | Best Builders & Real Estate Company in Trichy
                </title>

                <meta
                    name="description"
                    content="Star Promoters is a trusted construction and real estate company in Trichy offering house construction, building projects, DTCP plots and property solutions."
                />

                <meta
                    name="keywords"
                    content="builders in Trichy, construction company in Trichy, real estate company in Trichy, building contractors in Trichy, house construction in Trichy, real estate builders Trichy, DTCP approved plots Trichy, property developers Trichy"
                />

                <meta name="robots" content="index, follow" />

                <meta
                    name="author"
                    content="Star Promoters"
                />

                {/* Canonical URL */}
                <link
                    rel="canonical"
                    href="https://starpromoterstrichy.com/"
                />

                {/* Open Graph */}
                <meta
                    property="og:title"
                    content="Star Promoters | Best Builders & Real Estate Company in Trichy"
                />

                <meta
                    property="og:description"
                    content="Star Promoters is a trusted construction and real estate company in Trichy offering house construction, building projects, DTCP plots and property solutions."
                />

                <meta
                    property="og:type"
                    content="website"
                />

                <meta
                    property="og:url"
                    content="https://starpromoterstrichy.com/"
                />

                <meta
                    property="og:site_name"
                    content="Star Promoters"
                />

                <meta
                    property="og:image"
                    content="https://starpromoterstrichy.com/og-image.jpg"
                />

                {/* Twitter / X */}
                <meta
                    name="twitter:card"
                    content="summary_large_image"
                />

                <meta
                    name="twitter:title"
                    content="Star Promoters | Best Builders & Real Estate Company in Trichy"
                />

                <meta
                    name="twitter:description"
                    content="Trusted construction and real estate company in Trichy offering house construction, building projects, DTCP plots and property solutions."
                />

                <meta
                    name="twitter:image"
                    content="https://starpromoterstrichy.com/og-image.jpg"
                />
            </Helmet>

            <Hero />
            <Services />
            <WhyChooseUs />
            <FeaturedProjects />
            <ConstructionProcess />
            <Testimonials />
            <CTA />
        </>
    );
}

export default Homepage;
