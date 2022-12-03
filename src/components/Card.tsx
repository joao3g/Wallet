import React from 'react'
import styled from 'styled-components'
import { BsFillArrowDownCircleFill, BsFillArrowUpCircleFill, BsFillPiggyBankFill } from 'react-icons/bs';

interface CardProps{
  icon: 1 | 2 | 3;
  iconColor: string;

  title: string;
  value: string;
}

const Main = styled.div`
  display: flex;
  flex-direction: column;
  
  align-items: start;
  justify-content: center;

  background-color: #FFF;

  border-radius: 32px;

  padding: 32px;

  width: 360px;
`

const Title = styled.div`
  display: flex;
  flex-direction: row;

  width: 100%;

  justify-content: space-between;
  align-items: center;

  margin-bottom: 42px;

  h1{
    font-size: 32px;
    font-weight: 700;
  }
`

export default function Card(props:CardProps) {
  switch(props.icon){
    case 1:
      return (
        <Main>
          <Title>
            <h1>{props.title.toUpperCase()}</h1>
            <BsFillArrowDownCircleFill 
              size={50}
              color={props.iconColor}
            />
          </Title>
          <h1>R$ {props.value}</h1>
        </Main>
      );
    case 2:
      return (
        <Main>
          <Title>
            <h1>{props.title.toUpperCase()}</h1>
            <BsFillArrowUpCircleFill 
              size={50}
              color={props.iconColor}
            />
          </Title>
          <h1>R$ {props.value}</h1>
        </Main>
      );
    case 3:
      return (
        <Main>
          <Title>
            <h1>{props.title.toUpperCase()}</h1>
            <BsFillPiggyBankFill
              size={50}
              color={props.iconColor}
            />
          </Title>
          <h1>R$ {props.value}</h1>
        </Main>
      );
  }
}
