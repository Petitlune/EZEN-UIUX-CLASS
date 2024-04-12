//이미지 불러오는 함수
import emotion1 from "./image/emotion1.png";
import emotion2 from "./image/emotion2.png";
import emotion3 from "./image/emotion3.png";
import emotion4 from "./image/emotion4.png";
import emotion5 from "./image/emotion5.png";

//가져온 이미지를 외부에서 쓰게한다. => 모듈화 할 필요가 있다.
export const getEmotionImgById = (emotionId) => {
  //emotionId값이 숫자형이인데 case문에는 문자형이 들어가기 때문에 아래 작업을 진행해준다.
  const targetEmotionId = String(emotionId);
  switch (targetEmotionId) {
    case "1":
      return emotion1;
    case "2":
      return emotion2;
    case "3":
      return emotion3;
    case "4":
      return emotion4;
    case "5":
      return emotion5;
    default:
      return null;
  }
};

export const getFormattedDate = (targetDate) => {
  let year = targetDate.getFullYear();
  let month = targetDate.getMonth() + 1;
  let date = targetDate.getDate();
  //한자리 수 일 때 0붙여주기 위함
  if (month < 10) {
    month = `0${month}`;
  }
  if (date < 10) {
    date = `0${date}`;
  }
  return `${year}-${month}-${date}`;
};

//이미지 다섯장을 출력하는 함수

export const emotionList = [
  {
    id: 1,
    name: "완전좋음",
    img: getEmotionImgById(1),
  },
  {
    id: 2,
    name: "좋음",
    img: getEmotionImgById(2),
  },
  {
    id: 3,
    name: "그럭저럭",
    img: getEmotionImgById(3),
  },
  {
    id: 4,
    name: "나쁨",
    img: getEmotionImgById(4),
  },
  {
    id: 5,
    name: "매우나쁨",
    img: getEmotionImgById(5),
  },
];

// 4월이면 => 하단 본문영역에 나타나야하는 일기는 4월에 작성한 일기만 나와야한다. => 2024.4.1. 0.0.0 작성한것부터 2024.4.30.23.59.59까지 읽게 하려면 (위는 인간의 생각) 컴퓨터가 2024 . 5 . 0 . 23.59.59 으로 읽게 해야한다. ===> 4월의 마지막날 마지막 시간의 시점(컴퓨터는 0일 존재)
// =============== > getMonthRangeByData
// getMonthRangeByDate: 특정 월 시작점부터 마지막날 끝점까지 지정하는 함수
export const getMonthRangeByDate = (date) => {
  const beginTimeStamp = new Date(
    date.getFullYear(),
    date.getMonth(),
    1
  ).getTime();
  const endTimeStamp = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0,
    23,
    59,
    59
  ).getTime();
  return { beginTimeStamp, endTimeStamp };
};
