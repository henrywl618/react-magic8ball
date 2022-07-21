import React, {useState} from "react";
import "./EightBall.css";

const EightBall = ({ answers }) => {
  const [ msg, setMsg ] = useState("Think of a question.");
  const [ background, setBackground ] = useState("black");
  let [redCount, setRedCount] = useState(0);
  let [yellowCount, setYellowCount] = useState(0);
  let [greenCount, setGreenCount] = useState(0);


  const randAnswer = () => {
    const randomNum = Math.floor(Math.random() * answers.length);
    console.log(randomNum);
    return answers[randomNum];
  };

  const countColor = (color)=>{
    console.log(color);
    switch(color){
        case "red":
            setRedCount(redCount+1);
            break;
        case "goldenrod":
            setYellowCount(yellowCount+1);
            break;     
        case "green":
            setGreenCount(greenCount+1);
            break;
    };
  };

  const reset = ()=>{
    setMsg('Think of a question.');
    setBackground('black');
    setRedCount(0);
    setYellowCount(0);
    setGreenCount(0);
  };
  
  const getAnswer = () => {
    const randomAnswer = randAnswer();
    setMsg(randomAnswer.msg);
    setBackground(randomAnswer.color);
    countColor(randomAnswer.color);
  };


  return (
    <>
    <div className="EightBall" style={{backgroundColor:background}} onClick={getAnswer}>
      <p className="EightBall-text">{msg}</p>
    </div>
    <button onClick={reset}>Reset</button>
    <h4>Color Count</h4>
    <h5>Red: {redCount}</h5>
    <h5>Yellow: {yellowCount}</h5>
    <h5>Green: {greenCount}</h5>
    </>

  );
};

export default EightBall;
