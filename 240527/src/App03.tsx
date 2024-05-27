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
};

function App() {
  return (
    <Wrapper>
      <Box variants={boxVarient} whileHover="hover" whileTap="click" />
    </Wrapper>
  );
}

export default App;
