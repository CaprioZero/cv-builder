import React from 'react'
import ReactDOM from 'react-dom'
import { StyledEngineProvider } from '@mui/material/styles'
import App from './App'
import "./translation/trans";

ReactDOM.render(
  <StyledEngineProvider injectFirst>
    <App />
  </StyledEngineProvider>,
  document.querySelector("#root")
)