const initialState = {
  count: 0,
  id: "",
  password: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "DECREMENT":
      return { ...state, count: state.count - action.payload.num };
    case "INCREMENT":
      return { ...state, count: state.count + action.payload.num };
    case "LOGIN":
      return {
        ...state,
        id: action.payload.id,
        password: action.payload.password,
      };
    default:
      return { ...state };
  }

  // //type 정해주기
  // if (action.type === "INCREMENT") {
  //   //if 조건문의 리턴문
  //   return { ...state, count: state.count + action.payload.num };
  // } else if (action.type === "LOGIN") {
  // }
  // //reducer 함수의 리턴문
  // return { ...state };
};

export default reducer;
