import api from "../Redux/api";

const getMovies = () => {
  return async (dispatch) => {
    const popularMoviesApi = await api.get();
  };
};
