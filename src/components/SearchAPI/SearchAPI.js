import axios from 'axios';

const BASE_URL = 'https://rickandmortyapi.com/api';
// const API_KEY = 'a620a6416fb18e40f7d335c64c3f9e0e';
export const IMG_URL = 'https://image.tmdb.org/t/p/w500';

export const SearchAllCharacters = async () => {
    // return SearchCharacters("");
    const serverDataURL = `${BASE_URL}/character`;
    try {
        const server = await axios.get(serverDataURL);
        const data = await server.data;
        return data;
    } catch (error) {
        console.log(error);
    }
};


export const SearchCharacters = async (name) => {
    // let serverDataURL = `${BASE_URL}/character`;
    // console.log("name:", name)
    // console.log("serverDataURL1: ", serverDataURL);
    // if(name !== "" || name !== null) {
        // serverDataURL = serverDataURL + `/?name=${name}`;  
        // console.log("serverDataURL2: ", serverDataURL); 
    // }
    // console.log("serverDataURL3: ", serverDataURL);
        // console.log("serverDataURL1: ", serverDataURL);
            // console.log("name1: ", name);
 if (name === '' || name === null) { 
    // console.log("name2: ", name);
   return SearchAllCharacters();
    }
    const serverDataURL = `${BASE_URL}/character/?name=${name}`;
    try {
        const server = await axios.get(serverDataURL);
        const data = await server.data;
        console.log("data: ", data)
        return data;
    } catch (error) {
        console.log(error);
    }
};


export const SearchMoviesDetails = async (id) => {
    

    const serverDataURL = `${BASE_URL}/character/${id}`;
    console.log("serverDataURL: ", serverDataURL)
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