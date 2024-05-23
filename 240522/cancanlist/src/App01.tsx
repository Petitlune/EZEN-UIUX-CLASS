//recoil사용법 원래 App.tsx
// import React from "react";
// import { useRecoilState, useRecoilValue } from "recoil";
// import { minState, hourSelector } from "./atoms";

// function App() {
//   const [minutes, setMinutes] = useRecoilState(minState);
//   const [hours, setHours] = useRecoilState(hourSelector);
//   const onMinutesChange = (event: React.FormEvent<HTMLInputElement>) => {
//     //+를 붙여서 타입을 숫자로 바꾸었다.
//     setMinutes(+event.currentTarget.value);
//   };
//   const onHoursChange = (event: React.FormEvent<HTMLInputElement>) => {
//     setHours(+event.currentTarget.value);
//   };
//   return (
//     <div
//       style={{
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         justifyContent: "center",
//         height: "100vh",
//         gap: "10px",
//       }}
//     >
//       <input
//         value={minutes}
//         onChange={onMinutesChange}
//         type="number"
//         placeholder="Minutes"
//       />
//       <input
//         value={hours}
//         onChange={onHoursChange}
//         type="number"
//         placeholder="Hours"
//       />
//     </div>
//   );
// }

// export default App;
