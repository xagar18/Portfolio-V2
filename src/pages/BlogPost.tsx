
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, User, Clock, Tag } from "lucide-react";

// This will be replaced with MongoDB data in the future
const blogPosts = [
  {
    id: 1,
    title: "Getting Started with Modern Web Development",
    content: `
      <h2>Introduction</h2>
      <p>Modern web development has evolved tremendously over the past decade. With the rise of frameworks like React, Vue, and Angular, developers now have powerful tools to build complex, interactive applications.</p>
      
      <h2>Key Technologies</h2>
      <p>When starting with modern web development, here are the essential technologies you should learn:</p>
      <ul>
        <li><strong>React</strong> - A popular JavaScript library for building user interfaces</li>
        <li><strong>TypeScript</strong> - Adds static typing to JavaScript</li>
        <li><strong>Tailwind CSS</strong> - A utility-first CSS framework</li>
        <li><strong>Node.js</strong> - JavaScript runtime for backend development</li>
      </ul>
      
      <h2>Best Practices</h2>
      <p>Following best practices is crucial for maintainable code:</p>
      <ol>
        <li>Write clean, readable code</li>
        <li>Use version control (Git)</li>
        <li>Test your applications</li>
        <li>Keep learning and stay updated</li>
      </ol>
      
      <h2>Conclusion</h2>
      <p>Modern web development offers exciting opportunities. Start with the basics, practice regularly, and don't be afraid to experiment with new technologies.</p>
    `,
    date: "2024-06-01",
    author: "Your Name",
    tags: ["React", "TypeScript", "Web Dev"],
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "The Art of Clean Code",
    content: `
      <h2>What is Clean Code?</h2>
      <p>Clean code is code that is easy to read, understand, and maintain. It's not just about making code work—it's about making it work well and be sustainable over time.</p>
      
      <h2>Principles of Clean Code</h2>
      <p>Here are the fundamental principles every developer should follow:</p>
      <ul>
        <li><strong>Meaningful Names</strong> - Use descriptive variable and function names</li>
        <li><strong>Small Functions</strong> - Keep functions focused on a single task</li>
        <li><strong>Comments</strong> - Write code that explains itself, use comments sparingly</li>
        <li><strong>Formatting</strong> - Consistent indentation and spacing</li>
      </ul>
      
      <h2>Refactoring</h2>
      <p>Refactoring is the process of improving code without changing its functionality. It's an essential skill for maintaining clean code over time.</p>
      
      <h2>Testing</h2>
      <p>Clean code is testable code. Writing tests helps ensure your code works as expected and makes refactoring safer.</p>
    `,
    date: "2024-05-28",
    author: "Your Name",
    tags: ["Clean Code", "Best Practices"],
    readTime: "8 min read"
  },
  {
    id: 3,
    title: "Building Responsive UIs with Tailwind CSS",
    content: `
      <h2>Introduction to Tailwind CSS</h2>
      <p>Tailwind CSS is a utility-first CSS framework that provides low-level utility classes to build custom designs without leaving your HTML.</p>
      
      <h2>Why Choose Tailwind?</h2>
      <p>Tailwind offers several advantages over traditional CSS frameworks:</p>
      <ul>
        <li><strong>Utility-First</strong> - Build complex components from simple utilities</li>
        <li><strong>Responsive Design</strong> - Mobile-first responsive design made easy</li>
        <li><strong>Customizable</strong> - Highly customizable design system</li>
        <li><strong>Performance</strong> - Only includes the CSS you actually use</li>
      </ul>
      
      <h2>Responsive Design</h2>
      <p>Tailwind makes responsive design straightforward with its mobile-first breakpoint system. Use prefixes like 'sm:', 'md:', 'lg:' to apply styles at different screen sizes.</p>
      
      <h2>Best Practices</h2>
      <p>When using Tailwind CSS, consider these best practices:</p>
      <ol>
        <li>Start with mobile design first</li>
        <li>Use custom components for repeated patterns</li>
        <li>Leverage Tailwind's design tokens</li>
        <li>Keep your utility classes organized</li>
      </ol>
    `,
    date: "2024-05-25",
    author: "Your Name",
    tags: ["CSS", "Tailwind", "UI/UX"],
    readTime: "6 min read"
  }
];

const BlogPost = () => {
  const { id } = useParams();
  const postId = parseInt(id || "1");
  const post = blogPosts.find(p => p.id === postId);

  if (!post) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-primary mb-4">Post Not Found</h1>
          <p className="text-muted-foreground mb-8">The blog post you're looking for doesn't exist.</p>
          <Link 
            to="/blog"
            className="inline-flex items-center gap-2 text-primary hover:underline"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <article className="w-full min-h-screen px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <Link 
          to="/blog"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Blog
        </Link>

        {/* Article Header */}
        <header className="mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-grotesk tracking-tight mb-6 text-primary leading-tight">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>{new Date(post.date).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center gap-1">
              <User className="w-4 h-4" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{post.readTime}</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Tag className="w-4 h-4 text-muted-foreground" />
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </header>

        {/* Article Content */}
        <div 
          className="prose prose-lg max-w-none text-foreground prose-headings:text-primary prose-headings:font-grotesk prose-headings:tracking-tight prose-p:text-muted-foreground prose-p:leading-relaxed prose-li:text-muted-foreground prose-strong:text-primary"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Bottom Navigation */}
        <div className="mt-16 pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row justify-between gap-4">
            {postId > 1 && (
              <Link 
                to={`/blog/${postId - 1}`}
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Previous Post
              </Link>
            )}
            {postId < blogPosts.length && (
              <Link 
                to={`/blog/${postId + 1}`}
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group sm:ml-auto"
              >
                Next Post
                <ArrowLeft className="w-4 h-4 rotate-180 group-hover:translate-x-1 transition-transform" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogPost;
