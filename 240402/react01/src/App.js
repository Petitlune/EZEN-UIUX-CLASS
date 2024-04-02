import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Buttons from "./components/Buttons";

//App이라는 함수의 자식요소 컴포넌트 만들기
const ChildComp = () => {
  return <div>child component</div>;
};

function App() {
  const BodyProps = {
    name: "Petit",
    location: "부천시",
    // favorList: ["파스타", "햄버거", "떡볶이"],
  };
  return (
    <div className="App">
      <Header />
      <Body {...BodyProps} />
      <Buttons />
      <Footer>
        <ChildComp />
      </Footer>
    </div>
  );
}

export default App;
