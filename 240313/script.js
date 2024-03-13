// geoLocation API

// const showPosition = (position) => {
//   document.querySelector(
//     "#result"
//   ).innerHTML = `<b>위도 : ${position.coords.latitude}</b> , <b>경도 : ${position.coords.longitude}</b> `;
// };

// const errorPosition = (err) => {
//   alert(err.message);
// };

// const getLocation = document.querySelector("#getlocation");
// getLocation.addEventListener("click", () => {
//   if (window.navigator.geolocation) {
//     window.navigator.geolocation.getCurrentPosition(
//       showPosition,
//       errorPosition
//     );
//   } else {
//     alert("지오로케이션을 지원하지 않습니다.");
//   }
// });

const getLocation = document.querySelector("#getlocation");

const showPosition = (position) => {
  document.querySelector(
    "#result"
  ).innerHTML = `<b>위도 : ${position.coords.latitude} </b>, <b>경도 : ${position.coords.longitude} </b> `;
};
const errorPosition = () => {
  alert(err.message);
};

getLocation.addEventListener("click", () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, errorPosition);

    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };

    const watchID = navigator.geolocation.watchPosition(
      showPosition,
      errorPosition,
      options
    );
    setTimeout(() => {
      navigator.geolocation.clearWatch(watchID);
    }, 10000);
  } else {
    alert("지오로케이션을 지원하지 않는 기기입니다.");
  }
});
