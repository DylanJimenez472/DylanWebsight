import { useEffect } from 'react';

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
        <p>If you&apos;re not redirected automatically, <a href="/webherm/index.html">click here</a></p>
      </div>
    </div>
  );
} 