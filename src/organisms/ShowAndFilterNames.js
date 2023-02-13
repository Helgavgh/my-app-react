import React, { useState, useEffect } from "react";
import Card from "../molecules/Card";
import "./styles.css";
import PreviousAndNext from "../molecules/PreviousAndNext";

export default function ShowAndFilterNames({ pokemonNames }) {
  //TODO: Split the current object use one for showing details and other one for keeping the original one
  //TODO: Create card component
  //TODO: Call to card component and replace line 16 div
  //TODO: Handle input text and do the filter
  //TODO: Fix layout

  const handleClick = (arrow) => {

    if(arrow === ">"){
      return 
    }
  }

  return (
    <section className="section-names">
      <div className="grillas-names">
        {pokemonNames.map((item, index) => {
            return <Card key={`${item}${index}`} list={item} />
        })}
      </div>
    </section>
  );
}

// const paginado = ()=>{

//   let calculation = pokemonNames.length / 100;
//   if (calculation % 1 !== 0) {
//     calculation = Math.trunc(calculation) + 1;
//   }
//   for(let i = 1; i <= calculation.length; i++){
//     console.log(i);
//     return <div>{i}</div>
//   }
//   const pages = 10;

// console.log(calculation);
