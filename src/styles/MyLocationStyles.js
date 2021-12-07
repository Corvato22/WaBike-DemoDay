import styled from 'styled-components'

const Banner2 = styled.div`
    background:  url('https://res.cloudinary.com/dzyyi4p7x/image/upload/v1638698578/WaBike/CityBackground2_hmwd90.svg');
    height: 21vh;
    background-position: center;
    background-size: contain;
    background-repeat: repeat-x;
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    border: none;
`
const IconCelu = styled.img`
    top: 0px;
    width: 250px;
    height: auto;
    border: none;
    position: relative; 
    z-index:3;
`
const IconMarker = styled.img`
    width: 185px;
    height: auto;
    border: none;
    position:absolute; 
    z-index:3;
`
export {
    Banner2,
    IconCelu,
    IconMarker
}

