import 'bootstrap/dist/css/bootstrap.min.css';
import 'material-icons/iconfont/material-icons.css';
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/Header';
import { NextSeo } from 'next-seo';
import { ApolloProvider } from '@apollo/client';
import { client } from '../lib/apollo';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextSeo
        title='NV Construções'
        description='Confira nossas realizações e entre em contato conosco para produzir o que você deseja. NV Construções: Construindo sonhos.'
        additionalLinkTags={[{
          rel: 'shortcut icon',
          href: 'https://nvconstrucoes.com.br/assets/fav/favicon-16x16.png'
        }]}
        openGraph={{
          title: 'NV Construções',
          images: [{
            url: 'https://nvconst.vervel.app/src_1200.png',
            width: 1200,
            height: 630,
            alt: 'Logo N e V'
          }]
        }} />
      <Header />
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </>
  )
}

export default MyApp
