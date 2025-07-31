// This script creates placeholder images for the carousel
// Run this with Node.js to generate sample images

const fs = require('fs');
const path = require('path');

// Create a simple SVG placeholder image
function createSVGPlaceholder(width, height, text, filename) {
  const svg = `
<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="#f0f0f0"/>
  <rect x="10%" y="10%" width="80%" height="80%" fill="#e0e0e0" stroke="#ccc" stroke-width="2"/>
  <text x="50%" y="45%" text-anchor="middle" font-family="Arial, sans-serif" font-size="24" fill="#666">${text}</text>
  <text x="50%" y="65%" text-anchor="middle" font-family="Arial, sans-serif" font-size="16" fill="#999">800x600</text>
</svg>`;

  const filePath = path.join(__dirname, '..', 'public', 'scrollPics', filename);
  fs.writeFileSync(filePath, svg);
  console.log(`Created ${filename}`);
}

// Create sample images
const samples = [
  { filename: 'sample1.jpg', text: 'Sample Image 1' },
  { filename: 'sample2.jpg', text: 'Sample Image 2' },
  { filename: 'sample3.jpg', text: 'Sample Image 3' },
  { filename: 'sample4.jpg', text: 'Sample Image 4' },
  { filename: 'sample5.jpg', text: 'Sample Image 5' }
];

console.log('Creating sample images...');
samples.forEach(sample => {
  createSVGPlaceholder(800, 600, sample.text, sample.filename.replace('.jpg', '.svg'));
});

console.log('\n✅ Sample images created!');
console.log('📁 Check the public/scrollPics folder');
console.log('🔄 Replace these with your actual images'); 