import React from "react";
import style from "styled-components";

const Rules = () => {
  return (
    <Container>
      <div>
        <h2>How to play dice game</h2>
        <ul>
          <li>Select any number</li>
          <li>Click on dice image</li>
          <li>
            After click on dice if selected number is equal to dice number you
            will get same point as dice
          </li>
          <li>If you get wrong guess than 2 point will be deducted</li>
        </ul>
      </div>
    </Container>
  );
};

export default Rules;

const Container = style.div`
    width: 600px;
    margin:auto;
    text-align:start;
    margin-top:20px;
    background-color: #efecec;
    border-radius:10px;
    padding-block:15px;
    padding-inline:25px;

    ul{
      list-style:none;
    }
    ul li{
      padding:2px;
      font-size:16px;
      font-weight: 400;
    }
`;
