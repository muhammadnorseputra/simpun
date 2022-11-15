import { Html, Head, Main, NextScript } from 'next/document'


export default function Document() {
  return (
    <Html>
      <Head>
      <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@200;300;400;500;600;700&display=swap" rel="stylesheet"/> 
      </Head>
      <body className="bg-gray-100 dark:bg-slate-900 transition-colors duration-300 delay-100">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
