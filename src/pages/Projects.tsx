import { Button } from '@/components/ui/button';
import { Calendar, ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'DevSetup Magic',
    description:
      'A comprehensive application for setting up your development environment with ease, offering support for multiple operating systems and development tools.',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    github: 'https://github.com/xagar18/Environment-Installer',
    live: 'https://sagar-devsetup.netlify.app/',
    year: '2024',
  },
  {
    title: 'Quote Generator',
    description:
      'An innovative tool that generates inspiring, motivational, and thought-provoking quotes. Ideal for sharing on social media or adding to your collection. Powered by the Google Gemini API Flash 1.5.',
    tech: ['React', 'TypeScript', 'Socket.io', 'Express'],
    github: 'https://github.com/xagar18/Ai-Quote-Generator',
    live: 'https://sagar-quote.netlify.app/',
    year: '2024',
  },
  {
    title: 'Weather Dashboard',
    description: 'Clean weather application with location forecasts and interactive charts.',
    tech: ['React', 'Chart.js', 'Weather API', 'Tailwind'],
    github: 'https://github.com/xagar18/Weather-App',
    live: '#',
    year: '2024',
  },
];

const Projects = () => (
  <section className="min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 py-16">
    <div className="max-w-4xl mx-auto space-y-12">
      <div className="text-center space-y-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
          Featured Projects
        </h2>
        <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
          Showcase of modern web development practices
        </p>
        <div className="w-16 h-0.5 bg-primary/30 mx-auto rounded-full"></div>
      </div>

      <div className="space-y-8">
        {projects.map((project, idx) => (
          <div
            key={project.title}
            className="border border-border/50 rounded-xl p-6 sm:p-8 hover:border-primary/20 transition-all duration-300 hover:shadow-lg bg-card/30 animate-fade-in-up backdrop-blur-sm"
            style={{ animationDelay: `${0.1 * idx}s` }}
          >
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <div className="space-y-4 flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                  <h3 className="text-xl sm:text-2xl font-bold">{project.title}</h3>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>{project.year}</span>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-3 sm:flex-col lg:flex-col">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-none"
                >
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full flex items-center gap-2 hover:bg-primary/5 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </Button>
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-none"
                >
                  <Button
                    size="sm"
                    className="w-full flex items-center gap-2 shadow-sm hover:shadow-md transition-all"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </Button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
