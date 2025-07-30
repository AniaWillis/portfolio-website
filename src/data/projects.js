import DictionaryImage from "../assets/projects/dictionary.png";
import CalculatorImage from "../assets/projects/calculator-screen.png";
import TimeLogImage from "../assets/projects/my-time-use.png";

export const projects = [
  {
    id: 1,
    title: "Dictionary App",
    description:
      "An interactive dictionary application. It lets you look up English words, hear pronunciations, and explore definitions, examples, synonyms, and antonyms.",
    image: DictionaryImage,
    tags: ["HTML", "CSS", "JavaScript", "REST API"],
    demoUrl: "https://ania-w-dictionary.netlify.app",
    githubUrl: "https://github.com/AniaWillis/dictionary",
  },
  {
    id: 2,
    title: "Calculator App",
    description:
      "A simple calculator application. It provides basic arithmetic operations with a user-friendly interface.",
    image: CalculatorImage,
    tags: ["HTML", "Tailwind CSS", "JavaScript", "React", "Vite"],
    demoUrl: "https://ania-w-react-calculator-app.netlify.app",
    githubUrl: "https://github.com/AniaWillis/calculator-app",
  },
  {
    id: 3,
    title: "my timeUse",
    description:
      "A full-featured time tracking app. You can track your daily activities, analyze your habits, and gain insights into how your time is spent.",
    image: TimeLogImage,
    tags: [
      "HTML",
      "CSS",
      "Tailwind CSS",
      "TypeScript",
      "React",
      "Vite",
      "Supabase",
    ],
    demoUrl: "https://ania-w-my-time-use.netlify.app/",
    githubUrl: "https://github.com/AniaWillis/my-time-use",
  },
];
