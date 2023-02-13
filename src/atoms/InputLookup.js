import React from "react";
import styles from "./styles.css";

export default function InputLookup({id, placeholder = '', type = 'text', handleInputTxt}) {
  return (
    <>
      <input
        id={id}
        className="input"
        type={type} 
        placeholder={placeholder}
        onChange={(event) => handleInputTxt(event.target.value)}
      />
    </>
  );
}
