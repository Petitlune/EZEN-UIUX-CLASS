import React from "react";
import { useQuery } from "react-query";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { IGetMoviesResult } from "../api";
import { makeImagePath } from "../Utils";
import { IGetGenresResult } from "../api";
import { getGenre } from "../api";
//useLocation / useSearchParams / URLSearchParmas 세개 모두 가능
//URLSearchParmas은 리액트 훅 아니고 자바스크립트 문법으로 쿼리값 찾아오는 것이 가능하다.

const SearchBox = styled.div`
  padding: 100px 40px;
  display: flex;
  img {
    width: 40vw;
    margin-right: 20px;
    object-fit: cover;
  }
`;
const SearchTitle = styled.div`
  font-size: 38px;
  background-color: ${(props) => props.theme.red};
  border-radius: 14px 0 14px 0;
  padding: 0 18px;
`;
const SearchOverview = styled.p`
  margin: 10px 0;
  padding: 18px 0;
  font-size: 18px;
  margin-bottom: 32px;
  border-top: 1px solid #fff;
  border-bottom: 1px solid #fff;
`;

const SearchDate = styled.div`
  font-size: 18px;
  span {
    display: inline-block;
    width: 100px;
    background: #ffa300;
    text-align: center;
    color: ${(props) => props.theme.black.darker};
    border-top-left-radius: 14px;
    padding: 8px;
    margin-right: 8px;
  }
`;
const SearchValue = styled.div`
  font-size: 18px;
  margin: 10px 0;
  span {
    display: inline-block;
    width: 100px;
    background: #ffa300;
    text-align: center;
    color: ${(props) => props.theme.black.darker};
    border-top-left-radius: 14px;
    padding: 8px;
    margin-right: 8px;
  }
`;
const SearchPoint = styled.div`
  font-size: 18px;
  margin: 10px 0;
  span {
    display: inline-block;
    width: 100px;
    background: #ffa300;
    text-align: center;
    color: ${(props) => props.theme.black.darker};
    border-top-left-radius: 14px;
    padding: 8px;
    margin-right: 8px;
  }
`;
const SearchGeneres = styled.div`
  font-size: 18px;
  span {
    display: inline-block;
    width: 100px;
    background: #ffa300;
    text-align: center;
    color: ${(props) => props.theme.black.darker};
    border-top-left-radius: 14px;
    padding: 8px;
    margin-right: 8px;
  }
`;

const IsSearch = () => {
  const location = useLocation();
  const keyword = new URLSearchParams(location.search).get("keyword");
  const API_KEY = "1ebed7a022dd655fb388f73dcd570689";
  const BASE_PATH = "https://api.themoviedb.org/3";

  //search 영화를 찾아오는 함수
  const searchedMovies = () => {
    return fetch(
      `${BASE_PATH}/search/multi?query=${keyword}&api_key=${API_KEY}&language=ko-kr&page=1`
    ).then((response) => response.json());
  };
  const { data: movieData, isLoading: movieLoading } =
    useQuery<IGetMoviesResult>(["movies", keyword], searchedMovies);
  const { data: genreData, isLoading: genreLoading } =
    useQuery<IGetMoviesResult>(["movies", keyword], searchedMovies);

  const {} = useQuery<IGetGenresResult>(["getGenre"], getGenre);

  console.log(movieData);
  return (
    <div>
      {movieLoading && genreLoading ? (
        <div>Loading</div>
      ) : (
        <div>
          {movieData?.results.map((movie, index) => (
            <SearchBox key={index}>
              <img src={makeImagePath(movie?.backdrop_path)} />
              <div>
                <SearchTitle>
                  {movie?.title} {movie?.name}
                </SearchTitle>
                <SearchOverview>{movie?.overview}</SearchOverview>
                <SearchDate>
                  <span>개봉일</span>
                  {movie?.release_date}
                  {movie?.first_air_date}
                </SearchDate>
                <SearchValue>
                  <span>관람등급</span>
                  {movie?.adult ? "청소년 관람불가" : "전체 관람가"}
                </SearchValue>
                <SearchPoint>
                  <span>영화 평점</span>
                  {movie?.vote_average.toFixed(2)}(
                  {movie?.vote_count.toLocaleString("ko-kr")}명 투표참여)
                </SearchPoint>
                <SearchGeneres>
                  <span>장르</span>
                  {/* {movie.genre_ids
                    .map(
                      (id) =>
                        genreData?.genre.find((item) => item.id === id)?.name
                    )
                    .filter((name) => name)
                    .join(",")} */}
                </SearchGeneres>
              </div>
            </SearchBox>
          ))}
        </div>
      )}
    </div>
  );
};

export default IsSearch;
