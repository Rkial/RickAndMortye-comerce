import React from "react";
import Styles from "../../styles/GridCards.module.css";

export const Status = ({ state }) => {
  return (
    <>
      {state.status === "Alive" ? (
        <div className={`${Styles.cardText} card-text`}>
          {`Status: ${state.status}`} <p className={Styles.statusAlive}></p>
        </div>
      ) : state.status === "Dead" ? (
        <div className={`${Styles.cardText} card-text`}>
          {`Status: ${state.status}`} <p className={Styles.statusDead}></p>
        </div>
      ) : (
        <div className={`${Styles.cardText} card-text`}>
          {`Status: ${state.status}`} <p className={Styles.statusUnknow}></p>
        </div>
      )}
    </>
  );
};
