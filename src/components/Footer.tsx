import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white/50 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 bg-clip-text text-transparent">
              Malai
            </Link>
            <p className="mt-4 text-gray-600">
              Master's Student @ ETH Zürich<br />
              Tech and Sustainability Enthusiast
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-gray-600 hover:text-purple-600">Home</Link>
              <Link to="/projects" className="block text-gray-600 hover:text-purple-600">Projects</Link>
              <Link to="/about" className="block text-gray-600 hover:text-purple-600">About</Link>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Connect</h3>
            <div className="space-y-2">
              <a href="https://github.com/ial-amanna" target="_blank" rel="noopener noreferrer" className="block text-gray-600 hover:text-purple-600">
                GitHub
              </a>
              <a href="https://linkedin.com/in/annamalailakshmanan" target="_blank" rel="noopener noreferrer" className="block text-gray-600 hover:text-purple-600">
                LinkedIn
              </a>
              <a href="mailto:annamalai.lakshmanan@mavt.ethz.ch" className="block text-gray-600 hover:text-purple-600">
                Email
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-8 text-center text-gray-600">
          <p>© {new Date().getFullYear()} Annamalai. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
  