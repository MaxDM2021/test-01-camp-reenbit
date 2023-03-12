import { Link, useLocation } from 'react-router-dom';
// import { IMG_URL } from 'components/SearchAPI/SearchAPI';
import MovieListSCSS from './MovieList.module.scss';
import defoltImg from '../../img/default.jpg'

export const MovieItem = ({movie}) => {
    const location = useLocation();
    const url = location.pathname === '/' ? `movies/` : '';
    return (
        <li  className={MovieListSCSS.item}>
            <Link
            to={`${url}${movie.id}`}
            className={MovieListSCSS.link}
            >
                <img
                    src={movie.image ? movie.image : defoltImg }
                    alt={movie.name}
                    className={MovieListSCSS.img}
                />
                <div className={MovieListSCSS.info}>
                    <ul className={MovieListSCSS.infoList}>
                    <li className={MovieListSCSS.infoItem}><h3>{movie.name}</h3></li>
                    <li className={MovieListSCSS.infoItemData}><h3>{movie.species}</h3></li>
                    </ul>
                </div>
            </Link>
        </li>
    );
};