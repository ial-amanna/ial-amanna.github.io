import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-6 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-800">
          <p className="text-center md:text-left">© 2025 Annamalai Lakshmanan. All rights reserved.</p>
          
          <div className="flex items-center gap-4">
            <a 
              href="https://linkedin.com/in/annamalailakshmanan" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="LinkedIn Profile"
              className="hover:opacity-70 transition-opacity"
            >
              <FaLinkedinIn className="w-5 h-5" />
            </a>
            <a 
              href="https://github.com/ial-amanna" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="GitHub Profile"
              className="hover:opacity-70 transition-opacity"
            >
              <FaGithub className="w-5 h-5" />
            </a>
            <a 
              href="mailto:malai.studies@gmail.com" 
              aria-label="Email"
              className="hover:opacity-70 transition-opacity"
            >
              <MdEmail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;