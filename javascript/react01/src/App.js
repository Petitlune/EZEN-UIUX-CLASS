import "./App.css";

import { useState, useRef } from "react";

function App() {
  const [input, setInput] = useState({
    name: "",
    nickname: "",
    address: "",
  });
  const nameInput = useRef();
  const { name, nickname, address } = input;

  const onChange = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value, // name을 동적 변수로 사용하기 위함.
    });
  };
  const onReset = () => {
    setInput({
      name: "",
      nickname: "",
      address: "",
    });
    nameInput.current.focus();
  };
  return (
    <div className="App">
      <input
        name="name"
        onChange={onChange}
        placeholder="이름"
        value={name}
        ref={nameInput}
      />
      <input
        name="nickname"
        onChange={onChange}
        placeholder="닉네임"
        value={nickname}
      />
      <input
        name="address"
        onChange={onChange}
        placeholder="주소"
        value={address}
      />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값 :</b> {name}({nickname}), {address}
      </div>
    </div>
  );
}

export default App;
