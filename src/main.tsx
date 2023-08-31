import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@/App.tsx';
import Game from '@/Game.tsx';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from 'react-redux';
import store from "@store/index.ts";
import "the-new-css-reset/css/reset.css";
import './index.css';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: 'games/:gameId',
    element: <Game />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={ store }>
      <RouterProvider router={ router }/>
    </Provider>
  </React.StrictMode>,
)
