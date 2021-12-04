import React from 'react'
import {
    Banner2,
    IconCelu
} from '../styles/MyLocationStyles'
import {
    Heading,
    Container,
    Text,
    VStack,
    Button
} from '@chakra-ui/react'
import { Link } from "react-router-dom";

const MyLocation = () => {
    return (
        <>
            <Banner2>
                <IconCelu src='https://i.imgur.com/Duu31WM.png' />
            </Banner2>
            <Container>
                <VStack mt={8} spacing="3px" textAlign='center' >
                    <Heading as='h2' size='2xl' fontFamily='Montserrat' >
                        ¡Hola, un placer conocerte!
                    </Heading>
                    <br />
                    <Text fontSize='2xl'>Encuentra las mejores rutas para llegar a tu destino. ¡Seguro y rápido!</Text>
                    <br />
                    <Text fontSize='2xl'>Déjanos saber tu úbicación para empezar</Text>
                    <br />
                    <Button
                        variant="outline"
                        width="full"
                        mt={4}
                        bg='#dfe3ee'
                        colorScheme='cyan'
                        leftIcon={<i className="fas fa-location-arrow"></i>}
                    >
                        <Link to="/mylocation2">
                            Usar ubicación actual
                        </Link>
                    </Button>
                </VStack>
            </Container>
        </>
    )
}

export default MyLocation
