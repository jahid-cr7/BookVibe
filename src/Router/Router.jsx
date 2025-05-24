import React from 'react';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";

import Root from '../Pages/Root/Root.jsx';
import ErrorPage from '../Pages/ErrorPage/ErrorPage.jsx';
import ListedBook from '../Pages/ListBook/ListedBook.jsx';
import Home from '../Pages/Home/Home.jsx';
import LoginPage from '../Pages/Login/LoginPage.jsx';
import BookDetails from '../Pages/BookDetails/BookDetails.jsx';
import ReadList from '../Pages/ReadList.jsx/ReadList.jsx';

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        path: "/",
        loader: () => fetch('booksData.json'),
        Component: Home,
      },
      {
        index: true,
        path: "Login",
        Component: LoginPage,
      },
      {
        path: 'BookDetails/:id',
        Component: BookDetails,
        loader: ()=> fetch('booksData.json'),
      },
      {
        path: 'ReadList',
        hydrateFallbackElement: <div>Loading...</div>,
        Component:ReadList,
        loader: ()=> fetch('booksData.json'),
      }

    ]
  }
]);
