import '../styles/globals.css';
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

export default MyApp;
