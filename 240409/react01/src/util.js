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
