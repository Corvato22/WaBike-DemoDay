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

    let getUserData = localStorage.getItem('userData')
    let userData = JSON.parse(getUserData)

    // useEffect(() => {
    //     console.log(register)
    // }, [])

    return (
        <>
            <Banner2>
                <IconCelu src='https://res.cloudinary.com/dzyyi4p7x/image/upload/v1638697609/WaBike/MyLocation_av5rub.svg' />
            </Banner2>
            <Container>
                <VStack mt='25%' spacing='3px' textAlign='center' >
                    <Heading as='h2' size='2xl' fontFamily='Montserrat' color='#242E42' >
                        ¡Hola {userData.name.split(" ")[0]}, un placer conocerte!
                    </Heading>
                    <br />
                    <Text fontSize='2xl' color='#262628'>Encuentra las mejores rutas para llegar a tu destino. ¡Seguro y rápido!</Text>
                    <br />
                    <Text fontSize='2xl' color='#262628'>Déjanos saber tu ubicación para empezar</Text>
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
