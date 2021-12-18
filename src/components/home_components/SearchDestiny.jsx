import { FormControl, Input } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useForm } from '../../hooks/useForm'

export const SearchDestiny = () => {

     const [values, handleInputChange] = useForm({ 
         searchText: '',
     })

     const { searchText } = values

     useEffect(() => {
        // getDestiny()
     }, [])

    return (
        <>
         <FormControl id='first-name' isRequired>
            <Input placeholder='First name' />
        </FormControl>   
        </>
    )
}