import styled from 'styled-components'
// import {Link} from 'react-router-dom'

// const Button = styled(Link)`
//     background: 00A49C;
//     position: absolute;
//     width: 190px;
//     height: 45px;
//     left: 91px;
//     top: 509px;
// `
const Container = styled.div`
    padding: 0;
    margin:0;
    height: 100vh;
    

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
    
    height: 100vh;

    background:  url('https://i.imgur.com/jpps5it.png');
    background-repeat: repeat-x;

`
const LogoContainer = styled.div`

`

const LogoImg = styled.img`
    width: 197px;
    height: 194px;
`
const LogoText = styled.h1`

`
export{
    // Button,
    Container,
    LogoContainer,
    LogoImg,
    LogoText,
    CityContainer
}