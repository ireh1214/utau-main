import Head from 'next/head';
import '@/styles/reset.scss';
import '@/styles/common.scss';

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="google" content="notranslate" />
        <link rel="shortcut icon" href="fav.ico" type="image/x-icon" />
      </Head>

      <Component {...pageProps} />
    </div>
  );
}
