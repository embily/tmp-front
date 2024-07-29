import React, {Suspense, lazy} from "react"
import CssBaseline from '@mui/material/CssBaseline';
import { StylesProvider } from '@mui/styles';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { I18nextProvider } from 'react-i18next';
// import GlobalStyle from './App.Styles';
import WebAppProvider from './providers/webAppProvider';
import { Layout } from './components/Layout';
import {PATHS} from "./const/paths.constants";

import i18n from './common/utils/i18n';
import Loading from "./components/Loading";

const GlobalStyle = lazy(() => import("./App.Styles"));
const Home = lazy(() => import("./pages/Home/Home"));
const Items = lazy(() => import("./pages/Items/Items"));
const Upgrade = lazy(() => import("./pages/Upgrade/Upgrade"));

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
                  <Suspense fallback={<Loading />}>
                    <Layout>
                      <Home />
                    </Layout>
                  </Suspense>
                }
              />
              <Route
                path={PATHS.MINE}
                element={
                  <Suspense fallback={<Loading />}>
                    <Layout>
                      <Home />
                    </Layout>
                  </Suspense>
                }
              />
              <Route
                path={PATHS.UPGRADE}
                element={
                  <Suspense fallback={<Loading />}>
                    <Layout>
                      <Upgrade />
                    </Layout>
                  </Suspense>
                }
              />
              <Route
                path={PATHS.ITEMS}
                element={
                  <Suspense fallback={<Loading />}>
                    <Layout>
                      <Items />
                    </Layout>
                  </Suspense>
                }
              />
              <Route
                path={PATHS.FRIENDS}
                element={
                  <Suspense fallback={<Loading />}>
                    <Layout>
                      <Upgrade />
                    </Layout>
                  </Suspense>
                }
              />
              <Route
                path={PATHS.EARN}
                element={
                  <Suspense fallback={<Loading />}>
                    <Layout>
                      <Upgrade />
                    </Layout>
                  </Suspense>
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
