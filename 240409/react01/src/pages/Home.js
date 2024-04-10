import React from "react";
//useSearchParams : Query string 값을 찾올 때 사용.
// import { useSearchParams } from "react-router-dom";
import Button from "../components/Button";
import Header from "../components/Header";

const Home = () => {
  // const [searchParams, setSearchParams] = useSearchParams();
  // console.log(searchParams.get("sort"));
  return (
    <div>
      <Header
        title="Home"
        leftChild={
          <Button
            text="긍정버튼"
            type="Positive"
            onClick={() => {
              alert("Positive Button");
            }}
          />
        }
        rightChild={
          <Button
            text="부정버튼"
            type="Negative"
            onClick={() => {
              alert("Negative Button");
            }}
          />
        }
      />
    </div>
  );
};
export default Home;
