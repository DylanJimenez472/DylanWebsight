import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Welcome to My Personal Website</title>
        <meta name="description" content="Personal website showcasing my work, interests, and journey" />
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
              <li><a href="/projects">Projects</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
        </nav>

        <main className={styles.main}>
          <div className={styles.hero}>
            <h1 className={styles.title}>Welcome to My World</h1>
            <p className={styles.subtitle}>
              Hi there! I'm passionate about creating amazing things and sharing my journey with the world.
            </p>
          </div>

          <div className={styles.sections}>
            <section className={styles.section}>
              <h2>About Me</h2>
              <p>
                I'm a creative individual who loves exploring new technologies, 
                building meaningful projects, and connecting with like-minded people. 
                When I'm not coding or learning, you'll find me exploring new places, 
                reading interesting books, or experimenting with new ideas.
              </p>
            </section>

            <section className={styles.section}>
              <h2>What I Do</h2>
              <div className={styles.skills}>
                <div className={styles.skill}>
                  <h3>Development</h3>
                  <p>Building web applications and digital solutions</p>
                </div>
                <div className={styles.skill}>
                  <h3>Design</h3>
                  <p>Creating beautiful and functional user experiences</p>
                </div>
                <div className={styles.skill}>
                  <h3>Learning</h3>
                  <p>Always exploring new technologies and skills</p>
                </div>
              </div>
            </section>

            <section className={styles.section}>
              <h2>Get In Touch</h2>
              <p>
                I'd love to hear from you! Whether you want to collaborate on a project, 
                share ideas, or just say hello, feel free to reach out.
              </p>
              <div className={styles.ctas}>
                <a
                  className={styles.primary}
                  href="mailto:hello@example.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Say Hello
                </a>
                <a
                  href="#projects"
                  className={styles.secondary}
                >
                  View My Work
                </a>
              </div>
            </section>
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
