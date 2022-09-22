import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head />
      <body className='scrollbar-thin scrollbar-thumb-slate-400 scrollbar-track-transparent hover:scrollbar-thumb-slate-500'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}