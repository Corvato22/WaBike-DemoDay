import React from 'react'
import { useDisclosure } from '@chakra-ui/hooks'
import { Button, Box, Flex, Spacer, Avatar, Text } from '@chakra-ui/react'
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

export const MenuBar = () => {
    const dispatch = useDispatch()
    // const {name} = useSelector(state => state.auth)

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

    const handleLogout = () => {
        dispatch(startLogout())
    }

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
                        <Avatar size='xl' name='Jon Mircha' ml='6' src='https://bit.ly/kent-c-dodds' />
                        <Text fontSize='xl' fontWeight='bold' color='white' mt='18px' ml='6'>Jon Mircha</Text>
                    </Box>

                    <DrawerBody>
                        <Box w='100%' p={4}>
                            <Flex my='5' _active={{ transform: 'scale(0.95)' }}>
                                <TriangleUpIcon w={6} h={6} mr='3' />
                                <Text fontSize='xl'>Inicio</Text>
                            </Flex>
                            <Flex my='5' _active={{ transform: 'scale(0.95)' }}>
                                <RepeatClockIcon w={6} h={6} mr='3' />
                                <Text fontSize='xl'>Historial</Text>
                            </Flex>
                            <Flex my='5' _active={{ transform: 'scale(0.95)' }}>
                                <WarningTwoIcon w={6} h={6} mr='3' />
                                <Text fontSize='xl'>Reportar Robo</Text>
                            </Flex>
                            <Flex my='5' _active={{ transform: 'scale(0.95)' }}>
                                <SettingsIcon w={6} h={6} mr='3' />
                                <Text fontSize='xl'>Configuraciones</Text>
                            </Flex>
                            <Flex my='5' onClick={handleLogout} _active={{ transform: 'scale(0.95)' }}>
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
                <DrawerContent bg='#EFEFEF' borderTopRadius="3xl">
                    {/* <DrawerCloseButton color='white' /> */}
                    <Box bg='#FFFFFF' w='100%' h='175px' p={4} display='flex' alignItems='center' borderTopRadius="3xl">
                        Aquí va todo lo de las rutas
                    </Box>

                    <DrawerBody>
                        <Box w='100%' p={4}>
                        </Box>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}
