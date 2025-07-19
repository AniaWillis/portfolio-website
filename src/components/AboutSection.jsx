import { Code, Puzzle, User } from "lucide-react";

function About() {
  return (
    <section id="about" className="py-24 px-4 relative bg-background-2 ">
      <div className="container mx-auto max-w-5xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-12 text-center text-primary">
          About Me
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground">
              Passionate about building meaningful experiences on and off the
              screen
            </h3>
            <p className="text-foreground/90">
              I’ve always been captivated by the process of creating — whether
              it’s piecing together a project by hand or developing interactive
              digital experiences. This passion for building drives me to
              explore ideas deeply, experiment with solutions, and craft work
              that is both purposeful and impactful.
            </p>
            <p className="text-foreground/90">
              As a self-taught front-end developer, I bring this mindset into
              every project. I strive to merge creativity with technical skill,
              focusing on clean, efficient code and thoughtful design to build
              applications that are engaging, intuitive, and truly user-focused.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="main-button">
                Get In Touch
              </a>
              <a
                href="/downloads/AnnaWResumeWeb.pdf"
                download="AnnaWResumeWeb.pdf"
                className="px-6 py-2 rounded-full border border-primary font-normal text-foreground hover:bg-primary/10 hover:scale-[1.03] transition-transform duration-300 [will-change:transform]"
              >
                Download Resume
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div className="card-gradient p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg text-foreground">
                    Web Development
                  </h4>
                  <p className="text-base text-foreground/90">
                    Developing responsive, high-quality websites and
                    applications with modern technologies like React and Framer.
                  </p>
                </div>
              </div>
            </div>
            <div className="card-gradient p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg text-foreground">
                    UI/UX
                  </h4>
                  <p className="text-base text-foreground/90">
                    Designing intuitive, user-centered interfaces that balance
                    aesthetics with functionality for a seamless experience.
                  </p>
                </div>
              </div>
            </div>
            <div className="card-gradient p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Puzzle className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg text-foreground">
                    Problem Solving
                  </h4>
                  <p className=" text-base text-foreground/90">
                    Applying creativity and strategic thinking to analyze
                    challenges and develop effective, user-focused solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
