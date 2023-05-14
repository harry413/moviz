import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYjg4ODBiZGNkZjE2MDZkN2E5MzUxMDc4ODMwMmFkZCIsInN1YiI6IjYwZjgxNjZkMzlhMWE2MDA0ODFjM2FlNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MvrTotF-kYds4yVkR1YlXKfAqZOT7Js80Z0GNAAkQfU"

const headers = {
    Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async(url, params) => {
    try {
        const { data } = await axios.get(BASE_URL + url, {
                    headers,
                    params,
        }, );
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
}