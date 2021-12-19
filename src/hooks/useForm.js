import { useState } from 'react';


export const useForm = ( initialState = {} ) => {
    
    //se tiene un state con los valores que van a estar en esos inputs
    //con la funcion handleInputChange y la funcion reset

    const [values, setValues] = useState(initialState);

    const reset = () => {
        setValues( initialState );
    }


    const handleInputChange = ({ target }) => {

        setValues({
            ...values,
            [ target.name ]: target.value
        });
        
    }

    return [ values, handleInputChange, reset ];

}