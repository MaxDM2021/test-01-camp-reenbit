import React, { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { refreshUser } from '../redux/Auth/operations';
import { useAuth } from '../hooks';

import { SharedLayout } from './SharedLayout/SaredLayout';
// import { Profile } from 'pages/Profile/Profile';
import { Loader } from './Loader/Loader';

import { LoginForm } from '../pages/LoginForm/LoginForm';
import { Profile } from 'pages/Profile/Profile';

import NotFound from '../pages/PageNotFound/PageNotFound';

import { Routes, Route } from 'react-router-dom';

import { UserNav } from './UserNav/UserNav';

import { RegisterForm } from '../pages/RegisterForm/RegisterForm';
import { PublicRoute } from './servises/PublicRoute';
import { PrivateRoute } from './servises/PrivateRoute';

const Home = lazy(() =>
  import('../pages/HomePage/HomePage').then(module => ({
    ...module,
    default: module.HomePage,
  }))
);

// const MovieSearch = lazy(() => import('../pages/MovieSearch/MovieSearch'));
const MoviesDetails = lazy(() =>
  import('../pages/MoviesDetails/MoviesDetails')
);

export const App = () => {
  const dispatch = useDispatch();

  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={ <PublicRoute><Home /></PublicRoute>}/>
        <Route path="user" element={<PrivateRoute> <UserNav /> </PrivateRoute> }/>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/profile" element={<Profile/>}/>
        
         <Route path="*" element={<NotFound />}></Route>
      </Route>
      <Route path="/profile/:id" element={<MoviesDetails />} />
      {/* <Route path="/profile" element={<PrivateRoute> <MovieSearch/> redirectTo={'/login'}</PrivateRoute>}/> */}
    </Routes>
  );
};



// import { Route, Routes } from 'react-router-dom';
// import { lazy } from 'react';
// // import { HeaderAll } from './Header/Header';
// // import MoviesDetails from 'pages/MoviesDetails/MoviesDetails';

// import { PrivateRoute } from './servises/PrivateRoute';

// const HeaderAll = lazy(() => import('../components/Header/Header'));
// const MovieSearch = lazy(() => import('../pages/MovieSearch/MovieSearch'));
// const MoviesDetails = lazy(() => import('../pages/MoviesDetails/MoviesDetails'));
// const RegisterForm = lazy(() => import('../pages/RegisterForm/RegisterForm'));
// const LoginForm  = lazy(() => import('../pages/LoginForm/LoginForm'));

// const PageNotFound = lazy(() => import('../pages/PageNotFound/PageNotFound'));

// export const App = () => {
//   return (
//     <Routes>
//       <Route path="/" exact element={<HeaderAll />} />
//       <Route path="/login" element={<LoginForm />} />
//       <Route path="/register" element={<RegisterForm />} />
//       {/* <Route index element={<MovieList />} /> */}
//       <Route path="movies" element={<PrivateRoute component={MovieSearch} redirectTo={'/login'} />}/>
//       <Route path="movies/:id" element={<MoviesDetails />} />
//       <Route path="*" element={<PageNotFound />} />
//     </Routes>
//   );
// };
