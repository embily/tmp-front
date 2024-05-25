import React from "react"
import CssBaseline from '@mui/material/CssBaseline';
import { StylesProvider } from '@mui/styles';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { GlobalStyle } from './App.Styles';
import WebAppProvider from './providers/webAppProvider';
import { Layout } from './components/Layout';
import {PATHS} from "./const/paths.constants";

import Home from "./pages/Home"
import Upgrade from "./pages/Upgrade";

function App() {
  return (
    <WebAppProvider>
      <StylesProvider injectFirst>
        <GlobalStyle />
        <CssBaseline />
        <BrowserRouter>
          <Routes>
            <Route
              index
              element={
                <Layout>
                  <Home />
                </Layout>
              }
            />
            <Route
              path={PATHS.MINE}
              element={
                <Layout>
                  <Home />
                </Layout>
              }
            />
            <Route
              path={PATHS.UPGRADE}
              element={
                <Layout>
                  <Upgrade />
                </Layout>
              }
            />
            <Route
              path={PATHS.ITEMS}
              element={
                <Layout>
                  <Upgrade />
                </Layout>
              }
            />
            <Route
              path={PATHS.FRIENDS}
              element={
                <Layout>
                  <Upgrade />
                </Layout>
              }
            />
            <Route
              path={PATHS.EARN}
              element={
                <Layout>
                  <Upgrade />
                </Layout>
              }
            />
          </Routes>
        </BrowserRouter>
      </StylesProvider>
    </WebAppProvider>
  )
}

export default App
