import {
  Calendar,
  Code2,
  ExternalLink,
  Folder,
  Github,
  Star,
} from "lucide-react";

const projects = [
  {
    title: "DevSetup Magic",
    description:
      "A comprehensive application for setting up your development environment with ease, offering support for multiple operating systems and development tools.",
    tech: ["React"],
    github: "https://github.com/xagar18/Environment-Installer",
    live: "https://sagar-devsetup.netlify.app/",
    year: "2024",
  },
  {
    title: "Quote Generator",
    description:
      "An innovative tool that generates inspiring, motivational, and thought-provoking quotes. Ideal for sharing on social media or adding to your collection. Powered by the Google Gemini API Flash 1.5.",
    tech: ["React", "TypeScript", "Gemini", "Deepseek", "Express"],
    github: "https://github.com/xagar18/Ai-Quote-Generator",
    live: "https://sagar-quote.netlify.app/",
    year: "2024",
  },
  {
    title: "Weather Dashboard",
    description:
      "Clean weather application with location forecasts and interactive charts.",
    tech: ["React", "Weather API", "Tailwind CSS"],
    github: "https://github.com/xagar18/Weather-App-V2",
    live: "https://sagar-weatherapp.netlify.app",
    year: "2024",
  },
];

const ProjectCard = ({ project }: { project: (typeof projects)[0] }) => (
  <div className="p-3 border border-border rounded-lg bg-card hover:bg-muted/30 transition-all duration-200 hover:shadow-sm">
    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-2">
          <Folder className="w-3.5 h-3.5 text-primary flex-shrink-0" />
          <h3 className="font-semibold text-sm text-foreground truncate">
            {project.title}
          </h3>
        </div>
        <p className="text-xs text-muted-foreground leading-relaxed mb-2">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1 mb-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-1.5 py-0.5 text-xs bg-primary/10 text-primary rounded-full border border-primary/20 font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-1 text-xs text-muted-foreground mb-3 sm:mb-0">
          <Calendar className="w-3 h-3" />
          <span>{project.year}</span>
        </div>
      </div>
      <div className="flex gap-2 w-full sm:w-auto sm:flex-shrink-0">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 sm:flex-initial"
        >
          <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-8 text-xs px-3">
            <Github className="w-3 h-3" />
            Code
          </button>
        </a>
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 sm:flex-initial"
        >
          <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-8 text-xs px-3">
            <ExternalLink className="w-3 h-3" />
            Demo
          </button>
        </a>
      </div>
    </div>
  </div>
);

const Projects = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-mono flex items-center justify-center p-2 sm:p-3 md:p-4">
      <div className="w-full max-w-4xl mx-auto">
        {/* Terminal Window */}
        <div className="border border-border rounded-lg bg-card shadow-lg overflow-hidden">
          {/* Terminal Header */}
          <div className="flex items-center bg-muted px-2 sm:px-3 py-2 border-b border-border">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 bg-red-500 rounded-full"></div>
              <div className="w-2.5 h-2.5 bg-yellow-500 rounded-full"></div>
              <div className="w-2.5 h-2.5 bg-green-500 rounded-full"></div>
            </div>
            <div className="flex items-center gap-2 ml-2 sm:ml-3">
              <Code2 className="w-3.5 h-3.5 text-primary" />
              <span className="text-xs font-medium truncate">
                sagar@projects
              </span>
            </div>
          </div>

          {/* Terminal Content */}
          <div className="p-3 sm:p-4 space-y-4">
            {/* Header */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-primary text-sm">➜</span>
                <Folder className="w-3.5 h-3.5 flex-shrink-0" />
                <span className="text-xs truncate">ls -la projects/</span>
              </div>
              <div className="ml-3 sm:ml-4 p-2 sm:p-3 bg-muted/50 rounded-lg border border-border/50">
                <div className="text-sm sm:text-base font-bold text-primary mb-1">
                  FEATURED PROJECTS
                </div>
                <div className="text-xs text-muted-foreground">
                  Modern web development showcase
                </div>
              </div>
            </div>

            {/* Projects List */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-primary text-sm">➜</span>
                <Star className="w-3.5 h-3.5 flex-shrink-0" />
                <span className="text-xs truncate">cat portfolio.json</span>
              </div>
              <div className="ml-3 sm:ml-4 p-2 sm:p-3 bg-muted/50 rounded-lg border border-border/50">
                <h3 className="text-sm font-medium text-foreground mb-3">
                  Recent Work
                </h3>
                <div className="space-y-2 sm:space-y-3">
                  {projects.map((project) => (
                    <ProjectCard key={project.title} project={project} />
                  ))}
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-primary text-sm">➜</span>
                <span className="text-xs truncate">
                  git log --oneline | wc -l
                </span>
              </div>
              <div className="ml-3 sm:ml-4 flex items-center gap-2 p-2 bg-muted/50 rounded-lg border border-border/50">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse flex-shrink-0"></div>
                <span className="text-xs font-medium text-green-600 dark:text-green-400 truncate">
                  {projects.length} ACTIVE PROJECTS • ALWAYS BUILDING
                </span>
              </div>
            </div>

            {/* Command prompt */}
            <div className="pt-2 border-t border-border/30">
              <div className="flex items-center gap-2">
                <span className="text-primary text-sm">➜</span>
                <span className="text-muted-foreground text-xs">
                  ~/projects
                </span>
                <span className="animate-pulse text-primary">▋</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
