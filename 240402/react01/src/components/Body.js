// import "./Body.css";
function Body({ name, location, favorList }) {
  //구조분해할당
  // const {name, location, favorList} = props
  return (
    // 스타일 적용하는 방법 <div style={{ backgroundColor: "#f00", color: "#fff" }} className="body">
    <div>
      <h1>
        {name}는 {location}에 거주합니다.
        <br />
        {name}는 {favorList.length}개의 최애 메뉴가 있습니다.
        <br />
        {favorList[0]},{favorList[1]},{favorList[2]}를 매우 좋아합니다.
      </h1>
    </div>
  );
}

//코드가 길어져서 혹여라도 값이 존재하지 않는 경우가 발생시 서비스 중단을 막기위해 작성해주는 코드
Body.defaultProps = {
  favorList: ["서비스", "중단", "막기위함"],
};

export default Body;
