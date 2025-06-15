import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import TransitionWrapper from "../components/TransitionWrapper";
import BackgroundCircles from "../components/BackgroundCircles";
import ScrollFadeIn from "../components/ScrollFadeIn";
import ProfilePicture from "../components/ProfilePicture";
import { FaGraduationCap, FaBriefcase } from 'react-icons/fa';

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
          {/* Hero Section */}          <section className="container mx-auto flex flex-col md:flex-row items-center gap-12 py-14">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl space-y-3 md:w-1/2"
            >
              <h2 className="text-2xl md:text-3xl font-medium bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 bg-clip-text text-transparent">Hi, I'm Annamalai Lakshmanan</h2>
              <h1 className="text-xl md:text-2xl font-medium bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
                Computer Vision + LLMs + Deep Learning
              </h1>
              <p className="text-base text-gray-600 max-w-2xl">
                Innovator at heart. Finished my Masters at ETH Zürich, and previously worked at Toyota Technological Institute, and Hitachi Energy.
              </p>              <div className="flex gap-6 pt-4">
                <Link
                  to="/projects"
                  className="text-sm tracking-wide border-b border-purple-500 pb-1 hover:bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 hover:bg-clip-text hover:text-transparent transition-all"
                >
                  View Projects
                </Link>
                <a 
                  href="https://scholar.google.co.in/citations?user=cwl2lDIAAAAJ&hl=en"
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-sm tracking-wide border-b border-purple-500 pb-1 hover:bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 hover:bg-clip-text hover:text-transparent transition-all"
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
            </motion.div>          </section>          {/* About Me Section - Modern Design */}
          <section className="w-full bg-white py-16">
            <ScrollFadeIn>
              <div className="max-w-5xl mx-auto px-6">
                <div className="flex flex-col md:flex-row gap-8">
                  {/* Left column - title and subtitle */}
                  <div className="md:w-1/3">
                    <h2 className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 bg-clip-text text-transparent mb-3">About Me</h2>
                    <h3 className="text-xl font-medium mb-4">
                      From <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 bg-clip-text text-transparent">curiosity</span> to <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 bg-clip-text text-transparent">code</span>
                    </h3>
                  </div>
                  
                  {/* Right column - content */}                  <div className="md:w-2/3 space-y-4 text-gray-600 leading-relaxed">
                    <p className="text-base">
                      I grew up fascinated by technology and its potential to solve complex problems. This passion led me to pursue a path in <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 bg-clip-text text-transparent font-medium">AI and computer vision</span>, where I discovered the thrill of creating intelligent systems.
                    </p>
                    <p className="text-base">
                      I recently completed my Master's in Electrical Engineering and Information Technology at <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 bg-clip-text text-transparent font-medium">ETH Zürich</span>, where I focused on advanced machine learning techniques and computer vision applications.
                    </p>
                    <p className="text-base">
                      Whether it's developing algorithms for medical imaging, optimizing systems for robotics, or exploring the latest in <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 bg-clip-text text-transparent font-medium">LLMs</span>, I've always been driven by the challenge of making technology smarter, faster, and more accessible.
                    </p>
                    <p className="text-base">
                      My work combines <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 bg-clip-text text-transparent font-medium">technical expertise</span> with a deep understanding of real-world applications, particularly in the fields of healthcare, autonomous systems, and edge AI.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollFadeIn>
          </section>{/* Skills Section - Tag Cloud */}
          <section className="w-full bg-white py-16">            <ScrollFadeIn delay={0.2}>
              <div className="max-w-5xl mx-auto px-6">
                <h2 className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 bg-clip-text text-transparent text-center">Skills</h2>
                  <div className="flex flex-wrap justify-center gap-4 mt-8">
                  {/* Programming Languages */}
                  <div className="rounded-full px-4 py-2 bg-purple-100 text-purple-700 text-sm font-medium hover:shadow-md transition-transform hover:scale-105">
                    Python
                  </div>
                  <div className="rounded-full px-4 py-2 bg-gray-100 text-gray-700 text-sm font-medium hover:shadow-md transition-transform hover:scale-105">
                    C++
                  </div>
                  <div className="rounded-full px-4 py-2 bg-gray-100 text-gray-700 text-sm font-medium hover:shadow-md transition-transform hover:scale-105">
                    SQL
                  </div>
                  <div className="rounded-full px-4 py-2 bg-gray-100 text-gray-700 text-sm font-medium hover:shadow-md transition-transform hover:scale-105">
                    MATLAB
                  </div>
                  <div className="rounded-full px-4 py-2 bg-gray-100 text-gray-700 text-sm font-medium hover:shadow-md transition-transform hover:scale-105">
                    TypeScript
                  </div>
                  
                  {/* Frameworks & Libraries */}
                  <div className="rounded-full px-4 py-2 bg-purple-100 text-purple-700 text-sm font-medium hover:shadow-md transition-transform hover:scale-105">
                    PyTorch
                  </div>
                  <div className="rounded-full px-4 py-2 bg-purple-100 text-purple-700 text-sm font-medium hover:shadow-md transition-transform hover:scale-105">
                    TensorFlow
                  </div>
                  <div className="rounded-full px-4 py-2 bg-gray-100 text-gray-700 text-sm font-medium hover:shadow-md transition-transform hover:scale-105">
                    Scikit-learn
                  </div>
                  <div className="rounded-full px-4 py-2 bg-gray-100 text-gray-700 text-sm font-medium hover:shadow-md transition-transform hover:scale-105">
                    Pandas
                  </div>
                  <div className="rounded-full px-4 py-2 bg-gray-100 text-gray-700 text-sm font-medium hover:shadow-md transition-transform hover:scale-105">
                    ROS
                  </div>
                  <div className="rounded-full px-4 py-2 bg-gray-100 text-gray-700 text-sm font-medium hover:shadow-md transition-transform hover:scale-105">
                    React
                  </div>
                  
                  {/* Domains & Areas */}
                  <div className="rounded-full px-4 py-2 bg-purple-100 text-purple-700 text-sm font-medium hover:shadow-md transition-transform hover:scale-105">
                    Computer Vision
                  </div>
                  <div className="rounded-full px-4 py-2 bg-purple-100 text-purple-700 text-sm font-medium hover:shadow-md transition-transform hover:scale-105">
                    Deep Learning
                  </div>
                  <div className="rounded-full px-4 py-2 bg-purple-100 text-purple-700 text-sm font-medium hover:shadow-md transition-transform hover:scale-105">
                    Machine Learning
                  </div>
                  <div className="rounded-full px-4 py-2 bg-purple-100 text-purple-700 text-sm font-medium hover:shadow-md transition-transform hover:scale-105">
                    LLMs
                  </div>
                  <div className="rounded-full px-4 py-2 bg-gray-100 text-gray-700 text-sm font-medium hover:shadow-md transition-transform hover:scale-105">
                    Robotics
                  </div>
                  
                  {/* Tools & Software */}
                  <div className="rounded-full px-4 py-2 bg-gray-100 text-gray-700 text-sm font-medium hover:shadow-md transition-transform hover:scale-105">
                    Git
                  </div>
                  <div className="rounded-full px-4 py-2 bg-gray-100 text-gray-700 text-sm font-medium hover:shadow-md transition-transform hover:scale-105">
                    LabVIEW
                  </div>
                </div>
              </div>
            </ScrollFadeIn>
          </section>          {/* Education and Experience Sections - Modern Timeline Layout */}
          <section className="w-full bg-white py-16">
            <ScrollFadeIn delay={0.3}>
              <div className="max-w-5xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
                  {/* Education Column */}
                  <div>
                    <h2 className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 bg-clip-text text-transparent mb-6 flex items-center gap-3">
                      <FaGraduationCap className="text-purple-600 text-xl" /> Education
                    </h2>                    <div className="space-y-6">
                      {/* ETH Zurich */}
                      <div className="relative pl-8">
                        {/* Timeline dot */}
                        <div className="absolute left-0 top-2 h-3 w-3 rounded-full bg-purple-500 shadow-md z-10 flex items-center justify-center">
                          <div className="h-1.5 w-1.5 rounded-full bg-white"></div>
                        </div>
                        {/* Timeline line */}
                        <div className="absolute left-2 top-6 h-full w-0.5 bg-gradient-to-b from-purple-500 to-purple-200"></div>
                        {/* Card */}
                        <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 hover:shadow-md transition-all duration-300 hover:border-purple-200">                          <h3 className="text-lg font-semibold bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 bg-clip-text text-transparent">MSc - Electrical Engineering and Information Technology</h3>
                          <div className="flex items-center gap-2 mt-3 mb-3">
                            <div className="bg-gray-50 p-1 rounded-md flex items-center justify-center">
                              <img 
                                src={import.meta.env.BASE_URL + "images/logos/ethz.png"} 
                                alt="ETH Zürich" 
                                className="w-5 h-5 object-contain"
                              />
                            </div>
                            <span className="text-sm bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 bg-clip-text text-transparent font-medium">ETH Zürich, Switzerland</span>
                            <span className="text-xs text-gray-400">|</span>
                            <span className="text-sm text-purple-600 font-medium">2021 - 2024</span>
                          </div>
                          <p className="text-sm text-gray-700 mt-3 leading-relaxed">
                            Specialized in Machine Learning, Computer Vision, and Natural Language Processing. Focused on advanced deep learning techniques and their applications in various domains.
                          </p>
                        </div>
                      </div>
                        {/* PSG College */}
                      <div className="relative pl-8">
                        {/* Timeline dot */}
                        <div className="absolute left-0 top-2 h-3 w-3 rounded-full bg-purple-500 shadow-md z-10 flex items-center justify-center">
                          <div className="h-1.5 w-1.5 rounded-full bg-white"></div>
                        </div>
                        {/* Card */}
                        <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 hover:shadow-md transition-all duration-300 hover:border-purple-200">                          <h3 className="text-lg font-semibold bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 bg-clip-text text-transparent">BE - Robotics and Automation</h3>
                          <div className="flex items-center gap-2 mt-3 mb-3">
                            <div className="bg-gray-50 p-1 rounded-md flex items-center justify-center">
                              <img 
                                src={import.meta.env.BASE_URL + "images/logos/psg.png"} 
                                alt="PSG College of Technology" 
                                className="w-5 h-5 object-contain"
                              />
                            </div>
                            <span className="text-sm bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 bg-clip-text text-transparent font-medium">PSG College of Technology, India</span>
                            <span className="text-xs text-gray-400">|</span>
                            <span className="text-sm text-purple-600 font-medium">2016 - 2020</span>
                          </div>
                          <p className="text-sm text-gray-700 mt-3 leading-relaxed">
                            Studied Robotics, Control Systems, Embedded Systems, and IoT. Built a strong foundation in automation technologies and hardware integration for robotics applications.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>                  {/* Experience Column */}
                  <div>
                    <h2 className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 bg-clip-text text-transparent mb-6 flex items-center gap-3">
                      <FaBriefcase className="text-purple-600 text-xl" /> Experience
                    </h2>                    <div className="space-y-6">
                      {/* IKIM */}
                      <div className="relative pl-8">
                        {/* Timeline dot */}
                        <div className="absolute left-0 top-2 h-3 w-3 rounded-full bg-purple-500 shadow-md z-10 flex items-center justify-center">
                          <div className="h-1.5 w-1.5 rounded-full bg-white"></div>
                        </div>
                        {/* Timeline line */}
                        <div className="absolute left-2 top-6 h-full w-0.5 bg-gradient-to-b from-purple-500 to-purple-200"></div>
                        {/* Card */}
                        <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 hover:shadow-md transition-all duration-300 hover:border-purple-200">                          <h3 className="text-lg font-semibold bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 bg-clip-text text-transparent">Research Intern</h3>
                          <div className="flex items-center gap-2 mt-3 mb-3">
                            <div className="bg-gray-50 p-1 rounded-md flex items-center justify-center">
                              <img 
                                src={import.meta.env.BASE_URL + "images/logos/ikim.png"} 
                                alt="IKIM" 
                                className="w-5 h-5 object-contain"
                              />
                            </div>
                            <span className="text-sm bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 bg-clip-text text-transparent font-medium">IKIM, Germany</span>
                            <span className="text-xs text-gray-400">|</span>
                            <span className="text-sm text-purple-600 font-medium">Jan 2025 - Apr 2025</span>
                          </div>
                          <p className="text-sm text-gray-700 mt-3 leading-relaxed">
                            Worked on Breast Cancer Tumor Subtyping using Graph Neural Networks and Vision Transformers. Applied deep learning techniques to medical image analysis for improved diagnostics.
                          </p>
                        </div>
                      </div>                      {/* Hitachi Energy */}
                      <div className="relative pl-8">
                        {/* Timeline dot */}
                        <div className="absolute left-0 top-2 h-3 w-3 rounded-full bg-purple-500 shadow-md z-10 flex items-center justify-center">
                          <div className="h-1.5 w-1.5 rounded-full bg-white"></div>
                        </div>
                        {/* Timeline line */}
                        <div className="absolute left-2 top-6 h-full w-0.5 bg-gradient-to-b from-purple-500 to-purple-200"></div>
                        {/* Card */}
                        <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 hover:shadow-md transition-all duration-300 hover:border-purple-200">                          <h3 className="text-lg font-semibold bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 bg-clip-text text-transparent">Research Intern</h3>
                          <div className="flex items-center gap-2 mt-3 mb-3">
                            <div className="bg-gray-50 p-1 rounded-md flex items-center justify-center">
                              <img 
                                src={import.meta.env.BASE_URL + "images/logos/hitachi.jpg"} 
                                alt="Hitachi Energy" 
                                className="w-5 h-5 object-contain"
                              />
                            </div>
                            <span className="text-sm bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 bg-clip-text text-transparent font-medium">Hitachi Energy, Switzerland</span>
                            <span className="text-xs text-gray-400">|</span>
                            <span className="text-sm text-purple-600 font-medium">Apr 2023 - Sept 2023</span>
                          </div>
                          <p className="text-sm text-gray-700 mt-3 leading-relaxed">
                            Researched Physics-Informed Neural Networks (PINNs) to determine Power Transformer Efficiency. Developed models integrating physics principles with deep learning for optimizing energy systems.
                          </p>
                        </div>
                      </div>                      {/* TTI */}
                      <div className="relative pl-8">
                        {/* Timeline dot */}
                        <div className="absolute left-0 top-2 h-3 w-3 rounded-full bg-purple-500 shadow-md z-10 flex items-center justify-center">
                          <div className="h-1.5 w-1.5 rounded-full bg-white"></div>
                        </div>
                        {/* Card */}
                        <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 hover:shadow-md transition-all duration-300 hover:border-purple-200">                          <h3 className="text-lg font-semibold bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 bg-clip-text text-transparent">Researcher</h3>
                          <div className="flex items-center gap-2 mt-3 mb-3">
                            <div className="bg-gray-50 p-1 rounded-md flex items-center justify-center">
                              <img 
                                src={import.meta.env.BASE_URL + "images/logos/tti.jpg"} 
                                alt="TTI" 
                                className="w-5 h-5 object-contain"
                              />
                            </div>
                            <span className="text-sm bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 bg-clip-text text-transparent font-medium">Toyota Technological Institure, Japan</span>
                            <span className="text-xs text-gray-400">|</span>
                            <span className="text-sm text-purple-600 font-medium">Jun 2020 - Mar 2021</span>
                          </div>
                          <p className="text-sm text-gray-700 mt-3 leading-relaxed">
                            Worked on Pedestrian Future Pose Estimation for autonomous driving systems. Developed computer vision algorithms to predict human movement patterns to enhance safety in self-driving vehicles.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollFadeIn>
          </section>
          
        </div>
      </TransitionWrapper>
    </AnimatePresence>
  );
};

export default Home;