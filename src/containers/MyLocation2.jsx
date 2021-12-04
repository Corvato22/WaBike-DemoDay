import React from 'react'
import {
  Banner2,
  IconMarker
} from '../styles/MyLocationStyles'
import {
  Heading,
  Container,
  VStack,
  Button
} from '@chakra-ui/react'
import { Link } from "react-router-dom";

const MyLocation2 = () => {
  return (
    <>
      <Banner2>
        <IconMarker src='https://i.imgur.com/VquwkG7.png' />
      </Banner2>
      <Container>
        <VStack mt={8} spacing="3px" textAlign='center' >
          <br />
          <br />
          <Heading as='h2' size='2xl'>
            ¡Tenemos tu ubicación, ahora puedes establecer tu ruta!
          </Heading>
          <br />
          <br />
          <br />
          <Button
            variant="outline"
            width="full"
            mt={4}
            bg='#dfe3ee'
            colorScheme='cyan'
          >
            <Link to="/home">
              IR AL MAPA
            </Link>
          </Button>

        </VStack>
      </Container>
    </>
  )
}

export default MyLocation2