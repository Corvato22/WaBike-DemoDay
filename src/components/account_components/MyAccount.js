import React from 'react'
import { ChevronLeftIcon } from '@chakra-ui/icons'
import { Heading, Spacer, Avatar, Wrap, WrapItem, Box, Flex, Table, Tbody, Tr, Td, TableCaption, } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

export const MyAccount = () => {

    let getUserData = localStorage.getItem('userData')
    let userData = JSON.parse(getUserData)

    return (
        <>
            <Box bg='#00BB9C'>
                <span > <Link to='/settings'> <ChevronLeftIcon w={10} h={10} color='white' /> </Link>  </span>
                <Flex alignItems='center' mb='5' mx='5'>

                    <Heading color='white'>Cuenta</Heading>
                    <Spacer />
                    <Wrap my='3' mx='2' justify='end'>
                        <WrapItem>
                            <Avatar name={userData.name} src={userData.usrImg} />
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
                            <Td>{userData.name}</Td>
                        </Tr>
                        <Tr>
                            <Td>Email</Td>
                            <Td>{userData.email}</Td>
                        </Tr>
                    </Tbody>

                </Table>
            </section>
        </>
    )
}