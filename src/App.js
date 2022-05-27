import styled, { keyframes } from "styled-components";

const rotationAnimation = keyframes`
0%{
  transform: rotate(0deg);
  border-radius: 0px;
}
50%{
  transform: rotate(360deg);
  border-radius: 100px;
}
100%{
  transform: rotate(0deg);
  border-radius: 0px;
}
`;
const Emoji = styled.span`
  font-size: 36px;
`;

const Wrapper = styled.div`
  display: flex;
`;
const Box = styled.div`
  height: 200px;
  width: 200px;
  background-color: tomato;
  animation: ${rotationAnimation} 1s linear infinite;
  display: flex;
  justify-content: center;
  align-items: center;
  ${Emoji} {
    &:hover {
      font-size: 70px;
    }
  }
`;
function App() {
  return (
    <Wrapper>
      <Box>
        <Emoji as="p">🤩</Emoji>
      </Box>
      <Emoji>🔥</Emoji>
    </Wrapper>
  );
}

export default App;
