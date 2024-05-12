import React, { useState } from "react";
import style from "styled-components";
import TotalScore from "./TotalScore";
import Numbers from "./Numbers";
import DiceRolling from "./DiceRolling";
import Rules from "./Rules";

const PalyGame = ({handleNavigate}) => {
  const [SelectedNumber, setSelectedNumber] = useState();
  const [Selectimage, setSelectimage] = useState(1);
  const [score,setScore] = useState(0);
  const [error,setError] = useState();
  const [rule,setRules] = useState(false)
  const [toggle,setToggle] = useState("Show Rules");

  function handleToggle(){
    setRules((prev=>!prev));
    if(rule == true){
      setToggle("Show Rules");
    }
    else{
      setToggle("Hide Rules");
    }
  }
  
  function generateNumber(max, min){
    return Math.floor(Math.random() * (max - min) + min);
  }

  function changeImage() {
    if(!SelectedNumber){
      setError("You have not selected any Number");
      return;
    }
    setError("");
    let randNumber = generateNumber(7,1);
    setSelectimage(randNumber);
    if(SelectedNumber === randNumber){
      setScore(prev=>prev+randNumber);
    }
    else{
      setScore(prev=>prev-1);
    }
  }
  function reset(){
    setSelectedNumber(undefined);
    setSelectimage(1);
    setScore(0);
  }

  function exit(){
    handleNavigate(false)
  }
  return (
    <>
      <Container>
        <div>
          <TotalScore score={score}/>
        </div>

        <div>
          <Numbers
            SelectedNumber={SelectedNumber}
            setSelectedNumber={setSelectedNumber}
            error={error}
          />
        </div>
      </Container>

      <MainDice>
        <DiceRolling Selectimage={Selectimage} changeImage={changeImage} reset={reset} setRules={setRules} toggle={toggle} handleToggle={handleToggle} exit={exit}/>
        {
          rule ? <Rules /> : ""
        }
      </MainDice>
    </>
  );
};

export default PalyGame;

const Container = style.div`
  width: 100%;
  
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 25px
`;

const MainDice = style.div`
text-align: center;
margin-block: 20px;
`;
