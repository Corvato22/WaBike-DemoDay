import React from 'react'
import { ChevronLeftIcon } from '@chakra-ui/icons'
import { Heading, Spacer, Avatar, Wrap, WrapItem, Box, Flex, Table, Tbody, Tr, Td, TableCaption, } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

export const MyAccount = () => {
    return (
        <>
            <Box bg='#00BB9C'>
                <span > <Link to='/settings'> <ChevronLeftIcon w={10} h={10} color='white' /> </Link>  </span>
                <Flex alignItems='center' mb='5' mx='5'>

                    <Heading color='white'>Cuenta</Heading>
                    <Spacer />
                    <Wrap my='3' mx='2' justify='end'>
                        <WrapItem>
                            <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
                        </WrapItem>
                    </Wrap>
                </Flex>

            </Box>

            <section>
                <Table variant='simple'>
                    <TableCaption>Mantendremos tus datos seguros.</TableCaption>

                    <Tbody>
                        <Tr>
                            <Td>Nombre</Td>
                            <Td>Jon Mircha</Td>
                        </Tr>
                        <Tr>
                            <Td>Email</Td>
                            <Td>mircha@gmail.com</Td>

                        </Tr>
                        <Tr>
                            <Td>Fecha de nacimiento</Td>
                            <Td>05/4/2000</Td>
                        </Tr>
                    </Tbody>

                </Table>
            </section>
        </>
    )
}