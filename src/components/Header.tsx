import React from 'react'
import styled from 'styled-components'
import Card from './Card'

const Main = styled.div`
    height: 150px;
    width: 100%;

    display: flex;

    justify-content: center;
    align-items: center;

    background-color: #29FFC9;
`

const Cards = styled.div`
    display: flex;
    flex-direction: row;

    justify-content: space-around;
    align-items: center;

    width: 80%;

    transform: translateY(50%);
`

function Header() {
  return (
    <Main>
        <Cards>
            <Card 
                icon={1}
                iconColor='#29FFC9'
                title='entradas'
                value='1.700,00'
            />

            <Card 
                icon={2}
                iconColor='#D83957'
                title='saidas'
                value='500,00'
            />

            <Card 
                icon={3}
                iconColor='#F7D683'
                title='total'
                value='1.200,00'
            />
        </Cards>
    </Main>
  )
}

export default Header