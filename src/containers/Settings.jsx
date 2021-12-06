import React from 'react'
import { ChevronLeftIcon } from '@chakra-ui/icons'
import { Heading, Avatar, Wrap, WrapItem, Box, Flex, Table, Tbody, Tr, Td, } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

export const Settings = () => {
    return (
        <>
            <Box bg='#00BB9C'>
                <span > <Link to='/home'> <ChevronLeftIcon w={10} h={10} color='white' /> </Link>  </span>
                <Flex alignItems='center' mb='5' mx='5'>
                    <Heading mb='25px' color='white'>Configuraciones</Heading>
                </Flex>
            </Box>

            <section>
                <Table variant='simple'>
                    <Tbody>
                        <Tr>
                            <Td>
                                <Link to='/myaccount'>
                                    <Wrap>
                                        <WrapItem>
                                            <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
                                        </WrapItem>
                                        <WrapItem fontWeight='bold' alignItems='center'>Nombre</WrapItem>
                                    </Wrap>
                                </Link>

                            </Td>
                        </Tr>
                        <Tr>
                            <Td>Términos y política de privacidad</Td>
                        </Tr>
                        <Tr>
                            <Td>Contáctenos</Td>
                        </Tr>
                    </Tbody>
                </Table>

                <Table my='30px' color='red' fontWeight='bold'>
                    <Tbody >
                        <Td textAlign='center'>Cerrar Sesión</Td>
                    </Tbody>
                </Table>
            </section>

        </>
    )
}