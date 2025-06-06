import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import VisitorCounter from '../components/VisitorCounter';

const Contact = () => {
  return (
    <div className="container mx-auto px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl pt-[96px]"
      >
        <h1 className="text-3xl md:text-4xl font-medium mb-4 bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">Contact</h1>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl">
          Feel free to reach out if you'd like to discuss potential collaborations or opportunities.
        </p>

        <div className="space-y-8">
          <div className="space-y-4">
            <a 
              href="mailto:malai.studies@gmail.com" 
              className="flex items-center gap-4 text-gray-600 hover:text-black transition-colors group"
            >
              <HiOutlineMail className="w-5 h-5" />
              <span className="text-sm tracking-wide">malai.studies@gmail.com</span>
            </a>
            <a 
              href="https://linkedin.com/in/annamalailakshmanan" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-4 text-gray-600 hover:text-black transition-colors group"
            >
              <FaLinkedin className="w-5 h-5" />
              <span className="text-sm tracking-wide">LinkedIn</span>
            </a>
            <a 
              href="https://github.com/ial-amanna" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-4 text-gray-600 hover:text-black transition-colors group"
            >
              <FaGithub className="w-5 h-5" />
              <span className="text-sm tracking-wide">GitHub</span>
            </a>
          </div>

          <div>
            <h2 className="text-2xl font-medium mb-4">Location</h2>
            <div className="space-y-4">
              <p className="text-gray-600">
                Zürich, Switzerland
              </p>
              <div className="w-full h-[300px] rounded-lg overflow-hidden shadow-sm">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d346390.383!2d10.5417!3d47.3769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47900a08e8a5a7e1%3A0x4d0b0a3c5c1c1c1c!2sZ%C3%BCrich%2C%20Switzerland!5e0!3m2!1sen!2s!4v1620000000000!5m2!1sen!2s&zoom=6"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>

          <div>
            <VisitorCounter />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact; 