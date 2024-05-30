const API_KEY = "1ebed7a022dd655fb388f73dcd570689";
const BASE_PATH = "https://api.themoviedb.org/3";

interface IMovie {
  id: number;
  title: string;
  overview: string;
  backdrop_path: string;
  poster_path: string;
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
}

export const getMovie = () => {
  return fetch(
    `${BASE_PATH}/movie/now_playing?api_key=${API_KEY}&language=ko-kr&region=kr`
  ).then((response) => response.json());
};
