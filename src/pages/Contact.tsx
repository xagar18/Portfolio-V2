import { Button } from '@/components/ui/button';
import { Github, Instagram, Linkedin, Mail, MapPin, Send, Terminal, Twitter } from 'lucide-react';

const socials = [
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/',
    Icon: Linkedin,
  },
  {
    name: 'GitHub',
    url: 'https://github.com/',
    Icon: Github,
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/',
    Icon: Twitter,
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com/',
    Icon: Instagram,
  },
];

const Contact = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-mono flex items-center justify-center p-3">
      <div className="w-full max-w-2xl mx-auto">
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
              <Terminal className="w-3.5 h-3.5 text-primary" />
              <span className="text-xs font-medium">sagaryadav6352@gmail.com</span>
            </div>
          </div>

          {/* Terminal Content */}
          <div className="p-4 space-y-3">
            {/* Header */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-primary text-sm">➜</span>
                <Mail className="w-3.5 h-3.5" />
                <span className="text-xs">cat contact_info.txt</span>
              </div>
              <div className="ml-4 p-3 bg-muted/50 rounded-lg border border-border/50">
                <div className="text-base font-bold text-primary mb-1">LET'S CONNECT</div>
                <div className="text-xs text-muted-foreground">
                  Ready to collaborate on your next project
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-primary text-sm">➜</span>
                <span className="text-xs">ls -la contact/</span>
              </div>
              <div className="ml-4 p-3 bg-muted/50 rounded-lg border border-border/50 space-y-2">
                <div className="flex items-center gap-2 text-xs">
                  <Mail className="w-3 h-3 text-primary" />
                  <a
                    href="mailto:sagaryadav6352@gmail.com"
                    className="text-primary hover:underline transition-colors"
                  >
                    sagaryadav6352@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <MapPin className="w-3 h-3 text-primary" />
                  <span>Available for remote work</span>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-primary text-sm">➜</span>
                <Send className="w-3.5 h-3.5" />
                <span className="text-xs">vim message.json</span>
              </div>
              <div className="ml-4 p-3 bg-muted/50 rounded-lg border border-border/50">
                <h3 className="text-sm font-medium text-foreground mb-3">Send Message</h3>
                <form className="space-y-3">
                  <div className="grid grid-cols-2 gap-3">
                    <input
                      required
                      type="text"
                      placeholder="Your Name"
                      className="w-full border border-border bg-background px-3 py-2 rounded-lg text-xs outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200"
                    />
                    <input
                      required
                      type="email"
                      placeholder="Your Email"
                      className="w-full border border-border bg-background px-3 py-2 rounded-lg text-xs outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200"
                    />
                  </div>
                  <textarea
                    required
                    placeholder="Tell me about your project..."
                    rows={3}
                    className="w-full border border-border bg-background px-3 py-2 rounded-lg text-xs outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 resize-none"
                  />
                  <Button type="submit" size="sm" className="w-full rounded-lg text-xs h-8">
                    <Send className="w-3 h-3 mr-1" />
                    Send Message
                  </Button>
                </form>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-primary text-sm">➜</span>
                <span className="text-xs">find . -name "*.social"</span>
              </div>
              <div className="ml-4 p-3 bg-muted/50 rounded-lg border border-border/50">
                <h3 className="text-sm font-medium text-foreground mb-2">Connect With Me</h3>
                <div className="flex gap-2">
                  {socials.map(({ name, url, Icon }) => (
                    <a
                      key={name}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={name}
                      className="p-2 rounded-lg border border-border hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 group"
                    >
                      <Icon className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Status */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-primary text-sm">➜</span>
                <span className="text-xs">status --availability</span>
              </div>
              <div className="ml-4 flex items-center gap-2 p-2 bg-muted/50 rounded-lg border border-border/50">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-xs font-medium text-green-600 dark:text-green-400">
                  AVAILABLE FOR NEW PROJECTS • READY TO COLLABORATE
                </span>
              </div>
            </div>

            {/* Command prompt */}
            <div className="pt-2 border-t border-border/30">
              <div className="flex items-center gap-2">
                <span className="text-primary text-sm">➜</span>
                <span className="text-muted-foreground text-xs">~/contact</span>
                <span className="animate-pulse text-primary">▋</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
