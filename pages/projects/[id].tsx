import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/ProjectDetail.module.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Sample project data (in a real app, this would come from a database)
const projects = [
  {
    id: 1,
    name: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.",
    fullDescription: "This comprehensive e-commerce platform was built to provide a complete online shopping experience. The project features a modern React frontend with a robust Node.js backend, MongoDB database, and Stripe payment integration. Key features include user authentication, product catalog, shopping cart, order management, and an admin dashboard for inventory management.",
    image: "/project1.jpg",
    category: "Web Development",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    features: [
      "User authentication and authorization",
      "Product catalog with search and filtering",
      "Shopping cart and checkout process",
      "Payment processing with Stripe",
      "Order management system",
      "Admin dashboard for inventory",
      "Responsive design for all devices"
    ],
    challenges: "The biggest challenge was implementing real-time inventory updates and ensuring secure payment processing while maintaining a smooth user experience.",
    solutions: "Implemented WebSocket connections for real-time updates and used Stripe's secure payment APIs with proper error handling and validation.",
    githubUrl: "https://github.com/username/ecommerce-platform",
    liveUrl: "https://ecommerce-demo.com"
  },
  {
    id: 2,
    name: "Task Management App",
    description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    fullDescription: "A modern task management application designed for teams to collaborate effectively. Built with React Native for cross-platform compatibility, the app features real-time updates, drag-and-drop task organization, and comprehensive team collaboration tools.",
    image: "/project2.jpg",
    category: "Mobile App",
    technologies: ["React Native", "Firebase", "Redux"],
    features: [
      "Real-time task updates",
      "Drag-and-drop task organization",
      "Team collaboration features",
      "Task assignment and deadlines",
      "Progress tracking and analytics",
      "Push notifications",
      "Offline functionality"
    ],
    challenges: "Implementing smooth drag-and-drop functionality across different screen sizes and ensuring real-time synchronization without conflicts.",
    solutions: "Used React Native's PanGestureHandler for smooth drag-and-drop and implemented conflict resolution strategies in Firebase for real-time updates.",
    githubUrl: "https://github.com/username/task-app",
    liveUrl: "https://task-app-demo.com"
  },
  {
    id: 3,
    name: "Portfolio Website",
    description: "A modern, responsive portfolio website built with Next.js and styled-components. Features smooth animations and SEO optimization.",
    fullDescription: "A personal portfolio website showcasing my work and skills. Built with Next.js for optimal performance and SEO, featuring smooth animations, responsive design, and modern UI/UX principles.",
    image: "/project3.jpg",
    category: "Web Design",
    technologies: ["Next.js", "Styled Components", "Framer Motion"],
    features: [
      "Responsive design for all devices",
      "Smooth page transitions and animations",
      "SEO optimization",
      "Fast loading times",
      "Modern UI/UX design",
      "Contact form integration",
      "Blog functionality"
    ],
    challenges: "Creating smooth animations while maintaining fast loading times and ensuring accessibility standards.",
    solutions: "Used Framer Motion for optimized animations and implemented lazy loading for images and components.",
    githubUrl: "https://github.com/username/portfolio",
    liveUrl: "https://my-portfolio.com"
  },
  {
    id: 4,
    name: "Weather Dashboard",
    description: "A weather dashboard that displays current conditions, forecasts, and historical data with interactive charts and maps.",
    fullDescription: "An interactive weather dashboard that provides comprehensive weather information including current conditions, forecasts, and historical data. Features interactive charts, maps, and detailed weather analytics.",
    image: "/project4.jpg",
    category: "Data Visualization",
    technologies: ["JavaScript", "Chart.js", "OpenWeather API"],
    features: [
      "Current weather conditions",
      "7-day weather forecast",
      "Historical weather data",
      "Interactive charts and graphs",
      "Location-based weather",
      "Weather alerts and notifications",
      "Responsive design"
    ],
    challenges: "Handling API rate limits and creating smooth, responsive charts that work well on mobile devices.",
    solutions: "Implemented efficient API caching and used Chart.js with responsive configurations for optimal mobile experience.",
    githubUrl: "https://github.com/username/weather-dashboard",
    liveUrl: "https://weather-demo.com"
  },
  {
    id: 5,
    name: "Social Media Clone",
    description: "A social media platform with features like posts, comments, likes, and real-time notifications using WebSockets.",
    fullDescription: "A social media platform clone featuring all the essential social networking features. Built with React frontend, Express backend, and real-time WebSocket connections for live interactions.",
    image: "/project5.jpg",
    category: "Full Stack",
    technologies: ["React", "Express", "Socket.io", "PostgreSQL"],
    features: [
      "User profiles and authentication",
      "Post creation and sharing",
      "Comments and likes system",
      "Real-time notifications",
      "Friend/follow system",
      "Image upload and sharing",
      "Search and discovery features"
    ],
    challenges: "Implementing real-time features like live notifications and ensuring smooth performance with large datasets.",
    solutions: "Used Socket.io for real-time features and implemented efficient database queries with proper indexing.",
    githubUrl: "https://github.com/username/social-media-clone",
    liveUrl: "https://social-demo.com"
  },
  {
    id: 6,
    name: "AI Chat Assistant",
    description: "An AI-powered chat assistant that helps users with customer support queries using natural language processing.",
    fullDescription: "An intelligent chat assistant powered by AI and natural language processing. The system can understand user queries, provide helpful responses, and escalate complex issues to human agents when needed.",
    image: "/project6.jpg",
    category: "AI/ML",
    technologies: ["Python", "TensorFlow", "Flask", "OpenAI API"],
    features: [
      "Natural language understanding",
      "Context-aware conversations",
      "Multi-language support",
      "Sentiment analysis",
      "Automated responses",
      "Human agent escalation",
      "Conversation analytics"
    ],
    challenges: "Training the AI model to understand context and provide accurate, helpful responses while handling edge cases.",
    solutions: "Used transfer learning with pre-trained models and implemented a hybrid approach combining rule-based and ML-based responses.",
    githubUrl: "https://github.com/username/ai-chat-assistant",
    liveUrl: "https://ai-chat-demo.com"
  }
];

