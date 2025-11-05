
import { Code2, Database, Globe, Wrench, Star, Zap } from "lucide-react";

const frontendSkills = [
  { name: "React", level: 95, icon: "⚛️" },
  // { name: "Next.js", level: 90, icon: "▲" },
  { name: "TypeScript", level: 88, icon: "📘" },
  { name: "Tailwind CSS", level: 99, icon: "🎨" },
  { name: "JavaScript", level: 96, icon: "💛" },
];

const backendSkills = [
  { name: "Node.js", level: 98, icon: "🟢" },
  { name: "Express.js", level: 97, icon: "🚀" },
  { name: "MongoDB", level: 95, icon: "🍃" },
  { name: "PostgreSQL", level: 88, icon: "🐘" },
  { name: "REST APIs", level: 98, icon: "🔗" },
];

const toolsSkills = [
  { name: "Git", level: 88, icon: "📚" },
  // { name: "Docker", level: 75, icon: "🐳" },
  { name: "AWS", level: 70, icon: "☁️" },
  { name: "Vercel", level: 85, icon: "🔺" },
  // { name: "Figma", level: 80, icon: "🎨" },
];

const SkillCard = ({ skill }: { skill: { name: string; level: number; icon: string } }) => (
  <div className="p-2 border border-border rounded bg-card hover:bg-muted/50 transition-all duration-200">
    <div className="flex items-center gap-2 mb-2">
      <span className="text-sm">{skill.icon}</span>
      <h3 className="font-medium text-xs text-foreground">{skill.name}</h3>
    </div>
    <div className="space-y-1">
      <div className="flex justify-between text-xs">
        <span className="text-muted-foreground">Level</span>
        <span className="text-foreground font-medium">{skill.level}%</span>
      </div>
      <div className="w-full bg-muted rounded-full h-1">
        <div
          className="bg-primary h-1 rounded-full transition-all duration-500"
          style={{ width: `${skill.level}%` }}
        />
      </div>
    </div>
  </div>
);

const Skills = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-mono flex items-center justify-center p-2 sm:p-4">
      <div className="w-full max-w-5xl mx-auto">
        {/* Terminal Window */}
        <div className="border border-border rounded-lg bg-card shadow-lg overflow-hidden">
          {/* Terminal Header */}
          <div className="flex items-center bg-muted px-3 py-2 border-b border-border">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 bg-red-500 rounded-full"></div>
              <div className="w-2.5 h-2.5 bg-yellow-500 rounded-full"></div>
              <div className="w-2.5 h-2.5 bg-green-500 rounded-full"></div>
            </div>
            <div className="flex items-center gap-2 ml-3">
              <Code2 className="w-3 h-3 text-primary" />
              <span className="text-xs font-medium">sagar@skills</span>
            </div>
          </div>

          {/* Terminal Content */}
          <div className="p-3 sm:p-4 space-y-4">
            {/* Header */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-primary text-sm">➜</span>
                <Zap className="w-3 h-3" />
                <span className="text-xs">ls -la skills/</span>
              </div>
              <div className="ml-4 p-2 bg-muted/50 rounded border border-border/50">
                <div className="text-sm font-bold text-primary mb-0.5">TECHNICAL SKILLS</div>
                <div className="text-xs text-muted-foreground">Modern web development stack</div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              {/* Frontend Skills */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-primary text-sm">➜</span>
                  <Globe className="w-3 h-3" />
                  <span className="text-xs">cat frontend.json</span>
                </div>
                <div className="ml-4 p-2 bg-muted/50 rounded border border-border/50">
                  <h3 className="text-xs font-medium text-foreground mb-2">Frontend Development</h3>
                  <div className="space-y-2">
                    {frontendSkills.map((skill) => (
                      <SkillCard key={skill.name} skill={skill} />
                    ))}
                  </div>
                </div>
              </div>

              {/* Backend Skills */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-primary text-sm">➜</span>
                  <Database className="w-3 h-3" />
                  <span className="text-xs">cat backend.json</span>
                </div>
                <div className="ml-4 p-2 bg-muted/50 rounded border border-border/50">
                  <h3 className="text-xs font-medium text-foreground mb-2">Backend Development</h3>
                  <div className="space-y-2">
                    {backendSkills.map((skill) => (
                      <SkillCard key={skill.name} skill={skill} />
                    ))}
                  </div>
                </div>
              </div>

              {/* Tools Skills */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-primary text-sm">➜</span>
                  <Wrench className="w-3 h-3" />
                  <span className="text-xs">cat tools.json</span>
                </div>
                <div className="ml-4 p-2 bg-muted/50 rounded border border-border/50">
                  <h3 className="text-xs font-medium text-foreground mb-2">Tools & Technologies</h3>
                  <div className="space-y-2">
                    {toolsSkills.map((skill) => (
                      <SkillCard key={skill.name} skill={skill} />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Status */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-primary text-sm">➜</span>
                <Star className="w-3 h-3" />
                <span className="text-xs">status --learning</span>
              </div>
              <div className="ml-4 flex items-center gap-2 p-2 bg-muted/50 rounded border border-border/50">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                <span className="text-xs font-medium text-blue-600 dark:text-blue-400">ALWAYS LEARNING NEW TECHNOLOGIES</span>
              </div>
            </div>

            {/* Command prompt */}
            <div className="pt-2 border-t border-border/30">
              <div className="flex items-center gap-2">
                <span className="text-primary text-sm">➜</span>
                <span className="text-muted-foreground text-xs">~/skills</span>
                <span className="animate-pulse text-primary">▋</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
