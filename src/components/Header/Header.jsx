import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import MovieSearch from 'pages/MovieSearch/MovieSearch';
import { Loader } from '../Loader/Loader'
import HeaderSCSS from './Header.module.scss'

export const HeaderAll = () => {
    return (
        <>
            <header className={HeaderSCSS.header}/>
            <MovieSearch/>
            <Suspense fallback={<Loader/>}>
                <Outlet/>
            </Suspense>
        </>
    );
};