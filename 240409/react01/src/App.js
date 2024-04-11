//페이지 라우팅(연결) 기능\
import React, { useEffect, useReducer, useRef, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
//가져오고자하는 이미지에 대한 경로를 변수에다가 담아서 가져온다.
//import emotion1 from "./image/emotion1.png"
import Home from "./pages/Home";
import New from "./pages/New";
import Diary from "./pages/Diary";
import Edit from "./pages/Edit";
import { type } from "@testing-library/user-event/dist/type";

const mockData = [
  {
    id: "mock1",
    date: new Date().getTime(),
    emotionId: 1,
    content: "mock1",
  },
  {
    id: "mock2",
    date: new Date().getTime(),
    emotionId: 2,
    content: "mock2",
  },
  {
    id: "mock3",
    date: new Date().getTime(),
    emotionId: 3,
    content: "mock3",
  },
];

const reducer = (state, action) => {
  switch (action.type) {
    case "INIT": {
      return action.data;
    }
    case "CREAT": {
      return [action.data, ...state];
    }

    case "UPDATE": {
      return state.map((item) =>
        String(item.id) === String(action.data.id) ? { ...action.data } : item
      );
    }
    case "DELETE": {
      return state.filter((item) => String(it.id) !== String(action.targetId));
    }
    default: {
      return state;
    }
  }
};

export const DiaryStateContext = React.createContext();

function App() {
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [data, dispatch] = useReducer(reducer, []);
  const idRef = useRef(0);
  useEffect(() => {
    dispatch({
      type: "INIT",
      data: mockData,
    });
    setIsDataLoaded(true);
  }, []);

  const onCreate = (date, emotionId, content) => {
    dispatch({
      type: "CREAT",
      data: {
        id: idRef.current,
        date: new Date(date).getTime(),
        emotionId,
        content,
      },
    });

    idRef.current += 1;
  };
  const onUpdate = (targetId, date, emotionId, content) => {
    dispatch({
      type: "UPDATE",
      data: {
        id: targetId,
        date: new Date(date).getTime(),
        emotionId,
        content,
      },
    });
  };
  const onDelete = (targetId) => {
    dispatch({
      type: "DELETE",
      targetId,
    });
  };
  if (!isDataLoaded) {
    return <div>데이터를 불러오는 중입니다.</div>;
  } else {
    return (
      <DiaryStateContext.Provider value={data}>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<New />} />

            <Route path="/diary/:id" element={<Diary />} />
            <Route path="/edit" element={<Edit />} />
          </Routes>
          {/* <div>
        <Link to={"/"}>Home</Link>
        <Link to={"/new"}>New</Link>
        <Link to={"/diary/:id"}>Diary</Link>
        <Link to={"/edit"}>Edit</Link>
      </div> */}
        </div>
      </DiaryStateContext.Provider>
    );
  }
}

export default App;
