import { useEffect, useState, CSSProperties } from "react"; //외부 API값 갖고오고 싶을 때 사용하는 훅
import "./App.css";
import WeatherBox from "./component/WeatherBox";
import WeatherButton from "./component/WeatherButton";
import ClipLoader from "react-spinners/ClipLoader";
//부트스트랩 css 꼭 넣기!
import "bootstrap/dist/css/bootstrap.min.css";
//환경변수 가져오기
const API_KEY = process.env.REACT_APP_API_KEY;

function App() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(true);

  //API에서 도시명 쓰는 그대로 써주어야함.
  const cities = ["paris", "new york", "tokyo", "seoul"];

  //현재 위도와 경도 찾아오는 함수 만들기
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      //위도와 경도 담을 변수 있어야한다.
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      // console.log("현재 위치", lat, lon);
      getWeatherByCurrentLocation(lat, lon);
    });
  };

  //날씨를 갖고오는 함수
  const getWeatherByCurrentLocation = async (lat, lon) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&lang=kr&units=metric`;
    const response = await fetch(url);
    //json은 비동기 함수라서 fetch함수가 값을 받아올때까지 기다려줬다가 그 다음에 받아야한다. 따라서 async와 await이 필요
    const data = await response.json();
    // console.log(data)
    setLoading(false);
    setWeather(data);
  };

  const getWeatherByCity = async () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&lang=kr&units=metric`;
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data);
    setLoading(false);
    setWeather(data);
  };

  //컴포넌트가 최초 마운팅 될때 한번만 랜더링해서 갖고 오고싶으면(=> 의존성배열 = 빈배열을 넣어주면 됨!) useEffect 훅 사용!
  // useEffect(() => {
  //   getCurrentLocation();
  // }, []);

  // useEffect(() => {
  //   getWeatherByCity();
  // }, [city]);
  //조건부 형식으로 useEffect사용
  useEffect(() => {
    if (city === "") {
      getCurrentLocation();
    } else {
      getWeatherByCity();
    }
  }, [city]);
  // const handleCityChange = (city) => {
  //   if (city === "current") {
  //     setWeather(getCurrentLocation());
  //   } else {
  //     setCity(city);
  //   }
  // };
  return (
    <div className="App">
      {/* 조건부 랜더링을 줄것임 */}
      {loading ? (
        <div className="container">
          <ClipLoader color="#f88c6b" loading={loading} size={50} />
        </div>
      ) : (
        <div className="container">
          <WeatherBox weather={weather} />
          <WeatherButton
            getCurrentLocation={getCurrentLocation}
            cities={cities}
            setCity={setCity}
          />
        </div>
      )}
    </div>
  );
}

export default App;
