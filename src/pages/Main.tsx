const Main = () => {
  return (
    <section className="w-full h-full flex flex-col justify-center items-center px-8 pt-24 animate-fade-in-up">
      <h1 className="text-6xl md:text-7xl  font-bold font-grotesk tracking-tight mb-3 animate-fade-in-up text-primary">
        Hi,{' '}
        <span className="text-primary md:inline flex md:text-6xl text-[46px] mb-4">
          I'm Sagar Yadav
        </span>
      </h1>
      <div
        className="mb-8 text-base md:text-lg text-muted-foreground font-semibold tracking-wide animate-fade-in-up"
        style={{ animationDelay: '.08s' }}
      >
        Full-Stack Developer • Seamless Digital Experiences
      </div>
      <p
        className="max-w-xl text-xl md:text-1xl text-[13px] font-normal text-muted-foreground text-center mb-12 animate-fade-in-up"
        style={{ animationDelay: '0.15s' }}
      >
        I build scalable, high-performance applications that merge functionality with intuitive
        design.
        <br />
        Clean code, optimized user experience, and innovative problem-solving define my approach.
      </p>
      <div className="flex space-x-6 animate-fade-in-up" style={{ animationDelay: '.2s' }}>
        <a
          href="/projects"
          className="text-base font-semibold border-b-2 border-transparent hover:border-primary story-link transition duration-300"
        >
          View My Work
        </a>
        <a
          href="/contact"
          className="text-base font-semibold border-b-2 border-transparent hover:border-primary story-link transition duration-300"
        >
          Get in Touch
        </a>
      </div>
      <div className="w-14 border-t border-border mt-20 opacity-20" />
    </section>
  );
};

export default Main;
