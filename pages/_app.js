import '../styles/globals.css';
import React, { useEffect, useState } from 'react';

function MyApp({ Component, pageProps }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    if (!mounted) {
      window.onbeforeunload = () => {
        window.scrollTo(0, 0);
      }
    }
    setMounted(true)
  }, []);

  return mounted && <Component {...pageProps} />;
}

export default MyApp
