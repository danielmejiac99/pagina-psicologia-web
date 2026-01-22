// pages/_app.js
import Head from 'next/head';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

import '../styles/global.css';
import '../styles/styles.css';


export default function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => {
      window.scrollTo(0, 0);
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Horizonte Psicológico</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
