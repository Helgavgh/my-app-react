import React, { useState } from "react";
import Button from "../atoms/Button";
import InputLookup from "../atoms/InputLookup";

function FormSearch({ handleInputTxt }) {
  
  return (
    <>
      <InputLookup handleInputTxt={handleInputTxt}/>
      <Button text="¡Busca!"/>
    </>
  );
}

export default FormSearch;
