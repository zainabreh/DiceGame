import React from 'react'
import style from 'styled-components'

const TotalScore = ({score}) => {
  return (
    <Container>
      <div className='total'>
      <h1>{score}</h1>
      </div>
      <p>Total Score </p>
    </Container>
  )
}

export default TotalScore

const Container = style.div`
    dispaly: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;

    .total{
        h1{
            font-size: 50px;
        }
    }

    p{
        font-weight: 800;
        font-size: 14.5px
    }
`