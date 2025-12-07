import {
  FileText,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Terminal,
  User,
} from "lucide-react";
import { useEffect, useState } from "react";

const SOCIALS = [
  {
    href: "https://github.com/xagar18",
    label: "GitHub",
    icon: <Github className="w-4 h-4" />,
  },
  {
    href: "https://linkedin.com/in/xagar",
    label: "LinkedIn",
    icon: <Linkedin className="w-4 h-4" />,
  },
];

const Main = () => {
  const [typingText, setTypingText] = useState("");
  const [currentLine, setCurrentLine] = useState(0);

  const terminalLines = ["Welcome to sagarweb.site terminal"];

  useEffect(() => {
    if (currentLine < terminalLines.length) {
      const line = terminalLines[currentLine];
      let charIndex = 0;

      const typingInterval = setInterval(() => {
        if (charIndex < line.length) {
          setTypingText(line.slice(0, charIndex + 1));
          charIndex++;
        } else {
          clearInterval(typingInterval);
          setTimeout(() => {
            setCurrentLine((prev) => prev + 1);
            setTypingText("");
          }, 10);
        }
      }, 5);

      return () => clearInterval(typingInterval);
    }
  }, [currentLine]);

  return (
    <div className="min-h-screen bg-background text-foreground font-mono flex items-center justify-center p-3 sm:p-6">
      <div className="w-full max-w-3xl mx-auto">
        {/* Terminal Window */}
        <div className="border border-border rounded-lg bg-card shadow-lg overflow-hidden">
          {/* Terminal Header */}
          <div className="flex items-center bg-muted px-4 py-3 border-b border-border">
            <div className="flex gap-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <div className="flex items-center gap-2 ml-4">
              <Terminal className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">sagar@portfolio</span>
            </div>
          </div>

          {/* Terminal Content */}
          <div className="p-4 sm:p-6 space-y-5">
            {/* Welcome message */}
            {currentLine >= 1 && (
              <div className="flex items-center gap-3">
                <span className="text-primary">➜</span>
                <span className="text-sm">
                  Welcome to sagar terminal
                </span>
              </div>
            )}

            {/* Current typing line */}
            {currentLine < terminalLines.length && (
              <div className="flex items-center gap-3">
                <span className="text-primary">➜</span>
                <span className="text-sm">
                  {typingText}
                  <span className="animate-pulse ml-1">▋</span>
                </span>
              </div>
            )}

            {/* Content sections */}
            {currentLine >= terminalLines.length && (
              <div className="space-y-6">
                {/* User info */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="text-primary">➜</span>
                    <User className="w-4 h-4" />
                    <span className="text-sm">whoami</span>
                  </div>
                  <div className="ml-6 p-4 bg-muted/50 rounded-md border border-border/50">
                    <div className="text-lg font-bold text-primary mb-1">
                      SAGAR
                    </div>
                    <div className="text-sm text-muted-foreground mb-2">
                      Full Stack Developer
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="w-3 h-3" />
                      <span>Mumbai, India</span>
                    </div>
                  </div>
                </div>

                {/* About */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="text-primary">➜</span>
                    <FileText className="w-4 h-4" />
                    <span className="text-sm">cat README.md</span>
                  </div>
                  <div className="ml-6 p-4 bg-muted/50 rounded-md border border-border/50">
                    <p className="text-sm leading-relaxed">
                      Full-stack developer specializing in building modern web applications.
                      I transform complex problems into intuitive, performant solutions
                      using React, TypeScript, and Node.js. Always learning, always shipping.
                    </p>
                  </div>
                </div>

                {/* Status */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="text-primary">➜</span>
                    <span className="text-sm">status --check</span>
                  </div>
                  <div className="ml-6 flex items-center gap-3 p-4 bg-muted/50 rounded-md border border-border/50">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-green-600 dark:text-green-400">
                      AVAILABLE FOR WORK
                    </span>
                  </div>
                </div>

                {/* Contact */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="text-primary">➜</span>
                    <Mail className="w-4 h-4" />
                    <span className="text-sm">contact --list</span>
                  </div>
                  <div className="ml-6 space-y-2 p-4 bg-muted/50 rounded-md border border-border/50">
                    <a
                      href="mailto:sagaryadav6352@gmail.com"
                      className="flex items-center gap-3 text-sm text-primary hover:underline transition-colors"
                    >
                      <span>▸</span>
                      <Mail className="w-3 h-3" />
                      <span>sagaryadav6352@gmail.com</span>
                    </a>
                    {SOCIALS.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        className="flex items-center gap-3 text-sm text-primary hover:underline transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span>▸</span>
                        {social.icon}
                        <span>{social.label}</span>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Command prompt */}
                <div className="pt-4 border-t border-border/30">
                  <div className="flex items-center gap-3">
                    <span className="text-primary">➜</span>
                    <span className="text-muted-foreground text-sm">~</span>
                    <span className="animate-pulse text-primary">▋</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
