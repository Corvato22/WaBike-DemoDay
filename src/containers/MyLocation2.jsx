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
        <IconMarker src='https://res.cloudinary.com/dzyyi4p7x/image/upload/v1638697735/WaBike/MyLocation2_fulnre.svg' />
      </Banner2>
      <Container>
        <VStack mt='25%' spacing="3px" textAlign='center' >
          <br />
          <br />
          <Heading as='h2' size='2xl' fontFamily='Montserrat' color='#242E42'>
            ¡Tenemos tu ubicación, ahora puedes establecer tu ruta!
          </Heading>
          <br />
          <br />
          <br />
          <Button
            variant="outline"
            bg='#00BB9C'
            color='white'
            colorScheme='#edf2f7'
            width='full'
            mt={4}
            _hover={{ bg: '#edf2f7', color: '#00BB9C' }}
            _active={{
              bg: '#edf2f7',
              color: '#00BB9C',
              transform: 'scale(0.95)',
              borderColor: '#00BB9C',
            }}
          >
            <Link to="/home">
              Ir al Mapa
            </Link>
          </Button>

        </VStack>
      </Container>
    </>
  )
}

export default MyLocation2