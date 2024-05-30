import React, { useState } from "react";
import { useQuery } from "react-query";
import { IGetMoviesResult, getMovie } from "../api";
import { makeImagePath } from "../Utils";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

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

const Ishome = () => {
  //false은 leaving이 완료 되었다는 뜻, true는 leaving 중
  const [leaving, setLeaving] = useState(false);
  const [index, setIndex] = useState(0);

  const toggleLeaving = () => {
    setLeaving((prev) => !prev);
  };
  const increaseIndex = () => {
    if (data) {
      if (leaving) return;
      toggleLeaving();
      const totalMovies = data.results.length - 2;
      const maxIndex = Math.ceil(totalMovies / offset) - 1;

      setIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
    }
  };

  const [modal, setModal] = useState(false);

  // const modalBox = () => {
  //   let dataId = data?.results.map((it) => it.id);

  //   if( dataId )
  // };
  const { data, isLoading } = useQuery<IGetMoviesResult>(
    ["movies", "nowPlaying"],
    getMovie
  );

  const offset = 6;

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
                      onClick={modalBox}
                      key={movie.id}
                      variants={boxVariants}
                      initial="normal"
                      bgPhoto={makeImagePath(movie.backdrop_path)}
                      whileHover="hover"
                      transition={{ type: "tween" }}
                    >
                      {/* {{movie.id} === dataId[0] ? <div>모달창</div> : null} */}
                      <Info variants={infoVariants}>
                        <h4>{movie.title}</h4>
                      </Info>
                    </Box>
                  ))}
              </Row>
            </AnimatePresence>

            {/* <Row>
              <Box />
              <Box />
              <Box />
              <Box />
              <Box />
              <Box />
            </Row>
            <Row>
              <Box />
              <Box />
              <Box />
              <Box />
              <Box />
              <Box />
            </Row> */}
          </Slider>
        </>
      )}
    </Wrapper>
  );
};

export default Ishome;
