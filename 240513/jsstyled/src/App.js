import { keyframes, styled } from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  gap: 16px;
  background-color: ${(props) => props.theme};
`;
const rotationAnimation = keyframes`
0% {
  transform: rotate(0deg);
  border-radius: 0;
}
50%{
  transform: rotate(360deg);
  border-radius: 100%;
}
100% {
  transform: rotate(0deg);
  border-radius:0;
}
`;

const Emoji = styled.span`
  font-size: 36px;
  display: inline-block;
  width: 80px;
  height: 80px;
  text-align: center;
  background: #fff;
  line-height: 76px;
  transition: all 0.3s;
`;

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: tomato;
  height: 200px;
  width: 200px;
  animation: ${rotationAnimation} 5s alternate;
  ${Emoji} {
    cursor: pointer;
    &:hover {
      font-size: 50px;
    }
    &:active {
      opacity: 0;
    }
  }
`;

function App() {
  return (
    <Container>
      <Box>
        <Emoji>😎</Emoji>
      </Box>
      <Emoji>🤩</Emoji>
    </Container>
  );
}

export default App;
