/* eslint-disable jsx-a11y/role-supports-aria-props */
import React, { useContext, useEffect, useState } from "react";
import { useDisconnect } from "wagmi";
import { explore } from "../lib/lens/explore-publications";
import { ProfileContext, TagsFilterContext } from "../components";
import { deleteLensLocalStorage } from "../lib/lens/localStorage";
import { Link, Box, Button, CardBody, Stack, Card, RadioGroup, DrawerBody, DrawerContent, Drawer, CardHeader } from '@chakra-ui/react'
import {
  ExternalLinkIcon,
  AddIcon,
  RepeatIcon,
  EditIcon,
  HamburgerIcon
} from '@chakra-ui/icons'
import { useDisclosure } from '@chakra-ui/react'

export const Navbar = () => {
  const [show, setShow] = useState(false);
  const [profile, setProfile] = useState(false);
  const { disconnect } = useDisconnect();

  const { tags } = useContext(TagsFilterContext);

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
        <Card width="100%" height="80px" borderRadius="0" position="relative">
          <CardHeader>
          <Link color="#2288FF" fontWeight="bold" fontSize="30px">To-share</Link>
          </CardHeader>
        </Card>

        {/* bady */}
        <Card>

        </Card>

        {/* left card */}
        <Card width="15%" borderRadius="0" minHeight="100vh" background="rgba(217, 217, 217, 0.12)">

          <CardBody >
             <Button background="#FFFF" color="rgba(0, 0, 0, 0.66)" variant='solid' width="20vh" borderRadius="20px" border="1px solid rgba(0, 0, 0, 0.1)">
             New +
            </Button> 


          </CardBody>

        </Card>

      </Card>
    </>
  );
};
