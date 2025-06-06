import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="container mx-auto px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl pt-[96px]"
      >
        <h1 className="text-3xl md:text-4xl font-medium mb-4 bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">About</h1>
        <div className="space-y-8 text-lg text-gray-600">
          <p>
            Hi, I'm Annamalai Lakshmanan. I am passionate about the intersection of Computer Vision, Deep Learning, and LLMs.
            I recently completed my Master's in Electrical Engineering and Information Technology at ETH Zürich, where I focused on improving my theoretical knowledge in my interests.
          </p>
          <p>
            Throughout my academic and professional journey, I have gained valuable experience through various internships, research positions, and work-student roles.
          </p>
          <p>
            My work combines technical expertise with a deep understanding of real-world applications, particularly in the fields of healthcare, robotics, autonomous systems, and edge AI.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
