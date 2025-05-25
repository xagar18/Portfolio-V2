const skills = [
  'JavaScript (ES6+)',
  'TypeScript',
  'Node.js',
  'Postman',
  'Docker',
  'Appwrite',
  'React / Next.js',
  'Drizzle ORM',
  'C++',
  'Python',
  'MongoDB',
  'CSS / TailwindCSS',
  'Express.js',
  'PostgreSQL',
  'DSA (Data Structures & Algorithms)',
  'Prisma ORM',
];

const Skills = () => (
  <section className="min-h-[70vh] flex flex-col justify-center items-center px-8 pt-24 animate-fade-in-up">
    <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight font-grotesk text-primary">
      Skills
    </h2>
    <div
      className="text-muted-foreground text-base md:text-lg mb-10 italic animate-fade-in-up"
      style={{ animationDelay: '.07s' }}
    >
      Focused, modern toolset for unique interfaces
    </div>
    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-lg md:text-xl text-muted-foreground font-medium">
      {skills.map((skill, i) => (
        <li
          key={skill}
          className="pl-6 relative animate-fade-in-up"
          style={{ animationDelay: `${0.05 * i}s` }}
        >
          <span className="absolute left-0 top-[.6em] w-2 h-2 bg-primary rounded-full opacity-70" />
          {skill}
        </li>
      ))}
    </ul>
    <div className="w-14 border-t border-border mt-20 opacity-20" />
  </section>
);

export default Skills;
