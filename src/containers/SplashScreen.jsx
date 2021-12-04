import React from 'react'
import { LogoContainer, Container, LogoImg, LogoText, Button, CityContainer } from '../styles/SplashStyles'
import { Link } from 'react-router-dom'

export const SplashScreen = () => {
    return (
        <>
            <Container>
                <LogoContainer>
                    <LogoImg src='https://res.cloudinary.com/diqhctpcx/image/upload/v1638230356/WaBike/wabike_logo_oshukd.svg' />
                    <LogoText data-content="WaBike">WaBike</LogoText>
                </LogoContainer>
                <Link to='/login'>
                <Button className='btn-init' >¡Empezar!</Button>
                </Link>
                <CityContainer>
                </ CityContainer>
            </Container>
        </>
    )
}