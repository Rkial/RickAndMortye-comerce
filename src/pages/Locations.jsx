import React from "react";

import { GridCardsLocations } from "../components/locations/GridCardsLocations";
import Styles from "../styles/Characters.module.css";

export const Locations = () => {
  return (
    <div className={Styles.bodyCharacters}>
      <GridCardsLocations />
    </div>
  );
};
