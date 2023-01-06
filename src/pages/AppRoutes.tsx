import Error404 from './Error404';
import { createBrowserRouter, Outlet } from 'react-router-dom';
import AppLayout from './Layout/AppLayout';
import Home from './Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <AppLayout>
        <Outlet />
      </AppLayout>
    ),
    children: [
      {
        path: '',
        element: <Home />,
      },
    ],
  },
  {
    path: '*',
    element: <Error404 />,
  },
]);

export default router;
