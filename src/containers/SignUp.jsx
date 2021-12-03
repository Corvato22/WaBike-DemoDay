import React from 'react'
import {
  Button,
  FormControl,
  FormLabel,
  Input
} from '@chakra-ui/react'

export const SignUp = () => {

  const handleSubmit = () => {

  }

  return (
    <div>
      <h1>Crear cuenta</h1>
      <FormControl onSubmit={handleSubmit} id='email'>

        <Input type='text' placeholder="Tu Nombre" />

        
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input id="email" type='email' placeholder="Tu email" isRequired />
        

  
        <Input type="password"  placeholder="Tu contraseña" />

        <Input type="password" placeholder="Tu contraseña de nuevo" />

        <Input type="file" placeholder="Tu Foto" />

        <Button
          mt={4}
          colorScheme='teal'
          type='submit'
        >
          Crea tu cuenta
        </Button>


      </FormControl>
    </div>
  )
}

