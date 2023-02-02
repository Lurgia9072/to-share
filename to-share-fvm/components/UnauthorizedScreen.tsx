import { useConnectModal } from "@rainbow-me/rainbowkit";
import { Box, Button, ButtonGroup } from '@chakra-ui/react'
import { Card, CardHeader, CardBody, Link, Text, Flex, Divider, CardFooter, Image, Stack, Heading } from '@chakra-ui/react'

export const UnauthorizedScreen = () => {
  const { openConnectModal } = useConnectModal();

  return (
    <>
      <Card background="#000000" minHeight="100vh" borderRadius="0" color="white">
        <CardHeader display="flex" justifyContent="space-between">
          <Link color="#2288FF" fontWeight="bold" fontSize="30px">To-share</Link>
          <Box >
            <Link paddingRight="10px">About</Link>
            <Link paddingRight="10px">About</Link>
            <Link paddingRight="10px">About</Link>
          </Box>
        </CardHeader>
        <Flex justifyContent="center" alignItems="center">
          <Card width="150vh" background="transparent" color="white">
            <CardBody>
              <Text fontSize='6xl' fontWeight="extrabold" color="#2288FF">Welcome to</Text>
              <Stack mt='6' spacing='3'>
                <Heading size='md' color="#2288FF">Imagina un lugar donde puedes ...</Heading>
                <Text>
                  Drive descentralizado para almacenar archivos y compartir con los de colaboradores , poder almacenar archivos delicados como testimonios,almacenar contraseñas, compartir archivos con los equipos de trabajo, el contratointeligente se  encargara de hacer pagos a sus colaboradores segun su trabajo aportado en el proyecto o tarea asignada segun su complejidad de la tarea
                </Text>
              </Stack>
            </CardBody>
            <CardFooter>
              <ButtonGroup display="block">
                <Text fontSize='md'>Please sign in with your wallet</Text>
               
                <Stack direction='row' spacing={10}  paddingTop="3vh">
                  <Button background="#2288FF" color="white" variant='solid' width="20vh" borderRadius="20px" onClick={openConnectModal}>
                       Sign In
                  </Button>
                  <Button  variant='outline' border=" 1px solid #2288FF" width="20vh"  borderRadius="20px" color="#2288FF">
                    Guia
                  </Button>
                </Stack>
              </ButtonGroup>
            </CardFooter>
          </Card>
        </Flex>

      </Card>
    </>
  );
};
