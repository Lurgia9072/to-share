import "../styles/globals.css";
import type { AppProps } from "next/app";
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import LensAuthenticationProvider from "../components/LensAuthenticationProvider";
import TagsFilterProvider from "../components/TagsFilterProvider";
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { mainnet, polygon, optimism, arbitrum, goerli } from 'wagmi/chains';
import { ChakraProvider } from '@chakra-ui/react'

 /* const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
} */

//export const theme = extendTheme({ colors })

const { chains, provider, webSocketProvider } = configureChains(
  [
    mainnet,
    polygon,
    optimism,
    arbitrum,
    ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true' ? [goerli] : []),
  ],
  [
    alchemyProvider({
      // This is Alchemy's default API key.
      // You can get your own at https://dashboard.alchemyapi.io

      apiKey: 'J4w7wEYMXrFo0oelBhM1w4somBQlDQAh',
      //apiKey: '',

    }),
    publicProvider(),
  ]
);

const { connectors } = getDefaultWallets({
  appName: "My RainbowKit App",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});


function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
    <WagmiConfig client={wagmiClient}>
      <LensAuthenticationProvider>
        <RainbowKitProvider chains={chains}>
        <TagsFilterProvider>
          <Component {...pageProps} />
        </TagsFilterProvider>
        </RainbowKitProvider>
      </LensAuthenticationProvider>
    </WagmiConfig>
    </ChakraProvider>
  );
}

export default App;
