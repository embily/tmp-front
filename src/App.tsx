import React from "react"
import CssBaseline from '@mui/material/CssBaseline';
import { StylesProvider } from '@mui/styles';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { GlobalStyle } from './App.Styles';
import WebAppProvider from './providers/webAppProvider';

import HomeApp from "./pages/Home"

function App() {
  return (
    <WebAppProvider>
      <StylesProvider injectFirst>
        <GlobalStyle />
        <CssBaseline />
        <BrowserRouter>
          <Routes>
            <Route index element={<HomeApp />} />
            <Route path="/" element={<HomeApp />} />
          </Routes>
        </BrowserRouter>
      </StylesProvider>
    </WebAppProvider>
  )
}

export default App
