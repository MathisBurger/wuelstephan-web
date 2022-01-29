import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <div>
        <Head>
          <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
            <link rel="icon" type="image/x-icon" href="/logo.png" />
        </Head>

        <Component {...pageProps} />
      </div>
  );
}

export default MyApp;
