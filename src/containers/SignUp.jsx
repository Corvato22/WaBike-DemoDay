import React from 'react'
import {
  Button,
  VStack,
  InputGroup,
  InputRightElement,
  InputLeftElement,
  Box,
  Input,
  Heading,
  Container,
  Text,
  useToast,
  // Alert,
  // AlertIcon
} from '@chakra-ui/react'
import { EmailIcon, LockIcon } from '@chakra-ui/icons'
import {
  LoginBox2,
  Banner,
  IconImg,
  CityContainer2
} from '../styles/LoginStyles';
import { Link } from "react-router-dom";
import { useFormik } from 'formik'
import { cloudinaryUpload } from '../helpers/cloudinaryUpload'
import { useDispatch } from 'react-redux';
import { registerEmailPassword } from '../actions/registerAction';

export const SignUp = () => {

  const dispatch = useDispatch()

  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)
  const toast = useToast()

  const handleFileChanged = (evt) => {
    const file = evt.target.files[0];
    cloudinaryUpload(file)
      .then(response => {
        formik.values.usrImg = response
        console.log(response);
        console.log('value usrImg en formik', formik)
      })
      .catch(error => {
        console.log(error.message);
      })
  }

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      password2: '',
      usrImg: ''
    },

    // const {name, email, password, usrImg} = formik.values


    onSubmit: (data) => {
      console.log('usrImg usr', data.usrImg)
      console.log('pw 1:', data.password + ' pw 2:', data.password2)

      if (data.password !== data.password2 || data.password.length < 6) {
        toast({
          title: 'Error de contraseñas',
          description: "Las contraseñas deben tener al menos 6 caracteres y coincidir entre ellas.",
          status: 'error',
          duration: 9000,
          isClosable: true,
        })
      } else {
        // toast({
        //   title: 'Cuenta Creada.',
        //   description: "Tu cuenta ha sido creada exitosamente.",
        //   status: 'success',
        //   duration: 9000,
        //   isClosable: true,
        // })
        dispatch(registerEmailPassword(data.email, data.password, data.name, data.usrImg))
      }
    }
  })

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

              <form onSubmit={formik.handleSubmit}>
                <Box>
                  <InputGroup size='md' my='10px'>
                    <InputLeftElement
                      pointerEvents='none'
                      children={<i className="fas fa-user"></i>}
                    />
                    <Input
                      pr='4.5rem'
                      type='text'
                      name='name'
                      focusBorderColor='#00BB9C'
                      placeholder='Ingresa tu nombre'
                      onChange={formik.handleChange}
                      required
                    />
                  </InputGroup>

                  <InputGroup size='md' my='10px'>
                    <InputLeftElement
                      pointerEvents='none'
                      children={<EmailIcon color='gray.300' />}
                    />
                    <Input
                      pr='4.5rem'
                      type='email'
                      name='email'
                      focusBorderColor='#00BB9C'
                      placeholder='Ingresa tu correo'
                      onChange={formik.handleChange}
                      required
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
                      name='password'
                      focusBorderColor='#00BB9C'
                      placeholder='Ingresa tu contraseña'
                      onChange={formik.handleChange}
                      required
                    />
                    <InputRightElement width='4.5rem'>
                      <Button h='1.75rem' size='sm' color='#00BB9C' onClick={handleClick}
                        _active={{
                          bg: '#00BB9C',
                          color: '#edf2f7',
                          transform: 'scale(0.95)',
                          borderColor: '#00BB9C',
                        }}>
                        {show ? <i className="fas fa-eye-slash"></i> : <i className="fas fa-eye"></i>}
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
                      name='password2'
                      focusBorderColor='#00BB9C'
                      placeholder='Repite tu contraseña'
                      onChange={formik.handleChange}
                      required
                    />
                    <InputRightElement width='4.5rem'>
                      <Button h='1.75rem' size='sm' color='#00BB9C' onClick={handleClick}
                        _active={{
                          bg: '#00BB9C',
                          color: '#edf2f7',
                          transform: 'scale(0.95)',
                          borderColor: '#00BB9C',
                        }}>
                        {show ? <i className="fas fa-eye-slash"></i> : <i className="fas fa-eye"></i>}
                      </Button>
                    </InputRightElement>
                  </InputGroup>

                  <InputGroup size='md' my='10px'>
                    <Input onChange={handleFileChanged} name='usrImg' pr='4.5rem' type="file" placeholder="Tu Foto" />
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
                  value="Save"
                  type="submit"
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
                <Text my='15px' align='center'>
                                    <span>¿Ya tienes una cuenta? </span>
                                    <Link to="/login" style={{ textDecoration: 'underline', fontWeight: "bold", color: '#00BB9C' }}>
                                        Inicia sesión aquí
                                    </Link>
                                </Text>
              </form>

            </Box>
          </VStack>
        </LoginBox2>
      </Container>
    </>
  )
}

