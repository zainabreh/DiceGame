import React, { useState } from 'react'
import style from 'styled-components'

const DiceRolling = ({changeImage,Selectimage,reset,handleToggle,toggle,exit}) => {
  return (
    <div>
      <div>
        <img src={`src/Images/dice_${Selectimage}.png`} alt='dice' onClick={changeImage}/>
      </div>
        <p style={{fontSize: "18px",fontWeight:'bolder'}}>Click on the Dice to Roll</p>
      <Buttons>
        
        <Button onClick={reset}>Reset Score</Button>
        <Button onClick={handleToggle}>{toggle}</Button>
        <Button onClick={exit}>Exit Game</Button>
      </Buttons>
    </div>
  )
}

export default DiceRolling

const Buttons = style.div`
width: 200px;
margin:auto;
margin-top:20px;
    display:flex;
    flex-direction:column;
`

const Button = style.button`
    border:2px solid black;
    padding: 6px;
    font-weight: bolder;
    margin-block: 5px;
    background-color: white;
    cursor:pointer;
    hover: {
        background-color: black;
        color:white;
    }
`
