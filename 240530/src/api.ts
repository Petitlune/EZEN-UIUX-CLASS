const API_KEY = "1ebed7a022dd655fb388f73dcd570689";
const BASE_PATH = "https://api.themoviedb.org/3";

export interface IMovie {
  id: number;
  title: string;
  name: string;
  overview: string;
  release_date: string;
  first_air_date: string;
  adult: boolean;
  backdrop_path: string;
  poster_path: string;
  vote_average: number;
  vote_count: number;
  genre_ids: number[];
}

export interface IGetMoviesResult {
  dates: {
    maxium: string;
    minimum: string;
  };
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
  genre_ids: number[];
}

interface IGenres {
  id: number;
  name: string;
}
export interface IGetGeneresResult {
  genres: IGenres[];
}

export const getMovie = () => {
  return fetch(
    `${BASE_PATH}/movie/now_playing?api_key=${API_KEY}&language=ko-kr&region=kr`
  ).then((response) => response.json());
};
export const getGenre = () => {
  return fetch(
    `${BASE_PATH}/genre/movie/list?api_key=${API_KEY}&language=ko-kr&region=kr`
  ).then((response) => response.json());
};
