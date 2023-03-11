import React, { useState, useEffect, Suspense } from 'react';
import { Link, useParams, Outlet, useNavigate } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import { SearchMoviesDetails } from '../../components/SearchAPI/SearchAPI';
// import defoltImg from '../../img/default.jpg';
import { Loader } from 'components/Loader/Loader';
import MoviesDetailsSCSS from './MoviesDetails.module.scss'

const MoviesDetails = () => {
    const {id} = useParams();
    const [movie, setMovie] = useState([]);
    const [goBack, setGoBack] = useState(1);
    const navigate = useNavigate();

    useEffect(() => {
        serverAPI();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const goBackPage = () => {
        navigate(-goBack);
        setGoBack(1);
        return;
    }

    const serverAPI = async () => {
        const data = await SearchMoviesDetails(id);
        // const results = await data.results;
        // console.log(results);
        setMovie(data);
    };
    
    const {
        title,
        release_date,
        vote_average,
        overview,
        genres,

    } = movie;
    const dataRelease = String(release_date).slice(0,4);
    console.log(dataRelease);
    return (
        <main>
            <section className={MoviesDetailsSCSS.details}>
                <button type="button" onClick={goBackPage} className={MoviesDetailsSCSS.button}>
                    <IoIosArrowBack size={30} />   Go Back
                </button>
                <div className={MoviesDetailsSCSS.card}>
                    <img
                        src={movie.image }
                        alt={title}
                        className={MoviesDetailsSCSS.img}
                    />
                    <div className={MoviesDetailsSCSS.info}>
                        <h2 className={MoviesDetailsSCSS.title}>{title} <span>({dataRelease})</span></h2>
                        <ul className={MoviesDetailsSCSS.list}>
                            <li className={MoviesDetailsSCSS.item}>
                                <h3 className={MoviesDetailsSCSS.titleItem}>Rating:</h3>
                                <p className={MoviesDetailsSCSS.textItem}>{Math.round(vote_average * 10)}%</p>
                            </li>
                            <li className={MoviesDetailsSCSS.item}>
                                <h3 className={MoviesDetailsSCSS.titleItem}>Genres:</h3>
                                <p className={MoviesDetailsSCSS.textItem}>{genres &&
                                    genres.map(
                                    (genre, i, arr) =>`${genre.name} ${arr.length - 1 === i ? '' : '/'}`
                                    )}
                                </p>
                            </li>
                            <li className={MoviesDetailsSCSS.item}>
                                <h3 className={MoviesDetailsSCSS.titleItem}>Overview:</h3>
                                <p className={MoviesDetailsSCSS.textItem}>{overview}</p>
                            </li>
                        </ul>
                        <div className={MoviesDetailsSCSS.information}>
                            <h3 className={MoviesDetailsSCSS.informationText}>Additional information</h3>
                            <div className={MoviesDetailsSCSS.informationBottom}>
                                <Link
                                    to="cast"
                                    onClick={() => setGoBack(prev => prev + 1)}
                                    className={MoviesDetailsSCSS.informationLink}
                                >Actors</Link>
                                <Link
                                    to="reviews"
                                    onClick={() => setGoBack(prev => prev + 1)}
                                    className={MoviesDetailsSCSS.informationLink}
                                >Reviews</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <Suspense fallback={<Loader />}>
                    <Outlet />
                </Suspense>
            </section>
        </main>
    )
};
export default MoviesDetails;