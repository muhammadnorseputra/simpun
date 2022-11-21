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
      once: false,
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
      <Head>
        <title>Hi, Welcome</title>
        <link rel="apple-touch-icon" sizes="57x57" href="/favicons/apple-icon-57x57.png"/>
        <link rel="apple-touch-icon" sizes="60x60" href="/favicons/apple-icon-60x60.png"/>
        <link rel="apple-touch-icon" sizes="72x72" href="/favicons/apple-icon-72x72.png"/>
        <link rel="apple-touch-icon" sizes="76x76" href="/favicons/apple-icon-76x76.png"/>
        <link rel="apple-touch-icon" sizes="114x114" href="/favicons/apple-icon-114x114.png"/>
        <link rel="apple-touch-icon" sizes="120x120" href="/favicons/apple-icon-120x120.png"/>
        <link rel="apple-touch-icon" sizes="144x144" href="/favicons/apple-icon-144x144.png"/>
        <link rel="apple-touch-icon" sizes="152x152" href="/favicons/apple-icon-152x152.png"/>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-icon-180x180.png"/>
        <link rel="icon" type="image/png" sizes="192x192"  href="/favicons/android-icon-192x192.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="96x96" href="/favicons/favicon-96x96.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png"/>
        <link rel="manifest" href="/favicons/manifest.json"/>
        <meta name="msapplication-TileColor" content="#56A3A6"/>
        <meta name="msapplication-TileImage" content="/favicons/ms-icon-144x144.png"/>
        <meta name="theme-color" content="#56A3A6"/>
      </Head>
        <Component {...pageProps} />
      </ThemeProvider>
    </RecoilRoot>
  )
}

export default MyApp
