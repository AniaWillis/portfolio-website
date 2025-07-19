import { ArrowRight } from "lucide-react";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-4 relative bg-background-2">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-primary text-3xl md:text-4xl font-bold mb-6 text-center">
          Featured Projects
        </h2>
        <p className="text-center text-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my projects. Each project was built with attention to
          detail, performance, and user experience.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/AniaWillis"
            target="_blank"
            className="main-button w-fit flex items-center mx-auto gap-2"
          >
            My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
