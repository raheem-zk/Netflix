import { API_KEY } from "./constants";


export const original = `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`;
export const action = `/discover/tv?api_key=${API_KEY}&with_networks=213`;
export const trending = `/discover/movie?api_key=${API_KEY}&with_genres=28`
export const commedy = `/discover/movie?api_key=${API_KEY}&with_genres=35`
export const Horrer = `/discover/movie?api_key=${API_KEY}&with_genres=27`
export const Romantic = `/discover/movie?api_key=${API_KEY}&with_genres=10749`