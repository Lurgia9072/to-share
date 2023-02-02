import { ColorModeScript } from '@chakra-ui/react'
import { Html, Head, Main, NextScript } from 'next/document'
//import {theme} from './_app'

export default function Document() {
  return (
    <Html lang='en'>
      <Head />
      <body>
        {/* 👇 Here's the script */}
        <ColorModeScript />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
