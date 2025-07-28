import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Projects.module.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Sample project data
const projects = [
  {
    id: 1,
    name: "Hermitage - 2D Platformer",
    description: "A challenging 2D platformer game built with Unity and WebGL. Features smooth controls, multiple levels, and engaging gameplay mechanics.",
    image: "/hermitage-thumbnail.jpg",
    category: "Game Development",
    technologies: ["Unity", "C#", "WebGL", "2D Platformer"],
    isGame: true,
    gameUrl: "/webherm/"
  },
  {
    id: 2,
    name: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.",
    image: "/project1.jpg",
    category: "Web Development",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"]
  },
  {
    id: 3,
    name: "Task Management App",
    description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    image: "/project2.jpg",
    category: "Mobile App",
    technologies: ["React Native", "Firebase", "Redux"]
  },
  {
    id: 4,
    name: "Portfolio Website",
    description: "A modern, responsive portfolio website built with Next.js and styled-components. Features smooth animations and SEO optimization.",
    image: "/project3.jpg",
    category: "Web Design",
    technologies: ["Next.js", "Styled Components", "Framer Motion"]
  },
  {
    id: 5,
    name: "Weather Dashboard",
    description: "A weather dashboard that displays current conditions, forecasts, and historical data with interactive charts and maps.",
    image: "/project4.jpg",
    category: "Data Visualization",
    technologies: ["JavaScript", "Chart.js", "OpenWeather API"]
  },
  {
    id: 6,
    name: "Social Media Clone",
    description: "A social media platform with features like posts, comments, likes, and real-time notifications using WebSockets.",
    image: "/project5.jpg",
    category: "Full Stack",
    technologies: ["React", "Express", "Socket.io", "PostgreSQL"]
  },
  {
    id: 7,
    name: "AI Chat Assistant",
    description: "An AI-powered chat assistant that helps users with customer support queries using natural language processing.",
    image: "/project6.jpg",
    category: "AI/ML",
    technologies: ["Python", "TensorFlow", "Flask", "OpenAI API"]
  }
];

export default function Projects() {
  return (
    <>
      <Head>
        <title>My Projects - Personal Website</title>
        <meta name="description" content="Explore my latest projects and creative work" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}
      >
        <nav className={styles.navbar}>
          <div className={styles.navContainer}>
            <div className={styles.logo}>
              <Link href="/">My Website</Link>
            </div>
            <ul className={styles.navLinks}>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/projects" className={styles.active}>Projects</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
        </nav>

        <main className={styles.main}>
          <div className={styles.header}>
            <h1 className={styles.title}>My Projects</h1>
            <p className={styles.subtitle}>
              Here are some of the projects I&apos;ve worked on. Each one represents a unique challenge and learning experience.
            </p>
          </div>

          <div className={styles.projectsGrid}>
            {projects.map((project) => (
              <div key={project.id} className={styles.projectTile}>
                <div className={styles.projectImage}>
                  <Image
                    src={project.image}
                    alt={project.name}
                    width={400}
                    height={300}
                    className={styles.image}
                    onError={(e) => {
                      // Fallback to a placeholder if image doesn't exist
                      e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f0f0f0'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='%23999' font-family='Arial' font-size='16'%3EProject Image%3C/text%3E%3C/svg%3E";
                    }}
                  />
                  <div className={styles.overlay}>
                    <div className={styles.overlayContent}>
                      <p className={styles.description}>{project.description}</p>
                      <div className={styles.technologies}>
                        {project.technologies.map((tech, index) => (
                          <span key={index} className={styles.techTag}>
                            {tech}
                          </span>
                        ))}
                      </div>
                      {project.isGame ? (
                        <a href="/webherm/index.html" target="_blank" rel="noopener noreferrer" className={styles.playGameBtn}>
                          🎮 Play Game
                        </a>
                      ) : (
                        <Link href={`/projects/${project.id}`} className={styles.seeMoreBtn}>
                          See More
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
                <div className={styles.projectInfo}>
                  <h3 className={styles.projectName}>{project.name}</h3>
                  <span className={styles.projectCategory}>{project.category}</span>
                  {project.isGame && (
                    <span className={styles.gameBadge}>🎮 Playable</span>
                  )}
                </div>
              </div>
            ))}
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