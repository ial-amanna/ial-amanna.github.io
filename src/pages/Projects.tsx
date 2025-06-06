import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projectsByTopic } from "../data/projects";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  return (
    <div className="container mx-auto px-8 pt-[96px] max-w-screen-xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl pt-[96px]"
      >
        {/* <h1 className="text-3xl md:text-4xl font-medium mb-4 bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">Projects</h1>
        <p className="text-lg text-gray-600 mb-16 max-w-2xl">
          A collection of my work in computer vision, robotics, and machine learning.
        </p> */}

        {/* Topic Navigation */}
        <div className="mb-16 flex flex-wrap items-center gap-4">
          {Object.keys(projectsByTopic).map((topicId) => (
            <a
              key={topicId}
              href={`#${topicId}`}
              className="text-sm tracking-wide border-b border-black pb-1 hover:opacity-70 transition-opacity"
            >
              {topicId.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
            </a>
          ))}
        </div>

        <div className="space-y-24">
          {Object.entries(projectsByTopic).map(([topicId, projects]) => (
            <div key={topicId} id={topicId} className="space-y-8 pt-16 -mt-16">
              <h2 className="text-2xl md:text-1xl font-medium mb-8 bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">{topicId.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                  <div
                    key={`${topicId}-${index}`}
                    className="group block rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gradient-to-br from-gray-50 to-white"
                    onClick={() => setSelectedProject(selectedProject === `${topicId}-${index}` ? null : `${topicId}-${index}`)}
                  >
                    {project.imageUrl && (
                      <div className="h-48 overflow-hidden">
                        <img 
                          src={project.imageUrl}
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    <div className="p-6">
                      {project.tags && (
                        <div className="mb-4 flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-xs font-semibold px-2.5 py-0.5 rounded bg-purple-100 text-purple-700"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                      <h3 className="text-xl font-medium mb-2 text-gray-800 group-hover:text-purple-700 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                      {(project.organization || project.period) && (
                        <p className="text-purple-700 text-xs">
                          {project.organization}{project.organization && project.period && " - "}{project.period}
                        </p>
                      )}
                      
                      <AnimatePresence>
                        {selectedProject === `${topicId}-${index}` && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="mt-4 pt-4 border-t border-purple-100"
                          >
                            <div className="prose prose-sm max-w-none">
                              {project.details && (
                                <div className="text-gray-600 text-sm">
                                  {project.details}
                                </div>
                              )}
                              {project.link && (
                                <a
                                  href={project.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-block mt-4 text-sm text-purple-600 hover:text-purple-800"
                                  onClick={(e) => e.stopPropagation()}
                                >
                                  Learn More →
                                </a>
                              )}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;
