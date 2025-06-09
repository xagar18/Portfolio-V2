import { FaDocker, FaGit, FaJs, FaNodeJs, FaReact } from 'react-icons/fa';
import { SiTypescript } from 'react-icons/si';

const skills = [
  { category: 'Frontend', items: ['React / Next.js', 'TypeScript', 'Tailwind CSS', 'JavaScript'] },
  { category: 'Backend', items: ['Node.js', 'Express', 'REST APIs', 'Database Design'] },
  { category: 'Tools', items: ['Git', 'VS Code', 'Figma', 'DevTools'] },
  { category: 'Concepts', items: ['Responsive Design', 'Performance', 'Clean Code', 'UX'] },
];

const techLogos = [
  { name: 'JavaScript', logo: <FaJs /> },
  { name: 'TypeScript', logo: <SiTypescript /> },
  { name: 'React', logo: <FaReact /> },
  { name: 'Node.js', logo: <FaNodeJs /> },
  { name: 'Docker', logo: <FaDocker /> },
  { name: 'Git', logo: <FaGit /> },
];

const Skills = () => (
  <section className="min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
    <div className="max-w-4xl w-full mx-auto text-center space-y-12">
      <div className="space-y-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
          Skills & Expertise
        </h2>
        <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
          Tools and technologies I use to build modern applications
        </p>
        <div className="w-16 h-0.5 bg-primary/30 mx-auto rounded-full"></div>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
        {skills.map((skillGroup, i) => (
          <div
            key={skillGroup.category}
            className="space-y-4 p-4 sm:p-6 rounded-xl border border-border/50 bg-card/30 hover:bg-card/50 hover:border-primary/20 transition-all duration-300 shadow-sm hover:shadow-md"
            style={{ animationDelay: `${0.1 * i}s` }}
          >
            <h3 className="text-lg font-semibold text-primary">{skillGroup.category}</h3>
            <ul className="space-y-3">
              {skillGroup.items.map((skill) => (
                <li key={skill} className="text-sm text-muted-foreground flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Animated Tech Logos */}
      <div className="w-full overflow-hidden py-8">
        <h3 className="text-lg font-medium text-muted-foreground mb-8">Technologies I Work With</h3>
        <div className="relative">
          <div className="flex flex-wrap justify-center gap-6 sm:gap-12">
            {techLogos.map((tech) => (
              <div
                key={tech.name}
                className="flex-shrink-0 flex flex-col items-center space-y-3 px-3 sm:px-4"
              >
                <div className="text-2xl sm:text-3xl hover:scale-110 transition-transform duration-300 p-2 rounded-lg hover:bg-primary/5">
                  {tech.logo}
                </div>
                <span className="text-xs sm:text-sm font-medium text-muted-foreground/80 whitespace-nowrap">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Skills;
