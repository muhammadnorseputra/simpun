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
    interrupt: true,
    volume: 0.25
  })
    
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
