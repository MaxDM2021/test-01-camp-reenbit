import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

import { SearchAllCharacters } from '../../components/SearchAPI/SearchAPI';
import { MovieItem } from './MovieItem';

import MovieListSCSS from './MovieList.module.scss';
import { Loader } from 'components/Loader/Loader';

const MovieList = ({list}) => {
  const [movies, setMovies] = useState([]);
  const [name, setTitle] = useState(true);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    if (list) {
      setMovies(list);
      setTitle(false);
      return;
    }
    serverAPI();
  }, [list]);

  const serverAPI = async () => {
    setLoader(true);
    const data = await SearchAllCharacters();
    const results = await data.results;
    console.log("results: ", results );
    setMovies(results);
    return setLoader(false);
  };

  return (
    <section>
      {name && <h2 className={MovieListSCSS.text}>Trending today</h2>}
      {loader && <Loader />}
      <ul className={MovieListSCSS.list}>
        {movies.map(movie => (
          <MovieItem key={movie.id} movie={movie}></MovieItem>
        ))}
      </ul>
    </section>
  );
};
MovieList.propTypes = {
  list: PropTypes.array,
};
export default MovieList;