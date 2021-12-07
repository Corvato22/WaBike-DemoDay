import React from 'react'
import { useDispatch } from 'react-redux';

import {
    Button,
    VStack,
    InputGroup,
    InputRightElement,
    InputLeftElement,
    Box,
    Input,
    Container,
    Text
} from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import { EmailIcon, LockIcon } from '@chakra-ui/icons'
import { Link } from "react-router-dom";
import { loginGoogle, loginFacebook, loginEmailPassword } from '../actions/loginAction';
import {
    LoginBox,
    Banner,
    IconImg,
    CityContainer2
} from '../styles/LoginStyles';
import { useFormik } from 'formik';

export const Login = () => {

    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },

        onSubmit: (data) => {
            console.log(data)
            dispatch(loginEmailPassword(data.email, data.password))
        }
    })

    const handleLoginGoogle = (evt) => {
        evt.preventDefault()
        dispatch(loginGoogle())
    }
    const handleLoginFacebook = (evt) => {
        evt.preventDefault()
        dispatch(loginFacebook())
    }
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)

    return (
        <>
            <Banner>
                <IconImg src='https://res.cloudinary.com/diqhctpcx/image/upload/v1638230356/WaBike/wabike_logo_oshukd.svg' />
                <CityContainer2></CityContainer2>
            </Banner>

            <Container>
                <LoginBox >
                    <VStack spacing="3px"  >
                        <Heading as='h4' size='lg' fontFamily='Montserrat' color='#242E42' mt='30px' mb='15px' align='center'>
                            Inicia Sesión
                        </Heading>

                        <Box my={8} bg='white'>

                            <form onSubmit={formik.handleSubmit}>
                                <Box>
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
                                    type="submit"
                                    color='white'
                                    colorScheme='#edf2f7'
                                    width='full'
                                    mt={4}
                                    _hover={{ bg: '#edf2f7', color: '#00BB9C' }}
                                    _active={{
                                        bg: '#edf2f7',
                                        color: '#00BB9C',
                                        transform: 'scale(0.95)',
                                        borderColor: '#00BB9C',
                                    }}
                                >
                                    {/* <Link to="/mylocation"> */}
                                    Iniciar Sesión
                                    {/* </Link> */}
                                </Button>

                                <Button
                                    variant="outline"
                                    width="full"
                                    mt={4}
                                    bg='#ea4435'
                                    color='white'
                                    colorScheme='#edf2f7'
                                    leftIcon={<i className="fab fa-google"></i>}
                                    onClick={handleLoginGoogle}
                                    _hover={{ bg: '#edf2f7', color: '#ea4435' }}
                                    _active={{
                                        bg: '#edf2f7',
                                        color: '#ea4435',
                                        transform: 'scale(0.95)',
                                        borderColor: '#ea4435',
                                    }}
                                >
                                    Ingresar con Google
                                </Button>

                                <Button
                                    // type="submit"
                                    variant="outline"
                                    width="full"
                                    mt={4}
                                    bg='#385898'
                                    color='white'
                                    colorScheme='#385898'
                                    leftIcon={<i className="fab fa-facebook-f"></i>}
                                    onClick={handleLoginFacebook}
                                    _hover={{ bg: '#edf2f7', color: '#385898' }}
                                    _active={{
                                        bg: '#edf2f7',
                                        color: '#385898',
                                        transform: 'scale(0.95)',
                                        borderColor: '#385898',
                                    }}
                                >
                                    Ingresar con Facebook
                                </Button>

                                <Text my='15px' align='center'>
                                    <span>¿Aún no tienes cuenta? </span>
                                    <Link to="/signup" style={{ textDecoration: 'underline', fontWeight: "bold", color: '#00BB9C' }}>
                                        Registrate aquí
                                    </Link>
                                </Text>
                            </form>

                        </Box>
                    </VStack>
                </LoginBox>
            </Container>
        </>
    )
}