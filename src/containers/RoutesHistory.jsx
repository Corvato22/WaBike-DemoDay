import { ChevronLeftIcon } from '@chakra-ui/icons'
import { Box, Flex, Heading, Center, Text } from '@chakra-ui/layout'
import React from 'react'
import { Link } from 'react-router-dom'


export const RoutesHistory = () => {
    return (
        <>
            <Box bg='#00BB9C'>
                <span > <Link to='/home'> <ChevronLeftIcon w={10} h={10} color='white' /> </Link>  </span>
                <Flex alignItems='center' mb='5' mx='5'>
                    <Heading mb='25px' color='white'>Historial</Heading>
                </Flex>
            </Box>
            <Center>
            <Box justifyContent='center' boxShadow='md' m='3' w="sm" borderWidth="0px" borderRadius="lg" overflow="hidden">
                <Flex>
                    <Box alignItems='center' rounded="md" p='5' m="3" as="a">
                        <Flex >
                            <i justify='center' style={{color: 'green', width: '15px'}} className="fas fa-map-pin"></i>
                            <Text ml="5" mb="3" as="h5" size="md">Estadio</Text>
                        </Flex>
                        <Flex>
                            <i style={{color : 'red', width: '15px'}} className="fas fa-map-marker-alt"></i>
                            <Text ml="5" mb="3" as="h5" size="md">Universidad Nacional</Text>
                        </Flex>
                    </Box>
                </Flex>
            </Box>
            </Center>

            
        </>
    )
}
