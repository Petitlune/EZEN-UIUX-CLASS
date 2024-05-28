import React, { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

const Wrapper = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  gap: 80px;
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 50vw;
  gap: 10px;
  div:first-child,
  div:last-child {
    grid-column: span 2;
  }
`;
const Box = styled(motion.div)`
  /* width: 400px; */
  height: 400px;
  background: rgba(255, 255, 255, 1);
  border-radius: 60px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
const Overlay = styled(motion.div)`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const overlay = {
  start: { opacity: 0 },
  visible: { opacity: 1 },
  end: { opacity: 0 },
};

function App() {
  const [id, setId] = useState<string | null>(null);

  // const [clicked, setClicked] = useState(false);
  // const toggle = () => {
  //   setClicked((prev) => !prev);
  // };
  return (
    <Wrapper>
      <Grid>
        {["1", "2", "3", "4"].map((item) => (
          <Box
            key={item}
            onClick={() => setId(item + "")}
            layoutId={item + ""}
          />
        ))}
      </Grid>
      <AnimatePresence>
        {id ? (
          <Overlay
            onClick={() => setId(null)}
            variants={overlay}
            initial="start"
            animate="visible"
            exit="end"
          >
            <Box layoutId={id} style={{ width: 600, height: 400 }} />
          </Overlay>
        ) : null}
      </AnimatePresence>
    </Wrapper>
  );
}

export default App;
