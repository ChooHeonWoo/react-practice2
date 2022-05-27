import styled from "styled-components";
const Father = styled.div`
  display: flex;
`;
const Box = styled.div`
  background-color: ${(props) => props.bgColor};
  width: 100px;
  height: 100px;
`;
const Circle = styled(Box)`
  // Box의 속성을 그대로 들고옴
  border-radius: 50px;
`;
const Text = styled.span`
  color: white;
`;
function App() {
  return (
    <Father>
      <Box bgColor="teal">
        <Text>Hello</Text>
      </Box>
      <Circle bgColor="tomato"></Circle>
    </Father>
  );
}

export default App;
