import { useEffect } from 'react';
import Link from 'next/link';

export default function WebHermRedirect() {
  useEffect(() => {
    // Redirect to the actual game file
    window.location.href = '/webherm/index.html';
  }, []);

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{ textAlign: 'center' }}>
        <h2>Loading Hermitage Game...</h2>
        <p>If you&apos;re not redirected automatically, <Link href="/webherm/index.html">click here</Link></p>
      </div>
    </div>
  );
} 