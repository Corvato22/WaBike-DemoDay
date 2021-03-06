import {
    Stack,
    Input,
    Table,
    Tbody,
    Tr,
    Td,

} from '@chakra-ui/react'

import React, { useState } from 'react'
import { useForm } from '../../hooks/useForm'
import { getDestiny2 } from '../../helpers/getDestiny2'

export const SearchDestiny2 = ({ setX, setY }) => {

    const [destiny, setDestiny] = useState([])
    const [toggleSwitch, setToggleSwitch] = useState('on')
    const [values, handleInputChange, reset] = useForm({
        searchText: '',
    })

    const { searchText } = values
    // console.log(searchText)

    // useEffect(() => {
    //     getDestiny(searchText)
    //         .then((location) => {
    //             setDestiny(location)
    //         })
    // }, [searchText])

    const handleSearch = (e) => {
        e.preventDefault();
        console.log('search query:',searchText)
        console.log('destiny search results',destiny)
        getDestiny2(searchText)
            .then((location) => {
                setDestiny(destiny => location)
            })
            .catch((error) => {
                console.log('destination not found: ' + error)
            })
        reset()
        setToggleSwitch('on')
    }

    const handleClick = (lat, lon) => {
        console.log(lat, lon)
        setX(lon)
        setY(lat)
        setToggleSwitch('off')
        reset()
    }


    return (
        <>
            <Stack spacing={3}>
                <form onSubmit={handleSearch}>
                    <Input
                        id='searchD'
                        variant='outline'
                        placeholder='Ingresa tu destino'
                        name='searchText'
                        autoComplete='off'
                        value={searchText}
                        onChange={handleInputChange}
                    />
                    {
                        destiny.map((loc, idx) => (
                            <Table key={loc.place_id} variant='simple' className={toggleSwitch}>

                                <Tbody>
                                    <Tr>
                                        <Td className='listLoc' onClick={() => handleClick(loc.lat, loc.lon)}>{loc.display_name}</Td>
                                    </Tr>
                                </Tbody>
                            </Table>
                        ))
                    }

                </form>
            </Stack>
        </>
    )
}