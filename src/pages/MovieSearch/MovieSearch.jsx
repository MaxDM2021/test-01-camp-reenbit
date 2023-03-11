import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SearchMovies } from '../../components/SearchAPI/SearchAPI';
import { Form } from 'components/Form/Form';
import { MovieItem } from '../MovieList/MovieItem';
import { Loader } from 'components/Loader/Loader';
import MovieListSCSS from '../MovieList/MovieList.module.scss';
import MovieSearchSCSS from './MovieSearch.module.scss';

const MovieSearch = () => {
    const [searchMovieValue, setSearchMovieValue] = useState('');
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();
    const [loader, setLoader] = useState(false);
    const moviesName = searchParams.get('name') ?? '';
    const histori = window.location.search.split('=')[1];

    useEffect(() => {
        if (!searchMovieValue && !histori) {
            return;
        }
        if (!searchMovieValue) {
            serverAPI(histori);
            return;
        }

        serverAPI(searchMovieValue);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchMovieValue]);

    const onSubmit = (event) => {
        event.preventDefault();
        setSearchMovieValue(event.target.name.value);
    }

    const onChang=(name)=> {
        const nextParams = name !== '' ? { name } : {};
        setSearchParams(nextParams);
    }

    const serverAPI = async (name) => {
        setError(false);
        setLoader(true);
        const data = await SearchMovies(name);
        const results = await data.results;
        console.log(results);
        setMovies(results);
        if (!results.length) {
            setError(true);
        }
        setLoader(false);
    };
    
    return (
        <main>
            <section>
                <Form submit={onSubmit} searchMovieValue={moviesName} onChang={onChang} />
                {loader && <Loader />}
                {error && (<p className={MovieSearchSCSS.p}>Sorry, we didn't find anything. Try again.</p>)}
                <ul className={MovieListSCSS.list}>
                {movies.map(movie => (
                    <MovieItem key={movie.id} movie={movie}></MovieItem>
                ))}
                </ul>
            </section>
        </main>
    );
};
export default MovieSearch;