/* eslint-disable @next/next/no-img-element */

import { profileMockData } from "../__mocks__/profileMockData";

import React, { useContext, useEffect, useState } from "react";

import { ProfileContext } from "../components";

import {Stack, Image, Text, Box, Link, Button } from '@chakra-ui/react'

export const Profile = () => {
  const lensProfile = useContext(ProfileContext);
  console.log(lensProfile);

  return (
    <>
    <Stack gap='300px'>
      <Stack display="flex" flexDir= "wrap" gap='20px' >
          <Stack direction='column' width='30%' border='solid 1px rgba(217, 217, 217, 0.8)' borderRadius='20px'  justifyContent='center'>
            <Box background='rgba(255, 203, 124, 0.32)'>
              <Image
                boxSize='100px'
                objectFit='cover'
                src='../assets/herdao.jpg'
                alt='Dan Abramov'
                borderRadius='100%'
              />
              <Text>HerDao</Text>
            </Box>
            <Box padding='20px'>
              <Text>The communication protocol of web3. Push enables cross-chain notifications & messaging for dapps, wallets, users & more
              </Text>
              <Link href="https://t.me/herdaolatam">Link</Link>
            </Box>
          </Stack>
          <Stack direction='column' width='30%' border='solid 1px rgba(217, 217, 217, 0.8)' borderRadius='20px'  justifyContent='center'>
            <Box background='rgba(255, 203, 124, 0.32)'>
              <Image
                boxSize='100px'
                objectFit='cover'
                src='../assets/push.png'
                alt='Dan Abramov'
                borderRadius='100%'
              />
              <Text>Push Protocol</Text>
            </Box>
            <Box padding='20px'>
              <Text>The communication protocol of web3. Push enables cross-chain notifications & messaging for dapps, wallets, users & more
              </Text>
              <Link href="https://t.me/herdaolatam">Link</Link>
            </Box>
          </Stack>
          <Stack direction='column' width='30%' border='solid 1px rgba(217, 217, 217, 0.8)' borderRadius='20px'  justifyContent='center'>
            <Box background='rgba(255, 203, 124, 0.32)'>
              <Image
                boxSize='100px'
                objectFit='cover'
                src='../assets/huddle.jpeg'
                borderRadius='100%'
              />
              <Text>Huddle01</Text>
            </Box>
            <Box padding='20px'>
              <Text>The communication protocol of web3. Push enables cross-chain notifications & messaging for dapps, wallets, users & more
              </Text>
              <Link href="https://t.me/herdaolatam">Link</Link>
            </Box>
          </Stack>
        </Stack>
        <Box display="flex" justifyContent="flex-end">
          <Button onClick="newTeam">New</Button>              
        </Box>
    </Stack>
      
    </>
  );
};