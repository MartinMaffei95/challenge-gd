import Error404 from './Error404';
import { createBrowserRouter, Outlet } from 'react-router-dom';
import AppLayout from './Layout/AppLayout';
import Home from './Home';
import QuizesPage from './QuizesPage';

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
      {
        path: 'quizes',
        element: <QuizesPage />,
      },
    ],
  },
  {
    path: '*',
    element: <Error404 />,
  },
]);

export default router;