export default function ProjectDetail() {
  const router = useRouter();
  const { id } = router.query;
  
  const project = projects.find(p => p.id === parseInt(id as string));
  
  if (!project) {
    return (
      <div className={styles.page}>
        <div className={styles.error}>
          <h1>Project Not Found</h1>
          <p>The project you're looking for doesn't exist.</p>
          <a href="/projects" className={styles.backBtn}>Back to Projects</a>
        </div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{project.name} - Project Details</title>
        <meta name="description" content={project.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}
      >
        <nav className={styles.navbar}>
          <div className={styles.navContainer}>
            <div className={styles.logo}>
              <a href="/">My Website</a>
            </div>
            <ul className={styles.navLinks}>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/projects" className={styles.active}>Projects</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
        </nav>

        <main className={styles.main}>
          <div className={styles.backLink}>
            <a href="/projects" className={styles.backBtn}>← Back to Projects</a>
          </div>

          <div className={styles.projectHeader}>
            <div className={styles.projectImage}>
              <Image
                src={project.image}
                alt={project.name}
                width={600}
                height={400}
                className={styles.image}
                onError={(e) => {
                  e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400' viewBox='0 0 600 400'%3E%3Crect width='600' height='400' fill='%23f0f0f0'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='%23999' font-family='Arial' font-size='16'%3EProject Image%3C/text%3E%3C/svg%3E";
                }}
              />
            </div>
            <div className={styles.projectInfo}>
              <span className={styles.category}>{project.category}</span>
              <h1 className={styles.title}>{project.name}</h1>
              <p className={styles.description}>{project.fullDescription}</p>
              <div className={styles.technologies}>
                {project.technologies.map((tech, index) => (
                  <span key={index} className={styles.techTag}>
                    {tech}
                  </span>
                ))}
              </div>
              <div className={styles.links}>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className={styles.githubBtn}>
                  View on GitHub
                </a>
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className={styles.liveBtn}>
                  Live Demo
                </a>
              </div>
            </div>
          </div>

          <div className={styles.projectDetails}>
            <div className={styles.section}>
              <h2>Key Features</h2>
              <ul className={styles.featuresList}>
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className={styles.section}>
              <h2>Challenges & Solutions</h2>
              <div className={styles.challengeSolution}>
                <div className={styles.challenge}>
                  <h3>Challenges</h3>
                  <p>{project.challenges}</p>
                </div>
                <div className={styles.solution}>
                  <h3>Solutions</h3>
                  <p>{project.solutions}</p>
                </div>
              </div>
            </div>
          </div>
        </main>
        
        <footer className={styles.footer}>
          <p>© 2024 My Personal Website. Built with Next.js and ❤️</p>
          <div className={styles.social}>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              LinkedIn
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              Twitter
            </a>
          </div>
        </footer>
      </div>
    </>
  );
} 