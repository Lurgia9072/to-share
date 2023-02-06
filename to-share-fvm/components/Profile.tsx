/* eslint-disable @next/next/no-img-element */

import { profileMockData } from "../__mocks__/profileMockData";

import React, { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudUpload } from '@fortawesome/free-solid-svg-icons'
import { ProfileContext } from "../components";

import {
  Stack, Image, Text, Box, Link,
  Button, Modal, ModalOverlay,
  ModalContent, ModalCloseButton,
  ModalHeader,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  ModalFooter,
  useDisclosure,
  Textarea,
  Select
} from '@chakra-ui/react'

export const Profile = () => {
  const lensProfile = useContext(ProfileContext);
  console.log(lensProfile);

  const { isOpen, onOpen, onClose } = useDisclosure()

  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)



  return (
    <>
      <Stack gap='300px'>
        <Stack display="flex" flexDir="wrap" gap='20px' >
          <Stack direction='column' width='30%' border='solid 1px rgba(217, 217, 217, 0.8)' borderRadius='20px' justifyContent='center'>
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
          <Stack direction='column' width='30%' border='solid 1px rgba(217, 217, 217, 0.8)' borderRadius='20px' justifyContent='center'>
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
          <Stack direction='column' width='30%' border='solid 1px rgba(217, 217, 217, 0.8)' borderRadius='20px' justifyContent='center'>
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
        {/* create new team */}
        <Box display="flex" justifyContent="flex-end">
          <Button onClick={onOpen}>New team</Button>
          <Modal
            initialFocusRef={initialRef}
            finalFocusRef={finalRef}
            isOpen={isOpen}
            onClose={onClose}
          >
            <ModalOverlay justifyContent="center" />
            <ModalContent justifyContent="center" >
              <ModalHeader>Create your team</ModalHeader>
              {/* upload avatar */}

              <ModalBody width="100%" justifyContent="center" alignItems="center" marginLeft="100px">
                <Box width="180px" height="180" borderRadius="100%" justifyContent="center" background="rgba(217, 217, 217, 0.2)" border="1px  rgba(217, 217, 217, 0.8)">

                  <div style={{ color: 'rgba(217, 217, 217, 0.5)', fontSize: '4em', padding: '30px 0 0 50PX' }}>
                    <FontAwesomeIcon icon={faCloudUpload} />
                  </div>
                </Box>
              </ModalBody>

              <ModalCloseButton />
              <ModalBody pb={6}>

                <FormControl>
                  <FormLabel>Name your team</FormLabel>
                  <Input ref={initialRef} placeholder='First name' />
                </FormControl>

                <FormControl>
                  <FormLabel>Name your team</FormLabel>
                  <Select ref={initialRef} placeholder='First name' />
                </FormControl>

                <FormControl>
                  <FormLabel>URL</FormLabel>
                  <Input ref={initialRef} placeholder='First name' />
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>Description</FormLabel>
                  <Textarea placeholder='Last name' />
                </FormControl>
              </ModalBody>
                
              <ModalFooter>
                <Button colorScheme='blue' mr={3}>
                  Save
                </Button>
                <Button onClick={onClose}>Cancel</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Box>
      </Stack>

    </>
  );
};