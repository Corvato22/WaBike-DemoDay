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
          <VStack spacing="3px" >
            <Heading as='h4' size='lg' fontFamily='Montserrat' color='#242E42' mt='30px' mb='15px' align='center'>
              Regístrate
            </Heading>

            <Box my={8} bg='white'>

              <form>
                <Box>
                  <InputGroup size='md' my='10px'>
                    <InputLeftElement
                      pointerEvents='none'
                      children={<EmailIcon color='gray.300' />}
                    />
                    <Input
                      pr='4.5rem'
                      type='email'
                      focusBorderColor='#00BB9C'
                      placeholder='Ingresa tu correo'
                    />
                  </InputGroup>

                  <InputGroup size='md' my='10px'>
                    <InputLeftElement
                      pointerEvents='none'
                      children={<LockIcon color='gray.300' />}
                    />
                    <Input
                      pr='4.5rem'
                      type={show ? 'text' : 'password'}
                      focusBorderColor='#00BB9C'
                      placeholder='Ingresa tu contraseña'
                    />
                    <InputRightElement width='4.5rem'>
                      <Button h='1.75rem' size='sm' color='#00BB9C' onClick={handleClick}
                        _active={{
                          bg: '#00BB9C',
                          color: '#edf2f7',
                          transform: 'scale(0.95)',
                          borderColor: '#00BB9C',
                        }}>
                        {show ? <i class="fas fa-eye-slash"></i> : <i class="fas fa-eye"></i>}
                      </Button>
                    </InputRightElement>
                  </InputGroup>

                  <InputGroup size='md' my='10px'>
                    <InputLeftElement
                      pointerEvents='none'
                      children={<LockIcon color='gray.300' />}
                    />
                    <Input
                      pr='4.5rem'
                      type={show ? 'text' : 'password'}
                      focusBorderColor='#00BB9C'
                      placeholder='Repite tu contraseña'
                    />
                    <InputRightElement width='4.5rem'>
                      <Button h='1.75rem' size='sm' color='#00BB9C' onClick={handleClick}
                        _active={{
                          bg: '#00BB9C',
                          color: '#edf2f7',
                          transform: 'scale(0.95)',
                          borderColor: '#00BB9C',
                        }}>
                        {show ? <i class="fas fa-eye-slash"></i> : <i class="fas fa-eye"></i>}
                      </Button>
                    </InputRightElement>
                  </InputGroup>

                  <InputGroup size='md' my='10px'>
                    <Input pr='4.5rem' type="file" placeholder="Tu Foto" />
                  </InputGroup>

                </Box>

                {/* <Stack isInline justifyContent='space-between' mt={4}>
                        <Box>
                            <Checkbox>Remember Me</Checkbox>
                        </Box>
                        <Box>
                            <Link color="teal">Forgot your password?</Link>
                        </Box>
                    </Stack> */}

                <Button
                  variant="outline"
                  bg='#00BB9C'
                  color='white'
                  colorScheme='#edf2f7'
                  width='full'
                  my={4}
                  _hover={{ bg: '#edf2f7', color: '#00BB9C' }}
                  _active={{
                    bg: '#edf2f7',
                    color: '#00BB9C',
                    transform: 'scale(0.95)',
                    borderColor: '#00BB9C',
                  }}
                >
                  Crear Cuenta
                </Button>
              </form>

            </Box>
          </VStack>
        </LoginBox2>
      </Container>
    </>
  )
}

