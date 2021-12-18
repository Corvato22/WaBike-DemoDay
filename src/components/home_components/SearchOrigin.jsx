import React, { useEffect } from 'react'
import { useForm } from '../../hooks/useForm'
import { FormControl, Input } from '@chakra-ui/react'

export const SearchOrigin = () => {

     const [values, handleInputChange] = useForm({ 
         searchText: '',
     })

     const { searchText } = values

     useEffect(() => {
        // getOrigin()
     }, [])

    return (
        <>
         <FormControl id='first-name' isRequired>
            <Input placeholder='First name' />
        </FormControl>   
        </>
    )
}
