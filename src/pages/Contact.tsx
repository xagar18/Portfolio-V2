import { Github, Instagram, Linkedin, Twitter } from 'lucide-react';

const socials = [
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/xagar',
    Icon: Linkedin,
  },
  {
    name: 'Twitter/X',
    url: 'https://twitter.com/xagarr18',
    Icon: Twitter,
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com/xagarrrr',
    Icon: Instagram,
  },
  {
    name: 'Github',
    url: 'https://github.com/xagar18',
    Icon: Github,
  },
];

const Contact = () => {
  return (
    <section className="min-h-[70vh] flex flex-col justify-center items-center px-8 pt-24 animate-fade-in-up">
      <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight font-grotesk text-primary">
        Contact
      </h2>
      <div
        className="text-muted-foreground text-base md:text-lg mb-8 italic animate-fade-in-up"
        style={{ animationDelay: '.07s' }}
      >
        Let's make something unique together 🚀
      </div>
      <p
        className="text-lg md:text-xl mb-8 text-muted-foreground max-w-lg text-center animate-fade-in-up"
        style={{ animationDelay: '.1s' }}
      >
        Want to collaborate or just say hi?
        <br />
        Fill out the form below or email me at{' '}
        <a
          href="mailto:sagaryadav6352@gmail.com"
          className="text-primary underline underline-offset-4"
        >
          sagaryadav6352@gmail.com
        </a>
      </p>
      <form
        action="https://formspree.io/f/xyzwqjvn" // Replace with your Formspree endpoint
        method="POST"
        className="flex flex-col gap-6 w-full max-w-md animate-fade-in-up"
        style={{ animationDelay: '.15s' }}
      >
        <input
          required
          type="text"
          name="name"
          placeholder="Name"
          className="border-b border-border bg-transparent px-2 py-3 outline-none text-lg"
        />
        <input
          required
          type="email"
          name="email"
          placeholder="Email"
          className="border-b border-border bg-transparent px-2 py-3 outline-none text-lg"
        />
        <textarea
          required
          name="message"
          placeholder="Message"
          rows={4}
          className="border-b border-border bg-transparent px-2 py-3 outline-none text-lg"
        />
        <button
          type="submit"
          className="self-end rounded-full text-base font-semibold bg-primary text-primary-foreground px-6 py-2 transition hover:bg-primary/90"
        >
          Send
        </button>
      </form>
      <div
        className="w-full flex flex-col items-center mt-12 animate-fade-in-up"
        style={{ animationDelay: '.22s' }}
      >
        <div className="w-16 border-t border-border mb-6" />
        <div className="font-semibold text-base text-muted-foreground mb-4">Connect with me</div>
        <div className="flex gap-5">
          {socials.map(({ name, url, Icon }) => (
            <a
              key={name}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={name}
              className="hover-scale rounded-full border border-primary/20 p-2 transition hover:bg-primary/10 group"
            >
              <Icon className="w-6 h-6 text-primary group-hover:text-primary/80 transition" />
            </a>
          ))}
        </div>
      </div>
      <footer className="mt-16 text-xs text-muted-foreground/40 text-center w-full">
        Made with ❤️ &lt;3 by Sagar.
      </footer>
    </section>
  );
};

export default Contact;
