import {
    Stack,
    Input,
    Table,
    Tbody,
    Tr,
    Td,

} from '@chakra-ui/react'

import React, { useEffect, useState } from 'react'
import { useForm } from '../../hooks/useForm'
import { getOrigin } from '../../helpers/getOrigin'


export const SearchOrigin = ({setStart}) => {

    const [origin, setOrigin] = useState([])
    const [toggleSwitch, setToggleSwitch] = useState('on')
    const [values, handleInputChange] = useForm({
        searchText: '',
    })

    const { searchText } = values
    // console.log(searchText)

    // useEffect(() => {
    //     getOrigin(searchText)
    //     .then((location) =>{
    //         setOrigin(location)
    //     })
    // }, [searchText])

    const handleSearch = (e) => {
        e.preventDefault();
        getOrigin(searchText)
        .then((location) =>{
            setOrigin(location)
        })
        console.log(searchText)
        console.log(origin)
        setToggleSwitch('on')
        
    }
    const handleClick = (lat, lon) =>{
      console.log(lat, lon)
      setStart([lat, lon])
      setToggleSwitch('off')
    //   reset()

    
    }
    

    return (
        <>
            <Stack spacing={3}>
                <form onSubmit={handleSearch}>
                    <Input
                        variant='outline'
                        placeholder='Ingresa tu destino'
                        name='searchText'
                        autoComplete='off'
                        value={searchText}
                        onChange={handleInputChange}
                    />
                    {
                        origin.map((loc, idx) =>(
                        <Table variant='simple' className={toggleSwitch}>

                            <Tbody>
                                <Tr key={loc.place_id}>
                                    <Td className='listLoc' onClick={()=>handleClick(loc.lat,loc.lon)}>{loc.display_name}</Td>
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
