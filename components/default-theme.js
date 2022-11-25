
import Header from './header';
import { ThemeProvider } from 'next-themes';
import Footer from "./footer";

export default function DefaultTheme (pageProps) {
  return (
    <ThemeProvider attribute="class">
      <Header />
      {pageProps.children}
      <Footer />
    </ThemeProvider>
  )
}
