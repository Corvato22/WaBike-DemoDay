import React from 'react'
import { LogoContainer, Container, LogoImg, LogoText, Button, CityContainer, SpaceCityContainer } from '../styles/SplashStyles'
import { Link } from 'react-router-dom'

export const SplashScreen = () => {
    return (
        <>
            <Container>
                <LogoContainer>
                    <LogoImg src='https://res.cloudinary.com/diqhctpcx/image/upload/v1638230356/WaBike/wabike_logo_oshukd.svg' />
                    <LogoText className='LogoText' data-content="W">WaBike</LogoText>
                </LogoContainer>
                <Link to='/login'>
                <Button className='btn-init' >¡Empezar!</Button>
                </Link>
                <CityContainer>
                </ CityContainer>
                <SpaceCityContainer>
                </SpaceCityContainer>
            </Container>
        </>
    )
}