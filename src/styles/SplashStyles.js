import styled from 'styled-components'
// import {Link} from 'react-router-dom'

const Button = styled.button`
    background: #00A49C;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    margin-top: 20px;

     width: 190px;
     height: 45px;
     color: #fff;
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
    background:  url('https://i.imgur.com/jpps5it.png');
    background-repeat: repeat-x;
    
    border: red;
    outline: none;
    position: relative;
    bottom:-48px;

    @media (max-width: 400px) {
        bottom:-55px;
    }
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

    @keyframes loading {
	from { max-width: 0; }
}

h1:before {
	content: attr(data-content);
	position: absolute;
	overflow: hidden;
	max-width: 4em;
	color: #00BB9C;
	animation: loading 10s linear;
}
`
export {
    // Button,
    Container,
    LogoContainer,
    LogoImg,
    LogoText,
    CityContainer,
    Button
}