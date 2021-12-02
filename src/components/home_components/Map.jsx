import React from 'react'
import styled from 'styled-components'

const ContainerMap = styled.div`
    width:100%;
    height:600px;
`

export const Map = () => {
    return (
        <>
            <ContainerMap>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d2804.426773116086!2d-75.59006205485232!3d6.256245294320812!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sco!4v1638432005744!5m2!1ses-419!2sco"
                    width="100%"
                    height="100%"
                    loading="lazy"
                    title='Map'
                >
                </iframe>
            </ContainerMap>
        </>
    )
}
