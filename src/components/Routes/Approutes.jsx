import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { PhoneFilled, WhatsAppOutlined } from "@ant-design/icons";

import Homepage from "../Home/Homepage";
import About from "../Aboutpage/About";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Servicepage from "../Servicepage/Servicepage";
import Projects from "../Projectspage/Projects";
import Contact from "../contactpage/contact";
import Blog from "../Blogpage/Blog";
import BlogDetails from "../Blogpage/BlogDetails";
import ProjectDetails from "../Projectspage/ProjectDetails";


function Approutes() {

    const { pathname } = useLocation();


    useEffect(() => {

        window.scrollTo({
            top: 0,
            behavior: "instant",
        });

    }, [pathname]);



    return (

        <>

            <Navbar />

            <Routes>

                <Route path="/" element={<Homepage />} />

                <Route path="/about" element={<About />} />

                <Route path="/serivcepage" element={<Servicepage />} />

                <Route path="/projectpage" element={<Projects />} />

                <Route path="/contactpage" element={<Contact />} />

                <Route path="/blog" element={<Blog />} />

                <Route path="/blog/:id" element={<BlogDetails />} />

                <Route
                    path="/projectpage/:slug"
                    element={<ProjectDetails />}
                />

            </Routes>


            <Footer />


            <div className="fixed bottom-5 right-5 z-9999 flex flex-col gap-4">


                {/* WhatsApp */}

                <a
                    href="https://wa.me/918825767785"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative flex h-14 w-14 animate-float items-center justify-center rounded-full bg-[#25D366] text-3xl text-white shadow-xl transition hover:scale-110"
                >

                    <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping"></span>

                    <WhatsAppOutlined className="relative z-10 animate-heartbeat" />

                </a>



                {/* Call */}

                <a
                    href="tel:+918825767785"
                    className="relative flex h-14 w-14 animate-float items-center justify-center rounded-full bg-[#0F4CC9] text-2xl text-white shadow-xl transition hover:scale-110"
                    aria-label="Call Star Promoters"
                >

                    <span className="absolute inset-0 rounded-full bg-[#0F4CC9] opacity-40 animate-ping"></span>

                    <PhoneFilled className="relative z-10 animate-heartbeat" />

                </a>


            </div>


        </>

    );
}


export default Approutes;