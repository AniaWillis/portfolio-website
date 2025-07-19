import { ArrowDown } from "lucide-react";
import GraphPaperBackground from "./GraphPaperBackground";

function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <GraphPaperBackground />
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span>Hi, I'm</span>
            <span className="text-primary mx-2">Anna</span>
            <span>Willis</span>
          </h1>
          <p className="text-lg md:text-xl text-foreground max-w-2xl mx-auto">
            I build functional, user-friendly interfaces for modern web
            applications.{" "}
          </p>
          <div className="pt-6">
            <a href="#projects" className="main-button">
              View My Work
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-pulse">
        <span className="text-sm text-foreground ">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
}

export default HeroSection;
