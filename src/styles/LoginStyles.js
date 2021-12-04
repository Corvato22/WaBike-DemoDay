import styled from 'styled-components'

const LoginBox = styled.div`
    margin: 45px 30px;
    border: 1px solid #DEDEDE;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
`
const LoginBox2 = styled.div`
    margin: 80px 10px;
    border: 1px solid #DEDEDE;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
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
    background:  url('https://i.imgur.com/jpps5it.png');
    background-repeat: repeat-x;
    
    border: red;
    outline: none;
    position: relative;
    bottom:0px;

    @media (max-width: 400px) {
        bottom:-45px;
    }
`

export {
    LoginBox,
    LoginBox2,
    Banner,
    IconImg,
    CityContainer2
}