import 'material-icons/iconfont/material-icons.css';
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/Header';
import { NextSeo } from 'next-seo';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextSeo 
        title='NV Construções'
        description='Confira nossas realizações e entre em contato conosco para produzir o que você deseja. NV Construções: Construindo sonhos.'
        additionalLinkTags={[{
          rel: 'shortcut icon',
          href: 'https://nvconstrucoes.com.br/assets/fav/favicon-16x16.png'
        }]}/>
      <Header />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
