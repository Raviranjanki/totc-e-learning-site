import Login from '@pages/auth/login';
import Register from '@pages/auth/register';
import Home from '@pages/home';
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Blog from '@pages/blog';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'register',
        element: <Register />,
      },
      {
        path: 'blog',
        element: <Blog />,
      },
    ],
  },
]);
