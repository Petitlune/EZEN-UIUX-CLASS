import "./App.css";
//값을 받아서 쓸때는 useSelector 사용
import { useDispatch, useSelector } from "react-redux";
import Box from "./Box";

function App() {
  const count = useSelector((state) => state.count);
  const countDe = useSelector((state) => state.countDe);
  const id = useSelector((state) => state.id);
  const password = useSelector((state) => state.password);
  const dispatch = useDispatch();

  const decrease = () => {
    //type을 갖고 있는 action 객체를 보내야함
    dispatch({
      //무조건 객체로 담겨져 있어야함.
      type: "DECREMENT",
      //payload 는 매개변수같다. 입력값으로 움직임.
      payload: {
        num: 5,
      },
    });
  };
  const increase = () => {
    //type을 갖고 있는 action 객체를 보내야함
    dispatch({
      //무조건 객체로 담겨져 있어야함.
      type: "INCREMENT",
      //payload 는 매개변수같다. 입력값으로 움직임.
      payload: {
        num: 5,
      },
    });
  };

  const login = () => {
    dispatch({
      //무조건 객체로 담겨져 있어야함.
      type: "LOGIN",
      //payload 는 매개변수같다. 입력값으로 움직임.
      payload: {
        id: "Petitlune",
        password: "1234",
      },
    });
  };

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={decrease}>감소하기</button>
      <button onClick={increase}>증가하기</button>
      <Box />
      <button onClick={login}>로그인</button>
      <h1>
        {id}({password})
      </h1>
    </div>
  );
}

export default App;
