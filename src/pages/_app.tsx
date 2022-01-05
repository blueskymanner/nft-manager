import React from 'react';
import 'common/flow';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@mui/material';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { theme } from 'themes';
import { PersistGate } from 'redux-persist/integration/react';
import { AppProvider } from 'modules/App';
import createEmotionCache from 'common/cache';
import { persistor, store } from 'common/redux';
import 'styles/main.css';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
      <Provider store={store}>
        <PersistGate loading={<h1>Loadiing...</h1>} persistor={persistor}>
          <ThemeProvider theme={theme}>
            <AppProvider>
              <Component {...pageProps} />
            </AppProvider>
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </CacheProvider>
  );
}
