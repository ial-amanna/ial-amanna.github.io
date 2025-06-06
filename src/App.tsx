import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";
import TopicPage from "./components/TopicPage";
import { projectsByTopic } from "./data/projects";
import LoadingIndicator from "./components/SplashScreen";
import React, { useState, useEffect } from 'react';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router basename="/my-portfolio/">
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          {loading ? (
            <LoadingIndicator isLoading={loading} />
          ) : (
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/about" element={<About />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/contact" element={<Contact />} />
              {Object.keys(projectsByTopic).map((topicId) => (
                <Route
                  key={topicId}
                  path={`/projects/${topicId}`}
                  element={<TopicPage projects={projectsByTopic[topicId]} />}
                />
              ))}
              <Route path="/projects/*" element={<TopicPage projects={[]} />} />
            </Routes>
          )}
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
