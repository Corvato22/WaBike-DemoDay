import React from 'react'
import { ChevronLeftIcon } from '@chakra-ui/icons'
import { Heading, Spacer, Avatar, Wrap, WrapItem, Box, Flex, Table, Tbody, Tr, Td, TableCaption, } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

export const MyAccount = () => {

    const { newUser } = useSelector(store => store.register)

    console.log(newUser)

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
                            <Td>{newUser.name}</Td>
                        </Tr>
                        <Tr>
                            <Td>Email</Td>
                            <Td>{newUser.email}</Td>

                        </Tr>
                    </Tbody>

                </Table>
            </section>
        </>
    )
}