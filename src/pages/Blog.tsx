
import { Calendar, User, Tag, ArrowRight, Clock } from "lucide-react";
import { Link } from "react-router-dom";

// This will be replaced with MongoDB data in the future
const blogPosts = [
  {
    id: 1,
    title: "Getting Started with Modern Web Development",
    excerpt: "Exploring the latest trends and best practices in web development using React, TypeScript, and modern tooling. Learn how to build scalable applications.",
    date: "2024-06-01",
    author: "Your Name",
    tags: ["React", "TypeScript", "Web Dev"],
    readTime: "5 min read",
    featured: true
  },
  {
    id: 2,
    title: "The Art of Clean Code",
    excerpt: "Writing maintainable, readable code that stands the test of time. Best practices and principles every developer should know to improve code quality.",
    date: "2024-05-28",
    author: "Your Name",
    tags: ["Clean Code", "Best Practices"],
    readTime: "8 min read",
    featured: false
  },
  {
    id: 3,
    title: "Building Responsive UIs with Tailwind CSS",
    excerpt: "How to create beautiful, responsive user interfaces using Tailwind CSS and modern design principles. A complete guide to utility-first CSS.",
    date: "2024-05-25",
    author: "Your Name",
    tags: ["CSS", "Tailwind", "UI/UX"],
    readTime: "6 min read",
    featured: false
  }
];

const Blog = () => {
  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <section className="w-full min-h-screen px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-grotesk tracking-tight mb-4 lg:mb-6 text-primary">
            Blog
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Thoughts, tutorials, and insights about web development, design, and technology
          </p>
        </div>

        {/* Featured Post */}
        {featuredPost && (
          <div className="mb-12 lg:mb-16">
            <article className="p-6 sm:p-8 border border-border rounded-2xl hover:border-primary/30 transition-all duration-300 bg-card/50">
              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 text-xs font-medium bg-primary text-primary-foreground rounded-full">
                  Featured
                </span>
                <span className="text-primary font-medium text-sm">{featuredPost.readTime}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-grotesk mb-4 hover:text-primary transition-colors">
                {featuredPost.title}
              </h2>

              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-6">
                {featuredPost.excerpt}
              </p>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    <span>{featuredPost.author}</span>
                  </div>
                </div>
                
                <Link 
                  to={`/blog/${featuredPost.id}`}
                  className="group flex items-center gap-2 text-primary font-semibold hover:underline transition-all duration-200 w-fit"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </div>

              <div className="flex items-center gap-2 mt-4">
                <Tag className="w-4 h-4 text-muted-foreground" />
                <div className="flex flex-wrap gap-2">
                  {featuredPost.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium bg-accent text-accent-foreground rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </div>
        )}

        {/* Regular Posts Grid */}
        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
          {regularPosts.map((post) => (
            <article
              key={post.id}
              className="p-6 border border-border rounded-xl hover:border-primary/20 transition-all duration-300 hover:shadow-lg bg-card/30"
            >
              <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground mb-4">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>

              <h2 className="text-xl sm:text-2xl font-bold font-grotesk mb-3 hover:text-primary transition-colors">
                {post.title}
              </h2>

              <p className="text-muted-foreground leading-relaxed mb-4 text-sm sm:text-base">
                {post.excerpt}
              </p>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex items-center gap-2">
                  <Tag className="w-4 h-4 text-muted-foreground" />
                  <div className="flex flex-wrap gap-2">
                    {post.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <Link 
                  to={`/blog/${post.id}`}
                  className="group flex items-center gap-2 text-primary font-semibold hover:underline transition-all duration-200 w-fit"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
