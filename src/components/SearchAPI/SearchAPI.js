import axios from 'axios';

const BASE_URL = 'https://rickandmortyapi.com/api';

export const IMG_URL = 'https://image.tmdb.org/t/p/w500';

export const SearchAllCharacters = async () => {

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

 if (name === '' || name === null) { 
 
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

