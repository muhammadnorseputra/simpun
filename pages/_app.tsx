import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from "next-themes";
import AOS from 'aos';
import 'aos/dist/aos.css';
import NextNProgress from 'nextjs-progressbar';

import {
  RecoilRoot,
  } from 'recoil';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      easing: 'ease-out-cubic',
      once: true,
      offset: 100,
      delay: 100,
    });
  });
  useEffect(() => {
    AOS.refresh()
  }, [])
  return (
    <RecoilRoot>
      <NextNProgress color="#56A3A6" startPosition={0.3} stopDelayMs={200} height={3} showOnShallow={true} nonce="my-nonce"/>
      <ThemeProvider enableSystem={true} defaultTheme="system" attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </RecoilRoot>
  )
}

export default MyApp
