import styled from 'styled-components'

const LoginBox = styled.div`
    margin: 70px 0px;
    border: 1px solid #DEDEDE;
    border-radius: 8px;
    padding-left: 10px;
    padding-right: 10px;
`
const LoginBox2 = styled.div`
    margin: 70px 0px;
    border: 1px solid #DEDEDE;
    border-radius: 8px;
    padding-left: 10px;
    padding-right: 10px;
`
const Banner = styled.div`
    background: #00A49C;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; 
`
const IconImg = styled.img`
    width: 160px;
    height: 194px;
    border: none;
    position:absolute; 
    z-index:3;
`
const CityContainer2 = styled.div`
    width: 100%;
    height: 193px;
    background:  url('https://res.cloudinary.com/dzyyi4p7x/image/upload/v1638697443/WaBike/CityBackground_etop3l.svg');
    background-repeat: repeat-x;
    
    outline: none;
    position: relative;
    bottom:0px;
    
    @media (max-width: 400px) {
        bottom:-30px;
    }
`

export {
    LoginBox,
    LoginBox2,
    Banner,
    IconImg,
    CityContainer2
}