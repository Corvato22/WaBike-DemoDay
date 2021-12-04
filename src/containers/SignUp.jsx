import React from 'react'
import {
  Button,
  VStack,
  InputGroup,
  InputRightElement,
  InputLeftElement,
  Box,
  Input,
  Container
} from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import { EmailIcon, LockIcon } from '@chakra-ui/icons'
import { 
  LoginBox2,
  Banner,
  IconImg,
  CityContainer2
 } from '../styles/LoginStyles';

export const SignUp = () => {


  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)
  return (
    <>
      <Banner>
        <IconImg src='https://res.cloudinary.com/diqhctpcx/image/upload/v1638230356/WaBike/wabike_logo_oshukd.svg' />
        <CityContainer2></CityContainer2>
      </Banner>
      <Container>
        <LoginBox2 >
          <VStack mt={8} spacing="3px"  >
            <Heading as='h4' size='md'>
              Regístrate
            </Heading>

            <hr />
            <Box my={8} textAlign='left' bg='white'>
              <form>

                <Box>
                  <InputGroup size='md'  >
                    <InputLeftElement
                      pointerEvents='none'
                      children={<EmailIcon color='gray.300' />}
                    />
                    <Input
                      pr='4.5rem'
                      type='email'
                      placeholder='Ingresa tu correo electrónico'
                    />
                  </InputGroup>
                  <InputGroup size='md'>
                    <InputLeftElement
                      pointerEvents='none'
                      children={<LockIcon color='gray.300' />}
                    />
                    <Input
                      pr='4.5rem'
                      type={show ? 'text' : 'password'}
                      placeholder='Ingresa tu contraseña'
                    />
                    <InputRightElement width='4.5rem'>
                      <Button h='1.75rem' size='sm' onClick={handleClick}>
                        {show ? 'Hide' : 'Show'}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                  <InputGroup size='md'>
                    <InputLeftElement
                      pointerEvents='none'
                      children={<LockIcon color='gray.300' />}
                    />
                    <Input
                      pr='4.5rem'
                      type={show ? 'text' : 'password'}
                      placeholder='Repite tu contraseña'
                    />
                    <InputRightElement width='4.5rem'>
                      <Button h='1.75rem' size='sm' onClick={handleClick}>
                        {show ? 'Hide' : 'Show'}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                  <InputGroup size='md'  >
                    <Input pr='4.5rem' type="file" placeholder="Tu Foto" />
                  </InputGroup>
                </Box>
                <hr />

                {/* <Stack isInline justifyContent='space-between' mt={4}>
                        <Box>
                            <Checkbox>Remember Me</Checkbox>
                        </Box>
                        <Box>
                            <Link color="teal">Forgot your password?</Link>
                        </Box>
                    </Stack> */}

                <Button
                  bg='#00BB9C'
                  width='full'
                  mt={4}>
                  Crear cuenta
                </Button>




              </form>
            </Box>
          </VStack>
          <br />
        </LoginBox2>
      </Container>
    </>
  )
}

