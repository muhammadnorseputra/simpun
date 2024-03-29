import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from "next-themes";
import AOS from 'aos';
import 'aos/dist/aos.css';
import NextNProgress from 'nextjs-progressbar';
import useSound from 'use-sound'

import {
  RecoilRoot,
  } from 'recoil';
import { useEffect } from 'react';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      easing: 'ease-out-cubic',
      once: true,
      offset: 100,
      delay: 100,
    });
  });

  // Refresh Effect
  useEffect(() => {
    AOS.refresh()
  }, [])

  // MUSIK
  const [play, { sound }] = useSound('./musik/One-Direction-Right-Now-Audio.mp3', {
    autoplay: true,
    loop: true,
    forceSoundEnabled: true,
    soundEnabled: true,
    interrupt: false,
    volume: 0.15
  })
    
  return (
    <RecoilRoot>
      <Head>
        <title>Halo, Welcome</title>
      </Head>
      <NextNProgress color="#fff" startPosition={0.3} stopDelayMs={300} height={2} showOnShallow={true} nonce="my-nonce"/>
      <ThemeProvider enableSystem={true} defaultTheme="system" attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </RecoilRoot>
  )
}

export default MyApp
