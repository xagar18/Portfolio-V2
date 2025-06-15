
import { Github, Linkedin, MapPin, Mail, Terminal, User, FileText } from "lucide-react";
import { useState, useEffect } from "react";
import LoadingScreen from "@/components/LoadingScreen";

const SOCIALS = [
  {
    href: "https://github.com/",
    label: "GitHub",
    icon: <Github className="w-4 h-4" />,
  },
  {
    href: "https://linkedin.com/",
    label: "LinkedIn",
    icon: <Linkedin className="w-4 h-4" />,
  },
];

const Main = () => {
  const [showLoading, setShowLoading] = useState(false);
  const [typingText, setTypingText] = useState('');
  const [currentLine, setCurrentLine] = useState(0);

  const terminalLines = [
    "Welcome to sagar.dev terminal"
  ];

  const handleLoadingComplete = () => {
    console.log('Loading complete - showing main content');
    setShowLoading(false);
    sessionStorage.setItem('hasSeenLoading', 'true');
  };

  useEffect(() => {
    const hasSeenLoading = sessionStorage.getItem('hasSeenLoading');
    if (!hasSeenLoading) {
      setShowLoading(true);
      setCurrentLine(0);
      setTypingText('');
    }
  }, []);

  useEffect(() => {
    if (!showLoading && currentLine < terminalLines.length) {
      const line = terminalLines[currentLine];
      let charIndex = 0;
      
      const typingInterval = setInterval(() => {
        if (charIndex < line.length) {
          setTypingText(line.slice(0, charIndex + 1));
          charIndex++;
        } else {
          clearInterval(typingInterval);
          setTimeout(() => {
            setCurrentLine(prev => prev + 1);
            setTypingText('');
          }, 1000);
        }
      }, 50);

      return () => clearInterval(typingInterval);
    }
  }, [showLoading, currentLine]);

  if (showLoading) {
    return <LoadingScreen onComplete={handleLoadingComplete} />;
  }

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
                <span className="text-sm">Welcome to sagarweb.site terminal</span>
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
                    <div className="text-lg font-bold text-primary mb-1">SAGAR</div>
                    <div className="text-sm text-muted-foreground mb-2">Full Stack Developer</div>
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
                      Passionate developer crafting seamless digital experiences with clean code and elegant design.
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
                    <span className="text-sm font-medium text-green-600 dark:text-green-400">AVAILABLE FOR WORK</span>
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
                      href="mailto:sagar@example.com"
                      className="flex items-center gap-3 text-sm text-primary hover:underline transition-colors"
                    >
                      <span>▸</span>
                      <Mail className="w-3 h-3" />
                      <span>sagar@example.com</span>
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
