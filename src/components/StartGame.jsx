import React from 'react'
import style from 'styled-components'

const StartGame = () => {
  return (
    <>
      <Container>

        <div>
            <img src='./public/dice_3.png'/>
        </div>

        <div className='content'>
            <h1>Dice Game</h1>
            <Button>Play Now</Button>
        </div>

      </Container>
    </>
  )
}

export default StartGame

const Container = style.div`
    width: 1108px;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    .content{
        display: flex;
        align-items: end;
        flex-direction: column;
        h1 {
            font-size: 96px;
            margin: 0;
            white-space: nowrap;
        }
    }
`

// const Content = style.h1`
//     font-size: 46px;
//     white-space: nowrap;
//     `
    
    const Button = style.button`
    color: white;
    padding: 10px 18px;
    background: black;
    border-radius: 5px;
    min-width: 220px;
    font-size: 16px;
    border: none;
`
