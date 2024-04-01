import "./App.css";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";

//Header라는 자식 컴포넌트(함수형) 만들기
//2018년도 이전에는 클래스형 컴포넌트였음
// function Header() {
//   return (
//     <header>
//       <h1>header</h1>
//     </header>
//   );
// }
//화살표 함수형식으로 함수형 컴포넌트 가능
//자바스크립트 함수는 1급시민이기 때문에 이 모든게 가능하다.

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
