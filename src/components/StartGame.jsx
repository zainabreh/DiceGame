import React from 'react'
import style from 'styled-components'

const StartGame = ({handleNavigate}) => {
  return (
    <>
      <Container>

        <div className='image'>
            <img src='src\Images\dices.png' alt='DicePic'/>
        </div>

        <div className='content'>
            <h1>Dice Game</h1>
            <Button onClick={handleNavigate}>Play Now</Button>
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
            font-size: 93px;
            margin: 0;
            white-space: nowrap;
        }
    }

    .image{
      img{
        width: 480px;
      }
    }
`    
    const Button = style.button`
    color: white;
    padding: 10px 18px;
    background: black;
    border-radius: 5px;
    min-width: 220px;
    font-size: 16px;
    border: none;
    cursor: pointer;
`
