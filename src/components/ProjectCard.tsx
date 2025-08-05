interface ProjectCardProps {
    title: string;
    description: string;
    imageUrl?: string;
    organization?: string;
    period?: string;
    reportUrl?: string;
    presentationUrl?: string;
    tags?: string[];
  }
  
  const ProjectCard = ({ 
    title, 
    description, 
    imageUrl, 
    organization, 
    period,
    reportUrl, 
    presentationUrl,
    tags
  }: ProjectCardProps) => {
    return (
      <div className="glass rounded-lg overflow-hidden shadow-md hover:scale-105 transition-transform duration-300">
        {imageUrl && <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />}
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
          {organization && (
            <p className="text-purple-600 font-medium mb-1">{organization}</p>
          )}
          {period && (
            <p className="text-gray-500 text-sm mb-3">{period}</p>
          )}
          <p className="text-gray-600 mb-4">{description}</p>
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
          <div className="flex gap-4">
            {reportUrl && (
              <a 
                href={reportUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-purple-600 hover:underline"
              >
                Report
              </a>
            )}
            {presentationUrl && (
              <a 
                href={presentationUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-purple-600 hover:underline"
              >
                Presentation
              </a>
            )}
          </div>
        </div>
      </div>
    );
  };
  
  export default ProjectCard;
