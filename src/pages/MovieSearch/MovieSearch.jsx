import { useState, useEffect } from 'react';
import { useSearchParams} from 'react-router-dom';
import { SearchCharacters } from '../../components/SearchAPI/SearchAPI';
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


  useEffect(() => {
    serverAPI(searchMovieValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchMovieValue]);

  const onSubmit = event => {
    event.preventDefault();
    setSearchMovieValue(event.target.name.value);
  };

  const onChang = name => {
    const nextParams = name !== '' ? { name } : {};
    setSearchParams(nextParams);
  };

  const serverAPI = async name => {
    setError(false);
    setLoader(true);
    const data = await SearchCharacters(name);
    const results = await data.results.sort((x, y) =>
      x.name.localeCompare(y.name)
    );

    setMovies(results);
    if (!results.length) {
      setError(true);
    }
    setLoader(false);
  };

  return (
    <main>
      <section>
        <Form
          submit={onSubmit}
          searchMovieValue={moviesName}
          onChang={onChang}
        />
        {loader && <Loader />}
        {error && (
          <p className={MovieSearchSCSS.p}>
            Sorry, we didn't find anything. Try again.
          </p>
        )}
        {movies.length > 0 && (
          <ul className={MovieListSCSS.list}>
            {movies.map(movie => (
              <MovieItem key={movie.id} movie={movie}></MovieItem>
            ))}
          </ul>
        )}
      </section>
    </main>
  );
};
export default MovieSearch;




