import type { AppProps } from 'next/app'
import "../globals.css";
import Layout from '@/components/Layout';
 
export default function MyApp({ Component, pageProps }: AppProps) {
  return <Layout><Component {...pageProps} /></Layout>
}

