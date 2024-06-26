import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './Pages/Home.page';
import RootLayout from './layout/RootLayout';
import ChatLayout from './layout/ChatLayout';
import NotFoundPage from './Pages/NotFound.page';
import GeneratePage from './Pages/Generate.page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
        errorElement: <NotFoundPage />,
      },
      // {
      //   path: "bookmarks",
      //   element: <Bookmarks />,
      //   errorElement: <Error />,
      // },
      // {
      //   path: "history",
      //   element: <History />,
      //   errorElement: <Error />,
      // },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
  {
    // ../chat/prototype
    path: 'chat',
    element: <ChatLayout />,
    children: [
      {
        path: 'prototype',
        element: <GeneratePage />,
        errorElement: <NotFoundPage />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
