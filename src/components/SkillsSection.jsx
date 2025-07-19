import { useState } from "react";
import { cn } from "../lib/utils";
import { skills } from "../data/skills";
import GraphPaperBackground from "./GraphPaperBackground";

const categories = ["all", "frontend", "backend", "tools"];

function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills =
    activeCategory === "all"
      ? skills
      : skills.filter((skill) => activeCategory === skill.category);

  return (
    <section id="skills" className="py-24 px-4 relative">
      <GraphPaperBackground />
      <div className="container mx-auto max-w-5xl z-10 relative">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-primary">
          Technologies and Tools
        </h2>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "cursor-pointer hover:bg-primary/10 px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground hover:bg-primary"
                  : "border border-primary bg-background"
              )}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="card-gradient p-6 rounded-lg shadow-xs card-hover flex gap-4 "
            >
              {" "}
              <div className="text-center flex-grow">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>
              <img
                src={skill.icon}
                alt={`${skill.name} icon`}
                className="size-10 mr-4"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
