import React, { useContext, useEffect } from 'react'
import { SocketContext } from '../../context/SocketContext'

import { useMapbox } from '../../hooks/useMapbox'

import {
    Button,
    Image,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Box,
    chakra,
    Flex,
    SimpleGrid,
    Stat,
    StatLabel,
    StatNumber,
    useColorModeValue,
} from '@chakra-ui/react'


const ptoInit = {
    lng: -75.5635,
    lat: 6.2518,
    zoom: 13.5
}
interface StatsCardProps {
    title: string;
    stat: string;
    icon: ReactNode;
  }
function StatsCard(props: StatsCardProps) {
    const { title, stat, icon } = props;
    return (
      <Stat
        px={{ base: 2, md: 4 }}
        py={'5'}
        shadow={'xl'}
        border={'1px solid'}
        borderColor={useColorModeValue('gray.800', 'gray.500')}
        rounded={'lg'}>
        <Flex justifyContent={'space-between'}>
          <Box pl={{ base: 2, md:0 }}>
            <StatLabel fontWeight={'medium'} isTruncated>
              {title}
            </StatLabel>
            <StatNumber fontSize={'1xl'} fontWeight={'medium'}>
              {stat}
            </StatNumber>
          </Box>
          <Box
            my={'auto'}
            color={useColorModeValue('gray.800', 'gray.200')}
            alignContent={'center'}>
            {icon}
          </Box>
        </Flex>
      </Stat>
    );
  }
export const MapReport = () => {


    const { isOpen, onOpen, onClose } = useDisclosure()

    const { setRef, coords, newMarker$, movMarker$, addMarker, updateLocation } = useMapbox(ptoInit)
    const { socket } = useContext(SocketContext);

    //Escuchar los marcadores existentes
    useEffect(() => {

        socket.on('active-markers', (markers) => {
            for (const key of Object.keys(markers)) {
                addMarker(markers[key], key)
            }
        })

    }, [socket, addMarker])

    //nuevo marcador
    useEffect(() => {
        newMarker$.subscribe(marker => {
            socket.emit('new-marker', marker)
        })
    }, [newMarker$, socket])

    //movimiento marcadore
    useEffect(() => {
        movMarker$.subscribe(marker => {
            socket.emit('updated-marker', marker)
        })
    }, [socket, movMarker$])

    //Mover marcador mediante sockets

    useEffect(() => {
        socket.on('updated-marker', (marker) => {
            updateLocation(marker)
        })
    }, [socket, updateLocation])

    //Escuchar nuevos marcadores
    useEffect(() => {

        socket.on('new-marker', (marker) => {
            addMarker(marker, marker.id)
        })

    }, [socket, addMarker])

    useEffect(() => {
        onOpen()
    }, [])

    return (
        <>
            <div className='info'>
                Lng: {coords.lng} | Lat: {coords.lat} | zoom: {coords.zoom}
            </div>

            <div
                //cuando se construya el elemento va a mandar la referencia que caera en el useMapbox ejecutando la función que establecera el nodo en el mapa
                ref={setRef}
                className='mapContainer'
            />

            <Modal onClose={onClose} size={'xl'} isOpen={isOpen} isCentered>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>WaBike</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Box maxW="7xl" mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
                            <chakra.h1
                                textAlign={'center'}
                                fontSize={'4xl'}
                                py={10}
                                fontWeight={'bold'}>
                                Reporta el robo con:
                            </chakra.h1>
                            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
                                <StatsCard
                                    // title={'Draggeable'}
                                    stat={'Drag'}
                                    icon={<i className="fas fa-angle-double-right intro"></i>}
                                />
                                <StatsCard
                                    // title={'Clickeable'}
                                    stat={'Click'}
                                    icon={<i className="fas fa-hand-point-up intro"></i>}
                                />
                                <StatsCard
                                    // title={'Identificable'}
                                    stat={'Marker'}
                                    icon={<i className="fas fa-map-marker-alt intro"></i>}
                                />
                            </SimpleGrid>
                        </Box>
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={onClose}>Close</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>

        </>
    )
}
