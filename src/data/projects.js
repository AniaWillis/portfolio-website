import DictionaryImage from "../assets/projects/dictionary.png";
import RecipeImage from "../assets/projects/global-pantry.png";
import TimeLogImage from "../assets/projects/my-time-use.png";

export const projects = [
  {
    id: 1,
    title: "Dictionary App",
    description:
      "An interactive dictionary that lets you look up English words and displays their pronunciations, definitions, examples, synonyms, and antonyms.",
    image: DictionaryImage,
    tags: ["HTML", "CSS", "JavaScript", "REST API"],
    demoUrl: "https://ania-w-dictionary.netlify.app",
    githubUrl: "https://github.com/AniaWillis/dictionary",
  },
  {
    id: 2,
    title: "The Global Pantry",
    description:
      "A responsive and interactive single-page recipe search application that lets you search recipes by main ingredient or browse by category.",
    image: RecipeImage,
    tags: ["HTML", "CSS", "JavaScript", "REST API"],
    demoUrl: "https://ania-w-global-pantry.netlify.app",
    githubUrl: "https://github.com/AniaWillis/global-pantry",
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
