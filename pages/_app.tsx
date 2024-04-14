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
  return (
    <RecoilRoot>
      <Head>
        <title>Halo, Welcome</title>
      </Head>
      <ThemeProvider enableSystem={false} defaultTheme="dark" attribute="class">
        <NextNProgress color="#fff" startPosition={0} stopDelayMs={0} height={4} showOnShallow={true} nonce="my-nonce" options={{ showSpinner: false, easing: 'ease' }}/>
        <Component {...pageProps} />
      </ThemeProvider>
    </RecoilRoot>
  )
}

export default MyApp
