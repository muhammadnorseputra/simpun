import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from "next-themes";
import AOS from 'aos';
import 'aos/dist/aos.css';

import {
  RecoilRoot,
  } from 'recoil';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      easing: 'ease-out-cubic',
      once: true,
      offset: 50,
      delay: 50,
    });
  });
  useEffect(() => {
    AOS.refresh()
  }, [])
  return <RecoilRoot><ThemeProvider enableSystem={true} defaultTheme="system" attribute="class"><Component {...pageProps} /></ThemeProvider></RecoilRoot>
}

export default MyApp
