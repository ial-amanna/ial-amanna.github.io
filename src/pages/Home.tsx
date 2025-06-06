import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import TransitionWrapper from "../components/TransitionWrapper";
import BackgroundCircles from "../components/BackgroundCircles";
import ScrollFadeIn from "../components/ScrollFadeIn";
import StatsSection from "../components/StatsSection";
import ProfilePicture from "../components/ProfilePicture";
import { FaGraduationCap, FaBriefcase } from 'react-icons/fa';
import React from 'react';

// const colors = {
//   background: "bg-gradient-to-br from-violet-100 via-purple-100 to-fuchsia-100",
//   overlay: "bg-white/20",
//   heading: "text-gray-900",
//   subheading: "text-gray-700",
//   accent: "bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 bg-clip-text text-transparent",
//   secondary: "bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent",
// };


const Home = () => {
  return (
    <AnimatePresence mode="wait">
      <BackgroundCircles />
      <TransitionWrapper>
        <div className="min-h-screen px-8 flex flex-col pt-[96px]">
          {/* Hero Section */}
          <section className="container mx-auto flex flex-col md:flex-row items-center gap-16 py-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl space-y-4 md:w-1/2"
            >
              <h2 className="text-3xl md:text-4xl font-medium bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 bg-clip-text text-transparent">Hi, I'm Annamalai Lakshmanan</h2>
              <h1 className="text-2xl md:text-2xl font-medium bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
                Computer Vision + LLMs + ML/DL + Robotics
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl">
                Innovator at heart. Finished my Masters at ETH Zürich, and previously worked at Toyota Technological Institute.
              </p>
              <div className="flex gap-6 pt-4">
                <Link
                  to="/projects"
                  className="text-sm tracking-wide border-b border-black pb-1 hover:opacity-70 transition-opacity"
                >
                  View Projects
                </Link>
                <a 
                  href="https://scholar.google.co.in/citations?user=cwl2lDIAAAAJ&hl=en"
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-sm tracking-wide border-b border-black pb-1 hover:opacity-70 transition-opacity"
                >
                  View Publications
                </a>
              </div>
            </motion.div>

            {/* Profile Picture */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="md:w-1/2 flex justify-center"
            >
              <div className="max-w-sm">
                <ProfilePicture imageUrl="/profile.jpg" />
              </div>
            </motion.div>
          </section>

          {/* Education and Experience Sections */}
          <section className="container mx-auto pt-4 pb-8 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Education Column */}
              <div>
                <h2 className="text-xl md:text-2xl font-medium mb-8 flex items-center gap-3 bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent"><FaGraduationCap className="text-purple-600" /> Education</h2>
                <div className="space-y-8">
                  {/* ETH Zurich */}
                  <div className="bg-gradient-to-br from-purple-50 to-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                    <div className="flex items-start">
                      <img 
                        src="/images/logos/ethz.png" 
                        alt="ETH Zürich" 
                        className="w-16 h-16 object-contain mr-4"
                      />
                      <div>
                        <h3 className="text-base font-semibold text-gray-800">MSc - Electrical Engineering and Information Technology</h3>
                        <p className="text-purple-700 italic mb-1 text-sm">ETH Zürich, Switzerland | 2021 - 2024</p>
                        <p className="text-gray-600 text-sm">Machine Learning, Computer Vision, NLP</p>
                      </div>
                    </div>
                  </div>
                  {/* PSG College */}
                  <div className="bg-gradient-to-br from-purple-50 to-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                    <div className="flex items-start">
                      <img 
                        src="/images/logos/psg.png" 
                        alt="PSG College of Technology" 
                        className="w-16 h-16 object-contain mr-4"
                      />
                      <div>
                        <h3 className="text-base font-semibold text-gray-800">BE - Robotics and Automation</h3>
                        <p className="text-purple-700 italic mb-1 text-sm">PSG College of Technology, India | 2016 - 2020</p>
                        <p className="text-gray-600 text-sm">Robotics, Control Systems, Embedded Systems, IoT</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Experience Column */}
              <div>
                <h2 className="text-xl md:text-2xl font-medium mb-8 flex items-center gap-3 bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent"><FaBriefcase className="text-purple-600" /> Experience</h2>
                <div className="space-y-8">
                  {/* IKIM */}
                  <div className="bg-gradient-to-br from-purple-50 to-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                    <div className="flex items-start">
                      <img 
                        src="/images/logos/ikim.png" 
                        alt="IKIM" 
                        className="w-16 h-16 object-contain mr-4"
                      />
                      <div>
                        <h4 className="text-base font-semibold text-gray-800">Intern</h4>
                        <p className="text-purple-700 italic mb-1 text-sm">IKIM, Germany | Jan 2025 - Apr 2025</p>
                        <p className="text-gray-600 text-sm">Worked on Breast Cancer Tumor Subtyping using Graph Neural Networks and Vision Transformers.</p>
                      </div>
                    </div>
                  </div>

                  {/* Hitachi Energy */}
                  <div className="bg-gradient-to-br from-purple-50 to-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                    <div className="flex items-start">
                      <img 
                        src="/images/logos/hitachi.jpg" 
                        alt="Hitachi Energy" 
                        className="w-16 h-16 object-contain mr-4"
                      />
                      <div>
                        <h4 className="text-base font-semibold text-gray-800">Intern</h4>
                        <p className="text-purple-700 italic mb-1 text-sm">Hitachi Energy, Switzerland | Apr 2023 - Sept 2023</p>
                        <p className="text-gray-600 text-sm">Researched Physics-Informed Neural Networks (PINNs) to determine Power Transformer Efficiency.</p>
                      </div>
                    </div>
                  </div>

                  {/* TTI */}
                  <div className="bg-gradient-to-br from-purple-50 to-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                    <div className="flex items-start">
                      <img 
                        src="/images/logos/tti.jpg" 
                        alt="TTI" 
                        className="w-16 h-16 object-contain mr-4"
                      />
                      <div>
                        <h4 className="text-base font-semibold text-gray-800">Researcher</h4>
                        <p className="text-purple-700 italic mb-1 text-sm">Toyota Technological Institute (TTI), Nagoya, Japan | June 2020 - March 2021</p>
                        <p className="text-gray-600 text-sm">Worked on the Pedestrian Future Pose Estimation.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
        </div>
      </TransitionWrapper>
    </AnimatePresence>
  );
};

export default Home;