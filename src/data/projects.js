import DiceRollImage from "../assets/projects/dice-roll-screen.png";
import CalculatorImage from "../assets/projects/calculator-screen.png";
import TimeLogImage from "../assets/projects/my-time-use.png";

export const projects = [
  {
    id: 1,
    title: "Dice Roll Game",
    description:
      "An interactive two-player dice game. Players take turns rolling two dice until one reaches the selected goal score.",
    image: DiceRollImage,
    tags: ["HTML", "CSS", "JavaScript"],
    demoUrl: "https://ania-w-dice-roll-game.netlify.app",
    githubUrl: "https://github.com/AniaWillis/dice-game",
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
