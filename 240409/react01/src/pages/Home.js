import React from "react";
//useSearchParams : Query string 값을 찾올 때 사용.
// import { useSearchParams } from "react-router-dom";
// import Button from "../components/Button";
// import Header from "../components/Header";
// import Editor from "../components/Editor";
import { useState, useContext, useEffect } from "react";
import { DiaryStateContext } from "../App";
import { getMonthRangeByDate, setPageTitle } from "../util";
import DiaryList from "../components/DiaryList";
import Button from "../components/Button";
import Header from "../components/Header";

const Home = () => {
  // const [searchParams, setSearchParams] = useSearchParams();
  // console.log(searchParams.get("sort"));

  //날자 데이터 변경 상태변화
  const [pivotDate, setPivotDate] = useState(new Date());
  const onDecreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1));
  };
  const onIncreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1));
  };
  const headerTitle = `${pivotDate.getFullYear()}년 ${
    pivotDate.getMonth() + 1
  }월`;
  const data = useContext(DiaryStateContext);
  //최신 일기순으로 순서 정렬
  const [filteredData, setFilteredData] = useState([]);
  useEffect(() => {
    setPageTitle("감정일기장 Mainpage");
  }, []);
  useEffect(() => {
    if (data.length >= 1) {
      const { beginTimeStamp, endTimeStamp } = getMonthRangeByDate(pivotDate);
      setFilteredData(
        data.filter(
          (item) => beginTimeStamp <= item.date && item.date <= endTimeStamp
        )
      );
    } else {
      setFilteredData([]);
    }
  }, [pivotDate, data]);

  return (
    // <div>
    //   <Header
    //     title="Home"
    //     leftChild={
    //       <Button
    //         text="긍정버튼"
    //         type="Positive"
    //         onClick={() => {
    //           alert("Positive Button");
    //         }}
    //       />
    //     }
    //     rightChild={
    //       <Button
    //         text="부정버튼"
    //         type="Negative"
    //         onClick={() => {
    //           alert("Negative Button");
    //         }}
    //       />
    //     }
    //   />
    // </div>
    // <Editor
    //   initData={{
    //     date: new Date().getTime(),
    //     emotionId: 1,
    //     content: "이전에 작성한 일기",
    //   }}
    //   onSubmit={() => {
    //     alert("작성 완료!!");
    //   }}
    // />
    <div>
      <Header
        title={headerTitle}
        leftChild={<Button text="<" onClick={onDecreaseMonth} />}
        rightChild={<Button onClick={onIncreaseMonth} text=">" />}
      />
      <DiaryList data={filteredData} />
    </div>
  );
};
export default Home;
