import React from "react";
import style from "styled-components";

const Numbers = ({SelectedNumber,setSelectedNumber,error}) => {
  const num = [1, 2, 3, 4, 5, 6];
  return (
    <Container>
      <div style={{color:"red", fontWeight:"bolder"}}>{error}</div>
        <Boxes>
        {num.map((n,i) => (
        <Box key={i} onClick={()=>setSelectedNumber(n)} selected = {n === SelectedNumber}>
          <p>{n}</p>
        </Box>
      ))}
        </Boxes>

      <div>
        <p>Select Number</p>
      </div>
    </Container>
  );
};

export default Numbers;

const Container = style.div`
display: flex;
align-items: end;
justify-content: center;
flex-direction: column;
gap: 10px;

p{
    font-weight: 900;
    font-size: 15px;
}
`

const Boxes = style.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
`

const Box = style.div`
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    font-size: 22px;
    font-weight: 700;
    border: 2px solid black;
    background-color:${(props)=>(props.selected ? "black" : "white")};
    color:${(props)=>(!props.selected ? "black" : "white")};
`;
