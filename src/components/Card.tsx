import React from 'react'
import styled from 'styled-components'

const Main = styled.div`
  display: flex;
  flex-direction: column;
  
  align-items: center;
  justify-content: center;

  background-color: #FFF;

  border-radius: 16px;

  padding: 16px 48px;

  max-width: 360px;
`

export default function Card() {
  return (
    <Main>
        <h1>R$ 1700</h1>
    </Main>
  )
}
