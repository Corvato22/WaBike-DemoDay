import React from 'react'
import {LogoContainer, Container, LogoImg, LogoText, CityContainer} from '../styles/SplashStyles'

export const SplashScreen = () => {
    return (
        <>
        <Container>
            <CityContainer>
            <LogoContainer>
                <LogoImg src='https://res.cloudinary.com/diqhctpcx/image/upload/v1638230356/WaBike/wabike_logo_oshukd.svg' />
                <LogoText>WaBike</LogoText>
            </LogoContainer>
            <button >¡Empezar!</button>
            </CityContainer>
        </Container>
        </>
    )
}