/* eslint-disable jsx-a11y/role-supports-aria-props */
import React, { useContext, useEffect, useState } from "react";
import { useDisconnect } from "wagmi";
import { explore } from "../lib/lens/explore-publications";
import { ProfileContext, TagsFilterContext } from "../components";
import { deleteLensLocalStorage } from "../lib/lens/localStorage";
import {
  Link,
  Box,
  Button,
  CardBody,
  PopoverHeader,
  Card, Popover,
  PopoverContent,
  PopoverTrigger,
  CardHeader,
  PopoverArrow,
  PopoverCloseButton,
  PopoverBody,
  PopoverFooter,
  ButtonGroup
} from '@chakra-ui/react'

import {
  ExternalLinkIcon,
  AddIcon,
  EditIcon,
  AttachmentIcon,
  RepeatIcon,
  ChevronDownIcon,
  BellIcon
} from '@chakra-ui/icons'
import { useDisclosure } from '@chakra-ui/react'

export const Navbar = () => {
  const [show, setShow] = useState(false);
  const [profile, setProfile] = useState(false);
  const { disconnect } = useDisconnect();
  const initialFocusRef = React.useRef()
  const { tags } = useContext(TagsFilterContext);
  const { isOpen, onToggle, onClose } = useDisclosure();
  const lensProfile = useContext(ProfileContext);

  useEffect(() => {
    explore({ tags }).then((data) => {
      // TODO Integrate with card listing
      console.log(data);
    });
  }, [tags]);

  return (
    <>
      <Card>
        {/* header */}
        <Card width="100%" height="80px" borderRadius="0" >
          <CardHeader display="flex" justifyContent="space-between" >
            <Link color="#2288FF" fontWeight="bold" fontSize="30px">To-share</Link>

            <Box background="none" display="flex" paddingLeft="50px" justifyContent="flex-end">

              <div>
                <Popover>
                  <PopoverTrigger>
                    <AttachmentIcon></AttachmentIcon>
                  </PopoverTrigger>
                  <PopoverContent>
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <PopoverHeader>guia Carpetas</PopoverHeader>
                    <PopoverBody>todas las Notificaciones</PopoverBody>
                  </PopoverContent>
                </Popover>
              </div>
              <Box width="10px"> </Box>
              <div >
                <Popover>
                  <PopoverTrigger>
                    <BellIcon></BellIcon>
                  </PopoverTrigger>
                  <PopoverContent>
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <PopoverHeader>Notificaciones!</PopoverHeader>
                    <PopoverBody>Are you sure you want to have that milkshake?</PopoverBody>
                  </PopoverContent>
                </Popover>
              </div>
              <Box width="10px"> </Box>
              <div>
                <Popover>
                  <PopoverTrigger>
                    <svg width="20px" height="25" viewBox="0 0 24 24" fill="0">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                      <path d="M0 0h24v24H0z" fill="none" />
                    </svg>
                  </PopoverTrigger>
                  <PopoverContent>
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <PopoverHeader>Perfil</PopoverHeader>
                    <PopoverBody>los dato de perfil</PopoverBody>
                  </PopoverContent>
                </Popover>
              </div>
              <Box width="10px"> </Box>
              <div>
                0xCcC...2811C
              </div>
            </Box>

          </CardHeader>
        </Card>

        {/* bady */}
        <Card>

        </Card>

        {/* left card */}
        <Card width="15%" borderRadius="0" minHeight="100vh" background="rgba(217, 217, 217, 0.4)">

          <CardBody >
            <Popover
              returnFocusOnClose={false}
              isOpen={isOpen}
              onClose={onClose}
              placement='right'
              closeOnBlur={false}
            >
              <PopoverTrigger>
                <Button background="#ffff" border="1px solid rgba(217, 217, 217, 0.8)" width="150px" borderRadius="20px" onClick={onToggle}>New</Button>
              </PopoverTrigger>
              <PopoverContent>
                <PopoverHeader fontWeight='semibold'>Confirmation</PopoverHeader>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverBody>
                  Are you sure you want to continue with your action?
                </PopoverBody>                
              </PopoverContent>
            </Popover>

          </CardBody>

        </Card>

      </Card>
    </>
  );
};
