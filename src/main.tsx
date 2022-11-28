import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
  }

  body{
    background-color: #000;

    font-family: 'Inter', sans-serif;
  }
`

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
)
