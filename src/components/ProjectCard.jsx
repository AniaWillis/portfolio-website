import { ExternalLink, Github } from "lucide-react";

function ProjectCard({ project }) {
  return (
    <div className="group bg-linear-to-r from-card to-card-2 border border-border rounded-lg overflow-hidden shadow-xs card-hover">
      <div className="h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6 grid grid-cols-1 grid-rows-[8rem_3rem_1fr] md:grid-rows-[9rem_3rem_1fr] lg:grid-rows-[10rem_3rem_1fr]">
        <div className="flex flex-col grow">
          <h3 className="text-xl font-semibold mb-2 text-center">
            {project.title}
          </h3>
          <p className="text-foreground/80 text-sm mb-4 text-center">
            {project.description}
          </p>
        </div>
        <div className="flex space-x-3">
          <a
            href={project.demoUrl}
            target="_blank"
            className="text-foreground/80 hover:text-primary transition-colors duration-300"
          >
            <ExternalLink size={20} />
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            className="text-foreground/80 hover:text-primary transition-colors duration-300"
          >
            <Github size={20} />
          </a>
        </div>
        <div className="flex flex-wrap gap-2 justify-center">
          {project.tags.map((tag) => (
            <span
              key={project.id + tag}
              className="px-2 py-1 h-fit text-xs font-light tracking-wide rounded-full bg-primary/10 text-foreground border border-border"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
