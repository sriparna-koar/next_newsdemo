import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import LoadingBar from 'react-top-loading-bar';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState({ value: null });
  const [progress, setProgress] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const handleRouteChangeStart = () => {
      setProgress(40);
    };

    const handleRouteChangeComplete = () => {
      setProgress(100);
    };

    router.events.on('routeChangeStart', handleRouteChangeStart);
    router.events.on('routeChangeComplete', handleRouteChangeComplete);

    const token = localStorage.getItem('token');
    if (token) {
      setUser({ value: token });
    }

    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart);
      router.events.off('routeChangeComplete', handleRouteChangeComplete);
    };
  }, [router.events, router.query]);

  const logout = () => {
    localStorage.removeItem('token');
    setUser({ value: null });
    router.push('/');
  };

  return (
    <>
      <LoadingBar
        color='#f11946'
        progress={progress}
        waitingTime={400}
        onLoaderFinished={() => setProgress(0)}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
