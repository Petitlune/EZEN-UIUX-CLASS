import React from "react";
import styled from "styled-components";
import { delay, motion } from "framer-motion";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

// const myVars = {
//   start: { scale: 0 },
//   end: { scale: 1, rotateZ: 360, transition: { type: "spring", delay: 2 } },
// };

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 18px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const Circle = styled(motion.div)`
  width: 70px;
  height: 70px;
  border-radius: 100%;
  background: #fff;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  place-self: center;
`;

const boxVarient = {
  start: {
    opacity: 0,
    scale: 0.5,
  },
  end: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      delay: 0.5,
      duration: 0.5,
      bounce: 0.5,
      delayChildren: 1,
      staggerChildren: 0.2,
    },
  },
};

const circleVarient = {
  start: { scale: 0, opacity: 0, y: 50 },
  end: {
    scale: 1.2,
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5,
      bounce: 0.8,
    },
  },
};

function App() {
  return (
    <Wrapper>
      <Box variants={boxVarient} initial="start" animate="end">
        <Circle variants={circleVarient} />
        <Circle variants={circleVarient} />
        <Circle variants={circleVarient} />
        <Circle variants={circleVarient} />
      </Box>
    </Wrapper>
  );
}

export default App;
