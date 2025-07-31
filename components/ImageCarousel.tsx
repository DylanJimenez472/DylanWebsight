import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from '@/styles/ImageCarousel.module.css';

interface ImageCarouselProps {
  images: string[];
  interval?: number;
}

export default function ImageCarousel({ images, interval = 3000 }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Filter out any images that might not exist
  const validImages = images.filter(image => image && image.trim() !== '');

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % validImages.length);
    }, interval);

    return () => clearInterval(timer);
  }, [validImages.length, interval]);
  
  if (!validImages || validImages.length === 0) {
    return (
      <div className={styles.carousel}>
        <div className={styles.placeholder}>
          <p>📸 Add images to the scrollPics folder to see them here!</p>
          <p style={{ fontSize: '0.9rem', marginTop: '8px' }}>
            Supported formats: JPG, PNG, GIF, WebP
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.carousel}>
      <div className={styles.imageContainer}>
        {validImages.map((image, index) => (
          <div
            key={image}
            className={`${styles.imageWrapper} ${
              index === currentIndex ? styles.active : styles.inactive
            }`}
          >
            <Image
              src={image}
              alt={`Gallery image ${index + 1}`}
              width={600}
              height={400}
              className={styles.image}
              priority={index === currentIndex}
            />
          </div>
        ))}
      </div>
      
      <div className={styles.indicators}>
        {validImages.map((_, index) => (
          <button
            key={index}
            className={`${styles.indicator} ${
              index === currentIndex ? styles.active : ''
            }`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
} 