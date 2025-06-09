import { Github, Linkedin, Mail, MapPin } from 'lucide-react';

const Main = () => {
  return (
    <section className="w-full min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-primary/5 rounded-full blur-2xl"></div>
        <div className="absolute top-3/4 left-1/4 w-32 h-32 bg-primary/8 rounded-full blur-xl"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center space-y-12 sm:space-y-16">
        {/* Status Badge */}
        <div className="inline-flex items-center gap-3 px-4 py-3 bg-green-50/80 dark:bg-green-950/30 border border-green-200/50 dark:border-green-800/30 rounded-full shadow-sm backdrop-blur-sm animate-fade-in-up">
          <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-sm text-green-700 dark:text-green-400 font-medium">
            Available for work
          </span>
        </div>

        {/* Hero Content */}
        <div
          className="space-y-8 sm:space-y-12 animate-fade-in-up"
          style={{ animationDelay: '0.1s' }}
        >
          {/* Main Title */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight leading-[0.9]">
                <span className="block text-muted-foreground/60 text-xl sm:text-2xl md:text-3xl font-light mb-4">
                  Hi, I'm
                </span>
                <span className="block bg-gradient-to-r from-primary via-primary/90 to-primary/70 bg-clip-text text-transparent">
                  Sagar
                </span>
              </h1>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-foreground/90 font-light tracking-wide">
                Full Stack Developer
              </h2>
              <div className="flex justify-center">
                <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-primary/50 via-primary to-primary/50 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="max-w-3xl mx-auto space-y-6">
            <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground/90 font-light leading-relaxed">
              I create digital experiences with clean code and thoughtful design
            </p>
            <p className="text-base sm:text-lg text-muted-foreground/70 leading-relaxed max-w-2xl mx-auto">
              Passionate about building scalable solutions that make a difference in the digital
              world
            </p>
          </div>
        </div>

        {/* Contact & Location Info */}
        <div className="space-y-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8">
            {/* <div className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors duration-300 group">
              <Mail className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
              <a
                href="mailto:hello@alexdev.com"
                className="text-lg hover:underline underline-offset-4"
              >
                sagaryadav6352@gmail.com
              </a>
            </div> */}
            {/* <div className="hidden sm:block w-1 h-1 bg-muted-foreground/30 rounded-full"></div> */}
            <div className="flex items-center gap-3 text-muted-foreground">
              <MapPin className="w-5 h-5" />
              <span className="text-lg">Based in Mumbai, India</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/xagar18"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border/50 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 group"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a
              href="https://linkedin.com/in/xagar18"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border/50 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 group"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          </div>
        </div>

        {/* Navigation Hint */}
        <div className="animate-fade-in-up pt-8" style={{ animationDelay: '0.3s' }}>
          <p className="text-sm text-muted-foreground/60">Explore my work using the sidebar →</p>
        </div>
      </div>
    </section>
  );
};

export default Main;
