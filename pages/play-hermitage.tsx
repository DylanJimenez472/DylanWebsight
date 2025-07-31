import Head from "next/head";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "../styles/PlayGame.module.css";
import { useEffect, useState } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function PlayHermitage() {
  const [gameLoaded, setGameLoaded] = useState(false);
  const [gameError, setGameError] = useState(false);

  useEffect(() => {
    console.log("PlayHermitage page loaded");
  }, []);

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
        style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}
      >
        <nav className={styles.navbar} style={{ background: 'rgba(255, 255, 255, 0.95)', padding: '16px 0' }}>
          <div className={styles.navContainer}>
            <div className={styles.logo}>
              <Link href="/">DylanJimenez</Link>
            </div>
            <ul className={styles.navLinks}>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/projects">Projects</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
        </nav>

        <main className={styles.main}>
          <div className={styles.heroSection}>
            <div className={styles.backLink}>
              <Link href="/projects" className={styles.backBtn}>
                <span className={styles.backArrow}>←</span>
                Back to Projects
              </Link>
            </div>
            
            <div className={styles.heroContent}>
              <div className={styles.gameBadge}>🎮 GAME</div>
              <h1 className={styles.title}>
                <span className={styles.titleMain}>Hermitage</span>
                <span className={styles.titleSub}>2D Platformer Adventure</span>
              </h1>
              <p className={styles.subtitle}>
                Embark on an epic journey through mysterious landscapes. 
                Jump, dash, and explore your way through challenging levels 
                in this beautifully crafted 2D platformer.
              </p>
              
              <div className={styles.heroStats}>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>6</span>
                  <span className={styles.statLabel}>Levels</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>∞</span>
                  <span className={styles.statLabel}>Fun</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>4</span>
                  <span className={styles.statLabel}>Controls</span>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.gameSection}>
            <div className={styles.gameContainer}>
              <div className={styles.gameFrame}>
                {!gameLoaded && !gameError && (
                  <div className={styles.gamePlaceholder}>
                    <div className={styles.gameIcon}>🎮</div>
                    <h3>Loading Game...</h3>
                    <p>Please wait while Hermitage loads</p>
                    <div className={styles.loadingSpinner}></div>
                  </div>
                )}
                
                {gameError && (
                  <div className={styles.gamePlaceholder}>
                    <div className={styles.gameIcon}>⚠️</div>
                    <h3>Game Loading Error</h3>
                    <p>The game couldn't load properly. This might be due to browser compatibility or network issues.</p>
                    <a 
                      href="/webherm/index.html" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className={styles.playButton}
                    >
                      <span className={styles.playIcon}>▶</span>
                      Open in New Tab
                    </a>
                  </div>
                )}

                <iframe 
                  src="/webherm/index.html"
                  title="Hermitage - 2D Platformer Game"
                  className={styles.gameIframe}
                  onLoad={() => setGameLoaded(true)}
                  onError={() => setGameError(true)}
                  allowFullScreen
                  allow="autoplay; fullscreen; microphone; camera; geolocation"
                  style={{
                    width: '100%',
                    height: '100%',
                    border: 'none',
                    display: gameLoaded ? 'block' : 'none'
                  }}
                />
              </div>
            </div>

            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <div className={styles.cardIcon}>🎯</div>
                <h3>Controls</h3>
                <ul className={styles.controlsList}>
                  <li><strong>WASD</strong> or <strong>Arrow Keys</strong> - Move</li>
                  <li><strong>Space</strong> - Jump</li>
                  <li><strong>Mouse</strong> - Look around</li>
                  <li><strong>ESC</strong> - Pause/Menu</li>
                </ul>
              </div>

              <div className={styles.infoCard}>
                <div className={styles.cardIcon}>✨</div>
                <h3>Features</h3>
                <ul className={styles.featuresList}>
                  <li>Smooth 2D platformer gameplay</li>
                  <li>Multiple challenging levels</li>
                  <li>Engaging mechanics and obstacles</li>
                  <li>Responsive controls</li>
                  <li>Beautiful pixel art graphics</li>
                </ul>
              </div>

              <div className={styles.infoCard}>
                <div className={styles.cardIcon}>🛠️</div>
                <h3>Built With</h3>
                <div className={styles.techGrid}>
                  <span className={styles.techTag}>Unity</span>
                  <span className={styles.techTag}>C#</span>
                  <span className={styles.techTag}>WebGL</span>
                  <span className={styles.techTag}>2D Platformer</span>
                </div>
              </div>

              <div className={styles.infoCard}>
                <div className={styles.cardIcon}>📱</div>
                <h3>Compatibility</h3>
                <ul className={styles.compatibilityList}>
                  <li>✅ Desktop browsers</li>
                  <li>✅ Modern WebGL support</li>
                  <li>✅ Fullscreen mode</li>
                  <li>⚠️ Mobile not supported</li>
                </ul>
              </div>
            </div>
          </div>

          <div className={styles.ctaSection}>
            <div className={styles.ctaContent}>
              <h2>Ready for the Challenge?</h2>
              <p>Test your skills and see how far you can go in Hermitage!</p>
              <div className={styles.ctaButtons}>
                <a 
                  href="/webherm/index.html" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={styles.ctaPrimary}
                >
                  🎮 Open in New Tab
                </a>
                <Link href="/projects" className={styles.ctaSecondary}>
                  View All Projects
                </Link>
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