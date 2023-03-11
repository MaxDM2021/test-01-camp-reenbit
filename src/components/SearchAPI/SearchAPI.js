import axios from 'axios';

const BASE_URL = 'https://rickandmortyapi.com/api';
// const API_KEY = 'a620a6416fb18e40f7d335c64c3f9e0e';
export const IMG_URL = 'https://image.tmdb.org/t/p/w500';

// export const SearchTrend = async (page=1) => {
//     const serverDataURL = `${BASE_URL}trending/movie/day?api_key=${API_KEY}&page=${page}`;
//     try {
//         const server = await axios.get(serverDataURL);
//         const data = await server.data;
//         return data;
//     } catch (error) {
//         console.log(error);
//     }
// };

export const SearchMovies = async (name, page =1) => {
    const serverDataURL = `${BASE_URL}/character/?${name}?${page}`;
    try {
        const server = await axios.get(serverDataURL);
        const data = await server.data;
        return data;
    } catch (error) {
        console.log(error);
    }
};

export const SearchMoviesDetails = async (id) => {
    const serverDataURL = `${BASE_URL}/character/${id}`;
    try {
        const server = await axios.get(serverDataURL);
        const data = await server.data;
        return data;
    } catch (error) {
        console.log(error);
    }
};

// export const SearchMoviesActor = async (id) => {
//     const serverDataURL = `${BASE_URL}movie/${id}/credits?api_key=${API_KEY}&language=en-US`;
//     try {
//         const server = await axios.get(serverDataURL);
//         const data = await server.data;
//         return data;
//     } catch (error) {
//         console.log(error);
//     }
// };

// export const SearchMoviesReviews = async (id) => {
//     const serverDataURL = `${BASE_URL}movie/${id}/reviews?api_key=${API_KEY}&language=en-US`;
//     try {
//         const server = await axios.get(serverDataURL);
//         const data = await server.data;
//         return data;
//     } catch (error) {
//         console.log(error);
//     }
// };