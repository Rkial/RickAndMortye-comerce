import React from "react";
import { GridCardsEpisodes } from "../components/episodes/GridCardsEpisodes";

import Styles from "../styles/Characters.module.css";
export const Episodes = () => {
  return (
    <div className={Styles.bodyCharacters}>
      <GridCardsEpisodes />
    </div>
  );
};
