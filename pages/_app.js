import { useEffect } from 'react';
import Header from '../components/header';
import { ThemeProvider } from 'next-themes';
import Footer from "../components/footer";

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    window.onbeforeunload = () => {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <ThemeProvider>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  )
}

export default MyApp
