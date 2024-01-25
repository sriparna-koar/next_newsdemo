

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import LoadingBar from 'react-top-loading-bar';
import Navbar from '../components/Navbar';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const [user, setuser] = useState({ value: null });
  const [key, setkey] = useState(0);
  const [progress, setProgress] = useState(0);
  const router = useRouter();

  useEffect(() => {
    router.events.on('routeChangeStart', () => {
      setProgress(40);
    });

    router.events.on('routeChangeComplete', () => {
      setProgress(100);
    });

  

    const token = localStorage.getItem('token');
    if (token) {
      setuser({ value: token });
      setkey(Math.random());
    }
  }, [router.query]);

  const logout = () => {
    localStorage.removeItem('token');
    setuser({ value: null });
    setkey(Math.random());
    router.push('/');
  };

  const showNavbar = router.pathname === '/';

  return (
    <>
      <LoadingBar
        color='#f11946'
        progress={progress}
        waitingTime={400}
        onLoaderFinished={() => setProgress(0)}
      />
      {showNavbar && user.value && <Navbar logout={logout} user={user} />}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
