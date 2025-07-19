import { Link } from "react-router-dom";
import GraphPaperBackground from "../components/GraphPaperBackground";
import { ArrowLeft } from "lucide-react";

function ThankYou() {
  return (
    <div className="bg-background w-screen min-h-screen">
      <GraphPaperBackground backgroundColor="var(--background)" />
      <div className="container h-full">
        <Link
          className="text-lg font-bold text-primary flex items-center py-5"
          to="/"
        >
          <span className="relative z-10">
            <span className="text-foreground text-glow">AniaWillis</span>{" "}
            Portfolio
          </span>
        </Link>
        <div className="w-full h-full flex justify-center items-center">
          <div className="h-fit w-fit p-12 card-gradient border border-border shadow-lg space-y-6 mt-24">
            <h3 className="text-primary font-bold text-3xl md:text-4xl">
              Thank you for reaching out!
            </h3>
            <p className="text-foreground/80 font-normal text-xl md:text-2xl">
              I'll get back to you as soon as I can.
            </p>
            <Link
              to="/"
              className="flex justify-center items-center gap2 text-sm text-primary"
            >
              <ArrowLeft size={16} />
              Back to website
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThankYou;
