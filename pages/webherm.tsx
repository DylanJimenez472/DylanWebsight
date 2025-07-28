import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function WebHermRedirect() {
  const router = useRouter();

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
        <p>If you're not redirected automatically, <a href="/webherm/index.html">click here</a></p>
      </div>
    </div>
  );
} 