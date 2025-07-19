import { ArrowUp } from "lucide-react";
import GraphPaperBackground from "./GraphPaperBackground";

function Footer() {
  return (
    <footer className="pt-24 pb-12 px-4 relative flex flex-wrap justify-evenly items-center">
      <GraphPaperBackground backgroundColor="var(--background)" />
      <p className="text-sm text-foreground z-1">
        &copy; {new Date().getFullYear} Anna Willis. All rights reserved.
      </p>
      <a
        href="#hero"
        className="z-1 p-2 rounded-full bg-primary/20 hover:pg-primary/20 text-primary transition-colors duration-300"
      >
        <ArrowUp />
      </a>
    </footer>
  );
}

export default Footer;
