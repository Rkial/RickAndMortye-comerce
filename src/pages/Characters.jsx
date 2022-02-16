import React from "react";
import { GridCards } from "../components/characters/GridCards";
import Styles from "../styles/Characters.module.css";

export const Characters = () => {

  

  return (
    <div className={Styles.bodyCharacters}>
      

      <div><GridCards /></div>
    </div>
  );
};
