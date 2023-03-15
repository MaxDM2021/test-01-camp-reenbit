import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import MovieSearch from '../../pages/MovieSearch/MovieSearch';
import MovieList from 'pages/MovieList/MovieList';
import { Loader } from '../Loader/Loader'
import HeaderSCSS from './Header.module.scss'

export const HeaderAll = () => {
    return (
        <section className={HeaderSCSS.section}>
            <header className={HeaderSCSS.header}/>
            <MovieSearch/>
            {/* <MovieList/> */}
            <Suspense fallback={<Loader/>}>
                <Outlet/>
            </Suspense>
        </section>
    );
};