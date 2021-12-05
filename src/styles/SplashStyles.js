import styled from 'styled-components'
// import {Link} from 'react-router-dom'

const Button = styled.button`
    background: #00BB9C;
    box-shadow: 0px 6px 4px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    margin-top: 20px;
    margin-bottom: 20px;
    font-weight: bold;

     width: 190px;
     height: 45px;
     color: #FFFFFF;
     transition: 0.5s;

     &:hover{
        background-color: #edf2f7;
        color: #00BB9C;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
     }

     &:active{
        background-color: #edf2f7;
        color: #00BB9C;
        transform: scale(0.95);
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
     }
`
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;   
    height: 100vh;
    margin: 0;
    padding: 0;
    
    background-image: -moz-radial-gradient(center, circle closest-corner, #00BB9C 0%, #000 100%);
	background-image: -o-radial-gradient(center, circle closest-corner, #00BB9C 0%, #000 100%);
	background-image: -webkit-radial-gradient(center, circle closest-corner, #00BB9C 0%, #000 100%);
	-webkit-user-select:none;
	-moz-user-select:none;
	-ms-user-select:none;
	-o-user-select:none;
	user-select:none;
`
const CityContainer = styled.div`
    
    width: 100%;
    height: 193px;
    background:  url('https://res.cloudinary.com/dzyyi4p7x/image/upload/v1638697443/WaBike/CityBackground_etop3l.svg');
    background-repeat: repeat-x;
    
    position: absolute;
    bottom: 0px;
`
const SpaceCityContainer = styled.div`
    width: 100%;
    height: 193px;
    background-repeat: repeat-x;
    
    position: relative;
    bottom: 0px;
`
const LogoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const LogoImg = styled.img`
    width: 197px;
    height: 194px;
    border: none;
`
const LogoText = styled.h1`
    text-align: center;
    font-family: 'Kodchasan', sans-serif;
    font-size: 70px;
    color: #fff;
`
export {
    Container,
    LogoContainer,
    LogoImg,
    LogoText,
    CityContainer,
    Button,
    SpaceCityContainer
}