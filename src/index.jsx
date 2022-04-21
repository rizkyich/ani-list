

import React from 'react';
import ReactDOM from 'react-dom/client';
import { ApolloProvider } from "@apollo/client";
import  {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"

import AnimeList from './pages/AnimeList';

import { client } from "./ApolloClient";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<AnimeList/>}/>
          </Routes>
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>
);
