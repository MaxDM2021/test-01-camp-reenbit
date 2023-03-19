import React, { useState, useEffect, Suspense } from 'react';
import { useParams, Outlet, useNavigate } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { SearchMoviesDetails } from '../../components/SearchAPI/SearchAPI';
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
        setMovie(data);
        console.log("data: ", data);
    };


    const {
        name,
        image,
        gender,
        status,
        species,
        type,
    } = movie;

console.log("character details: ", movie);

    return (
        <main>
            <section className={MoviesDetailsSCSS.details}>
                <button type="button" onClick={goBackPage} className={MoviesDetailsSCSS.button}>
                    <FiArrowLeft size={30}/>GO BACK
                </button>
                <div className={MoviesDetailsSCSS.card}>
                    <img
                        src={image}
                        alt={name}
                        className={MoviesDetailsSCSS.img}
                    />
                    <div className={MoviesDetailsSCSS.info}>
                        <h2 className={MoviesDetailsSCSS.title}>{name}</h2>
                        <h2 className={MoviesDetailsSCSS.titleInfo}>Informations</h2>
                        <ul className={MoviesDetailsSCSS.list}>
                            <li className={MoviesDetailsSCSS.item}>
                                <h3 className={MoviesDetailsSCSS.titleItem}>Gender</h3>
                                <h4 className={MoviesDetailsSCSS.textItem}>{gender}</h4>
                            </li>
                            <li className={MoviesDetailsSCSS.item}>
                                <h3 className={MoviesDetailsSCSS.titleItem}>Status:</h3>
                                <p className={MoviesDetailsSCSS.textItem}>{status}
                                </p>
                            </li>
                            <li className={MoviesDetailsSCSS.item}>
                                <h3 className={MoviesDetailsSCSS.titleItem}>Specie:</h3>
                                <p className={MoviesDetailsSCSS.textItem}>{species}</p>
                            </li>
                            <li className={MoviesDetailsSCSS.item}>
                                <h3 className={MoviesDetailsSCSS.titleItem}>Origin:</h3>
                                {/* чомусь  працюэ через раз {origin.name}зробив принтскрин коли працювало..*/}
                                <p className={MoviesDetailsSCSS.textItem}>{species}</p>
                            </li>
                            <li className={MoviesDetailsSCSS.item}>
                                <h3 className={MoviesDetailsSCSS.titleItem}>Type:</h3>
                                <p className={MoviesDetailsSCSS.textItem}>{type ? type : "Unknown"}</p>
                            </li>
                        </ul>
                       
                    </div>
                </div>
                <Suspense fallback={null}>
                    <Outlet />
                </Suspense>
            </section>
        </main>
    )
};
export default MoviesDetails;