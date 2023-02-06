import {
  createReactClient,
  studioProvider,
} from '@livepeer/react';
import * as React from 'react';

export const livepeerClient = createReactClient({
  provider: studioProvider({
    apiKey: "e84a68f0-8390-4aed-8414-b5f99cd3663c",
  }),
});
 
// Pass client to React Context Provider
