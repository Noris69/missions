import { AppProps } from 'next/app';
import Head from 'next/head';
import { FC } from 'react';
import { AppBar } from '../components/AppBar';
import { ContentContainer } from '../components/ContentContainer';
import { Footer } from '../components/Footer';
import Notifications from '../components/Notification';
import { ContextProvider } from '../contexts/ContextProvider';
require('@solana/wallet-adapter-react-ui/styles.css');
require('../styles/globals.css');

const App: FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <>
          <Head>
            <title>PISXELLS MISSIONS</title>
          </Head>
      <ContextProvider>
                <Component {...pageProps} />
      </ContextProvider>
              
        </>
    );
};

export default App;
