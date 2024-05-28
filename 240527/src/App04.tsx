import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useRef } from "react";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;
const BiggerBox = styled.div`
  border-radius: 40px;
  width: 400px;
  height: 400px;
  background: rgba(255, 255, 255, 0.2);
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background: rgba(255, 255, 255, 1);
  border-radius: 18px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
`;

const boxVarient = {
  hover: { scale: 1.5, rotateZ: 90 },
  click: { scale: 1, borderRadius: "200px" },
  // darg: { backgroundColor: "rgb(46,204,113)", transition: { duration: 0.3 } },
};

function App() {
  const biggerBoxRef = useRef<HTMLDivElement>(null);
  return (
    <Wrapper>
      <BiggerBox ref={biggerBoxRef}>
        <Box
          drag
          dragSnapToOrigin
          dragElastic={0}
          dragConstraints={biggerBoxRef}
          variants={boxVarient}
          whileHover="hover"
          whileTap="click"
        />
      </BiggerBox>
    </Wrapper>
  );
}

export default App;
