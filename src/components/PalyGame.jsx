import React from 'react'
import style from 'styled-components'
import TotalScore from './TotalScore'
import Numbers from './Numbers'

const PalyGame = () => {
  return (
    <div>
      <Container>

        <div>
          <TotalScore/>
        </div>

        <div>
          <Numbers/>
        </div>

      </Container>
    </div>
  )
}

export default PalyGame

const Container = style.div`
  width: 100%;
  
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 25px
`