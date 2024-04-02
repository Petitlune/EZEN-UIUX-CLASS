import "./App.css";
//react라는 라이브러리에서 useState(상태 변화의 값을 컨트롤)라는 함수/Hook을 갖고와서 쓴다는 뜻
import { useState } from "react";
// 숫자 하단에 버튼을 생성하고 버튼 클릭시 값이 증가하게 만들고 싶다.
function App() {
  //웹브라우저가 실행되는 순가 바로 실행됨 =>
  // console.log("Update!");
  //useState의 배열형식의 값을 반환, 초기값과 함수.
  // const [count, setCount] = useState(0);
  // const onIncrease = () => {
  //   setCount(count + 1);
  // };

  // const [text, setText] = useState("");
  // const handleOnChange = (e) => {
  //   setText(e.target.value);
  // };

  // const [date, setDate] = useState("");
  // const handleOnChange = (e) => {
  //   setDate(e.target.value);
  // };

  // const [option, setOption] = useState("");
  // const handleOnChange = (e) => {
  //   setOption(e.target.value);
  // };

  // const [textarea, setTextArea] = useState("");
  // const handleOnChange = (e) => {
  //   setTextArea(e.target.value);
  // };

  // const [name, setName] = useState("");
  // const [gender, setGender] = useState("");
  // const [birth, setBirth] = useState("");
  // const [bio, setBio] = useState("");

  // const onChangeName = (e) => {
  //   setName(e.target.value);
  // };
  // const onChangeGender = (e) => {
  //   setGender(e.target.value);
  // };
  // const onChangeBirth = (e) => {
  //   setBirth(e.target.value);
  // };
  // const onChangeBio = (e) => {
  //   setBio(e.target.value);
  // };
  // => 한방에 정리해버리기
  const [state, setState] = useState({
    name: "",
    gender: "",
    birth: "",
    bio: "",
  });
  const handleOnChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="container">
      {/* <h2>{count}</h2>
        <button onClick={onIncrease}>+</button> */}
      {/* <input value={text} onChange={handleOnChange}></input>
        <div>{text}</div> */}
      {/* <input value={date} type="date" onChange={handleOnChange} /> */}
      {/* <select value={option} onChange={handleOnChange}>
          <option key={"1번"}>1번</option>
          <option key={"2번"}>2번</option>
          <option key={"3번"}>3번</option>
        </select> */}
      {/* <textarea value={textarea} onChange={handleOnChange} /> */}
      <div>
        <input
          name="name"
          value={state.name}
          placeholder="이름"
          onChange={handleOnChange}
        />
      </div>
      <div>
        <select name="gender" value={state.gender} onChange={handleOnChange}>
          <option key={""}></option>
          <option key={"여성"}>여성</option>
          <option key={"남성"}>남성</option>
        </select>
      </div>
      <div>
        <input
          name="birth"
          value={state.birth}
          type="date"
          onChange={handleOnChange}
        />
      </div>
      <div>
        <textarea name="bio" value={state.bio} onChange={handleOnChange} />
      </div>
    </div>
  );
}

export default App;
