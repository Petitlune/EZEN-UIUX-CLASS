import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { movieAction } from "../Redux/action/movieAction";
import Banner from "../components/Banner";
import MoviesSlide from "../components/MoviesSlide";
import { ClipLoader } from "react-spinners";

const Home = () => {
  const dispatch = useDispatch();
  const { popularMovies, topRatedMovies, upComingMovies } = useSelector(
    (state) => state.movie
  );

  useEffect(() => {
    dispatch(movieAction.getMovies());
  }, []);
  if (loading) {
    return (
      <div classNameslide>
        <ClipLoader
          color={color}
          loading={loading}
          cssOverride={override}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    );
  }
  return (
    <div className="slide">
      {popularMovies.results && <Banner movie={popularMovies.results[11]} />}
      <div className="movieContent">
        <h1>Popular Movie</h1>
        <MoviesSlide movies={popularMovies} />
        <h1>TopRated Movie</h1>
        <MoviesSlide movies={topRatedMovies} />
        <h1>upcoming Movie</h1>
        <MoviesSlide movies={upComingMovies} />
      </div>
    </div>
  );
};

export default Home;
