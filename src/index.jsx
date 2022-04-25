import React from 'react';
import ReactDOM from 'react-dom/client';
import { ApolloProvider } from '@apollo/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';

import MainContainer from './components/MainContainer';
import AniList from './pages/AniList';
import AniDetail from './pages/AniDetail';
import AniCollections from './pages/AniCollections';
import AniCollectionsDetail from './pages/AniCollectionsDetail';
import AniPageNotFound from './pages/AniPageNotFound';

import { client } from './ApolloClient';
import { theme } from './constants';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <MainContainer>
          <Routes>
            <Route exact path="/" element={<AniList />} />
            <Route exact path="/detail/:id" element={<AniDetail />} />
            <Route exact path="/collections" element={<AniCollections />} />
            <Route exact path="/collections/:id" element={<AniCollectionsDetail />} />
            <Route path="*" element={<AniPageNotFound />} />
          </Routes>
        </MainContainer>
      </BrowserRouter>
    </ThemeProvider>
  </ApolloProvider>
);
