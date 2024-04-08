import "./App.css";
import Box from "./components/Box";
import { useState } from "react";

//가위바위보에 대한 데이터 관리

const choice = {
  scissors: {
    name: "scissors",
    img: "https://blog.kakaocdn.net/dn/HfURw/btqXKvOTNWK/gWTwPXEg9QzSV0ilOuwuak/img.png",
  },
  rock: {
    name: "rock",
    img: "https://blog.kakaocdn.net/dn/pSJwo/btqXJV1lACE/nx5XrxkCLWXh9UsnoS8vbK/img.png",
  },
  paper: {
    name: "paper",
    img: "https://blog.kakaocdn.net/dn/bmjB2s/btqXHhp6kpG/TH14W4U612SxKo9uuR2sB0/img.png",
  },
};

function App() {
  const [userSelect, setUserSelect] = useState("");
  const [computerSelect, setComputerSelect] = useState("");
  const [result, setResult] = useState("");

  const randomChoice = () => {
    const itemArray = Object.keys(choice);
    const randomItem = Math.floor(Math.random() * itemArray.length);
    const final = itemArray[randomItem];
    return choice[final];
  };

  const judgement = (user, computer) => {
    if (user.name === computer.name) {
      return "tie";
    } else if (user.name === "scissors") {
      return computer.name === "paper" ? "win" : "lose";
    } else if (user.name === "rock") {
      return computer.name === "scissors" ? "win" : "lose";
    } else if (user.name === "paper") {
      return computer.name === "rock" ? "win" : "lose";
    }
  };

  const play = (item) => {
    const userChoice = choice[item];
    setUserSelect(userChoice);
    const computerChoice = randomChoice();
    setComputerSelect(computerChoice);
    setResult(judgement(userChoice, computerChoice));
  };
  return (
    <div className="container">
      <div className="main">
        <Box title="you" item={userSelect} result={result} />
        <Box title="computer" item={computerSelect} result={result} />
      </div>
      <div className="main">
        <button onClick={() => play("scissors")}>가위</button>
        <button onClick={() => play("rock")}>바위</button>
        <button onClick={() => play("paper")}>보</button>
      </div>
    </div>
  );
}

export default App;
