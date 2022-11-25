import '../styles/globals.css';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    window.onbeforeunload = () => {
      window.scrollTo(0, 0);
    }
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp
