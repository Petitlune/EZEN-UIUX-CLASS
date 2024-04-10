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
