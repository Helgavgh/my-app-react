import React from "react";
import styles from './styles.css'
import ArrowPrevious from "../atoms/ArrowPrevious";
import ArrowNext from "../atoms/ArrowNext";

export default function PreviousAndNext({ handleClick }) {
  return (<div className="flechas" onClick={(arrow)=>{handleClick(arrow.target)}}>
      <ArrowPrevious />
      <ArrowNext />
    </div>
  );
}
