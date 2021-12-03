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
} from '@chakra-ui/react'
import { EmailIcon, LockIcon } from '@chakra-ui/icons'
import { Link } from "react-router-dom";
import { loginGoogle } from '../actions/loginAction';
import { LoginBox } from '../styles/LoginStyles';

export const Login = () => {

    const dispatch = useDispatch()

    const handleLoginGoogle = (evt) => {
        evt.preventDefault()
        dispatch(loginGoogle())
    }

    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)

    return (
        <>
            <LoginBox >
                <VStack mt={8} spacing="3px"  >

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
                                bg='#00BB9C'
                                width='full'
                                mt={4}>
                                Ingresar
                            </Button>
                            <hr />
                            <Button
                                variantColor="teal"
                                variant="outline"
                                width="full"
                                mt={4}
                                bg='#dfe3ee'
                                onClick={handleLoginGoogle}
                            >
                                Ingresar con Google
                            </Button>
                            <hr />
                            <Button
                                variantColor="teal"
                                variant="outline"
                                // type="submit"
                                width="full"
                                mt={4}
                                bg='#dfe3ee'
                            >
                                Ingresar con Facebook
                            </Button>
                            <hr />
                            <span>¿Aún no tienes cuenta? <Link to="/signup">Registrate aquí</Link></span>

                        </form>
                    </Box>
                </VStack>
            </LoginBox>
        </>
    )
}