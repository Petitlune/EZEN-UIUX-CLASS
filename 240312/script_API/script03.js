//외부에서 데이터 가져오기

const quotesURL = "http://dummyjson.com/quotes";

fetch(quotesURL)
  .then((response) => response.json())
  .then((data) => {
    const result = document.querySelector("#result");
    const random = Math.floor(Math.random() * 30);
    result.querySelector(".quote").innerText = data.quotes[random].quote;
    result.querySelector(
      ".author"
    ).innerText = `- ${data.quotes[random].author} -`;
  });


  //fetch API 
  //fetch(가져오고자 하는 data url)
  //fetch()호출 => Promise 객체 생성 => then() || catch() 사용 가능
  //fetch() 함수를 활용해서 json 데이터를 가져온 경우, 객체화하기 위해서 사용한 메서드 함수
  // => json() = XMLHttprequest().JSON.parse() : 이것은 json을 객체로 만들어줌. 
  //비동기처리 방식 중에 마지막 학습내용 => async & await
  //async & await : 각각 비동기처리를 진행하는 요소들 가운데 순서를 정의하기 위한 목적 사용!!!
  //async 예약어를 사용하면 자동으로 Promise 객체 생성 => then() || catch() 사용 가능