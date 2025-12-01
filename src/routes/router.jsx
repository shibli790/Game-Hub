import { createBrowserRouter } from 'react-router';
import MainLayout from '../layout/MainLayout';
import Home from '../Pages/Home';
import GameDetails from '../Pages/GameDetails';
import Login from '../Pages/auth/Login';
import Register from '../Pages/auth/Register';
import Profile from '../Pages/Profile';
import Developers from '../Pages/Developers';
import NotFound from '../Pages/NotFound';
import PrivateRoute from './PrivateRoute';
import UpdateProfile from '../Pages/UpdateProfile';
import Forgot from '../Pages/auth/Forgot';
import AllGamesCard from '../Pages/AllGamesCard';
import Contact from '../Pages/Contact';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      {
        path: 'developers',
        element: <Developers />,
      },
      {
        path: 'allgamescard',
        element: <AllGamesCard />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'games/:id',
        element: <GameDetails />,
      },
      { path: 'login', element: <Login /> },
      { path: 'register', element: <Register /> },
      { path: 'forgot', element: <Forgot></Forgot> },
      {
        path: 'my-profile',
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: 'my-profile/update',
        element: (
          <PrivateRoute>
            <UpdateProfile />
          </PrivateRoute>
        ),
      },
    ],
  },
  { path: '*', element: <NotFound /> },
]);

export default router;
