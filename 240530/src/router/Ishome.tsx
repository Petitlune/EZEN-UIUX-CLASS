import React, { useState } from "react";
import { useQuery } from "react-query";
import { IGetMoviesResult, getMovie } from "../api";
import { makeImagePath } from "../Utils";
import styled from "styled-components";
import { motion, AnimatePresence, useScroll } from "framer-motion";
//동적 경로를 만들어주는 useNavigate 훅 함수
import { useNavigate, useMatch, PathMatch } from "react-router-dom";

const Wrapper = styled.div`
  background-color: #000;
  height: 100%;
`;
const Loader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20vh;
`;

const Banner = styled.div<{ bgPhoto: string | undefined }>`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 60px;
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),
    url(${(props) => props.bgPhoto});

  background-size: cover;
`;
const Title = styled.h2`
  font-size: 58px;
  margin-bottom: 20px;
`;

const OverView = styled.p`
  font-size: 1.8vw;
  width: 50%;
`;
const Slider = styled.div`
  position: relative;
  top: -100px;
`;
const Row = styled(motion.div)`
  position: absolute;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  width: 100%;
  gap: 10px;
`;
const Box = styled(motion.div)<{ bgPhoto: string }>`
  position: relative;
  background: #fff;
  background-image: url(${(props) => props.bgPhoto});
  background-size: cover;
  background-position: center;
  height: 200px;
  margin-bottom: 10px;
  font-size: 24px;
  cursor: pointer;
  &:first-child {
    transform-origin: center left;
  }
  &:last-child {
    transform-origin: center right;
  }
`;
const Info = styled(motion.div)`
  background-color: ${(props) => props.theme.black.lighter};
  padding: 20px;
  opacity: 0;
  position: absolute;
  bottom: 0;
  width: 100%;
  h4 {
    width: 100%;
    text-align: center;
    font-size: 18px;
  }
`;

const Overlay = styled(motion.div)`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
`;
const BigMovie = styled(motion.div)`
  width: 40vw;
  height: 60vh;
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  border-radius: 15px;
  overflow: hidden;
  background: ${(props) => props.theme.black.lighter};
`;
const BigCover = styled.div`
  width: 100%;
  height: 400px;
  background-position: center;
  background-repeat: no-repeat;
  object-fit: cover;
  background-size: cover;
`;
const BigTitle = styled.h3`
  text-align: center;
  font-size: 28px;
  position: relative;
  top: -68px;
`;

const BigOverView = styled.p`
  position: relative;
  top: -60px;
  padding: 20px;
  margin-top: 20px;
`;

const rowVariants = {
  hidden: { x: window.outerWidth + 10 },
  visible: { x: 0 },
  exit: { x: -window.outerWidth - 10 },
};

const boxVariants = {
  //initial에는 딜레이값 안주고 hover했을 때만 딜레이 적용해서 서로 겹쳐지지 않게 해줌
  normal: {
    scale: 1,
  },
  hover: {
    scale: 1.2,
    y: -50,
    zIndex: 99,
    transition: {
      delay: 0.3,
    },
  },
  click: {
    display: "block",
  },
};

const infoVariants = {
  hover: {
    opacity: 1,
    transition: {
      delay: 0.3,
    },
  },
};
//검색바 검색어 입력
// 이벤트 핸들러로 검색단어 state 변수값 확인
// 확인한 키워드 활용해서 해당영화를 Srearch 컴포넌트에 영화 데이터가 출력되게
//'https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1' \

const Ishome = () => {
  //false은 leaving이 완료 되었다는 뜻, true는 leaving 중
  const [leaving, setLeaving] = useState(false);
  const [index, setIndex] = useState(0);
  const { scrollY } = useScroll();
  const history = useNavigate();

  const bigMovieMatch: PathMatch<string> | null = useMatch("/movies/:movieId");
  console.log(bigMovieMatch);
  const toggleLeaving = () => {
    setLeaving((prev) => !prev);
  };
  const increaseIndex = () => {
    if (data) {
      if (leaving) return;
      toggleLeaving();
      const totalMovies = data?.results.length - 2;
      const maxIndex = Math.ceil(totalMovies / offset) - 1;

      setIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
    }
  };

  const { data, isLoading } = useQuery<IGetMoviesResult>(
    ["movies", "nowPlaying"],
    getMovie
  );

  const onOverlayClicked = () => {
    history("/");
  };
  const onBoxClicked = (movieId: number) => {
    history(`/movies/${movieId}`);
  };
  const offset = 6;
  //선택한 영화 정보값 불러오는 변수
  const clickedMovie =
    bigMovieMatch?.params.movieId &&
    data?.results.find(
      (movie) => movie.id === Number(bigMovieMatch.params.movieId)
    );
  console.log(clickedMovie);

  // 모달 방식
  //1) 영화 썸네일 클릭 => 이벤트 핸들러로 아이디값 찾아냄 => 아이디를 활용해서
  return (
    <Wrapper>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <>
          <Banner
            onClick={increaseIndex}
            bgPhoto={makeImagePath(data?.results[0].backdrop_path || "")}
          >
            <Title>{data?.results[0].title}</Title>
            <OverView>{data?.results[0].overview}</OverView>
          </Banner>
          <Slider>
            <AnimatePresence initial={false} onExitComplete={toggleLeaving}>
              <Row
                key={index}
                variants={rowVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ type: "tween", duration: 2 }}
              >
                {data?.results
                  .slice(1)
                  .slice(offset * index, index * offset + offset)
                  .map((movie) => (
                    <Box
                      layoutId={movie.id + ""}
                      onClick={() => onBoxClicked(movie.id)}
                      key={movie.id}
                      variants={boxVariants}
                      initial="normal"
                      bgPhoto={makeImagePath(movie.backdrop_path)}
                      whileHover="hover"
                      transition={{ type: "tween" }}
                    >
                      <Info variants={infoVariants}>
                        <h4>{movie.title}</h4>
                      </Info>
                    </Box>
                  ))}
              </Row>
            </AnimatePresence>
          </Slider>
          <AnimatePresence>
            {bigMovieMatch ? (
              <>
                <Overlay
                  onClick={onOverlayClicked}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                />
                <BigMovie
                  layoutId={bigMovieMatch.params.movieId}
                  style={{ top: scrollY.get() + 50 }}
                >
                  {clickedMovie && (
                    <>
                      <BigCover
                        style={{
                          backgroundImage: `linear-gradient(to top, black, transparent), url(${makeImagePath(
                            clickedMovie.backdrop_path
                          )}) `,
                        }}
                      />
                      <BigTitle>{clickedMovie.title}</BigTitle>
                      <BigOverView>{clickedMovie.overview}</BigOverView>
                    </>
                  )}
                </BigMovie>
              </>
            ) : null}
          </AnimatePresence>
        </>
      )}
    </Wrapper>
  );
};

export default Ishome;
