import { Button } from '@/components/ui/button';
import { Github } from 'lucide-react';

const projects = [
  {
    title: 'DevSetup Magic',
    description:
      'A comprehensive application for setting up your development environment with ease, offering support for multiple operating systems and development tools.',
    github: 'https://github.com/xagar18/Environment-Installer',
    live: 'https://sagar-devsetup.netlify.app/',
  },
  {
    title: 'Quote Generator',
    description:
      'An innovative tool that generates inspiring, motivational, and thought-provoking quotes. Ideal for sharing on social media or adding to your collection. Powered by the Google Gemini API Flash 1.5.',
    github: 'https://github.com/xagar18/RandomQuoteGenerator-Gemini',
    live: 'https://sagar-quote-generator.netlify.app/',
  },
  {
    title: 'Todo App',
    description: 'A todo app where you can create and delete tasks. The database used is DynamoDB.',
    github: 'https://github.com/xagar18/TODO-APP',
    live: 'https://sagaryadav-todo.netlify.app/',
  },
  {
    title: 'Weather App',
    description:
      'A weather application that provides up-to-date weather information using the OpenWeather API.',
    github: 'https://github.com/xagar18/Weather-App',
    live: '#',
  },
];

const Projects = () => (
  <section className="min-h-[70vh] flex flex-col items-center px-8 pt-24 animate-fade-in-up">
    <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight font-grotesk text-primary">
      Projects
    </h2>
    <div
      className="text-muted-foreground text-base md:text-lg mb-10 italic animate-fade-in-up"
      style={{ animationDelay: '.07s' }}
    >
      A selection of unique, thoughtful builds
    </div>
    <div className="w-full max-w-2xl space-y-8">
      {projects.map((proj, idx) => (
        <div
          key={proj.title}
          className="block border-b border-border pb-8 group animate-fade-in-up"
          style={{ animationDelay: `${0.08 * idx}s` }}
        >
          <h3 className="text-2xl md:text-3xl font-semibold mb-2 flex items-center gap-2 group-hover:gap-4 transition-all">
            {proj.title}
            <span className="w-2 h-2 bg-primary rounded-full opacity-60 group-hover:scale-150 transition-transform"></span>
          </h3>
          <p className="text-base md:text-lg text-muted-foreground mb-4">{proj.description}</p>
          <div className="flex gap-3">
            <a href={proj.github} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="sm" className="flex items-center gap-2">
                <Github size={18} />
                GitHub
              </Button>
            </a>
            <a href={proj.live} target="_blank" rel="noopener noreferrer">
              <Button variant="default" size="sm" className="flex items-center gap-2">
                Live
              </Button>
            </a>
          </div>
        </div>
      ))}
    </div>
    <div className="w-14 border-t border-border mt-20 opacity-20" />
  </section>
);

export default Projects;
