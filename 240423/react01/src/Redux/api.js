//API 끌어오기
import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  timeout: 1000,
  //headers는 응답메세지를 의미함.
  headers: { "Content-Type": "application/json" },
});

//데이터 불러올때 오류시 요청사항
api.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    console.log("request start", config);
    return config;
  },
  function (error) {
    // Do something with request error
    console.log("request error", error);
    return Promise.reject(error);
  }
);
