import React from 'react'
import { useDisclosure } from '@chakra-ui/hooks'
import { Button, Box, Flex, Spacer, Avatar, Text, Image, Divider } from '@chakra-ui/react'
import { ExternalLinkIcon, HamburgerIcon, RepeatClockIcon, SearchIcon, SettingsIcon, TriangleUpIcon, WarningTwoIcon } from '@chakra-ui/icons'
import {
    Drawer,
    DrawerBody,
    DrawerOverlay,
    DrawerContent,
    // DrawerFooter,
    // DrawerHeader,
    // DrawerCloseButton,
} from '@chakra-ui/react'
import { useDispatch } from 'react-redux'
import { startLogout } from '../../actions/loginAction'
import { Link, useNavigate } from 'react-router-dom'
import stations from "../../data/enCicla";


export const MenuBar = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(startLogout())
        navigate("/login")
    }

    const {
        isOpen: isOpenMenu,
        onOpen: onOpenMenu,
        onClose: onCloseMenu,
    } = useDisclosure()

    const {
        isOpen: isOpenSearch,
        onOpen: onOpenSearch,
        onClose: onCloseSearch
    } = useDisclosure()

    const btnRef = React.useRef()

    let getUserData = localStorage.getItem('userData')
    let userData = JSON.parse(getUserData)

    return (
        <>
            <Box bg='#00BB9C' w='100%' h='48px' p={1}>
                <Flex>
                    <Button ref={btnRef} colorScheme='#00BB9C' onClick={onOpenMenu}>
                        <HamburgerIcon w={6} h={6} _active={{ transform: 'scale(0.90)' }} />
                    </Button>
                    <Spacer />
                    <Button ref={btnRef} colorScheme='#00BB9C' onClick={onOpenSearch}>
                        <SearchIcon w={6} h={6} _active={{ transform: 'scale(0.90)' }} />
                    </Button>
                </Flex>
            </Box>
            <Drawer
                isOpen={isOpenMenu}
                placement='left'
                onClose={onCloseMenu}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                    {/* <DrawerCloseButton color='white' /> */}
                    <Box
                        bg='#00BB9C'
                        w='100%'
                        h='275px'
                        p={4}
                        display='flex'
                        alignItems='flex-start'
                        flexDir='column'
                        justifyContent='center'
                    >
                        <Avatar size='xl' name={userData.name} ml='6' src={userData.usrImg} />
                        <Text fontSize='xl' fontWeight='bold' color='white' mt='18px' ml='6'>{userData.name}</Text>
                    </Box>

                    <DrawerBody>
                        <Box w='100%' p={4}>
                            <Flex as={Link} to="/home" w='100%' my='5' _active={{ transform: 'scale(0.95)' }} cursor='pointer'>
                                {/* <TriangleUpIcon w={6} h={6} mr='3' /> */}
                                <i className="fas fa-home icons"></i>
                                <Text fontSize='xl'>Inicio</Text>
                            </Flex>
                            {/* <Flex as={Link} to="/history" w='100%' my='5' _active={{ transform: 'scale(0.95)' }} cursor='pointer'>
                                <RepeatClockIcon w={6} h={6} mr='3' />
                                <Text fontSize='xl'>Historial</Text>
                            </Flex> */}
                            <Flex as={Link} to="/report" my='5' _active={{ transform: 'scale(0.95)' }} cursor='pointer'>
                                {/* <WarningTwoIcon w={6} h={6} mr='3' /> */}
                                <i className="fas fa-mask icons"></i>
                                <Text fontSize='xl'>Reportar Robo</Text>
                            </Flex>
                            <Flex as={Link} to="/settings" w='100%' my='5' _active={{ transform: 'scale(0.95)' }} cursor='pointer'>
                                <SettingsIcon w={6} h={6} mr='3' />
                                <Text fontSize='xl'>Configuraciones</Text>
                            </Flex>
                            <Flex my='5' onClick={handleLogout} _active={{ transform: 'scale(0.95)' }} cursor='pointer'>
                                <ExternalLinkIcon w={6} h={6} mr='3' color='red' />
                                <Text fontSize='xl' color='red'>Cerrar Sesión</Text>
                            </Flex>
                        </Box>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
            <Drawer
                isOpen={isOpenSearch}
                placement='bottom'
                onClose={onCloseSearch}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent bg='#EFEFEF' h='60vh' borderTopRadius="3xl">
                    {/* <DrawerCloseButton color='white' /> */}
                    <Box bg='#FFFFFF' w='100%' p={5} display='flex' alignItems='center' borderTopRadius="3xl" mb='30px'>
                        <Box mr='15px'>
                            <Image src='https://res.cloudinary.com/dzyyi4p7x/image/upload/v1639626507/WaBike/Current_destiny_fxjebw.svg' alt='Icon_Graph' />
                        </Box>
                        <Box>
                            <Box mb='25px'>
                                <Text fontSize='13' color='#C8C7CC' fontWeight='regular'>DIRECCIÓN DE PARTIDA</Text>
                                <Text fontSize='17' color='#242E42' fontWeight='regular'>Mi ubicación actual</Text>
                            </Box>

                            <Box mt='25px'>
                                <Text fontSize='13' color='#C8C7CC' fontWeight='regular'>DESTINO</Text>
                                <Text fontSize='17' color='#242E42' fontWeight='regular'>EnCicla - Suramericana</Text>
                            </Box>
                        </Box>
                    </Box>

                    <Box bg='#FFFFFF' w='100%' h='100%' px='10px' display='flex' alignItems='center'>
                        <Box w='100%' h='100%' overflowY='scroll'>
                            {stations.map((station, i) => (
                                <Box key={i} display='flex' flexDir='column'>
                                    <Box display='flex' alignItems='center' my='10px' >
                                        <Image boxSize='40px' mr='5px' src='https://res.cloudinary.com/dzyyi4p7x/image/upload/v1639637827/WaBike/EnCicla_Shadow_qn7zdy.svg' alt='Icon_Graph' />
                                        <Text onClick={() =>{localStorage.setItem('sta',station.id)}} w='350px' fontSize='17' color='#242E42' fontWeight='regular' cursor='pointer' _active={{ transform: 'scale(0.98)' }}>{station.name}</Text>
                                    </Box>
                                    <Divider />
                                </Box>
                            ))}
                        </Box>
                    </Box>
                </DrawerContent>
            </Drawer>
        </>
    )
}
