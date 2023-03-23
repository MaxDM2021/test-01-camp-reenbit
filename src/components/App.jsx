import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { HeaderAll } from './Header/Header';

import MoviesDetails from 'pages/MoviesDetails/MoviesDetails';

// const MovieList = lazy(() => import('../pages/MovieList/MovieList'));
const MovieSearch = lazy(() => import('../pages/MovieSearch/MovieSearch'));
// const MoviesDetails = lazy(() => import('../pages/MoviesDetails/MoviesDetails'));
// const Cast = lazy(() => import('../pages/Cast/Cast'));
// const Reviews = lazy(() => import('../pages/Reviews/Reviews'));

const AuthRootComponent = lazy(() => import('../components/auth/index'));

const PageNotFound = lazy(() => import('../pages/PageNotFound/PageNotFound'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" exact element={<HeaderAll />} />
      <Route path="movies" element={<MovieSearch />} />
      <Route path="movies/:id" element={<MoviesDetails />} />
      <Route path="*" element={<PageNotFound />} />
      <Route path="login" element={<AuthRootComponent />} />
      <Route path="register" element={<AuthRootComponent />} />
    </Routes>
  );
};
