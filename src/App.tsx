import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import TopicPage from './components/TopicPage';
import { projectsByTopic } from './data/projects';
import LoadingIndicator from './components/SplashScreen';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Handle GitHub Pages SPA redirect
    if (sessionStorage.redirect) {
      const redirect = sessionStorage.redirect;
      delete sessionStorage.redirect;
      window.history.replaceState(null, '', redirect);
    }
  }, []);

  return (
    <Router basename="/">
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          {loading ? (
            <LoadingIndicator isLoading={loading} />
          ) : (
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
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
}

export default App;
