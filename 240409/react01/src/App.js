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

//목업데이터 사용할때 사용
// const mockData = [
//   {
//     id: "1",
//     date: new Date().getTime() - 1,
//     emotionId: 1,
//     content: "mock1",
//   },
//   {
//     id: "2",
//     date: new Date().getTime() - 2,
//     emotionId: 2,
//     content: "mock2",
//   },
//   {
//     id: "3",
//     date: new Date().getTime() - 3,
//     emotionId: 3,
//     content: "mock3",
//   },
// ];

const reducer = (state, action) => {
  switch (action.type) {
    case "INIT": {
      return action.data;
    }

    case "CREAT": {
      //로컬스토리지에 저장하는 법
      const newState = [action.data, ...state];
      localStorage.setItem("diary", JSON.stringify(newState));
      return newState;
    }

    case "UPDATE": {
      const newState = state.map((item) =>
        String(item.id) === String(action.data.id) ? { ...action.data } : item
      );
      localStorage.setItem("diary", JSON.stringify(newState));
      return newState;
    }
    case "DELETE": {
      const newState = state.filter(
        (item) => String(item.id) !== String(action.targetId)
      );
      localStorage.setItem("diary", JSON.stringify(newState));
      return newState;
    }
    default: {
      return state;
    }
  }
};

export const DiaryStateContext = React.createContext();
export const DiaryDispatchContext = React.createContext();

function App() {
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [data, dispatch] = useReducer(reducer, []);
  const idRef = useRef(0);
  //목업데이터를 만들어서 사용했을 때
  // useEffect(() => {
  //   dispatch({
  //     type: "INIT",
  //     data: mockData,
  //   });
  //   setIsDataLoaded(true);
  // }, []);
  useEffect(() => {
    //데이터가 아예 없는경우
    const rawData = localStorage.getItem("diary");
    if (!rawData) {
      setIsDataLoaded(true);
      return;
    }
    const localData = JSON.parse(rawData);
    //데이터 안에 값이 없는 경우
    if (localData.length === 0) {
      setIsDataLoaded(true);
      return;
    }
    //실제 데이터 존재할 때 정렬
    localData.sort((a, b) => Number(b.id) - Number(a.id));
    idRef.current = localData[0].id + 1;
    dispatch({
      type: "INIT",
      data: localData,
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
        <DiaryDispatchContext.Provider value={{ onCreate, onUpdate, onDelete }}>
          <div className="App">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/new" element={<New />} />
              <Route path="/diary/:id" element={<Diary />} />
              <Route path="/edit/:id" element={<Edit />} />
            </Routes>
            {/* <div>
        <Link to={"/"}>Home</Link>
        <Link to={"/new"}>New</Link>
        <Link to={"/diary/:id"}>Diary</Link>
        <Link to={"/edit"}>Edit</Link>
      </div> */}
          </div>
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    );
  }
}

export default App;
