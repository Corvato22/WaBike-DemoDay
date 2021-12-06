import { ChevronLeftIcon, TriangleUpIcon, TriangleDownIcon } from '@chakra-ui/icons'
import { Box, Flex, Heading, HStack, Text } from '@chakra-ui/layout'
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
            <Box boxShadow='md' m='3' maxW="sm" borderWidth="0px" borderRadius="lg" overflow="hidden">
                <HStack spacing='5px'>
                    <Box alignItems='center' rounded="md" p='5' m="3" as="a">
                        <Flex >
                            <TriangleUpIcon color='green' />
                            <Text ml="5" mb="3" as="h5" size="md">Estadio</Text>
                        </Flex>
                        <Flex>
                            <TriangleDownIcon color='red' />
                            <Text ml="5" mb="3" as="h5" size="md">Universidad Nacional</Text>
                        </Flex>

                    </Box>
                </HStack>

            </Box>
        </>
    )
}
