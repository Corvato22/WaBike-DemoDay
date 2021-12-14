import React from 'react'
import { ChevronLeftIcon } from '@chakra-ui/icons'
import { Heading, Avatar, Wrap, WrapItem, Box, Flex, Table, Tbody, Tr, Td, } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { accountDeleteAsync } from '../actions/loginAction'
import { useDispatch } from 'react-redux'
import { getAuth } from 'firebase/auth'
import Swal from 'sweetalert2'

export const Settings = () => {

    const auth = getAuth();
    const user = auth.currentUser;
    const dispatch = useDispatch()

    const handleDeleteAccount = (user) => {
        dispatch(accountDeleteAsync(user))

    }

    return (
        <>
            <Box bg='#00bb9c'>
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
                    <Box w='100%' display='flex' alignItems='center' justifyContent='center' my='30px'>
                        <Box w='170px' textAlign='center' color='red' fontWeight='bold' cursor='pointer' onClick={() => {
                            Swal.fire({
                                title: '¿Estás seguro de que deseas eliminar tu cuenta?',
                                text: 'No podrás deshacer este cambio',
                                icon: 'warning',
                                showCancelButton: true,
                                confirmButtonColor: '#d33',
                                cancelButtonColor: '#00bb9c',
                                confirmButtonText: 'Sí, eliminar cuenta',
                                cancelButtonText: 'Cancelar'
                            }).then((result) => {
                                if (result.isConfirmed) {
                                    handleDeleteAccount(user);
                                }
                            })
                        }}>Eliminar Cuenta
                        </Box>
                    </Box>
                </Table>
            </section>

        </>
    )
}