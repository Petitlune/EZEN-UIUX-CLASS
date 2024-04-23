//액션 객체 , dispatch는 필수 사용, getState는 선택사항
const getProducts = (searchQuery) => {
  return async (dispatch) => {
    const url = `https://my-json-server.typicode.com/Petitlune/Shopping-Website/products?q=${searchQuery}`;
    const response = await fetch(url);
    const data = await response.json();
    dispatch({ type: "GET_PRODUCT_SUCCESS", payload: { data } });
    // setProdcutList(data);
  };
};

export const productAction = { getProducts };
