import React from "react"
import CssBaseline from '@mui/material/CssBaseline';
import { StylesProvider } from '@mui/styles';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { I18nextProvider } from 'react-i18next';
import { GlobalStyle } from './App.Styles';
import WebAppProvider from './providers/webAppProvider';
import { Layout } from './components/Layout';
import {PATHS} from "./const/paths.constants";

import i18n from './common/utils/i18n';

import Home from "./pages/Home/Home"
import Upgrade from "./pages/Upgrade";
import Items from "./pages/Items";
import SocketTest from "./pages/SocketTest";

function App() {
  return (
    <WebAppProvider>
      <I18nextProvider i18n={i18n}>
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
                    <Items />
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
              <Route
                path={PATHS.SOCKET_TEST}
                element={
                  <Layout>
                    <SocketTest />
                  </Layout>
                }
              />
            </Routes>
          </BrowserRouter>
        </StylesProvider>
      </I18nextProvider>
    </WebAppProvider>
  )
}

export default App
