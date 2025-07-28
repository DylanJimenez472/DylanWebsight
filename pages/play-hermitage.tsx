import Head from "next/head";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/PlayGame.module.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function PlayHermitage() {
  return (
    <>
      <Head>
        <title>Play Hermitage - 2D Platformer Game</title>
        <meta name="description" content="Play Hermitage, a challenging 2D platformer game built with Unity and WebGL" />
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
          <div className={styles.header}>
            <div className={styles.backLink}>
              <a href="/projects" className={styles.backBtn}>← Back to Projects</a>
            </div>
            <h1 className={styles.title}>🎮 Hermitage - 2D Platformer</h1>
            <p className={styles.subtitle}>
              A challenging 2D platformer game built with Unity and WebGL. 
              Navigate through levels, overcome obstacles, and test your skills!
            </p>
          </div>

          <div className={styles.gameContainer}>
            <div className={styles.gameInfo}>
              <div className={styles.controls}>
                <h3>🎮 Controls</h3>
                <ul>
                  <li><strong>WASD</strong> or <strong>Arrow Keys</strong> - Move</li>
                  <li><strong>Space</strong> - Jump</li>
                  <li><strong>Mouse</strong> - Look around</li>
                  <li><strong>ESC</strong> - Pause/Menu</li>
                </ul>
              </div>
              
              <div className={styles.features}>
                <h3>✨ Game Features</h3>
                <ul>
                  <li>Smooth 2D platformer gameplay</li>
                  <li>Multiple challenging levels</li>
                  <li>Engaging mechanics and obstacles</li>
                  <li>Responsive controls</li>
                  <li>Built with Unity and WebGL</li>
                </ul>
              </div>

              <div className={styles.gameNotice}>
                <h3>⚠️ Important Note</h3>
                <p>
                  This Unity WebGL game requires HTTPS to run properly due to Brotli compression. 
                  For the best experience, please use the "Open in New Tab" option below.
                </p>
              </div>
            </div>

            <div className={styles.gameFrame}>
              <div className={styles.gamePlaceholder}>
                <div className={styles.gameIcon}>🎮</div>
                <h3>Hermitage - 2D Platformer</h3>
                <p>Click the button below to play the game in a new tab</p>
                <a 
                  href="/webherm/index.html" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={styles.playButton}
                >
                  🎮 Play Hermitage
                </a>
                <div className={styles.gameInfo}>
                  <p><strong>Note:</strong> The game will open in a new tab for optimal performance.</p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.gameFooter}>
            <div className={styles.techInfo}>
              <h3>🛠️ Built With</h3>
              <div className={styles.techTags}>
                <span className={styles.techTag}>Unity</span>
                <span className={styles.techTag}>C#</span>
                <span className={styles.techTag}>WebGL</span>
                <span className={styles.techTag}>2D Platformer</span>
              </div>
            </div>
            
            <div className={styles.links}>
              <a href="/projects" className={styles.backToProjects}>
                View All Projects
              </a>
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