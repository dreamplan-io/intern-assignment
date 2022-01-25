import '../styles/globals.css';
import { React } from 'react';
import { PropTypes } from 'prop-types';
import { SessionProvider } from 'next-auth/react';
import { FavoritesContextProvider } from '../store/favorites-context';

function MyApp({ Component, pageProps }) {

  return (
    <FavoritesContextProvider>
      <SessionProvider session={pageProps.session}>
        <Component {...pageProps} />
      </SessionProvider>
    </FavoritesContextProvider>
  );

}

MyApp.propTypes = {
  children: PropTypes.any,
  Component: PropTypes.any,
  pageProps: PropTypes.any
}

export default MyApp;
