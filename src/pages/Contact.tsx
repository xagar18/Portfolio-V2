import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, MapPin, Twitter } from 'lucide-react';

const socials = [
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/xagar18',
    Icon: Linkedin,
  },
  {
    name: 'GitHub',
    url: 'https://github.com/xagar18',
    Icon: Github,
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/xagarr18',
    Icon: Twitter,
  },
];

const Contact = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-lg mx-auto text-center space-y-12">
        <div className="space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Let's Connect
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Have a project in mind? I'd love to hear about it.
          </p>
          <div className="w-16 h-0.5 bg-primary/30 mx-auto rounded-full"></div>
        </div>

        {/* Contact Info */}
        <div className="space-y-4 p-6 rounded-xl bg-card/30 border border-border/50">
          <div className="flex items-center justify-center gap-3 text-muted-foreground">
            <Mail className="w-4 h-4 text-primary" />
            <a
              href="mailto:sagaryadav6352@gmail.com"
              className="text-primary hover:underline text-sm sm:text-base transition-colors"
            >
              sagaryadav6352@gmail.com
            </a>
          </div>
          <div className="flex items-center justify-center gap-3 text-muted-foreground">
            <MapPin className="w-4 h-4 text-primary" />
            <span className="text-sm sm:text-base">Available for remote work</span>
          </div>
        </div>

        {/* Contact Form */}
        <form className="space-y-4 animate-fade-in-up" style={{ animationDelay: '.1s' }}>
          <div className="space-y-4">
            <input
              required
              type="text"
              placeholder="Your Name"
              className="w-full border border-border bg-background px-4 py-3 rounded-xl text-sm outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200"
            />
            <input
              required
              type="email"
              placeholder="Your Email"
              className="w-full border border-border bg-background px-4 py-3 rounded-xl text-sm outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200"
            />
            <textarea
              required
              placeholder="Tell me about your project..."
              rows={4}
              className="w-full border border-border bg-background px-4 py-3 rounded-xl text-sm outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 resize-none"
            />
          </div>
          <Button
            type="submit"
            size="lg"
            className="w-full rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Send Message
          </Button>
        </form>

        {/* Social Links */}
        <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '.2s' }}>
          <div className="w-12 border-t border-border mx-auto" />
          <p className="text-xs text-muted-foreground">Connect with me</p>
          <div className="flex justify-center gap-4">
            {socials.map(({ name, url, Icon }) => (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                className="p-3 rounded-xl border border-border hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 group shadow-sm hover:shadow-md"
              >
                <Icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
