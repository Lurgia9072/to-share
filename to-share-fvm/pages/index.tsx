import Head from 'next/head'
import { Layout } from "../components";
import { TagsFilter } from "../components/TagsFilter";
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import { Avatar, AvatarBadge, Center, Stack } from '@chakra-ui/react'
import { WagmiConfig, createClient } from 'wagmi'
import { getDefaultProvider } from 'ethers'
import { Profile } from '../components'
import { Card, CardHeader, CardBody, Heading, Box, StackDivider, WrapItem, Flex, Text } from '@chakra-ui/react'


const inter = Inter({ subsets: ['latin'] })

const client = createClient({
  autoConnect: true,
  provider: getDefaultProvider(),
})

export default function Home() {
  return (
    <div className="bg-white">
    <Head>
      <title>To-Share</title>
      <meta name="description" content="to-share" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />
    </Head>
    <Layout
      title={"to-share | Home"}
      pageDescription={"TODO: Descripcion de la pagina"}
    >
      <div className="container mx-auto py-10 h-64 md:w-4/5 w-11/12 px-6 ">
        {/* <Profile /> */}
        {/* <Tabs /> */}
        <div className="mb-3">
         {/*  <TagsFilter /> */}
        </div>

        <div className="w-full h-auto">{/* <Pagination /> */}</div>
      </div>
    </Layout>
  </div>
  )
}
