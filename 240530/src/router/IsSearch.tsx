import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { makeImagePath } from "../Utils";
import { IGetGeneresResult, getGenre, IGetMoviesResult, IMovie } from "../api";
import YouTube from "react-youtube";

//useLocation / useSearchParams / URLSearchParmas 세개 모두 가능
//URLSearchParmas은 리액트 훅 아니고 자바스크립트 문법으로 쿼리값 찾아오는 것이 가능하다.
const SearchBox = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ContentSection = styled.div`
  display: flex;
  img {
    width: 800px;
    margin-right: 20px;
  }
`;

const ContentInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 800px;
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
const ReviewSection = styled.div`
  margin-top: 20px;
  padding: 20px;
  background-color: #f8f9fa;
  color: ${(props) => props.theme.black.darker};
  border-radius: 10px;
  width: 1620px;
  p {
    width: 100%;
    margin: 0;
    padding: 10px;
    div {
      width: 100%;
    }
  }
`;

const ReviewTitle = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: ${(props) => props.theme.red};
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

  const {} = useQuery<IGetGeneresResult>(["getGenre"], getGenre);

  type Review = {
author: string;
content: string;
  };

type ContentState<T> = {
  [key: number]: T[];
}




  // const [reviews, setReviews] = useState<ReviewsState>({});
  // const [videos, setVideos] = useState<ReviewsState>({});
  const [reviews, setReviews] = useState<ContentState<Review>>({});
  const [videos, setVideos] = useState<ContentState<string>>({});

  const fetchReviews = (movieId: number) => {
    return fetch(
      `${BASE_PATH}/movie/${movieId}/reviews?language=en-US&page=1&api_key=${API_KEY}`
    ).then((response) => response.json());
  };

  useEffect(() => {
    if (movieData) {
      movieData.results.forEach((movie) => {
        fetchReviews(movie.id).then((reviewData) =>
          setReviews((prev) => ({
            ...prev,
            [movie.id]: reviewData?.results?.map(review: any) =>(
            { author: review.author,
              content: reviewData.content}
            ),
          }))
        );
      });
    }
  }, [movieData]);
  //비디오
  const fetchVideos = (movieId: number) => {
    return fetch(
      `${BASE_PATH}/movie/${movieId}/videos?language=en-US&page=1&api_key=${API_KEY}`
    ).then((response) => response.json());
  };
  useEffect(() => {
    if (movieData) {
      movieData.results.forEach((movie) => {
        fetchVideos(movie.id).then((videoData) => {
          const videoIds = videoData?.results?.map((video: any) => video.key);
          setVideos((prev) => ({
            ...prev,
            [movie.id]: videoIds,
          }));
        });
      });
    }
  }, [movieData]);

  return (
    <div>
      {movieLoading && genreLoading ? (
        <div>Loading...</div>
      ) : (
        movieData?.results.map((movie, index) => (
          <SearchBox key={index}>
            <ContentSection>
              <img src={makeImagePath(movie?.backdrop_path)} />
              <ContentInfo>
                <SearchTitle>
                  ({movie?.title} {movie?.name})
                </SearchTitle>
                <SearchOverview>{movie?.overview}</SearchOverview>
                <SearchDate>
                  <span>릴리즈</span>
                  {movie?.release_date}
                  {movie?.first_air_date}
                </SearchDate>
                <SearchValue>
                  <span>관람등급</span>
                  {movie?.adult ? "청소년관람불가" : "전체관람가"}
                </SearchValue>
                <SearchPoint>
                  <span>영화평점</span>
                  {movie?.vote_average !== undefined
                    ? movie?.vote_average.toFixed(2)
                    : "N/A"}
                  /
                  {movie?.vote_count
                    ? movie?.vote_count.toLocaleString("ko-kr")
                    : "0"}
                  명 투표참여
                </SearchPoint>
                {/* <SearchGeneres>
                  <span>장르</span>
                  {movie?.genre_ids
                    ? movie?.genre_ids
                        .map(
                          (id) =>
                            genreData?.genres.find((item) => item.id === id)
                              ?.name
                        )
                        .filter((name) => name)
                        .join(", ")
                    : "N/A"}
                </SearchGeneres> */}
              </ContentInfo>
            </ContentSection>
            <ReviewSection>
              <h3>😤😲Review😍😅</h3>
              {reviews[movie.id]?.length > 0 ? (
                reviews[movie.id].map((review, reviewIndex) => (
                  <p key={reviewIndex}>
                    <div>
                      <ReviewTitle>🤩{review.author}</ReviewTitle> : {review.content}
                    </div>
                  </p>
                ))
              ) : (
                <p>No reviews available.</p>
              )}
            </ReviewSection>
            <div>
              {videos[movie.id]?.length > 0 ? (
                <YouTube
                  videoId={videos[movie.id][0]}
                  opts={{
                    width: "1620px",
                    height: "800px",
                    playerVars: {
                      autoplay: 0,
                      modestbranding: 1,
                      loop: 0,
                      playlist: videos[movie.id][0],
                    },
                  }}
                  onReady={(e) => {
                    e.target.mute();
                  }}
                />
              ) : (
                "No Available"
              )}
            </div>
          </SearchBox>
        ))
      )}
    </div>
  );
};
export default IsSearch;
