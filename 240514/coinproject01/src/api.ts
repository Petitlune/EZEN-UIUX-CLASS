//외부에서 데이터를 받아와주는 함수를 선언후 출력
//react-query를 사용할 때에는 외부에서 Data를 받아와서 공급해줄 수 있는 함수 필요 => fetch 함수는 반드시 promise 값을 반환!
export const fetchCoins: any = () => {
  return fetch(
    "https://my-json-server.typicode.com/Divjason/coinlist/coins"
  ).then((response) => response.json());
};
