import React, {useState} from "react";
import ColorBox from "./ColorBox";

const ColorBoxes = ({ colors }) => {
  const randColor = () => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

  const boxColorArray = Array.from({length:16}, ()=>randColor());

  let [boxColors, setBoxColors] = useState(boxColorArray)

  const changeColor = ()=>{
    const randomBoxIDX = Math.floor(Math.random() * boxColors.length);
    setBoxColors(boxColors =>{
        let boxCopy = [...boxColors]
        boxCopy[randomBoxIDX]=randColor();
        return boxCopy;
    });
  };

  const colorboxes = boxColors.map((color,i) => <ColorBox key={i} color={color}/>);

  return (
    <>
    <h2>Color Boxes</h2>
      <div>{colorboxes}</div>
      <button onClick={changeColor}>Change</button>
    </>
  );
};

export default ColorBoxes;
