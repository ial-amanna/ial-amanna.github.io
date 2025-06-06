import React from 'react';
import { useParams, Link } from 'react-router-dom';
import TransitionWrapper from './TransitionWrapper';
import ScrollFadeIn from './ScrollFadeIn';
import { topics } from '../data/topics';
import ProjectCard from './ProjectCard';

interface TopicPageProps {
  projects: Array<{
    title: string;
    description: string;
    imageUrl: string;
    reportUrl?: string;
    presentationUrl?: string;
  }>;
}

const TopicPage: React.FC<TopicPageProps> = ({ projects }) => {
  const { topicId } = useParams<{ topicId: string }>();
  
  // Log the extracted topicId for debugging
  console.log('Extracted topicId from URL:', topicId);

  const topic = topics.find(t => t.id === topicId);

  if (!topic) {
    // Log if topic is not found and what topicId was looked for
    console.log(`Topic with id '${topicId}\' not found.`);
    return (
      <TransitionWrapper>
        <div className="container mx-auto py-20 px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Topic not found</h2>
          <p className="text-center text-gray-600 mb-6">The topic with ID '{topicId}' could not be found.</p>
          <div className="text-center">
            <Link to="/projects" className="text-purple-600 hover:underline">
              Return to Projects
            </Link>
          </div>
        </div>
      </TransitionWrapper>
    );
  }

  return (
    <TransitionWrapper>
      <div className="container mx-auto py-20 px-6">
        <div className="flex items-center gap-4 mb-12">
          <Link to="/projects" className="text-purple-600 hover:underline">
            ← Back to Topics
          </Link>
        </div>

        <div className="flex items-center gap-4 mb-12">
          <div className={`p-3 rounded-xl bg-gradient-to-r ${topic.gradient} text-white`}>
            <topic.icon className="w-8 h-8" />
          </div>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 bg-clip-text text-transparent">
            {topic.title}
          </h2>
        </div>

        <p className="text-gray-600 mb-12 max-w-2xl">
          {topic.description}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ScrollFadeIn key={project.title} delay={index * 0.1}>
              <ProjectCard {...project} />
            </ScrollFadeIn>
          ))}
        </div>
      </div>
    </TransitionWrapper>
  );
};

export default TopicPage; 