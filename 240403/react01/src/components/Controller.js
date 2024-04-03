const Controller = ({ handleSetCount }) => {
  return (
    //뒤에 함수에 매개변수를 받아야하는 함수이면 실제로 이벤트가 발생되면 그때 작동되어야하기 때문에 함수를 콜백함수로 써주어야한다. () =>
    <div>
      <button onClick={() => handleSetCount(-1)}>-1</button>
      <button onClick={() => handleSetCount(-10)}>-10</button>
      <button onClick={() => handleSetCount(-100)}>-100</button>
      <button onClick={() => handleSetCount(100)}>+100</button>
      <button onClick={() => handleSetCount(10)}>+10</button>
      <button onClick={() => handleSetCount(1)}>+1</button>
    </div>
  );
};

export default Controller;
